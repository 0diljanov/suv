// =============================================================
// AquaFlow App — SPA-style logic with hash routing
// =============================================================

// ---------- Icons (inline SVG) ----------
const ICO = {
  logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c-3.5 4-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-2.5-7-6-11Z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>',
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  device: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="9" y1="6" x2="15" y2="6"/><circle cx="12" cy="12" r="2"/><line x1="9" y1="18" x2="15" y2="18"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>',
  coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v6"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>',
  task: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="m9 12 2 2 4-4"/><path d="M8 2v4M16 2v4"/></svg>',
  report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.55V21a2 2 0 0 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06A2 2 0 1 1 4.13 16.93l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1.04H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.64 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06A2 2 0 1 1 7.07 4.13l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.04-1.55V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.55 1.04H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1.04Z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><polyline points="21 3 21 8 16 8"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  power: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
  wifi_off: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a11 11 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c-3.5 4-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-2.5-7-6-11Z"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  pump: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 7V3M12 21v-4M3 12h4M17 12h4"/></svg>',
  thermometer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/></svg>',
  banknote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  jam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="2" y1="12" x2="22" y2="12" stroke-dasharray="2 2"/></svg>',
  arrow_up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><polyline points="18 15 12 9 6 15"/></svg>',
  arrow_down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><polyline points="6 9 12 15 18 9"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.71 2.03Z"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
};

// ---------- Auth ----------
function getRole() { return localStorage.getItem('aquaflow.role') || 'manager'; }
function setRole(r) { localStorage.setItem('aquaflow.role', r); }
function getPhone() { return localStorage.getItem('aquaflow.phone') || ''; }
function setPhone(p) { localStorage.setItem('aquaflow.phone', p); }
function isLoggedIn() { return !!localStorage.getItem('aquaflow.session'); }
function login(role, phone) {
  setRole(role); setPhone(phone || '+998 90 000 00 00');
  localStorage.setItem('aquaflow.session', String(Date.now()));
}
function logout() {
  localStorage.removeItem('aquaflow.session');
  location.href = './index.html';
}
const roleLabel = (r) => ({
  admin: t('role_admin'), manager: t('role_manager'),
  tech: t('role_tech'), owner: t('role_owner'),
}[r] || r);

// ---------- Navigation ----------
const NAV_ITEMS = [
  { id: 'dashboard', key: 'nav_dashboard', ico: 'dashboard', roles: ['admin','manager','tech','owner'] },
  { id: 'devices', key: 'nav_devices', ico: 'device', roles: ['admin','manager','tech','owner'] },
  { id: 'map', key: 'nav_map', ico: 'map', roles: ['admin','manager','tech','owner'] },
  { id: 'finance', key: 'nav_finance', ico: 'coin', roles: ['admin','manager','owner'] },
  { id: 'alerts', key: 'nav_alerts', ico: 'alert', roles: ['admin','manager','tech','owner'], badge: () => DATA.alerts.filter(a => a.sev === 'critical').length },
  { id: 'tasks', key: 'nav_tasks', ico: 'task', roles: ['admin','manager','tech'] },
  { id: 'reports', key: 'nav_reports', ico: 'report', roles: ['admin','manager','owner'] },
  { id: 'users', key: 'nav_users', ico: 'user', roles: ['admin'] },
  { id: 'settings', key: 'nav_settings', ico: 'settings', roles: ['admin','manager','tech','owner'] },
];

function buildSidebar() {
  const role = getRole();
  const items = NAV_ITEMS.filter(n => n.roles.includes(role));
  return `
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        <div class="logo-mark">${ICO.logo}</div>
        <div>
          <div class="brand-name" data-i18n="brand">AquaFlow</div>
          <div class="brand-sub" data-i18n="brand_sub">IoT-платформа</div>
        </div>
      </div>
      <nav>
        ${items.map(it => {
          const badge = it.badge ? it.badge() : 0;
          return `<a class="nav-item" href="#${it.id}" data-route="${it.id}">
            ${ICO[it.ico]} <span data-i18n="${it.key}"></span>
            ${badge > 0 ? `<span class="badge">${badge}</span>` : ''}
          </a>`;
        }).join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="user-chip" onclick="goto('settings')">
          <div class="avatar">${(getPhone() || 'AU').slice(-2)}</div>
          <div class="meta">
            <div class="name">${getPhone()}</div>
            <div class="role">${roleLabel(getRole())}</div>
          </div>
        </div>
      </div>
    </aside>`;
}

function buildTopbar(title, sub) {
  const lang = getLang();
  return `
    <header class="topbar">
      <button class="hamburger icon-btn" onclick="document.getElementById('sidebar').classList.toggle('open')">${ICO.menu}</button>
      <div class="search">
        ${ICO.search}
        <input class="input" type="text" data-i18n-ph="search" placeholder="Search" oninput="onGlobalSearch(this.value)"/>
        <span class="kbd">⌘K</span>
      </div>
      <div class="topbar-spacer"></div>
      <div class="topbar-actions">
        <div class="lang-toggle">
          <button class="${lang==='ru'?'active':''}" onclick="switchLang('ru')">RU</button>
          <button class="${lang==='uz'?'active':''}" onclick="switchLang('uz')">UZ</button>
        </div>
        <button class="icon-btn" onclick="goto('alerts')" title="${t('nav_alerts')}">
          ${ICO.bell}<span class="dot"></span>
        </button>
        <button class="icon-btn" onclick="logout()" title="${t('sign_out')}">${ICO.power}</button>
      </div>
    </header>`;
}

function switchLang(l) { setLang(l); render(); }

// ---------- Pages ----------
function pageDashboard() {
  const d = DATA;
  const trendRev = ((d.kpi.revenueToday - d.kpi.revenueYesterday) / Math.max(1, d.kpi.revenueYesterday) * 100);
  const trendTx = ((d.kpi.txToday - d.kpi.txYesterday) / Math.max(1, d.kpi.txYesterday) * 100);
  const onlinePct = (d.kpi.online / d.kpi.total * 100).toFixed(0);
  const recentAlerts = d.alerts.slice(0, 6);
  const topDevices = [...d.devices].sort((a,b)=>b.todayRevenue-a.todayRevenue).slice(0,5);

  return `
    <div class="page-head">
      <div>
        <h1 data-i18n="dash_title"></h1>
        <div class="sub" data-i18n="dash_sub"></div>
      </div>
      <div class="page-head-actions">
        <button class="btn btn-ghost btn-sm" onclick="render()">${ICO.refresh}<span data-i18n="refresh"></span></button>
        <button class="btn btn-primary btn-sm" onclick="goto('reports')">${ICO.download}<span data-i18n="export"></span></button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi kpi-revenue">
        <div class="head"><span class="title" data-i18n="kpi_revenue"></span><div class="ico">${ICO.coin}</div></div>
        <div class="value">${fmtSum(d.kpi.revenueToday)}</div>
        <span class="trend ${trendRev>=0?'trend-up':'trend-down'}">${trendRev>=0?ICO.arrow_up:ICO.arrow_down}${Math.abs(trendRev).toFixed(1)}% <span data-i18n="vs_yesterday"></span></span>
      </div>
      <div class="kpi kpi-tx">
        <div class="head"><span class="title" data-i18n="kpi_tx"></span><div class="ico">${ICO.zap}</div></div>
        <div class="value">${fmtInt(d.kpi.txToday)}</div>
        <span class="trend ${trendTx>=0?'trend-up':'trend-down'}">${trendTx>=0?ICO.arrow_up:ICO.arrow_down}${Math.abs(trendTx).toFixed(1)}% <span data-i18n="vs_yesterday"></span></span>
      </div>
      <div class="kpi kpi-online">
        <div class="head"><span class="title" data-i18n="kpi_online"></span><div class="ico">${ICO.wifi}</div></div>
        <div class="value">${d.kpi.online}/${d.kpi.total}</div>
        <span class="trend trend-flat">${onlinePct}% ${t('online')}</span>
      </div>
      <div class="kpi kpi-alert">
        <div class="head"><span class="title" data-i18n="kpi_alerts"></span><div class="ico">${ICO.alert}</div></div>
        <div class="value">${d.kpi.alerts}</div>
        <span class="trend ${d.kpi.alerts>0?'trend-down':'trend-up'}">${d.kpi.alerts>0 ? t('sev_critical') : t('sev_success')}</span>
      </div>
    </div>

    <div class="section-grid grid-2" style="margin-bottom:16px">
      <div class="card">
        <div class="card-head">
          <h3 data-i18n="chart_revenue"></h3>
          <div class="tabs">
            <span class="tab active" data-i18n="week"></span>
            <span class="tab" data-i18n="month"></span>
            <span class="tab" data-i18n="year"></span>
          </div>
        </div>
        <div class="card-body"><canvas id="chartRevenue" height="220"></canvas></div>
      </div>
      <div class="card">
        <div class="card-head"><h3 data-i18n="chart_payments"></h3></div>
        <div class="card-body"><canvas id="chartPay" height="240"></canvas></div>
      </div>
    </div>

    <div class="section-grid grid-2">
      <div class="card">
        <div class="card-head">
          <h3 data-i18n="recent_alerts"></h3>
          <button class="btn btn-ghost btn-sm" onclick="goto('alerts')" data-i18n="view_all"></button>
        </div>
        <div class="card-body no-pad">
          <div class="alert-list">
            ${recentAlerts.map(a => `
              <div class="alert-item sev-${a.sev}">
                <div class="ico">${ICO[a.icon] || ICO.alert}</div>
                <div class="body">
                  <div class="title">${t(a.key)}</div>
                  <div class="meta">${a.device.id} · ${a.device.city}, ${a.device.address}</div>
                </div>
                <div class="time">${fmtAgo(a.ts)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3 data-i18n="top_devices"></h3></div>
        <div class="card-body no-pad">
          <table class="table">
            <tbody>
              ${topDevices.map(dv => `
                <tr onclick="goto('device/${dv.id}')">
                  <td>
                    <div style="font-weight:600">${dv.name}</div>
                    <div class="muted" style="font-size:12px">${dv.city}</div>
                  </td>
                  <td style="text-align:right">
                    <div style="font-weight:600">${fmtSum(dv.todayRevenue)}</div>
                    <div class="muted" style="font-size:12px">${dv.todayTx} ${t('transactions').toLowerCase()}</div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function pageDevices() {
  const d = DATA;
  const counts = {
    all: d.devices.length,
    online: d.devices.filter(x=>x.status==='online').length,
    fault: d.devices.filter(x=>x.status==='fault').length,
    warn: d.devices.filter(x=>x.status==='warn').length,
    offline: d.devices.filter(x=>x.status==='offline').length,
  };
  const f = window.__devFilter || 'all';
  const filtered = f === 'all' ? d.devices : d.devices.filter(x=>x.status===f);
  return `
    <div class="page-head">
      <div><h1 data-i18n="dev_title"></h1><div class="sub" data-i18n="dev_sub"></div></div>
      <div class="page-head-actions">
        <button class="btn btn-ghost btn-sm">${ICO.download}<span data-i18n="export"></span></button>
        <button class="btn btn-primary btn-sm" onclick="openBindModal()">${ICO.plus}<span data-i18n="dev_add"></span></button>
      </div>
    </div>
    <div class="filters">
      <span class="chip ${f==='all'?'active':''}" onclick="setDevFilter('all')"><span data-i18n="all"></span><span class="count">${counts.all}</span></span>
      <span class="chip ${f==='online'?'active':''}" onclick="setDevFilter('online')"><span data-i18n="online"></span><span class="count">${counts.online}</span></span>
      <span class="chip ${f==='fault'?'active':''}" onclick="setDevFilter('fault')"><span data-i18n="fault"></span><span class="count">${counts.fault}</span></span>
      <span class="chip ${f==='warn'?'active':''}" onclick="setDevFilter('warn')"><span data-i18n="warning"></span><span class="count">${counts.warn}</span></span>
      <span class="chip ${f==='offline'?'active':''}" onclick="setDevFilter('offline')"><span data-i18n="offline"></span><span class="count">${counts.offline}</span></span>
    </div>
    <div class="card">
      <div class="card-body no-pad">
        <table class="table">
          <thead>
            <tr>
              <th data-i18n="col_device"></th>
              <th data-i18n="address"></th>
              <th data-i18n="col_status"></th>
              <th data-i18n="col_today"></th>
              <th data-i18n="col_balance"></th>
              <th data-i18n="col_signal"></th>
              <th data-i18n="col_last_ping"></th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(dv => `
              <tr onclick="goto('device/${dv.id}')">
                <td>
                  <div style="font-weight:600">${dv.name}</div>
                  <div class="muted mono" style="font-size:11px">${dv.id}</div>
                </td>
                <td>
                  <div>${dv.city}</div>
                  <div class="muted" style="font-size:12px">${dv.address}</div>
                </td>
                <td><span class="pill pill-${dv.status==='warn'?'warn':dv.status}">${t(dv.status === 'warn' ? 'warning' : dv.status)}</span></td>
                <td>
                  <div style="font-weight:600">${fmtSum(dv.todayRevenue)}</div>
                  <div class="muted" style="font-size:12px">${dv.todayTx} тх</div>
                </td>
                <td>
                  <div style="display:flex;align-items:center;gap:8px">
                    <div class="bar" style="width:60px;height:5px;background:var(--surface-3);border-radius:999px;overflow:hidden"><div style="height:100%;width:${dv.tankPct}%;background:${dv.tankPct<20?'var(--danger)':dv.tankPct<40?'var(--warning)':'var(--accent)'}"></div></div>
                    <span>${dv.tankPct}%</span>
                  </div>
                </td>
                <td>${dv.signal}%</td>
                <td class="muted">${fmtMinAgo(dv.lastPing)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function setDevFilter(f) { window.__devFilter = f; render(); }

// ---------- Bind device modal ----------
function openBindModal(prefillSerial) {
  const cities = ['Ташкент','Самарканд','Бухара','Андижан','Наманган','Фергана','Нукус','Карши'];
  const html = `
    <div class="modal-backdrop open" id="bindBackdrop" onclick="if(event.target===this)closeBindModal()">
      <div class="modal">
        <div class="modal-head">
          <div>
            <h3 data-i18n="bind_title"></h3>
            <div class="muted" style="font-size:12px;margin-top:4px" data-i18n="bind_sub"></div>
          </div>
          <span class="close" style="cursor:pointer;font-size:22px;color:var(--text-mute)" onclick="closeBindModal()">×</span>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <label data-i18n="bind_serial"></label>
            <div class="input-with-ico">
              <span class="ico">${ICO.tag}</span>
              <input class="input" id="bindSerial" data-i18n-ph="bind_serial_ph" placeholder="10992" value="${prefillSerial || ''}">
            </div>
          </div>
          <div class="form-row">
            <label data-i18n="bind_name"></label>
            <input class="input" id="bindName" data-i18n-ph="bind_name_ph">
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="form-row">
              <label data-i18n="bind_city"></label>
              <select class="select" id="bindCity">
                ${cities.map(c => `<option value="${c}">${c}</option>`).join('')}
              </select>
            </div>
            <div class="form-row">
              <label data-i18n="bind_module"></label>
              <input class="input" id="bindModule" value="LFT-780 / Air780E" readonly>
            </div>
          </div>
          <div class="form-row">
            <label data-i18n="bind_address"></label>
            <input class="input" id="bindAddress" data-i18n-ph="bind_address_ph">
          </div>
          <div class="auth-hint" style="margin-top:4px">
            <b>${t('bind_demo')}</b>
          </div>
        </div>
        <div class="modal-foot">
          <button class="btn btn-ghost" onclick="closeBindModal()" data-i18n="cancel"></button>
          <button class="btn btn-primary" onclick="submitBind()">${ICO.plus}<span data-i18n="bind_btn"></span></button>
        </div>
      </div>
    </div>
  `;
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap.firstElementChild);
  applyI18n(document.getElementById('bindBackdrop'));
}
function closeBindModal() {
  const b = document.getElementById('bindBackdrop');
  if (b) b.remove();
}
function submitBind() {
  const serial = document.getElementById('bindSerial').value.trim();
  const name = document.getElementById('bindName').value.trim() || `Водомат №${serial}`;
  const city = document.getElementById('bindCity').value;
  const address = document.getElementById('bindAddress').value.trim() || 'не указан';
  if (!serial) { toast('Введите серийный номер устройства', 'sev-warning'); return; }
  const id = 'WM-' + serial;
  if (DATA.devices.find(d => d.id === id)) {
    toast(`${id}: устройство уже привязано`, 'sev-warning');
    return;
  }
  // Координаты по выбранному городу (Ташкент по умолчанию)
  const cityCoords = {
    'Ташкент': [41.2995, 69.2401], 'Самарканд': [39.6542, 66.9597],
    'Бухара': [39.7747, 64.4286], 'Андижан': [40.7821, 72.3442],
    'Наманган': [40.9983, 71.6726], 'Фергана': [40.3864, 71.7864],
    'Нукус': [42.4530, 59.6103], 'Карши': [38.8606, 65.7990],
  };
  const [lat, lng] = cityCoords[city] || cityCoords['Ташкент'];
  const dev = {
    id, name, city, address,
    lat: lat + (Math.random()-0.5)*0.03, lng: lng + (Math.random()-0.5)*0.03,
    status: 'online',
    todayRevenue: 0, todayTx: 0,
    tankPct: 100, signal: 90, uptime: 100,
    pressure: 2.5, temp: 20, lastPing: 0,
    bill: 'ok', coin: 'ok', pump: 'ok', filter: 'ok',
    uv: 'ok', qr: 'ok', card: 'ok', door: 'ok',
    hardware: {
      board: 'LFT-780', modem: 'Air780E (4G LTE Cat-1)',
      imei: '8677' + serial.padStart(11, '0').slice(-11),
      sim: 'Активна',
      firmware: 'v2.1.4 (AquaFlow)',
      serial, bound: true, boundAt: Date.now(),
    },
  };
  DATA.devices.push(dev);
  // Сохраняем привязку в localStorage
  try {
    const bound = JSON.parse(localStorage.getItem('aquaflow.boundDevices') || '[]');
    bound.push(dev);
    localStorage.setItem('aquaflow.boundDevices', JSON.stringify(bound));
  } catch (e) {}
  closeBindModal();
  toast(`${id}: ${t('bind_ok')}`, 'sev-success', t('bind_ok'));
  goto('device/' + id);
}

function pageDevice(id) {
  const dv = DATA.devices.find(x => x.id === id);
  if (!dv) return `<div class="empty">Device not found</div>`;
  const sessions = DATA.deviceSessions(dv);
  const events = DATA.deviceEvents(dv);
  const healthMap = [
    {key:'h_bill', ico:'banknote', st:dv.bill},
    {key:'h_coin', ico:'coin', st:dv.coin},
    {key:'h_pump', ico:'pump', st:dv.pump},
    {key:'h_filter', ico:'filter', st:dv.filter},
    {key:'h_uv', ico:'zap', st:dv.uv},
    {key:'h_qr', ico:'tag', st:dv.qr},
    {key:'h_card', ico:'banknote', st:dv.card},
    {key:'h_door', ico:'lock', st:dv.door},
  ];
  const stText = (s) => ({ok:t('health_ok'),warn:t('health_warn'),bad:t('health_bad'),off:t('health_off')}[s]);
  return `
    <div class="page-head">
      <button class="btn btn-ghost btn-sm" onclick="goto('devices')">${ICO.back}<span data-i18n="dev_back"></span></button>
      <div class="page-head-actions">
        <button class="btn btn-ghost btn-sm" onclick="goto('map')">${ICO.pin}<span data-i18n="dev_open"></span></button>
        <button class="btn btn-ghost btn-sm" onclick="toast('${t('qa_remote')}','sev-success')">${ICO.refresh}<span data-i18n="dev_reboot"></span></button>
        <button class="btn btn-ghost btn-sm" onclick="toast('${t('qa_pause')}','sev-warning')">${ICO.pause}<span data-i18n="dev_pause"></span></button>
        <button class="btn btn-primary btn-sm" onclick="toast('${t('qa_collect')}','sev-success')">${ICO.banknote}<span data-i18n="dev_collect"></span></button>
      </div>
    </div>

    <div class="device-header">
      <div class="icon-big">${ICO.device}</div>
      <div>
        <h2>${dv.name}</h2>
        <div class="addr">${dv.city}, ${dv.address}</div>
        <div class="id">ID: ${dv.id}</div>
      </div>
      <div>
        <span class="pill pill-${dv.status==='warn'?'warn':dv.status}">${t(dv.status === 'warn' ? 'warning' : dv.status)}</span>
      </div>
    </div>

    <div class="metric-grid">
      <div class="metric ${dv.tankPct<20?'danger':dv.tankPct<40?'warn':'ok'}">
        <div class="head"><span class="lbl" data-i18n="metric_tank"></span><span style="color:var(--accent)">${ICO.droplet}</span></div>
        <div class="val">${dv.tankPct}<span class="u">%</span></div>
        <div class="bar"><div style="width:${dv.tankPct}%"></div></div>
      </div>
      <div class="metric ok">
        <div class="head"><span class="lbl" data-i18n="metric_pressure"></span><span style="color:var(--accent-2)">${ICO.pump}</span></div>
        <div class="val">${dv.pressure}<span class="u">bar</span></div>
        <div class="bar"><div style="width:${(dv.pressure/3)*100}%"></div></div>
      </div>
      <div class="metric ok">
        <div class="head"><span class="lbl" data-i18n="metric_temp"></span><span style="color:var(--warning)">${ICO.thermometer}</span></div>
        <div class="val">${dv.temp}<span class="u">°C</span></div>
        <div class="bar"><div style="width:${(dv.temp/30)*100}%"></div></div>
      </div>
      <div class="metric ok">
        <div class="head"><span class="lbl" data-i18n="metric_revenue"></span><span style="color:var(--success)">${ICO.coin}</span></div>
        <div class="val" style="font-size:18px">${fmtSum(dv.todayRevenue)}</div>
        <div class="muted" style="font-size:12px;margin-top:6px">${dv.todayTx} ${t('transactions').toLowerCase()}</div>
      </div>
      <div class="metric ok">
        <div class="head"><span class="lbl" data-i18n="metric_signal"></span><span style="color:var(--accent)">${ICO.wifi}</span></div>
        <div class="val">${dv.signal}<span class="u">%</span></div>
        <div class="bar"><div style="width:${dv.signal}%"></div></div>
      </div>
      <div class="metric ok">
        <div class="head"><span class="lbl" data-i18n="metric_uptime"></span><span style="color:var(--info)">${ICO.power}</span></div>
        <div class="val">${dv.uptime}<span class="u">%</span></div>
        <div class="bar"><div style="width:${dv.uptime}%"></div></div>
      </div>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="card-head"><h3 data-i18n="health_title"></h3></div>
      <div class="card-body">
        <div class="health-grid">
          ${healthMap.map(h => `
            <div class="health-tile ${h.st}">
              <div class="ico">${ICO[h.ico] || ICO.check}</div>
              <h5 data-i18n="${h.key}"></h5>
              <div class="st">${stText(h.st)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    ${dv.hardware ? `
    <div class="card" style="margin-bottom:16px">
      <div class="card-head">
        <h3 data-i18n="hw_info"></h3>
        ${dv.hardware.bound ? `<span class="pill pill-online">${t('bind_ok')}</span>` : ''}
      </div>
      <div class="card-body">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px">
          <div>
            <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em" data-i18n="hw_board"></div>
            <div style="font-weight:600;margin-top:4px" class="mono">${dv.hardware.board}</div>
          </div>
          <div>
            <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em" data-i18n="hw_modem"></div>
            <div style="font-weight:600;margin-top:4px" class="mono">${dv.hardware.modem}</div>
          </div>
          <div>
            <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em" data-i18n="hw_serial"></div>
            <div style="font-weight:600;margin-top:4px" class="mono">${dv.hardware.serial}</div>
          </div>
          <div>
            <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em" data-i18n="hw_imei"></div>
            <div style="font-weight:600;margin-top:4px" class="mono">${dv.hardware.imei}</div>
          </div>
          <div>
            <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em" data-i18n="hw_sim"></div>
            <div style="font-weight:600;margin-top:4px">${dv.hardware.sim}</div>
          </div>
          <div>
            <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em" data-i18n="hw_firmware"></div>
            <div style="font-weight:600;margin-top:4px" class="mono">${dv.hardware.firmware}</div>
          </div>
        </div>
      </div>
    </div>` : ''}

    <div class="section-grid grid-2">
      <div class="card">
        <div class="card-head"><h3 data-i18n="sessions_title"></h3></div>
        <div class="card-body no-pad">
          <table class="table">
            <thead><tr><th data-i18n="col_when"></th><th data-i18n="col_method"></th><th data-i18n="col_volume"></th><th data-i18n="col_amount"></th></tr></thead>
            <tbody>
              ${sessions.map(s => `
                <tr>
                  <td class="muted">${fmtAgo(s.ts)}</td>
                  <td>${s.method}</td>
                  <td>${s.volume} л</td>
                  <td style="font-weight:600">${fmtSum(s.amount)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3 data-i18n="events_title"></h3></div>
        <div class="card-body no-pad">
          <div class="alert-list">
            ${events.map(e => `
              <div class="alert-item sev-info">
                <div class="ico">${ICO.zap}</div>
                <div class="body">
                  <div class="title">${e.text}</div>
                  <div class="meta">${dv.id}</div>
                </div>
                <div class="time">${fmtAgo(e.ts)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function pageMap() {
  return `
    <div class="page-head">
      <div><h1 data-i18n="nav_map"></h1><div class="sub">${DATA.devices.length} ${t('nav_devices').toLowerCase()}</div></div>
      <div class="page-head-actions">
        <span class="pill pill-online">${t('online')}: ${DATA.devices.filter(d=>d.status==='online').length}</span>
        <span class="pill pill-fault">${t('fault')}: ${DATA.devices.filter(d=>d.status==='fault').length}</span>
        <span class="pill pill-warn">${t('warning')}: ${DATA.devices.filter(d=>d.status==='warn').length}</span>
        <span class="pill pill-offline">${t('offline')}: ${DATA.devices.filter(d=>d.status==='offline').length}</span>
      </div>
    </div>
    <div class="card" style="padding:8px"><div id="map" style="height:calc(100vh - 220px); min-height:480px"></div></div>
  `;
}

function pageAlerts() {
  const f = window.__alertFilter || 'all';
  const list = f === 'all' ? DATA.alerts : DATA.alerts.filter(a => a.sev === f);
  const counts = {
    all: DATA.alerts.length,
    critical: DATA.alerts.filter(a=>a.sev==='critical').length,
    warning: DATA.alerts.filter(a=>a.sev==='warning').length,
    info: DATA.alerts.filter(a=>a.sev==='info').length,
    success: DATA.alerts.filter(a=>a.sev==='success').length,
  };
  return `
    <div class="page-head">
      <div><h1 data-i18n="al_title"></h1><div class="sub" data-i18n="al_sub"></div></div>
      <div class="page-head-actions">
        <button class="btn btn-ghost btn-sm">${ICO.download}<span data-i18n="export"></span></button>
      </div>
    </div>
    <div class="filters">
      <span class="chip ${f==='all'?'active':''}" onclick="setAlertFilter('all')"><span data-i18n="all"></span><span class="count">${counts.all}</span></span>
      <span class="chip ${f==='critical'?'active':''}" onclick="setAlertFilter('critical')"><span data-i18n="sev_critical"></span><span class="count">${counts.critical}</span></span>
      <span class="chip ${f==='warning'?'active':''}" onclick="setAlertFilter('warning')"><span data-i18n="sev_warning"></span><span class="count">${counts.warning}</span></span>
      <span class="chip ${f==='info'?'active':''}" onclick="setAlertFilter('info')"><span data-i18n="sev_info"></span><span class="count">${counts.info}</span></span>
      <span class="chip ${f==='success'?'active':''}" onclick="setAlertFilter('success')"><span data-i18n="sev_success"></span><span class="count">${counts.success}</span></span>
    </div>
    <div class="card">
      <div class="card-body no-pad">
        <div class="alert-list">
          ${list.map(a => `
            <div class="alert-item sev-${a.sev}" onclick="goto('device/${a.device.id}')">
              <div class="ico">${ICO[a.icon] || ICO.alert}</div>
              <div class="body">
                <div class="title">${t(a.key)}</div>
                <div class="meta">${t(a.key + '_d')} · ${a.device.id} · ${a.device.city}, ${a.device.address}</div>
              </div>
              <div class="time">${fmtAgo(a.ts)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
function setAlertFilter(f) { window.__alertFilter = f; render(); }

function pageFinance() {
  const total = DATA.txs.filter(x=>x.status==='paid').reduce((s,x)=>s+x.amount, 0);
  const cnt = DATA.txs.length;
  const avg = Math.round(total / Math.max(1, cnt));
  return `
    <div class="page-head">
      <div><h1 data-i18n="fin_title"></h1><div class="sub" data-i18n="fin_sub"></div></div>
      <div class="page-head-actions">
        <div class="tabs">
          <span class="tab" data-i18n="yesterday"></span>
          <span class="tab active" data-i18n="today"></span>
          <span class="tab" data-i18n="week"></span>
          <span class="tab" data-i18n="month"></span>
          <span class="tab" data-i18n="year"></span>
        </div>
        <button class="btn btn-primary btn-sm">${ICO.download}<span data-i18n="export"></span></button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi kpi-revenue">
        <div class="head"><span class="title" data-i18n="fin_total"></span><div class="ico">${ICO.coin}</div></div>
        <div class="value">${fmtSum(total)}</div>
      </div>
      <div class="kpi kpi-tx">
        <div class="head"><span class="title" data-i18n="fin_tx"></span><div class="ico">${ICO.zap}</div></div>
        <div class="value">${fmtInt(cnt)}</div>
      </div>
      <div class="kpi kpi-online">
        <div class="head"><span class="title" data-i18n="fin_avg"></span><div class="ico">${ICO.tag}</div></div>
        <div class="value">${fmtSum(avg)}</div>
      </div>
      <div class="kpi kpi-alert">
        <div class="head"><span class="title">QR / Card / Cash / Coin</span><div class="ico">${ICO.banknote}</div></div>
        <div class="value" style="font-size:18px">${DATA.paymentSplit.qr}% · ${DATA.paymentSplit.card}% · ${DATA.paymentSplit.cash}% · ${DATA.paymentSplit.coin}%</div>
      </div>
    </div>

    <div class="section-grid grid-2" style="margin-bottom:16px">
      <div class="card">
        <div class="card-head"><h3 data-i18n="chart_revenue"></h3></div>
        <div class="card-body"><canvas id="chartRevenue2" height="220"></canvas></div>
      </div>
      <div class="card">
        <div class="card-head"><h3 data-i18n="fin_split"></h3></div>
        <div class="card-body"><canvas id="chartPay2" height="240"></canvas></div>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h3 data-i18n="fin_table"></h3></div>
      <div class="card-body no-pad">
        <table class="table">
          <thead><tr><th data-i18n="tx_date"></th><th data-i18n="tx_device"></th><th data-i18n="tx_method"></th><th data-i18n="tx_amount"></th><th data-i18n="tx_status"></th></tr></thead>
          <tbody>
            ${DATA.txs.slice(0,30).map(x => `
              <tr>
                <td class="muted">${fmtAgo(x.ts)}</td>
                <td><b>${x.device.id}</b><div class="muted" style="font-size:12px">${x.device.city}</div></td>
                <td>${x.method}</td>
                <td style="font-weight:600">${fmtSum(x.amount)}</td>
                <td><span class="pill pill-${x.status==='paid'?'online':'fault'}">${t(x.status)}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function pageTasks() {
  const tasks = DATA.tasks;
  const sevMap = { high: 'fault', med: 'warn', low: 'info' };
  return `
    <div class="page-head">
      <div><h1 data-i18n="task_title"></h1><div class="sub" data-i18n="task_sub"></div></div>
      <div class="page-head-actions">
        <button class="btn btn-primary btn-sm">${ICO.plus}<span data-i18n="task_new"></span></button>
      </div>
    </div>
    <div class="section-grid grid-3">
      ${['open','progress','done'].map(st => `
        <div class="card">
          <div class="card-head">
            <h3>${t('task_status_'+st)}</h3>
            <span class="muted">${tasks.filter(t=>t.status===st).length}</span>
          </div>
          <div class="card-body no-pad">
            <div class="alert-list">
              ${tasks.filter(t=>t.status===st).map(tk => `
                <div class="alert-item sev-${sevMap[tk.priority]}">
                  <div class="ico">${ICO.task}</div>
                  <div class="body">
                    <div class="title">${tk.title}</div>
                    <div class="meta">${tk.device.id} · ${tk.device.city} · ${tk.tech}</div>
                  </div>
                  <div class="time">${fmtAgo(tk.createdAt)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function pageReports() {
  return `
    <div class="page-head">
      <div><h1 data-i18n="rep_title"></h1><div class="sub" data-i18n="rep_sub"></div></div>
    </div>
    <div class="section-grid grid-2">
      <div class="card">
        <div class="card-head">
          <h3 data-i18n="rep_revenue_period"></h3>
          <div class="row">
            <button class="btn btn-ghost btn-sm">${ICO.download}<span data-i18n="rep_export_xls"></span></button>
            <button class="btn btn-ghost btn-sm">${ICO.download}<span data-i18n="rep_export_pdf"></span></button>
          </div>
        </div>
        <div class="card-body"><canvas id="chartRevenue3" height="240"></canvas></div>
      </div>
      <div class="card">
        <div class="card-head"><h3 data-i18n="rep_devices_rank"></h3></div>
        <div class="card-body no-pad">
          <table class="table">
            <tbody>
              ${[...DATA.devices].sort((a,b)=>b.todayRevenue-a.todayRevenue).slice(0,10).map((dv,i) => `
                <tr onclick="goto('device/${dv.id}')">
                  <td style="width:32px;color:var(--text-mute);font-weight:700">${i+1}</td>
                  <td><b>${dv.name}</b><div class="muted" style="font-size:12px">${dv.city}</div></td>
                  <td style="text-align:right;font-weight:600">${fmtSum(dv.todayRevenue)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function pageUsers() {
  return `
    <div class="page-head">
      <div><h1 data-i18n="usr_title"></h1><div class="sub" data-i18n="usr_sub"></div></div>
      <div class="page-head-actions">
        <button class="btn btn-primary btn-sm">${ICO.plus}<span data-i18n="usr_add"></span></button>
      </div>
    </div>
    <div class="card">
      <div class="card-body no-pad">
        <table class="table">
          <thead><tr><th data-i18n="col_name"></th><th data-i18n="col_role"></th><th data-i18n="col_phone"></th><th data-i18n="col_devices"></th><th data-i18n="col_last_login"></th></tr></thead>
          <tbody>
            ${DATA.users.map(u => `
              <tr>
                <td><div class="row"><div class="user-chip" style="padding:0;cursor:default"><div class="avatar">${u.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div></div><b>${u.name}</b></div></td>
                <td><span class="pill pill-info">${roleLabel(u.role)}</span></td>
                <td class="mono">${u.phone}</td>
                <td>${u.devices}</td>
                <td class="muted">${u.last}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function pageSettings() {
  return `
    <div class="page-head">
      <div><h1 data-i18n="set_title"></h1><div class="sub" data-i18n="set_sub"></div></div>
    </div>
    <div class="section-grid grid-2">
      <div class="card">
        <div class="card-head"><h3 data-i18n="set_profile"></h3></div>
        <div class="card-body">
          <div class="form-row">
            <label data-i18n="col_name"></label>
            <input class="input" value="${getPhone()}" readonly>
          </div>
          <div class="form-row">
            <label data-i18n="col_role"></label>
            <input class="input" value="${roleLabel(getRole())}" readonly>
          </div>
          <button class="btn btn-ghost" onclick="logout()">${ICO.power}<span data-i18n="set_logout"></span></button>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3 data-i18n="set_notif"></h3></div>
        <div class="card-body">
          <label style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
            <span data-i18n="set_notif_push"></span>
            <input type="checkbox" checked>
          </label>
          <label style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
            <span data-i18n="set_notif_telegram"></span>
            <input type="checkbox" checked>
          </label>
          <label style="display:flex;align-items:center;justify-content:space-between;padding:10px 0">
            <span data-i18n="set_notif_sms"></span>
            <input type="checkbox">
          </label>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3 data-i18n="set_lang"></h3></div>
        <div class="card-body">
          <div class="lang-toggle">
            <button class="${getLang()==='ru'?'active':''}" onclick="switchLang('ru')">Русский</button>
            <button class="${getLang()==='uz'?'active':''}" onclick="switchLang('uz')">O‘zbekcha</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3 data-i18n="set_password"></h3></div>
        <div class="card-body">
          <div class="form-row"><label>${t('password_label')}</label><input type="password" class="input" placeholder="••••••••"></div>
          <button class="btn btn-primary" data-i18n="save"></button>
        </div>
      </div>
    </div>
  `;
}

// ---------- Router ----------
function getRoute() {
  const h = location.hash.replace('#', '');
  if (!h) return { name: 'dashboard' };
  const parts = h.split('/');
  return { name: parts[0], param: parts[1] };
}
function goto(path) {
  location.hash = '#' + path;
}

function render() {
  const route = getRoute();
  let html;
  switch (route.name) {
    case 'dashboard': html = pageDashboard(); break;
    case 'devices': html = pageDevices(); break;
    case 'device': html = pageDevice(route.param); break;
    case 'map': html = pageMap(); break;
    case 'alerts': html = pageAlerts(); break;
    case 'finance': html = pageFinance(); break;
    case 'tasks': html = pageTasks(); break;
    case 'reports': html = pageReports(); break;
    case 'users': html = pageUsers(); break;
    case 'settings': html = pageSettings(); break;
    default: html = pageDashboard();
  }
  const root = document.getElementById('app-root');
  root.innerHTML = `
    ${buildSidebar()}
    <div class="main">
      ${buildTopbar()}
      <div class="content">${html}</div>
    </div>
    <div class="toast-host" id="toastHost"></div>
  `;
  // Highlight active nav
  document.querySelectorAll('[data-route]').forEach(a => {
    if (a.dataset.route === route.name) a.classList.add('active');
  });
  applyI18n(root);

  // Charts
  setTimeout(() => {
    if (document.getElementById('chartRevenue')) renderRevenueChart('chartRevenue');
    if (document.getElementById('chartRevenue2')) renderRevenueChart('chartRevenue2');
    if (document.getElementById('chartRevenue3')) renderRevenueChart('chartRevenue3');
    if (document.getElementById('chartPay')) renderPayChart('chartPay');
    if (document.getElementById('chartPay2')) renderPayChart('chartPay2');
    if (document.getElementById('map')) renderMap();
  }, 40);
}

// ---------- Charts ----------
function renderRevenueChart(id) {
  const ctx = document.getElementById(id).getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 220);
  grad.addColorStop(0, 'rgba(0, 212, 255, 0.35)');
  grad.addColorStop(1, 'rgba(0, 212, 255, 0)');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: DATA.labels14,
      datasets: [{
        label: t('revenue'),
        data: DATA.revenueSeries,
        borderColor: '#00d4ff',
        backgroundColor: grad,
        borderWidth: 2.5,
        tension: 0.35,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { backgroundColor: '#131826', borderColor: '#2a3142', borderWidth: 1 } },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#6b7488' } },
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7488', callback: v => (v/1000) + 'K' } },
      }
    }
  });
}
function renderPayChart(id) {
  const ctx = document.getElementById(id).getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [t('pay_qr'), t('pay_card'), t('pay_cash'), t('pay_coin')],
      datasets: [{
        data: [DATA.paymentSplit.qr, DATA.paymentSplit.card, DATA.paymentSplit.cash, DATA.paymentSplit.coin],
        backgroundColor: ['#00d4ff', '#4f7cff', '#00d27a', '#a78bfa'],
        borderWidth: 0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { position: 'bottom', labels: { color: '#a4adc1', usePointStyle: true, padding: 14 } },
        tooltip: { backgroundColor: '#131826', borderColor: '#2a3142', borderWidth: 1 }
      }
    }
  });
}

// ---------- Map ----------
function renderMap() {
  const el = document.getElementById('map');
  if (!el || !window.L) return;
  if (window.__map) { window.__map.remove(); }
  const map = L.map(el, { zoomControl: true, attributionControl: false }).setView([41.5, 67.5], 6);
  // dark tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);
  DATA.devices.forEach(d => {
    const cls = d.status === 'warn' ? 'warn' : d.status;
    const icon = L.divIcon({ className: '', html: `<div class="marker ${cls}"></div>`, iconSize: [26, 26], iconAnchor: [13, 13] });
    const m = L.marker([d.lat, d.lng], { icon }).addTo(map);
    m.bindPopup(`
      <h5>${d.name}</h5>
      <div class="p">${d.city}, ${d.address}</div>
      <div class="p mono" style="margin-top:4px">${d.id}</div>
      <div style="margin-top:8px"><span class="pill pill-${cls}">${t(d.status === 'warn' ? 'warning' : d.status)}</span></div>
      <div style="margin-top:6px"><b>${fmtSum(d.todayRevenue)}</b> · ${d.todayTx} тх</div>
    `);
    m.on('click', () => {});
    m.on('popupopen', () => {
      setTimeout(() => {
        document.querySelectorAll('.leaflet-popup-content').forEach(p => {
          p.style.cursor = 'pointer';
          p.onclick = () => goto('device/' + d.id);
        });
      }, 50);
    });
  });
  window.__map = map;
}

// ---------- Toast / Notifications ----------
function toast(message, sev = 'sev-info', title = '') {
  const host = document.getElementById('toastHost');
  if (!host) return;
  const sevKey = sev.replace('sev-', '');
  const iconMap = { critical: 'alert', warning: 'alert', success: 'check', info: 'bell' };
  const div = document.createElement('div');
  div.className = `toast ${sev}`;
  div.innerHTML = `
    <div class="ico">${ICO[iconMap[sevKey]] || ICO.bell}</div>
    <div class="body">
      <div class="title">${title || (sevKey==='critical'?t('sev_critical'):sevKey==='warning'?t('sev_warning'):sevKey==='success'?t('sev_success'):t('sev_info'))}</div>
      <div class="msg">${message}</div>
    </div>
    <span class="close" onclick="this.parentElement.remove()">×</span>
  `;
  host.appendChild(div);
  setTimeout(() => div.remove(), 6000);
}

// ---------- Realtime simulation ----------
function startRealtime() {
  const evs = [
    { msg: t('al_jam') + ' — WM-0007', sev: 'sev-critical', title: t('al_jam') },
    { msg: t('al_filter') + ' — WM-0012', sev: 'sev-warning', title: t('al_filter') },
    { msg: t('al_collect') + ' — WM-0003', sev: 'sev-info', title: t('al_collect') },
    { msg: t('al_resolved') + ' — WM-0007', sev: 'sev-success', title: t('al_resolved') },
  ];
  let i = 0;
  setInterval(() => {
    const e = evs[i % evs.length];
    toast(e.msg, e.sev, e.title);
    i++;
  }, 22000);
}

// ---------- Global search ----------
function onGlobalSearch(q) {
  // no-op for demo, but could filter routes
}

// ---------- Bootstrap ----------
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  if (!isLoggedIn()) { location.href = './index.html'; return; }
  render();
  // welcome toast
  setTimeout(() => toast('WM-0007: ' + t('al_jam'), 'sev-critical', t('sev_critical')), 1500);
  startRealtime();
});
