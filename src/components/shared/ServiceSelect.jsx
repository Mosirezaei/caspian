'use client';

import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

export default function ServiceSelect({ name, value, onValueChange, placeholder, options, required = false, dir = 'rtl', className = '' }) {
  return (
    <Select.Root name={name} value={value} onValueChange={onValueChange} required={required} dir={dir}>
      <Select.Trigger
        aria-label={placeholder}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#22292d] px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 ${className}`}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="text-foreground/75"><ChevronDown className="h-4 w-4" /></Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={6} className="z-[100] max-h-72 overflow-hidden rounded-xl border border-white/15 bg-[#20282b] text-foreground shadow-2xl shadow-black/50">
          <Select.Viewport className="p-1.5">
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value} className="relative flex cursor-pointer select-none items-center rounded-lg py-2.5 ps-9 pe-3 text-sm text-foreground/85 outline-none data-[highlighted]:bg-primary data-[highlighted]:text-background">
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator className="absolute start-3 inline-flex items-center"><Check className="h-4 w-4" /></Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
