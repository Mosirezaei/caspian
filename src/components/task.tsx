'use client';

import { useState, useEffect } from 'react';

async function callReservationsApi(action: 'list' | 'create' | 'update' | 'delete', payload?: any) {
  const res = await fetch('/api/admin/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, payload }),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json?.error || 'خطای ناشناخته');
  }
  return json.data;
}

interface Item {
  id: string;
  type: 'booking' | 'task';
  guest_name?: string;
  guest_phone?: string;
  apartment_name?: string;
  check_in?: string;
  check_out?: string;
  adults_count?: number;
  child_under_7?: number;
  child_7_to_18?: number;
  transport_info?: string;
  payment_status?: string;
  deposit_amount?: string;
  title?: string;
  task_date?: string;
  description?: string;
}

export default function TaskManager() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  useEffect(() => {
    fetch('/api/admin/auth')
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(Boolean(data.authenticated)))
      .catch(() => setIsLoggedIn(false));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) throw new Error('invalid credentials');
      setPassword('');
      setIsLoggedIn(true);
    } catch {
      showNotification('رمز عبور اشتباه است!', 'error');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setIsLoggedIn(false);
  };

  const [items, setItems] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [formType, setFormType] = useState<'booking' | 'task'>('booking');
  
  // فرم بالا
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [apartmentName, setApartmentName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adultsCount, setAdultsCount] = useState<number | ''>(1);
  const [childUnder7, setChildUnder7] = useState<number | ''>(0);
  const [child7To18, setChild7To18] = useState<number | ''>(0);
  const [transportInfo, setTransportInfo] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('کل پرداخت شده');
  const [depositAmount, setDepositAmount] = useState('');

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // پاپ‌آپ تقویم
  const [quickDateModal, setQuickDateModal] = useState<string | null>(null);
  const [quickType, setQuickType] = useState<'booking' | 'task'>('booking');
  const [qGuestName, setQGuestName] = useState('');
  const [qGuestPhone, setQGuestPhone] = useState('');
  const [qApartmentName, setQApartmentName] = useState('');
  const [qCheckIn, setQCheckIn] = useState('');
  const [qCheckOut, setQCheckOut] = useState('');
  const [qAdultsCount, setQAdultsCount] = useState<number | ''>(1);
  const [qChildUnder7, setQChildUnder7] = useState<number | ''>(0);
  const [qChild7To18, setQChild7To18] = useState<number | ''>(0);
  const [qTransportInfo, setQTransportInfo] = useState('');
  const [qPaymentStatus, setQPaymentStatus] = useState('کل پرداخت شده');
  const [qDepositAmount, setQDepositAmount] = useState('');
  const [qTaskTitle, setQTaskTitle] = useState('');
  const [qTaskDate, setQTaskDate] = useState('');
  const [qTaskDesc, setQTaskDesc] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      fetchItems();
    }
  }, [isLoggedIn]);

  const fetchItems = async () => {
    try {
      const data = await callReservationsApi('list');
      setItems(data || []);
    } catch (error) {
      console.error('خطا در دریافت اطلاعات:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formType === 'booking' && checkIn && checkOut && checkIn >= checkOut) {
      showNotification('تاریخ خروج باید بعد از تاریخ ورود باشد!', 'error');
      return;
    }

    const newItem = {
      type: formType,
      guest_name: formType === 'booking' ? guestName : null,
      guest_phone: formType === 'booking' ? guestPhone : null,
      apartment_name: formType === 'booking' ? apartmentName : null,
      check_in: formType === 'booking' ? checkIn : null,
      check_out: formType === 'booking' ? checkOut : null,
      adults_count: formType === 'booking' ? Number(adultsCount) || 0 : null,
      child_under_7: formType === 'booking' ? Number(childUnder7) || 0 : null,
      child_7_to_18: formType === 'booking' ? Number(child7To18) || 0 : null,
      transport_info: formType === 'booking' ? transportInfo : null,
      payment_status: formType === 'booking' ? paymentStatus : null,
      deposit_amount: formType === 'booking' && (paymentStatus === 'بیعانه داده شده' || paymentStatus === 'منتظر تایید صراف') ? depositAmount : null,
      title: formType === 'task' ? taskTitle : null,
      task_date: formType === 'task' ? taskDate : null,
      description: formType === 'task' ? taskDescription : null,
    };

    if (isEditing && editId) {
      try {
        await callReservationsApi('update', { id: editId, ...newItem });
        showNotification('تغییرات با موفقیت ذخیره شد.', 'success');
        setIsEditing(false);
        setEditId(null);
        fetchItems();
        resetForm();
      } catch (error) {
        showNotification('خطا در ویرایش اطلاعات', 'error');
      }
    } else {
      try {
        await callReservationsApi('create', newItem);
        showNotification('اطلاعات با موفقیت ثبت شد.', 'success');
        fetchItems();
        resetForm();
      } catch (error) {
        showNotification('خطا در ثبت اطلاعات در دیتابیس', 'error');
      }
    }
  };

  const resetForm = () => {
    setGuestName(''); setGuestPhone(''); setApartmentName(''); setCheckIn(''); setCheckOut(''); 
    setAdultsCount(1); setChildUnder7(0); setChild7To18(0); setTransportInfo('');
    setPaymentStatus('کل پرداخت شده'); setDepositAmount('');
    setTaskTitle(''); setTaskDate(''); setTaskDescription('');
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (quickType === 'booking' && qCheckIn && qCheckOut && qCheckIn >= qCheckOut) {
      showNotification('تاریخ خروج باید بعد از تاریخ ورود باشد!', 'error');
      return;
    }

    const newItem = {
      type: quickType,
      guest_name: quickType === 'booking' ? qGuestName : null,
      guest_phone: quickType === 'booking' ? qGuestPhone : null,
      apartment_name: quickType === 'booking' ? qApartmentName : null,
      check_in: quickType === 'booking' ? qCheckIn : null,
      check_out: quickType === 'booking' ? qCheckOut : null,
      adults_count: quickType === 'booking' ? Number(qAdultsCount) || 0 : null,
      child_under_7: quickType === 'booking' ? Number(qChildUnder7) || 0 : null,
      child_7_to_18: quickType === 'booking' ? Number(qChild7To18) || 0 : null,
      transport_info: quickType === 'booking' ? qTransportInfo : null,
      payment_status: quickType === 'booking' ? qPaymentStatus : null,
      deposit_amount: quickType === 'booking' && (qPaymentStatus === 'بیعانه داده شده' || qPaymentStatus === 'منتظر تایید صراف') ? qDepositAmount : null,
      title: quickType === 'task' ? qTaskTitle : null,
      task_date: quickType === 'task' ? qTaskDate : null,
      description: quickType === 'task' ? qTaskDesc : null,
    };

    try {
      await callReservationsApi('create', newItem);
      showNotification('با موفقیت ثبت شد.', 'success');
      fetchItems();
      setQuickDateModal(null);
      setQGuestName(''); setQGuestPhone(''); setQApartmentName(''); setQCheckIn(''); setQCheckOut(''); 
      setQAdultsCount(1); setQChildUnder7(0); setQChild7To18(0); setQTransportInfo('');
      setQPaymentStatus('کل پرداخت شده'); setQDepositAmount('');
      setQTaskTitle(''); setQTaskDate(''); setQTaskDesc('');
    } catch (error) {
      showNotification('خطا در ثبت اطلاعات', 'error');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('آیا از حذف این مورد اطمینان دارید؟')) return;
    try {
      await callReservationsApi('delete', { id });
      showNotification('با موفقیت حذف شد.', 'success');
      setSelectedItem(null);
      fetchItems();
    } catch (error) {
      showNotification('خطا در حذف اطلاعات!', 'error');
    }
  };

  const handleStartEdit = (item: Item) => {
    setSelectedItem(null);
    setIsEditing(true);
    setEditId(item.id);
    setFormType(item.type);
    if (item.type === 'booking') {
      setGuestName(item.guest_name || '');
      setGuestPhone(item.guest_phone || '');
      setApartmentName(item.apartment_name || '');
      setCheckIn(item.check_in || '');
      setCheckOut(item.check_out || '');
      setAdultsCount(item.adults_count ?? 1);
      setChildUnder7(item.child_under_7 ?? 0);
      setChild7To18(item.child_7_to_18 ?? 0);
      setTransportInfo(item.transport_info || '');
      setPaymentStatus(item.payment_status || 'کل پرداخت شده');
      setDepositAmount(item.deposit_amount || '');
    } else {
      setTaskTitle(item.title || '');
      setTaskDate(item.task_date || '');
      setTaskDescription(item.description || '');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredItems = items.filter(item => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    if (item.type === 'booking') {
      return (
        item.guest_name?.toLowerCase().includes(query) ||
        item.guest_phone?.toLowerCase().includes(query) ||
        item.apartment_name?.toLowerCase().includes(query) ||
        item.transport_info?.toLowerCase().includes(query)
      );
    } else {
      return (
        item.title?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query)
      );
    }
  });

  const pastelColors = [
    'bg-sky-700/80 text-sky-100 border border-sky-400/50',
    'bg-indigo-700/80 text-indigo-100 border border-indigo-400/50',
    'bg-teal-700/80 text-teal-100 border border-teal-400/50',
    'bg-purple-700/80 text-purple-100 border border-purple-400/50',
    'bg-amber-700/80 text-amber-100 border border-amber-400/50',
    'bg-rose-700/80 text-rose-100 border border-rose-400/50',
    'bg-cyan-700/80 text-cyan-100 border border-cyan-400/50',
    'bg-emerald-700/80 text-emerald-100 border border-emerald-400/50'
  ];

  const sortedBookings = [...items.filter(i => i.type === 'booking')].sort((a, b) => {
    return (a.check_in || '').localeCompare(b.check_in || '');
  });

  const bookingColorMap = new Map<string, string>();
  sortedBookings.forEach((booking, index) => {
    const color = pastelColors[index % pastelColors.length];
    bookingColorMap.set(booking.id, color);
  });

  const getBookingColor = (id: string) => {
    return bookingColorMap.get(id) || 'bg-blue-700/80 text-blue-100 border border-blue-400/50';
  };

  const monthNames = ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'];

  const generateMonthsList = () => {
    const list = [];
    const startDate = new Date();
    startDate.setDate(1);
    
    for (let i = 0; i < 12; i++) {
      const d = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
      list.push({
        year: d.getFullYear(),
        month: d.getMonth(),
        name: `${monthNames[d.getMonth()]} ${d.getFullYear()}`
      });
    }
    return list;
  };

  const monthsList = generateMonthsList();

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white" dir="rtl">
        <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg w-80">
          <h2 className="mb-4 text-lg font-bold text-center">ورود به بخش مدیریت</h2>
          <input 
            type="password" 
            placeholder="رمز عبور..." 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 p-2 rounded w-full mb-4 border border-gray-600 text-white text-right"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded w-full transition">ورود</button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-900 text-white min-h-screen rounded-xl shadow-lg relative" dir="rtl">
      {notification && (
        <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-2xl text-white font-bold transition-all ${
          notification.type === 'success' ? 'bg-emerald-600 border border-emerald-400' : 'bg-red-600 border border-red-400'
        }`}>
          {notification.message}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-right">مدیریت رزروها و تسک‌ها</h1>
        <button onClick={handleLogout} className="bg-red-600/80 hover:bg-red-600 px-3 py-1.5 rounded text-xs transition font-bold">خروج از حساب</button>
      </div>

      <div className="mb-6">
        <input 
          type="text"
          placeholder="جستجو بر اساس نام مهمان، شماره تماس، واحد آپارتمان..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-800 p-3 rounded-lg border border-gray-700 w-full text-right text-white focus:outline-none focus:border-blue-500 shadow-inner"
        />
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-800 p-5 rounded-xl mb-8 border border-gray-700 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer font-medium">
              <input type="radio" name="formType" checked={formType === 'booking'} onChange={() => setFormType('booking')} />
              رزرو هتل / آپارتمان
            </label>
            <label className="flex items-center gap-2 cursor-pointer font-medium">
              <input type="radio" name="formType" checked={formType === 'task'} onChange={() => setFormType('task')} />
              یادآوری کار / تسک
            </label>
          </div>
          {isEditing && (
            <span className="text-amber-400 text-xs font-bold bg-amber-950/50 px-3 py-1 rounded-full border border-amber-800">
              در حال ویرایش رکورد...
            </span>
          )}
        </div>

        {formType === 'booking' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="نام مهمان" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 text-right text-white" required />
            <input type="text" placeholder="شماره واتساپ مسافر (مثل 374...)" value={guestPhone} onChange={(e) => setGuestPhone(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 text-right text-white" required />
            <input type="text" placeholder="نام یا شماره آپارتمان" value={apartmentName} onChange={(e) => setApartmentName(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 text-right text-white" required />
            
            {/* تفکیک نفرات */}
            <div className="bg-gray-700/50 p-2.5 rounded-lg border border-gray-600 flex flex-col gap-1">
              <label className="text-xs text-gray-300">تعداد بزرگسال</label>
              <input type="number" min="0" placeholder="بزرگسال" value={adultsCount} onChange={(e) => setAdultsCount(e.target.value ? Number(e.target.value) : '')} className="bg-gray-700 p-1.5 rounded border border-gray-600 text-white text-right" required />
            </div>
            <div className="bg-gray-700/50 p-2.5 rounded-lg border border-gray-600 flex flex-col gap-1">
              <label className="text-xs text-gray-300">کودک زیر ۷ سال</label>
              <input type="number" min="0" placeholder="زیر ۷ سال" value={childUnder7} onChange={(e) => setChildUnder7(e.target.value ? Number(e.target.value) : '')} className="bg-gray-700 p-1.5 rounded border border-gray-600 text-white text-right" />
            </div>
            <div className="bg-gray-700/50 p-2.5 rounded-lg border border-gray-600 flex flex-col gap-1">
              <label className="text-xs text-gray-300">کودک ۷ تا ۱۸ سال</label>
              <input type="number" min="0" placeholder="۷ تا ۱۸ سال" value={child7To18} onChange={(e) => setChild7To18(e.target.value ? Number(e.target.value) : '')} className="bg-gray-700 p-1.5 rounded border border-gray-600 text-white text-right" />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1 text-right">تاریخ ورود (Check-in)</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 w-full text-white cursor-pointer" required />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1 text-right">تاریخ خروج (Check-out)</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 w-full text-white cursor-pointer" required />
            </div>
            
            <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 text-right text-white">
              <option value="کل پرداخت شده">کل پرداخت شده</option>
              <option value="بیعانه داده شده">بیعانه داده شده</option>
              <option value="منتظر تایید صراف">منتظر تایید صراف</option>
              <option value="منتظر پرداخت">منتظر پرداخت</option>
            </select>

            {(paymentStatus === 'بیعانه داده شده' || paymentStatus === 'منتظر تایید صراف') && (
              <input type="text" placeholder="مبلغ واریزی / توضیحات پول..." value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 text-right text-white" />
            )}

            <input type="text" placeholder="توضیحات سفر (با چی میاد؟)" value={transportInfo} onChange={(e) => setTransportInfo(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 md:col-span-2 text-right text-white" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="عنوان تسک یا یادآوری..." value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 w-full text-right text-white" required />
            <div>
              <label className="block text-xs text-gray-400 mb-1 text-right">تاریخ انجام کار</label>
              <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 w-full text-white cursor-pointer" required />
            </div>
            <textarea placeholder="توضیحات کامل تسک..." value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="bg-gray-700 p-2.5 rounded-lg border border-gray-600 md:col-span-2 text-right text-white h-20" />
          </div>
        )}

        <div className="flex gap-3 mt-5">
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-lg font-bold transition shadow-lg">
            {isEditing ? 'ذخیره تغییرات' : 'ثبت در سیستم'}
          </button>
          {isEditing && (
            <button type="button" onClick={() => { setIsEditing(false); setEditId(null); resetForm(); }} className="bg-gray-700 hover:bg-gray-600 px-4 py-2.5 rounded-lg font-bold transition">
              انصراف
            </button>
          )}
        </div>
      </form>

      {/* تقویم اسکرولی عمودی */}
      <div className="space-y-6">
        {monthsList.map((mObj) => {
          const mYear = mObj.year;
          const mMonth = mObj.month;
          const firstDay = new Date(mYear, mMonth, 1).getDay();
          const totalDays = new Date(mYear, mMonth + 1, 0).getDate();

          return (
            <div key={`${mYear}-${mMonth}`} className="bg-gray-800 p-5 rounded-2xl border border-gray-700 shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-blue-400 border-b border-gray-700 pb-2">{mObj.name}</h2>

              <div className="grid grid-cols-7 gap-2 text-center font-bold text-gray-300 mb-2 text-sm">
                <div>یک‌شنبه</div><div>دوشنبه</div><div>سه‌شنبه</div><div>چهارشنبه</div><div>پنج‌شنبه</div><div>جمعه</div><div>شنبه</div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: firstDay }).map((_, idx) => (
                  <div key={`empty-${mMonth}-${idx}`} className="h-32 bg-gray-900/20 rounded-xl border border-gray-800 opacity-20"></div>
                ))}

                {Array.from({ length: totalDays }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const formattedMonth = String(mMonth + 1).padStart(2, '0');
                  const formattedDay = String(dayNum).padStart(2, '0');
                  const dateStr = `${mYear}-${formattedMonth}-${formattedDay}`;

                  const matchedBookings = filteredItems.filter(item => item.type === 'booking' && item.check_in && item.check_out && dateStr >= item.check_in && dateStr <= item.check_out);
                  const matchedTasks = filteredItems.filter(item => item.type === 'task' && item.task_date === dateStr);

                  return (
                    <div 
                      key={dayNum} 
                      onClick={() => {
                        setQuickDateModal(dateStr);
                        setQCheckIn(dateStr);
                        setQTaskDate(dateStr);
                      }}
                      className="h-32 bg-gray-900 rounded-xl border border-gray-700/80 p-2 overflow-y-auto flex flex-col cursor-pointer hover:border-blue-500 transition-all relative group shadow-sm"
                      title="برای افزودن رزرو یا تسک کلیک کنید"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-300 font-bold bg-gray-800 px-1.5 py-0.5 rounded">{dayNum}</span>
                        <span className="text-[10px] text-blue-400 opacity-0 group-hover:opacity-100 transition font-bold">+</span>
                      </div>

                      <div className="space-y-1.5 flex-1 flex flex-col">
                        {matchedBookings.map(b => {
                          const isCheckIn = b.check_in === dateStr;
                          const isCheckOut = b.check_out === dateStr;

                          return (
                            <div
                              key={b.id}
                              onClick={(e) => { e.stopPropagation(); setSelectedItem(b); }}
                              className={`text-xs px-2 py-1 rounded-md transition hover:opacity-95 shadow-md flex flex-col gap-0.5 ${getBookingColor(b.id)}`}
                            >
                              <div className="flex items-center justify-between font-bold">
                                <span className="truncate">🏨 {b.guest_name} ({b.apartment_name})</span>
                                <div className="flex gap-1 text-[9px] shrink-0">
                                  {isCheckIn && <span className="bg-emerald-600 text-white px-1 rounded">ورود</span>}
                                  {isCheckOut && <span className="bg-amber-600 text-white px-1 rounded">خروج</span>}
                                </div>
                              </div>
                              <div className="text-[10px] opacity-90 truncate">
                                {b.payment_status === 'بیعانه داده شده' 
                                  ? `بیعانه: ${b.deposit_amount || 'ثبت نشده'}` 
                                  : b.payment_status === 'منتظر تایید صراف' 
                                  ? `صراف: ${b.deposit_amount || 'ثبت نشده'}` 
                                  : b.payment_status} 
                                {b.transport_info ? ` | ${b.transport_info}` : ''}
                              </div>
                            </div>
                          );
                        })}

                        {matchedTasks.map(t => (
                          <div
                            key={t.id}
                            onClick={(e) => { e.stopPropagation(); setSelectedItem(t); }}
                            className="text-xs px-2 py-1 rounded-md transition hover:opacity-95 shadow-md flex flex-col gap-0.5 bg-emerald-700/85 text-emerald-100 border border-emerald-400/50"
                          >
                            <div className="font-bold truncate">📌 {t.title}</div>
                            {t.description && (
                              <div className="text-[10px] opacity-90 truncate">{t.description}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {quickDateModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto" dir="rtl">
          <form onSubmit={handleQuickSubmit} className="bg-gray-800 border border-gray-700 p-6 rounded-2xl max-w-lg w-full text-right relative shadow-2xl">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 text-blue-400">
              افزودن برای تاریخ: {quickDateModal}
            </h3>

            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input type="radio" name="qType" checked={quickType === 'booking'} onChange={() => setQuickType('booking')} />
                رزرو هتل / آپارتمان
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input type="radio" name="qType" checked={quickType === 'task'} onChange={() => setQuickType('task')} />
                یادآوری کار / تسک
              </label>
            </div>

            {quickType === 'booking' ? (
              <div className="space-y-3">
                <input type="text" placeholder="نام مهمان" value={qGuestName} onChange={(e) => setQGuestName(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white" required />
                <input type="text" placeholder="شماره واتساپ مسافر (مثل 374...)" value={qGuestPhone} onChange={(e) => setQGuestPhone(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white" required />
                <input type="text" placeholder="نام یا شماره آپارتمان" value={qApartmentName} onChange={(e) => setQApartmentName(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white" required />
                
                {/* تفکیک نفرات در مودال */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-700 p-2 rounded-xl border border-gray-600">
                    <label className="block text-[10px] text-gray-300 mb-1">بزرگسال</label>
                    <input type="number" min="0" value={qAdultsCount} onChange={(e) => setQAdultsCount(e.target.value ? Number(e.target.value) : '')} className="bg-gray-800 p-1.5 rounded w-full text-white text-center" required />
                  </div>
                  <div className="bg-gray-700 p-2 rounded-xl border border-gray-600">
                    <label className="block text-[10px] text-gray-300 mb-1">کودک زیر ۷</label>
                    <input type="number" min="0" value={qChildUnder7} onChange={(e) => setQChildUnder7(e.target.value ? Number(e.target.value) : '')} className="bg-gray-800 p-1.5 rounded w-full text-white text-center" />
                  </div>
                  <div className="bg-gray-700 p-2 rounded-xl border border-gray-600">
                    <label className="block text-[10px] text-gray-300 mb-1">کودک ۷ تا ۱۸</label>
                    <input type="number" min="0" value={qChild7To18} onChange={(e) => setQChild7To18(e.target.value ? Number(e.target.value) : '')} className="bg-gray-800 p-1.5 rounded w-full text-white text-center" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1">تاریخ ورود (Check-in)</label>
                  <input type="date" value={qCheckIn} onChange={(e) => setQCheckIn(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white cursor-pointer" required />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">تاریخ خروج (Check-out)</label>
                  <input type="date" value={qCheckOut} onChange={(e) => setQCheckOut(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white cursor-pointer" required />
                </div>
                
                <select value={qPaymentStatus} onChange={(e) => setQPaymentStatus(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-right text-white">
                  <option value="کل پرداخت شده">کل پرداخت شده</option>
                  <option value="بیعانه داده شده">بیعانه داده شده</option>
                  <option value="منتظر تایید صراف">منتظر تایید صراف</option>
                  <option value="منتظر پرداخت">منتظر پرداخت</option>
                </select>

                {(qPaymentStatus === 'بیعانه داده شده' || qPaymentStatus === 'منتظر تایید صراف') && (
                  <input type="text" placeholder="مبلغ واریزی / توضیحات پول..." value={qDepositAmount} onChange={(e) => setQDepositAmount(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-right text-white" />
                )}

                <input type="text" placeholder="توضیحات سفر (با چی میاد؟)" value={qTransportInfo} onChange={(e) => setQTransportInfo(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white" />
              </div>
            ) : (
              <div className="space-y-3">
                <input type="text" placeholder="عنوان تسک یا یادآوری..." value={qTaskTitle} onChange={(e) => setQTaskTitle(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white" required />
                <div>
                  <label className="block text-xs text-gray-400 mb-1">تاریخ انجام کار</label>
                  <input type="date" value={qTaskDate} onChange={(e) => setQTaskDate(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white cursor-pointer" required />
                </div>
                <textarea placeholder="توضیحات کامل تسک..." value={qTaskDesc} onChange={(e) => setQTaskDesc(e.target.value)} className="bg-gray-700 p-2.5 rounded-xl border border-gray-600 w-full text-white h-24" />
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-4 py-2.5 rounded-xl text-white flex-1 font-bold shadow-lg">ثبت در سیستم</button>
              <button type="button" onClick={() => setQuickDateModal(null)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2.5 rounded-xl text-white flex-1">انصراف</button>
            </div>
          </form>
        </div>
      )}

      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" dir="rtl">
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl max-w-md w-full text-right relative shadow-2xl">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 text-blue-400">
              {selectedItem.type === 'booking' ? 'جزئیات رزرو اقامتگاه' : 'جزئیات تسک و یادآوری'}
            </h3>

            {selectedItem.type === 'booking' ? (
              <div className="space-y-2.5 text-sm text-gray-300">
                <p><strong>نام مهمان:</strong> {selectedItem.guest_name}</p>
                <p><strong>شماره تماس:</strong> {selectedItem.guest_phone || 'ندارد'}</p>
                <p><strong>واحد آپارتمان:</strong> {selectedItem.apartment_name}</p>
                <p>
                  <strong>تعداد نفرات:</strong> بزرگسال: {selectedItem.adults_count ?? 1} | کودک زیر ۷ سال: {selectedItem.child_under_7 ?? 0} | کودک ۷ تا ۱۸ سال: {selectedItem.child_7_to_18 ?? 0}
                </p>
                <p><strong>تاریخ ورود:</strong> {selectedItem.check_in}</p>
                <p><strong>تاریخ خروج:</strong> {selectedItem.check_out}</p>
                <p><strong>وضعیت پرداخت:</strong> {selectedItem.payment_status} {selectedItem.deposit_amount ? `(${selectedItem.deposit_amount})` : ''}</p>
                <p><strong>توضیحات سفر:</strong> {selectedItem.transport_info || 'ندارد'}</p>
              </div>
            ) : (
              <div className="space-y-2.5 text-sm text-gray-300">
                <p><strong>عنوان تسک:</strong> {selectedItem.title}</p>
                <p><strong>تاریخ انجام:</strong> {selectedItem.task_date}</p>
                <p><strong>توضیحات:</strong> {selectedItem.description || 'ندارد'}</p>
              </div>
            )}

            <div className="flex gap-2 mt-6">
              <button onClick={() => handleStartEdit(selectedItem)} className="bg-amber-600 hover:bg-amber-500 px-3 py-2.5 rounded-xl text-white flex-1 font-bold transition text-sm shadow-md">
                ویرایش
              </button>
              <button onClick={() => handleDelete(selectedItem.id)} className="bg-red-600 hover:bg-red-500 px-3 py-2.5 rounded-xl text-white flex-1 font-bold transition text-sm shadow-md">
                حذف
              </button>
              <button onClick={() => setSelectedItem(null)} className="bg-gray-700 hover:bg-gray-600 px-3 py-2.5 rounded-xl text-white flex-1 transition text-sm">
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
