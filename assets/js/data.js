// Mock data for AquaFlow demo
const DATA = (() => {
  const cities = [
    { name: 'Ташкент', lat: 41.2995, lng: 69.2401 },
    { name: 'Самарканд', lat: 39.6542, lng: 66.9597 },
    { name: 'Бухара', lat: 39.7747, lng: 64.4286 },
    { name: 'Андижан', lat: 40.7821, lng: 72.3442 },
    { name: 'Наманган', lat: 40.9983, lng: 71.6726 },
    { name: 'Фергана', lat: 40.3864, lng: 71.7864 },
    { name: 'Нукус', lat: 42.4530, lng: 59.6103 },
    { name: 'Карши', lat: 38.8606, lng: 65.7990 },
  ];
  const streets = [
    'ул. Амира Темура', 'ул. Навои', 'пр. Мустакиллик', 'ул. Шахрисабз',
    'ул. Узбекистан', 'ул. Бабура', 'ул. Сайилгох', 'ул. Истиклол',
    'ул. Зулфия', 'ул. Бунёдкор', 'мкр. Юнусабад', 'мкр. Чиланзар',
  ];
  const statuses = ['online', 'online', 'online', 'online', 'online', 'online', 'fault', 'warn', 'offline'];

  function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  // Seeded random for stable data
  let _seed = 42;
  function srand() {
    _seed = (_seed * 9301 + 49297) % 233280;
    return _seed / 233280;
  }
  function srandInt(min, max) { return Math.floor(srand() * (max - min + 1)) + min; }
  function spick(arr) { return arr[Math.floor(srand() * arr.length)]; }

  const devices = [];

  // === Привязанный пользователем реальный водомат ===
  // Контроллер с фото: плата LFT-780, GSM-модуль Air780E (4G LTE Cat-1),
  // серийный номер 10992 (с QR-кода на плате)
  devices.push({
    id: 'WM-10992',
    name: 'Водомат №10992',
    city: 'Ташкент',
    address: 'ул. Амира Темура, 45',
    lat: 41.3111, lng: 69.2797,
    status: 'online',
    todayRevenue: 487000,
    todayTx: 64,
    tankPct: 78,
    signal: 87,
    uptime: 99,
    pressure: 2.4,
    temp: 18,
    lastPing: 0,
    bill: 'ok', coin: 'ok', pump: 'ok', filter: 'ok',
    uv: 'ok', qr: 'ok', card: 'ok', door: 'ok',
    // Реальная информация об оборудовании
    hardware: {
      board: 'LFT-780',
      modem: 'Air780E (4G LTE Cat-1)',
      imei: '867130752791',
      sim: '+998 90 124 56 78 (Ucell, активна)',
      firmware: 'v2.1.4 (AquaFlow)',
      serial: '10992',
      bound: true,
      boundAt: Date.now() - 5 * 60 * 1000, // привязан 5 минут назад
    },
  });

  for (let i = 1; i <= 23; i++) {
    const city = spick(cities);
    const offsetLat = (srand() - 0.5) * 0.08;
    const offsetLng = (srand() - 0.5) * 0.08;
    const st = spick(statuses);
    devices.push({
      id: `WM-${String(i).padStart(4, '0')}`,
      name: `Водомат №${i}`,
      city: city.name,
      address: `${spick(streets)}, ${srandInt(1, 120)}`,
      lat: city.lat + offsetLat,
      lng: city.lng + offsetLng,
      status: st,
      todayRevenue: st === 'offline' ? 0 : srandInt(50, 850) * 1000,
      todayTx: st === 'offline' ? 0 : srandInt(8, 95),
      tankPct: srandInt(20, 100),
      signal: srandInt(40, 100),
      uptime: srandInt(80, 99),
      pressure: srandInt(180, 280) / 100, // bar
      temp: srandInt(8, 22),
      lastPing: st === 'offline' ? srandInt(15, 720) : srandInt(0, 4),
      bill: st === 'fault' ? 'bad' : (srand() > 0.85 ? 'warn' : 'ok'),
      coin: 'ok',
      pump: srand() > 0.95 ? 'warn' : 'ok',
      filter: srand() > 0.7 ? 'warn' : 'ok',
      uv: 'ok',
      qr: 'ok',
      card: srand() > 0.9 ? 'off' : 'ok',
      door: srand() > 0.97 ? 'bad' : 'ok',
    });
  }

  // Загрузка устройств, привязанных пользователем (сохраняются в localStorage)
  try {
    const bound = JSON.parse(localStorage.getItem('aquaflow.boundDevices') || '[]');
    bound.forEach(b => {
      // не добавлять дубликат, если такой ID уже есть
      if (!devices.find(d => d.id === b.id)) devices.push(b);
    });
  } catch (e) { /* ignore */ }

  // Aggregate KPIs
  const kpi = {
    revenueToday: devices.reduce((s, d) => s + d.todayRevenue, 0),
    revenueYesterday: 0,
    txToday: devices.reduce((s, d) => s + d.todayTx, 0),
    txYesterday: 0,
    online: devices.filter(d => d.status === 'online').length,
    total: devices.length,
    alerts: devices.filter(d => d.status === 'fault' || d.status === 'warn').length,
  };
  kpi.revenueYesterday = Math.round(kpi.revenueToday * (0.85 + srand() * 0.3));
  kpi.txYesterday = Math.round(kpi.txToday * (0.85 + srand() * 0.3));

  // 14-day revenue series
  const revenueSeries = [];
  const labels14 = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    labels14.push(d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' }));
    revenueSeries.push(srandInt(2500, 7800) * 1000);
  }

  // Payment split
  const paymentSplit = {
    qr: 38, card: 22, cash: 27, coin: 13
  };

  // Alerts
  const alertTypes = [
    { key: 'al_jam', sev: 'critical', icon: 'jam' },
    { key: 'al_filter', sev: 'warning', icon: 'filter' },
    { key: 'al_offline', sev: 'critical', icon: 'wifi-off' },
    { key: 'al_lowwater', sev: 'warning', icon: 'droplet' },
    { key: 'al_tamper', sev: 'critical', icon: 'shield' },
    { key: 'al_collect', sev: 'info', icon: 'banknote' },
    { key: 'al_temp', sev: 'warning', icon: 'thermometer' },
    { key: 'al_resolved', sev: 'success', icon: 'check' },
  ];
  const alerts = [];
  for (let i = 0; i < 28; i++) {
    const t = spick(alertTypes);
    const dev = spick(devices);
    const minsAgo = srandInt(1, 1440);
    alerts.push({
      id: 'A' + (1000 + i),
      key: t.key,
      sev: t.sev,
      icon: t.icon,
      device: dev,
      ts: Date.now() - minsAgo * 60 * 1000,
    });
  }
  alerts.sort((a, b) => b.ts - a.ts);

  // Transactions
  const methods = ['QR', 'CARD', 'CASH', 'COIN'];
  const txs = [];
  for (let i = 0; i < 60; i++) {
    const dev = spick(devices.filter(d => d.status !== 'offline'));
    const amount = spick([1000, 2000, 3000, 5000, 5000, 10000, 10000, 15000]);
    txs.push({
      id: 'TX' + (10000 + i),
      ts: Date.now() - srandInt(0, 1440) * 60 * 1000,
      device: dev,
      method: spick(methods),
      amount,
      volume: amount / 1000, // 1000 сум / литр (демо)
      status: srand() > 0.97 ? 'refund' : 'paid',
    });
  }
  txs.sort((a, b) => b.ts - a.ts);

  // Tasks
  const taskTitles = [
    'Замена фильтра картриджа', 'Извлечение замятой купюры', 'Замена УФ-лампы',
    'Чистка распылителей', 'Обновить прошивку', 'Дозаправка воды',
    'Заменить помпу', 'Калибровка купюроприёмника', 'Инкассация',
  ];
  const techNames = ['Алишер К.', 'Ботир Р.', 'Жасур Н.', 'Шерзод А.', 'Бахром И.'];
  const tasks = [];
  for (let i = 0; i < 14; i++) {
    const dev = spick(devices);
    const status = spick(['open', 'open', 'progress', 'progress', 'done']);
    const priority = spick(['high', 'med', 'med', 'low']);
    tasks.push({
      id: 'T' + (100 + i),
      title: spick(taskTitles),
      device: dev,
      tech: spick(techNames),
      status, priority,
      createdAt: Date.now() - srandInt(1, 14) * 86400000,
    });
  }

  // Users (for admin role)
  const users = [
    { id: 1, name: 'Айбек Юлдашев', role: 'admin', phone: '+998 90 100 11 11', devices: devices.length, last: '5 мин назад' },
    { id: 2, name: 'Феруза Каримова', role: 'manager', phone: '+998 91 222 33 44', devices: 14, last: '32 мин назад' },
    { id: 3, name: 'Алишер Кадыров', role: 'tech', phone: '+998 93 555 66 77', devices: 6, last: '2 ч назад' },
    { id: 4, name: 'Ботир Раджабов', role: 'tech', phone: '+998 94 778 99 00', devices: 7, last: '1 ч назад' },
    { id: 5, name: 'Жасур Низамов', role: 'tech', phone: '+998 99 333 22 11', devices: 5, last: 'вчера' },
    { id: 6, name: 'Шахноза Алиева', role: 'owner', phone: '+998 90 999 88 77', devices: devices.length, last: '3 ч назад' },
  ];

  // Recent sessions per device
  function deviceSessions(dev) {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      const m = spick(methods);
      const a = spick([1000, 2000, 3000, 5000, 10000]);
      arr.push({
        ts: Date.now() - srandInt(0, 720) * 60 * 1000,
        method: m,
        amount: a,
        volume: a / 1000,
      });
    }
    return arr.sort((a, b) => b.ts - a.ts);
  }
  function deviceEvents(dev) {
    const evs = [
      'Перезагрузка по команде',
      'Извлечена купюра 5000',
      'Замена фильтра подтверждена',
      'GSM сигнал восстановлен',
      'Сработала защита от вскрытия (отменено)',
      'Купюроприёмник переведён в норму',
      'Запуск помпы',
      'Открыт сервисный режим',
    ];
    return new Array(8).fill(0).map(() => ({
      ts: Date.now() - srandInt(0, 2880) * 60 * 1000,
      text: spick(evs),
    })).sort((a, b) => b.ts - a.ts);
  }

  return {
    devices, alerts, txs, tasks, users, kpi,
    revenueSeries, labels14, paymentSplit,
    deviceSessions, deviceEvents,
    methods,
  };
})();

// Formatters
function fmtSum(n) {
  return new Intl.NumberFormat('ru-RU').format(n) + ' сум';
}
function fmtInt(n) {
  return new Intl.NumberFormat('ru-RU').format(n);
}
function fmtAgo(ms) {
  const min = Math.floor((Date.now() - ms) / 60000);
  if (min < 1) return t('just_now');
  if (min < 60) return min + ' ' + t('min_ago');
  const h = Math.floor(min / 60);
  if (h < 24) return h + ' ' + t('h_ago');
  const d = Math.floor(h / 24);
  return d + ' д';
}
function fmtMinAgo(min) {
  if (min < 1) return t('just_now');
  if (min < 60) return min + ' ' + t('min_ago');
  const h = Math.floor(min / 60);
  if (h < 24) return h + ' ' + t('h_ago');
  const d = Math.floor(h / 24);
  return d + ' д';
}
