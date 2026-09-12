import 'server-only';
import { createHmac, timingSafeEqual } from 'crypto';

const COOKIE_NAME = 'caspian_admin_session';
const SESSION_MAX_AGE = 60 * 60 * 12;

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error('ADMIN_SESSION_SECRET is not configured');
  return secret;
}

function sign(value) {
  return createHmac('sha256', getSessionSecret()).update(value).digest('base64url');
}

export function hasValidAdminPassword(password) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword || typeof password !== 'string') return false;
  const supplied = Buffer.from(password);
  const expected = Buffer.from(configuredPassword);
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export function createAdminSession() {
  const expiresAt = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = Buffer.from(JSON.stringify({ expiresAt })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

export function hasValidAdminSession(token) {
  if (!token || typeof token !== 'string') return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;
  const expected = sign(payload);
  const actual = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actual.length !== expectedBuffer.length || !timingSafeEqual(actual, expectedBuffer)) return false;
  try {
    const { expiresAt } = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return Number.isFinite(expiresAt) && expiresAt > Date.now();
  } catch {
    return false;
  }
}

export const adminCookie = {
  name: COOKIE_NAME,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  },
};
