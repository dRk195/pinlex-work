/* ===================== PINLEX.WORK STUDIO ENGINE ===================== */

const STORAGE_KEY = 'pinlex-studio-v3';
const ICON_CDN = (slug, color = 'white') => `https://cdn.simpleicons.org/${slug}/${color}`;

const clean = v => String(v || '').trim().replace(/^@/, '');
const isUrl = v => /^https?:\/\//i.test(String(v || '').trim());
const withHttp = v => {
  const s = String(v || '').trim();
  if (!s) return '';
  if (/^(https?:\/\/|mailto:|tel:)/i.test(s)) return s;
  return 'https://' + s.replace(/^\/+/, '');
};
const looksLikeDomain = v => /^[\w-]+\.[a-z]{2,}(\/|$)/i.test(String(v || '').trim());

/* ===================== СОЦСЕТИ И МЕССЕНДЖЕРЫ ===================== */
const SOCIALS = [
  { id: 'telegram',  label: 'Telegram',      slug: 'telegram',      color: '#26A5E4', ph: '@username',        url: v => 'https://t.me/' + clean(v) },
  { id: 'whatsapp',  label: 'WhatsApp',      slug: 'whatsapp',      color: '#25D366', ph: '+7 777 000-00-00', url: v => 'https://wa.me/' + v.replace(/\D/g, '') },
  { id: 'instagram', label: 'Instagram',     slug: 'instagram',     color: '#E4405F', ph: '@username',        url: v => 'https://instagram.com/' + clean(v) },
  { id: 'tiktok',    label: 'TikTok',        slug: 'tiktok',        color: '#111111', ph: '@username',        url: v => 'https://www.tiktok.com/@' + clean(v) },
  { id: 'youtube',   label: 'YouTube',       slug: 'youtube',       color: '#FF0000', ph: '@channel',         url: v => 'https://youtube.com/@' + clean(v) },
  { id: 'linkedin',  label: 'LinkedIn',      slug: 'linkedin',      color: '#0A66C2', ph: 'username / ссылка',url: v => 'https://linkedin.com/in/' + clean(v) },
  { id: 'vk',        label: 'ВКонтакте',     slug: 'vk',            color: '#0077FF', ph: 'id или ссылка',    url: v => 'https://vk.com/' + clean(v) },
  { id: 'github',    label: 'GitHub',        slug: 'github',        color: '#24292e', ph: 'username',         url: v => 'https://github.com/' + clean(v) },
  { id: 'behance',   label: 'Behance',       slug: 'behance',       color: '#1769FF', ph: 'username',         url: v => 'https://behance.net/' + clean(v) },
  { id: 'dribbble',  label: 'Dribbble',      slug: 'dribbble',      color: '#EA4C89', ph: 'username',         url: v => 'https://dribbble.com/' + clean(v) },
  { id: 'threads',   label: 'Threads',       slug: 'threads',       color: '#111111', ph: '@username',        url: v => 'https://www.threads.net/@' + clean(v) },
  { id: 'x',         label: 'X (Twitter)',   slug: 'x',             color: '#111111', ph: '@username',        url: v => 'https://x.com/' + clean(v) },
  { id: 'facebook',  label: 'Facebook',      slug: 'facebook',      color: '#0866FF', ph: 'username',         url: v => 'https://facebook.com/' + clean(v) },
  { id: 'discord',   label: 'Discord',       slug: 'discord',       color: '#5865F2', ph: 'код приглашения',  url: v => 'https://discord.gg/' + clean(v) },
  { id: 'twitch',    label: 'Twitch',        slug: 'twitch',        color: '#9146FF', ph: 'username',         url: v => 'https://twitch.tv/' + clean(v) },
  { id: 'spotify',   label: 'Spotify',       slug: 'spotify',       color: '#1DB954', ph: 'ссылка',           url: v => withHttp(v) },
];

/* ===================== 12 ДИЗАЙНЕРСКИХ ТЕМ ===================== */
const THEMES = {
  midnight: {
    name: 'Индиго Tech',
    page: '#090b12',
    card: '#121624',
    text: '#f8fafc',
    muted: '#94a3b8',
    accent: '#6366f1',
    onAccent: '#ffffff',
    btn: 'rgba(255,255,255,0.06)',
    line: 'rgba(255,255,255,0.12)',
    band: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)',
  },
  classic: {
    name: 'Классика Gold',
    page: '#e9e5dc',
    card: '#0f1c2e',
    text: '#ffffff',
    muted: 'rgba(255,255,255,0.68)',
    accent: '#d4af37',
    onAccent: '#0f1c2e',
    btn: 'rgba(255,255,255,0.07)',
    line: 'rgba(255,255,255,0.16)',
    band: 'linear-gradient(135deg, #dfbd69 0%, #926f34 100%)',
  },
  light: {
    name: 'Чистая Светлая',
    page: '#eef2f6',
    card: '#ffffff',
    text: '#0f172a',
    muted: '#64748b',
    accent: '#2563eb',
    onAccent: '#ffffff',
    btn: '#f1f5f9',
    line: '#e2e8f0',
    band: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)',
  },
  creamGold: {
    name: 'Молочный Люкс',
    page: '#f4efe6',
    card: '#fffdf9',
    text: '#1f1a14',
    muted: '#786e60',
    accent: '#c29b40',
    onAccent: '#ffffff',
    btn: '#f6f1e7',
    line: '#e8dfd1',
    band: 'linear-gradient(135deg, #d7b76e 0%, #a58238 100%)',
  },
  graphite: {
    name: 'Графит Pro',
    page: '#121214',
    card: '#1c1c1f',
    text: '#f4f4f5',
    muted: '#a1a1aa',
    accent: '#ffffff',
    onAccent: '#111113',
    btn: 'rgba(255,255,255,0.07)',
    line: 'rgba(255,255,255,0.14)',
    band: 'linear-gradient(135deg, #3f3f46 0%, #18181b 100%)',
  },
  emerald: {
    name: 'Изумруд',
    page: '#0b1915',
    card: '#0f2822',
    text: '#ecfdf5',
    muted: '#86efac',
    accent: '#10b981',
    onAccent: '#052e16',
    btn: 'rgba(255,255,255,0.07)',
    line: 'rgba(255,255,255,0.15)',
    band: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
  },
  cyberpunk: {
    name: 'Кибер Неон',
    page: '#06040d',
    card: '#110b22',
    text: '#ffffff',
    muted: '#c4b5fd',
    accent: '#00f5d4',
    onAccent: '#06040d',
    btn: 'rgba(247, 37, 133, 0.14)',
    line: 'rgba(0, 245, 212, 0.3)',
    band: 'linear-gradient(135deg, #f72585 0%, #7209b7 50%, #4cc9f0 100%)',
  },
  sunset: {
    name: 'Теплый Закат',
    page: '#1a0e12',
    card: '#27131a',
    text: '#fff1f2',
    muted: '#fda4af',
    accent: '#fb7185',
    onAccent: '#1a0e12',
    btn: 'rgba(255,255,255,0.08)',
    line: 'rgba(255,255,255,0.15)',
    band: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
  },
  ocean: {
    name: 'Глубокий Океан',
    page: '#07131d',
    card: '#0c2132',
    text: '#f0f9ff',
    muted: '#7dd3fc',
    accent: '#38bdf8',
    onAccent: '#07131d',
    btn: 'rgba(255,255,255,0.07)',
    line: 'rgba(56, 189, 248, 0.2)',
    band: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
  },
  lavender: {
    name: 'Нежная Лаванда',
    page: '#f3effb',
    card: '#ffffff',
    text: '#2e1065',
    muted: '#7e69ab',
    accent: '#8b5cf6',
    onAccent: '#ffffff',
    btn: '#f5f3ff',
    line: '#ddd6fe',
    band: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
  },
  brutal: {
    name: 'Нео-Брутализм',
    page: '#fef08a',
    card: '#ffffff',
    text: '#000000',
    muted: '#374151',
    accent: '#ff5470',
    onAccent: '#ffffff',
    btn: '#fde047',
    line: '#000000',
    band: 'linear-gradient(135deg, #ff5470 0%, #fde047 100%)',
  },
  terracotta: {
    name: 'Кофе & Эстетика',
    page: '#ebe3db',
    card: '#261c16',
    text: '#f7f2ed',
    muted: '#cbbab0',
    accent: '#e09f67',
    onAccent: '#261c16',
    btn: 'rgba(255,255,255,0.08)',
    line: 'rgba(255,255,255,0.16)',
    band: 'linear-gradient(135deg, #c87d55 0%, #7f4f34 100%)',
  },
};

/* ===================== ШРИФТОВЫЕ ПАРЫ ===================== */
const FONTS = {
  modern:    { head: "'Manrope', sans-serif",           body: "'Inter', sans-serif" },
  editorial: { head: "'Playfair Display', Georgia, serif", body: "'Inter', sans-serif" },
  geometric: { head: "'Montserrat', sans-serif",        body: "'Montserrat', sans-serif" },
  bold:      { head: "'Unbounded', sans-serif",         body: "'Inter', sans-serif" },
  luxury:    { head: "'Cormorant Garamond', Georgia, serif", body: "'Montserrat', sans-serif" },
  mono:      { head: "'JetBrains Mono', monospace",     body: "'Inter', sans-serif" },
};

/* ===================== НАЧАЛЬНОЕ СОСТОЯНИЕ ===================== */
const EMPTY = {
  firstName: 'Шахмурат',
  lastName: 'Сайдуллаев',
  role: 'Junior Web-coder',
  company: 'pinlex.work',
  location: 'Казахстан',
  statusText: 'Открыт к новым проектам и заказам',
  verified: true,
  showStatusDot: true,
  bio: 'Junior Web-coder. Создаю современные, быстрые и удобные веб-сайты, лендинги и интерактивные онлайн-визитки.',
  phone: '+77754536966',
  phone2: '+77019392122',
  email: 'shakhmurat.s@gmail.com',
  website: 'pinlex.work',
  mapUrl: '',
  ctaLabel: 'Написать в Telegram',
  ctaUrl: 'https://t.me/ssshakh195',
  showSaveVcf: true,
  enableExchange: true,
  avatar: '',
  cover: '',
  theme: 'midnight',
  layout: 'centered',
  avatarShape: 'circle',
  fontPair: 'modern',
  buttonStyle: 'filled',
  borderRadius: 16,
  bgPattern: 'glow',
  socialDisplay: 'list',
  useCustomColors: false,
  customAccent: '#6366f1',
  customCardBg: '#131620',
  customText: '#ffffff',
  customPageBg: '#090b10',
  socials: {
    telegram: 'https://t.me/ssshakh195',
    whatsapp: '+77754536966',
    instagram: '@cv_bng',
  },
  customLinks: [
    { icon: '💻', title: 'Основной телефон: +7 775 453-69-66', subtitle: 'Позвонить или написать в WhatsApp', url: 'tel:+77754536966', highlight: true },
    { icon: '📱', title: 'Доп. телефон: +7 701 939-21-22', subtitle: 'Всегда на связи для звонков', url: 'tel:+77019392122', highlight: false },
    { icon: '✉️', title: 'Email: shakhmurat.s@gmail.com', subtitle: 'Написать на почту', url: 'mailto:shakhmurat.s@gmail.com', highlight: false },
  ],
  stats: [
    { value: 'HTML/CSS', label: 'чистая вёрстка' },
    { value: 'JS / Web', label: 'интерактив' },
    { value: '100%', label: 'адаптивность' },
  ],
  services: [
    { title: 'Создание онлайн-визитки / лендинга', price: 'Договорная', desc: 'Современный адаптивный сайт для телефона и ПК с уникальным дизайном и быстрой загрузкой.' },
    { title: 'Вёрстка и доработка веб-страниц', price: 'Договорная', desc: 'Аккуратная вёрстка по макету, настройка анимаций, форм и мобильной версии.' },
  ],
  faqs: [
    { q: 'Как со мной быстрее всего связаться?', a: 'Пишите в Telegram (@ssshakh195) или WhatsApp (+7 775 453-69-66) — отвечаю максимально оперативно!' },
  ],
};

/* ===================== ГОТОВЫЕ ШАБЛОНЫ В 1 КЛИК ===================== */
const PRESETS = {
  designer: structuredClone(EMPTY),
  business: {
    ...structuredClone(EMPTY),
    firstName: 'Нурлан',
    lastName: 'Сабилаев',
    role: 'Управляющий партнер & Инвестор',
    company: 'Apex Capital Group',
    location: 'Алматы, Казахстан',
    statusText: 'На связи по рабочим вопросам',
    bio: 'Стратегический консалтинг, развитие B2B-проектов и инвестиции в технологические стартапы Центральной Азии.',
    theme: 'classic',
    layout: 'centered',
    fontPair: 'editorial',
    buttonStyle: 'elevated',
    borderRadius: 14,
    bgPattern: 'none',
    socialDisplay: 'list',
    ctaLabel: 'Назначить деловую встречу',
    ctaUrl: 'https://wa.me/77770000000',
    socials: { whatsapp: '+77770000000', telegram: 'nurlan_biz', linkedin: 'nurlan' },
    customLinks: [
      { icon: '📊', title: 'Инвестиционный меморандум 2026', subtitle: 'Критерии отбора проектов и презентация фонда', url: 'https://pinlex.work', highlight: true },
    ],
    stats: [
      { value: '12 лет', label: 'в управлении' },
      { value: '$15M+', label: 'привлеченных инвестиций' },
      { value: '25+', label: 'партнерских компаний' },
    ],
    services: [
      { title: 'Стратегическая сессия для бизнеса', price: '90 000 ₸', desc: 'Разбор бизнес-модели, точек роста и финансовой архитектуры за 2 часа.' },
    ],
    faqs: [
      { q: 'Как отправить презентацию стартапа?', a: 'Отправьте Pitch Deck в Telegram или на почту с пометкой «Инвестиции».' },
    ],
  },
  creator: {
    ...structuredClone(EMPTY),
    firstName: 'Алина',
    lastName: 'Рэй',
    role: 'UGC-креатор & Видеомейкер',
    company: '500K+ подписчиков',
    location: 'Алматы • Дубай',
    statusText: 'Беру бренды на съемку в этом месяце',
    bio: 'Снимаю вирусные Reels и TikTok для брендов одежды, косметики и ресторанов. Охваты более 10 млн в месяц!',
    theme: 'cyberpunk',
    layout: 'hero',
    avatarShape: 'squircle',
    fontPair: 'bold',
    buttonStyle: 'glass',
    borderRadius: 22,
    bgPattern: 'glow',
    socialDisplay: 'grid',
    ctaLabel: 'Заказать рекламу / Коллаборацию',
    ctaUrl: 'https://t.me/alina_creator',
    socials: { instagram: 'alina.ray', tiktok: 'alina.ray', youtube: 'alinaray', telegram: 'alina_creator' },
    customLinks: [
      { icon: '🎬', title: 'Шоурил и примеры роликов', subtitle: 'Смотреть портфолио рекламных интеграций', url: 'https://pinlex.work', highlight: true },
      { icon: '📈', title: 'Статистика и медиакит', subtitle: 'Аудитория, охваты и прайс на интеграции', url: 'https://pinlex.work', highlight: false },
    ],
    stats: [
      { value: '540K', label: 'подписчиков' },
      { value: '12M+', label: 'просмотров / мес' },
      { value: '60+', label: 'брендов-клиентов' },
    ],
    services: [
      { title: 'Пакет 3 UGC-ролика под ключ', price: '120 000 ₸', desc: 'Сценарий, съемка на iPhone 16 Pro со светом, динамичный монтаж.' },
      { title: 'Рекламный Reels в моем аккаунте', price: '180 000 ₸', desc: 'Нативная интеграция с отметкой вашего аккаунта и ссылкой в сторис.' },
    ],
    faqs: [
      { q: 'Работаете ли вы по бартеру?', a: 'Работаю по коммерческому прайсу, частичный бартер возможен только для крупных пакетов съемок.' },
    ],
  },
  beauty: {
    ...structuredClone(EMPTY),
    firstName: 'Эльмира',
    lastName: 'Касымова',
    role: 'Топ-стилист & Визажист',
    company: 'AURA Beauty Studio',
    location: 'Алматы, пр. Достык 132',
    statusText: 'Открыта запись на этот месяц',
    bio: 'Создаю безупречные свадебные и вечерние образы. Обучение макияжу «Для себя» и повышение квалификации мастеров.',
    theme: 'creamGold',
    layout: 'centered',
    avatarShape: 'arch',
    fontPair: 'luxury',
    buttonStyle: 'filled',
    borderRadius: 18,
    bgPattern: 'none',
    socialDisplay: 'list',
    mapUrl: 'Алматы, Достык 132',
    ctaLabel: 'Записаться онлайн в WhatsApp',
    ctaUrl: 'https://wa.me/77771112233',
    socials: { instagram: 'elmira.mua', whatsapp: '+77771112233', telegram: 'elmira_mua' },
    customLinks: [
      { icon: '✨', title: 'Галерея работ и отзывы невест', subtitle: 'Более 500 счастливых клиенток', url: 'https://instagram.com', highlight: true },
    ],
    stats: [
      { value: '6 лет', label: 'опыта работы' },
      { value: '800+', label: 'созданных образов' },
      { value: '100%', label: 'люкс-косметика' },
    ],
    services: [
      { title: 'Вечерний образ (Макияж + Локоны)', price: '35 000 ₸', desc: 'Стойкий макияж и укладка за 1.5 часа в 4 руки. Ресницы включены.' },
      { title: 'Свадебный образ с репетицией', price: '75 000 ₸', desc: 'Пробный образ в студии + выезд к невесте в день свадьбы.' },
      { title: 'Индивидуальный курс «Макияж для себя»', price: '50 000 ₸', desc: 'Разбор вашей косметички, дневной и вечерний макияж на практике.' },
    ],
    faqs: [
      { q: 'Возможен ли ранний выезд на дом?', a: 'Да, выезд возможен с 05:00 утра по всему городу.' },
    ],
  },
};

/* ===================== CSS ВИЗИТКИ (ДЛЯ ПРЕВЬЮ И АВТОНОМНОГО ЭКСПОРТА) ===================== */
const CARD_CSS = `
.vc {
  width: 100%;
  max-width: 440px;
  background: var(--card);
  color: var(--text);
  border-radius: calc(var(--radius) + 10px);
  padding: 0 22px 24px;
  font-family: var(--font-body);
  box-shadow: 0 28px 65px rgba(0,0,0,0.32);
  overflow: hidden;
  line-height: 1.5;
  position: relative;
  border: 1px solid var(--line);
}
.vc * { box-sizing: border-box; }

/* Фоновые паттерны */
.vc--pattern-glow::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 240px;
  height: 240px;
  background: var(--accent);
  filter: blur(95px);
  opacity: 0.25;
  pointer-events: none;
}
.vc--pattern-dots {
  background-image: radial-gradient(var(--line) 1px, transparent 1px);
  background-size: 16px 16px;
}
.vc--pattern-grid {
  background-image: linear-gradient(to right, var(--line) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--line) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Верхняя панель действий на самой визитке (QR + Поделиться) */
.vc__topbar {
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  gap: 8px;
  z-index: 5;
}
.vc__icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.18s, background 0.18s;
}
.vc__icon-btn:hover {
  transform: scale(1.07);
  background: rgba(0, 0, 0, 0.58);
}

/* Баннер шапки */
.vc__band {
  height: 118px;
  margin: 0 -22px;
  background: var(--band);
  background-size: cover;
  background-position: center;
  position: relative;
}
.vc--layout-minimal .vc__band {
  height: 26px;
  background: transparent;
}
.vc--layout-hero .vc__band {
  height: 175px;
}

/* Шапка и выравнивание */
.vc__header {
  text-align: center;
  position: relative;
  z-index: 2;
}
.vc--layout-modern .vc__header {
  text-align: left;
}

/* Аватар */
.vc__avatar {
  width: 116px;
  height: 116px;
  margin: -58px auto 14px;
  border: 4px solid var(--card);
  background: var(--accent);
  color: var(--onAccent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-head);
  font-size: 2.3rem;
  font-weight: 700;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.22);
}
.vc--layout-modern .vc__avatar {
  margin: -48px 0 12px;
  width: 100px;
  height: 100px;
}
.vc--layout-minimal .vc__avatar {
  margin-top: 8px;
}
.vc__avatar--circle { border-radius: 50%; }
.vc__avatar--squircle { border-radius: 28%; }
.vc__avatar--arch { border-radius: 99px 99px 22px 22px; }
.vc__avatar--square { border-radius: 8px; }
.vc__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Бейдж статуса */
.vc__status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 12px;
  border-radius: 99px;
  background: var(--btn);
  border: 1px solid var(--line);
  font-size: 0.74rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 10px;
}
.vc__status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}

/* Имя и верификация */
.vc__name {
  font-family: var(--font-head);
  font-size: 1.65rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
}
.vc__verified {
  display: inline-flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--onAccent);
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  flex-shrink: 0;
}

.vc__role {
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 600;
  margin: 6px 0 0;
  letter-spacing: 0.03em;
}
.vc__meta {
  color: var(--muted);
  font-size: 0.78rem;
  margin: 4px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
.vc--layout-modern .vc__meta {
  justify-content: flex-start;
}
.vc__bio {
  color: var(--muted);
  font-size: 0.89rem;
  margin: 12px 0 0;
  white-space: pre-line;
  word-break: break-word;
}

/* Быстрые круглые иконки контактов */
.vc__quick-contacts {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
  flex-wrap: wrap;
}
.vc--layout-modern .vc__quick-contacts {
  justify-content: flex-start;
}
.vc__qbtn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: var(--btn);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s;
}
.vc__qbtn:hover {
  background: var(--accent);
  color: var(--onAccent);
  border-color: var(--accent);
  transform: translateY(-2px);
}
.vc__qbtn svg {
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Главные кнопки действий (CTA + Сохранить контакт) */
.vc__actions {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 18px;
}
.vc__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 13px 16px;
  border-radius: var(--radius);
  background: var(--accent);
  color: var(--onAccent);
  font-weight: 700;
  font-size: 0.93rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0,0,0,0.18);
  transition: transform 0.18s, filter 0.18s;
}
.vc__cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.06);
}
.vc__save-row {
  display: flex;
  gap: 8px;
}
.vc__save {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 11px 14px;
  border-radius: var(--radius);
  background: var(--btn);
  color: var(--text);
  border: 1px solid var(--line);
  font-weight: 600;
  font-size: 0.86rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.18s;
}
.vc__save:hover {
  border-color: var(--accent);
}

/* Блок цифр и фактов (Stats) */
.vc__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
  gap: 8px;
  margin-top: 18px;
}
.vc__stat {
  padding: 11px 8px;
  border-radius: var(--radius);
  background: var(--btn);
  border: 1px solid var(--line);
  text-align: center;
}
.vc__stat-val {
  font-family: var(--font-head);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1.2;
}
.vc__stat-lbl {
  font-size: 0.72rem;
  color: var(--muted);
  margin-top: 2px;
}

/* Заголовки секций внутри визитки */
.vc__sec-title {
  font-family: var(--font-head);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin: 22px 0 10px;
  text-align: left;
  font-weight: 700;
}

/* Варианты стилей карточек/кнопок */
.vc--btn-glass .vc__card-elem {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.vc--btn-outline .vc__card-elem {
  background: transparent;
  border: 1.5px solid var(--line);
}
.vc--btn-brutal .vc__card-elem,
.vc--btn-brutal .vc__cta,
.vc--btn-brutal .vc__stat {
  border: 2px solid var(--text);
  box-shadow: 4px 4px 0 var(--text);
}
.vc--btn-elevated .vc__card-elem {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.16);
}

/* Собственные кнопки и ссылки */
.vc__custom-links {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 18px;
}
.vc__clink {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border-radius: var(--radius);
  background: var(--btn);
  border: 1px solid var(--line);
  color: var(--text);
  text-decoration: none;
  text-align: left;
  transition: transform 0.18s, border-color 0.18s;
}
.vc__clink:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}
.vc__clink--highlight {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}
.vc__clink-icon {
  width: 38px;
  height: 38px;
  border-radius: calc(var(--radius) * 0.65);
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}
.vc__clink-body {
  flex: 1;
  min-width: 0;
}
.vc__clink-title {
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
}
.vc__clink-sub {
  font-size: 0.76rem;
  color: var(--muted);
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Витрина услуг / Прайс-лист */
.vc__services {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vc__service {
  padding: 14px;
  border-radius: var(--radius);
  background: var(--btn);
  border: 1px solid var(--line);
  text-align: left;
}
.vc__service-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}
.vc__service-title {
  font-weight: 700;
  font-size: 0.92rem;
  margin: 0;
}
.vc__service-price {
  font-weight: 700;
  font-size: 0.82rem;
  color: var(--accent);
  background: rgba(255,255,255,0.06);
  padding: 2px 8px;
  border-radius: 99px;
  white-space: nowrap;
}
.vc__service-desc {
  font-size: 0.8rem;
  color: var(--muted);
  margin: 6px 0 10px;
}
.vc__service-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
}
.vc__service-btn:hover {
  text-decoration: underline;
}

/* Соцсети (Список, Bento-плитка 2 колонки, Иконки) */
.vc__socials--list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.vc__socials--grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.vc__socials--icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.vc__slink {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 9px 12px 9px 9px;
  border-radius: var(--radius);
  background: var(--btn);
  border: 1px solid var(--line);
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.88rem;
  transition: transform 0.18s, border-color 0.18s;
}
.vc__slink:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}
.vc__slink-icon {
  width: 36px;
  height: 36px;
  border-radius: calc(var(--radius) * 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.vc__slink-icon img {
  width: 18px;
  height: 18px;
}
.vc__slink-text {
  flex: 1;
  text-align: left;
  min-width: 0;
}
.vc__slink-text small {
  display: block;
  color: var(--muted);
  font-size: 0.73rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vc__sicon-only {
  width: 46px;
  height: 46px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.18s;
}
.vc__sicon-only:hover {
  transform: translateY(-3px) scale(1.05);
}
.vc__sicon-only img {
  width: 22px;
  height: 22px;
}

/* FAQ Аккордеон */
.vc__faqs {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}
.vc__faq {
  border-radius: var(--radius);
  background: var(--btn);
  border: 1px solid var(--line);
  padding: 10px 14px;
}
.vc__faq summary {
  font-weight: 600;
  font-size: 0.86rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.vc__faq summary::-webkit-details-marker { display: none; }
.vc__faq summary::after {
  content: '+';
  color: var(--accent);
  font-weight: 700;
  font-size: 1.05rem;
}
.vc__faq[open] summary::after {
  content: '−';
}
.vc__faq-ans {
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--muted);
  border-top: 1px solid var(--line);
  padding-top: 8px;
}

/* Подвал визитки */
.vc__footer {
  margin-top: 22px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  text-align: center;
}
.vc__brand-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.74rem;
  color: var(--muted);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.18s;
}
.vc__brand-link:hover {
  opacity: 1;
  color: var(--accent);
}

/* Встроенное модальное окно обратного обмена контактами и QR внутри визитки */
.vc-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.72);
  backdrop-filter: blur(5px);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 999;
}
.vc-overlay.open {
  display: flex;
}
.vc-popup {
  background: var(--card);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 25px 60px rgba(0,0,0,0.55);
  font-family: var(--font-body);
}
.vc-popup h3 {
  margin: 0 0 6px;
  font-family: var(--font-head);
  font-size: 1.15rem;
}
.vc-popup p {
  margin: 0 0 14px;
  font-size: 0.82rem;
  color: var(--muted);
}
.vc-popup input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--btn);
  color: var(--text);
  font-family: inherit;
  font-size: 0.88rem;
}
.vc-popup__btns {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
`;

const ICONS = {
  phone: '<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  email: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  website: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  map: '<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  qr: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM18 18h3v3h-3z"/></svg>',
  vcard: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
};

/* ===================== УТИЛИТЫ ===================== */
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = sel => document.querySelector(sel);

function socialUrl(s, value) {
  const v = String(value || '').trim();
  if (isUrl(v)) return v;
  if (looksLikeDomain(v) && s.id !== 'whatsapp') return withHttp(v);
  return s.url(v);
}

function displayHandle(s, value) {
  const v = String(value || '').trim();
  if (isUrl(v) || looksLikeDomain(v)) return v.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
  if (s.id === 'whatsapp') return v;
  return '@' + clean(v);
}

function fullName(d) {
  return [d.firstName, d.lastName].map(x => String(x || '').trim()).filter(Boolean).join(' ');
}

function initials(d) {
  const f = String(d.firstName || '').trim()[0] || '';
  const l = String(d.lastName || '').trim()[0] || '';
  return (f + l).toUpperCase() || 'P';
}

function resolveMapHref(val) {
  const v = String(val || '').trim();
  if (!v) return '';
  if (isUrl(v)) return v;
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(v);
}

function resolveOrderHref(d, serviceTitle) {
  const text = encodeURIComponent(`Здравствуйте! Интересует услуга: «${serviceTitle}»`);
  if (d.socials?.whatsapp?.trim()) {
    const num = d.socials.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${num}?text=${text}`;
  }
  if (d.socials?.telegram?.trim()) {
    return `https://t.me/${clean(d.socials.telegram)}?text=${text}`;
  }
  if (d.ctaUrl?.trim()) return withHttp(d.ctaUrl);
  if (d.phone?.trim()) return `tel:${d.phone.replace(/[^\d+]/g, '')}`;
  return '#';
}

function buildVcf(d) {
  const e = s => String(s || '').replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${e(d.lastName?.trim())};${e(d.firstName?.trim())};;;`,
    `FN:${e(fullName(d) || 'Контакт')}`,
  ];
  if (d.company?.trim()) lines.push(`ORG:${e(d.company.trim())}`);
  if (d.role?.trim()) lines.push(`TITLE:${e(d.role.trim())}`);
  if (d.phone?.trim()) lines.push(`TEL;TYPE=CELL,PREF:${d.phone.trim()}`);
  if (d.phone2?.trim()) lines.push(`TEL;TYPE=CELL:${d.phone2.trim()}`);
  if (d.email?.trim()) lines.push(`EMAIL:${d.email.trim()}`);
  if (d.website?.trim()) lines.push(`URL:${withHttp(d.website)}`);
  if (d.location?.trim()) lines.push(`ADR;TYPE=WORK:;;${e(d.location.trim())};;;;`);
  SOCIALS.forEach(s => {
    const v = d.socials?.[s.id];
    if (v && v.trim()) lines.push(`X-SOCIALPROFILE;TYPE=${s.label}:${socialUrl(s, v)}`);
  });
  if (d.bio?.trim()) lines.push(`NOTE:${e(d.bio.trim())}`);
  lines.push('END:VCARD');
  return lines.join('\r\n');
}

function getEffectiveTheme(d) {
  const base = THEMES[d.theme] || THEMES.midnight;
  if (!d.useCustomColors) return base;
  return {
    ...base,
    accent: d.customAccent || base.accent,
    card: d.customCardBg || base.card,
    text: d.customText || base.text,
    page: d.customPageBg || base.page,
    band: `linear-gradient(135deg, ${d.customAccent}, ${d.customCardBg})`,
  };
}

function themeVars(d) {
  const t = getEffectiveTheme(d);
  const f = FONTS[d.fontPair] || FONTS.modern;
  const r = Number(d.borderRadius ?? 16);
  return [
    `--card:${t.card}`,
    `--text:${t.text}`,
    `--muted:${t.muted}`,
    `--accent:${t.accent}`,
    `--onAccent:${t.onAccent}`,
    `--btn:${t.btn}`,
    `--line:${t.line}`,
    `--band:${t.band}`,
    `--font-head:${f.head}`,
    `--font-body:${f.body}`,
    `--radius:${r}px`,
  ].join(';');
}

/* ===================== РЕНДЕР ВИЗИТКИ ===================== */
function renderCard(d, { preview = false } = {}) {
  const name = fullName(d);
  const avatarContent = d.avatar
    ? `<img src="${d.avatar}" alt="${esc(name)}">`
    : esc(initials(d));

  const coverStyle = d.cover ? `style="background-image:url('${d.cover}')"` : '';

  // Мета-строка (Компания + Локация)
  const metaParts = [];
  if (d.company?.trim()) metaParts.push(`<span>🏢 ${esc(d.company.trim())}</span>`);
  if (d.location?.trim()) metaParts.push(`<span>📍 ${esc(d.location.trim())}</span>`);

  // Быстрые контакты
  const qContacts = [];
  if (d.phone?.trim()) qContacts.push(`<a class="vc__qbtn vc__card-elem" href="tel:${esc(d.phone.replace(/[^\d+]/g, ''))}" title="Основной: ${esc(d.phone.trim())}">${ICONS.phone}</a>`);
  if (d.phone2?.trim()) qContacts.push(`<a class="vc__qbtn vc__card-elem" href="tel:${esc(d.phone2.replace(/[^\d+]/g, ''))}" title="Доп. номер: ${esc(d.phone2.trim())}">${ICONS.phone}</a>`);
  if (d.email?.trim()) qContacts.push(`<a class="vc__qbtn vc__card-elem" href="mailto:${esc(d.email.trim())}" title="Email: ${esc(d.email.trim())}">${ICONS.email}</a>`);
  if (d.website?.trim()) qContacts.push(`<a class="vc__qbtn vc__card-elem" href="${esc(withHttp(d.website))}" target="_blank" rel="noopener" title="Сайт">${ICONS.website}</a>`);
  if (d.mapUrl?.trim()) qContacts.push(`<a class="vc__qbtn vc__card-elem" href="${esc(resolveMapHref(d.mapUrl))}" target="_blank" rel="noopener" title="На карте">${ICONS.map}</a>`);

  // Цифры и факты
  const validStats = (d.stats || []).filter(st => st.value?.trim() || st.label?.trim());
  const statsHtml = validStats.length
    ? `<div class="vc__stats">${validStats.map(st => `
        <div class="vc__stat vc__card-elem">
          <div class="vc__stat-val">${esc(st.value)}</div>
          <div class="vc__stat-lbl">${esc(st.label)}</div>
        </div>`).join('')}</div>`
    : '';

  // Произвольные кнопки
  const validLinks = (d.customLinks || []).filter(l => l.title?.trim());
  const customLinksHtml = validLinks.length
    ? `<div class="vc__custom-links">${validLinks.map(l => `
        <a class="vc__clink vc__card-elem ${l.highlight ? 'vc__clink--highlight' : ''}" href="${esc(withHttp(l.url || '#'))}" target="_blank" rel="noopener">
          <span class="vc__clink-icon">${esc(l.icon || '🔗')}</span>
          <span class="vc__clink-body">
            <span class="vc__clink-title">${esc(l.title)}</span>
            ${l.subtitle?.trim() ? `<span class="vc__clink-sub">${esc(l.subtitle)}</span>` : ''}
          </span>
          <span style="color:var(--muted)">›</span>
        </a>`).join('')}</div>`
    : '';

  // Витрина услуг
  const validServices = (d.services || []).filter(s => s.title?.trim());
  const servicesHtml = validServices.length
    ? `<div class="vc__sec-title">Услуги и прайс</div>
       <div class="vc__services">${validServices.map(s => `
        <div class="vc__service vc__card-elem">
          <div class="vc__service-top">
            <h4 class="vc__service-title">${esc(s.title)}</h4>
            ${s.price?.trim() ? `<span class="vc__service-price">${esc(s.price)}</span>` : ''}
          </div>
          ${s.desc?.trim() ? `<p class="vc__service-desc">${esc(s.desc)}</p>` : ''}
          <a class="vc__service-btn" href="${esc(resolveOrderHref(d, s.title))}" target="_blank" rel="noopener">Заказать услугу →</a>
        </div>`).join('')}</div>`
    : '';

  // Соцсети
  const activeSocials = SOCIALS.filter(s => (d.socials?.[s.id] || '').trim());
  let socialsHtml = '';
  if (activeSocials.length) {
    const mode = d.socialDisplay || 'list';
    if (mode === 'icons') {
      socialsHtml = `<div class="vc__sec-title" style="text-align:center">Соцсети и мессенджеры</div>
        <div class="vc__socials--icons">${activeSocials.map(s => {
          const v = d.socials[s.id];
          return `<a class="vc__sicon-only" style="background:${s.color}" href="${esc(socialUrl(s, v))}" target="_blank" rel="noopener" title="${esc(s.label)}">
            <img src="${ICON_CDN(s.slug)}" alt="${esc(s.label)}">
          </a>`;
        }).join('')}</div>`;
    } else {
      socialsHtml = `<div class="vc__sec-title">Соцсети и мессенджеры</div>
        <div class="vc__socials--${mode}">${activeSocials.map(s => {
          const v = d.socials[s.id];
          return `<a class="vc__slink vc__card-elem" href="${esc(socialUrl(s, v))}" target="_blank" rel="noopener">
            <span class="vc__slink-icon" style="background:${s.color}"><img src="${ICON_CDN(s.slug)}" alt=""></span>
            <span class="vc__slink-text">${esc(s.label)}<small>${esc(displayHandle(s, v))}</small></span>
          </a>`;
        }).join('')}</div>`;
    }
  }

  // FAQ
  const validFaqs = (d.faqs || []).filter(f => f.q?.trim() && f.a?.trim());
  const faqsHtml = validFaqs.length
    ? `<div class="vc__sec-title">Частые вопросы</div>
       <div class="vc__faqs">${validFaqs.map(f => `
        <details class="vc__faq vc__card-elem">
          <summary>${esc(f.q)}</summary>
          <div class="vc__faq-ans">${esc(f.a)}</div>
        </details>`).join('')}</div>`
    : '';

  // Кнопки CTA и VCF
  const vcfHref = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(buildVcf(d));
  const fileName = (name || 'contact').replace(/[^\wа-яё\s-]/gi, '').trim().replace(/\s+/g, '_') + '.vcf';

  const ctaBtn = d.ctaLabel?.trim()
    ? `<a class="vc__cta" href="${esc(withHttp(d.ctaUrl || '#'))}" target="_blank" rel="noopener">${esc(d.ctaLabel)}</a>`
    : '';

  const saveVcfBtn = d.showSaveVcf
    ? `<a class="vc__save vc__card-elem" href="${vcfHref}" download="${esc(fileName)}" data-action="save-vcf">
        ${ICONS.vcard}
        <span>Сохранить контакт</span>
       </a>`
    : '';

  const exchangeBtn = d.enableExchange
    ? `<button type="button" class="vc__save vc__card-elem" data-action="open-exchange" title="Отправить свой контакт владельцу">
        <span>👋 Оставить свой</span>
       </button>`
    : '';

  const classes = [
    'vc',
    `vc--layout-${d.layout || 'centered'}`,
    `vc--btn-${d.buttonStyle || 'filled'}`,
    `vc--pattern-${d.bgPattern || 'none'}`,
  ].join(' ');

  return `<div class="${classes}" style="${themeVars(d)}">
    <div class="vc__topbar">
      <button type="button" class="vc__icon-btn" data-action="card-qr" title="Показать QR-код визитки">${ICONS.qr}</button>
    </div>

    <div class="vc__band" ${coverStyle}></div>

    <div class="vc__header">
      <div class="vc__avatar vc__avatar--${d.avatarShape || 'circle'}">${avatarContent}</div>

      ${d.statusText?.trim() ? `
        <div class="vc__status">
          ${d.showStatusDot ? '<span class="vc__status-dot"></span>' : ''}
          <span>${esc(d.statusText.trim())}</span>
        </div>` : ''}

      <div>
        <h1 class="vc__name">
          <span>${esc(name || (preview ? 'Ваше Имя' : ''))}</span>
          ${d.verified ? '<span class="vc__verified" title="Подтвержденный профиль">✓</span>' : ''}
        </h1>
      </div>

      ${d.role?.trim() ? `<p class="vc__role">${esc(d.role.trim())}</p>` : ''}
      ${metaParts.length ? `<div class="vc__meta">${metaParts.join('')}</div>` : ''}
      ${d.bio?.trim() ? `<p class="vc__bio">${esc(d.bio.trim())}</p>` : ''}
      ${qContacts.length ? `<div class="vc__quick-contacts">${qContacts.join('')}</div>` : ''}
    </div>

    ${(ctaBtn || saveVcfBtn || exchangeBtn) ? `
      <div class="vc__actions">
        ${ctaBtn}
        ${(saveVcfBtn || exchangeBtn) ? `<div class="vc__save-row">${saveVcfBtn}${exchangeBtn}</div>` : ''}
      </div>` : ''}

    ${statsHtml}
    ${customLinksHtml}
    ${servicesHtml}
    ${socialsHtml}
    ${faqsHtml}

    <div class="vc__footer">
      <a class="vc__brand-link" href="${preview ? '#' : location.pathname}">
        <span>⚡ Создано на <strong>pinlex.work</strong> — сделать свою визитку</span>
      </a>
    </div>
  </div>`;
}

/* ===================== КОДИРОВАНИЕ ССЫЛКИ И АВТОНОМНЫЙ HTML ===================== */
function encodeData(d) {
  const { avatar, cover, ...rest } = d;
  const json = JSON.stringify(rest);
  return btoa(unescape(encodeURIComponent(json))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeData(str) {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(decodeURIComponent(escape(atob(b64))));
}

function getShareUrl(d) {
  const base = location.href.split('#')[0].split('?')[0];
  return `${base}#card=${encodeData(d)}`;
}

function getQrImageUrl(url, size = 240) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=8&data=${encodeURIComponent(url)}`;
}

function buildStandaloneHtml(d) {
  const t = getEffectiveTheme(d);
  const title = fullName(d) || 'Цифровая визитка';
  const ownerWa = (d.socials?.whatsapp || d.phone || '').replace(/\D/g, '');
  const ownerTg = clean(d.socials?.telegram || '');

  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)} — pinlex.work</title>
<meta name="description" content="${esc([d.role, d.company, d.bio].filter(Boolean).join(' • '))}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(d.role || d.bio || 'Цифровая визитка')}">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Manrope:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=Unbounded:wght@500;700&display=swap" rel="stylesheet">
<style>
html,body{margin:0;padding:0}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:28px 14px;box-sizing:border-box;background:${t.page}}
${CARD_CSS}
</style>
</head>
<body>
${renderCard(d)}

<!-- Модальное окно обратного обмена контактами -->
<div class="vc-overlay" id="exchangeOverlay" style="${themeVars(d)}">
  <div class="vc-popup">
    <h3>Поделитесь контактом в ответ 👋</h3>
    <p>Оставьте свои данные, чтобы ${esc(d.firstName || 'владелец визитки')} тоже сохранил ваш номер</p>
    <input type="text" id="exName" placeholder="Ваше имя и фамилия">
    <input type="tel" id="exPhone" placeholder="Ваш телефон">
    <input type="text" id="exNote" placeholder="Компания или комментарий">
    <div class="vc-popup__btns">
      <button type="button" class="vc__save" onclick="document.getElementById('exchangeOverlay').classList.remove('open')">Позже</button>
      <button type="button" class="vc__cta" id="exSendBtn" style="padding:10px">Отправить</button>
    </div>
  </div>
</div>

<!-- Модальное окно QR-кода -->
<div class="vc-overlay" id="qrOverlay" style="${themeVars(d)}">
  <div class="vc-popup">
    <h3>QR-код визитки</h3>
    <p>${esc(title)}</p>
    <div style="background:#fff;padding:14px;border-radius:16px;display:inline-block;margin-bottom:12px">
      <img id="standaloneQrImg" width="200" height="200" alt="QR">
    </div>
    <div>
      <button type="button" class="vc__save" style="width:100%" onclick="document.getElementById('qrOverlay').classList.remove('open')">Закрыть</button>
    </div>
  </div>
</div>

<script>
document.addEventListener('click', function(e) {
  const qrBtn = e.target.closest('[data-action="card-qr"]');
  if (qrBtn) {
    const img = document.getElementById('standaloneQrImg');
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=' + encodeURIComponent(location.href);
    document.getElementById('qrOverlay').classList.add('open');
  }
  const exBtn = e.target.closest('[data-action="open-exchange"]');
  if (exBtn) {
    document.getElementById('exchangeOverlay').classList.add('open');
  }
  const vcfBtn = e.target.closest('[data-action="save-vcf"]');
  if (vcfBtn && ${Boolean(d.enableExchange)}) {
    setTimeout(function() {
      document.getElementById('exchangeOverlay').classList.add('open');
    }, 900);
  }
});
document.getElementById('exSendBtn')?.addEventListener('click', function() {
  const n = document.getElementById('exName').value.trim();
  const p = document.getElementById('exPhone').value.trim();
  const c = document.getElementById('exNote').value.trim();
  if (!n && !p) return alert('Укажите имя или телефон');
  const msg = encodeURIComponent('Здравствуйте! Делюсь своим контактом с вашей визитки pinlex.work:\\nИмя: ' + n + '\\nТелефон: ' + p + (c ? '\\nИнфо: ' + c : ''));
  const wa = '${esc(ownerWa)}';
  const tg = '${esc(ownerTg)}';
  if (wa) location.href = 'https://wa.me/' + wa + '?text=' + msg;
  else if (tg) location.href = 'https://t.me/' + tg + '?text=' + msg;
  else alert('Контакт записан!');
});
</script>
</body>
</html>`;
}

/* ===================== РЕЖИМ ПРОСМОТРА ГОСТЕМ ПО ССЫЛКЕ #card=... ===================== */
function tryViewMode() {
  const m = location.hash.match(/^#card=(.+)$/);
  if (!m) return false;
  try {
    const decoded = decodeData(m[1]);
    const d = {
      ...structuredClone(EMPTY),
      ...decoded,
      socials: { ...(decoded.socials || {}) },
    };
    const t = getEffectiveTheme(d);
    document.title = `${fullName(d) || 'Визитка'} — pinlex.work`;
    const style = document.createElement('style');
    style.textContent = CARD_CSS + `
      body {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 28px 14px;
        background: ${t.page};
      }
      .guest-bar {
        position: fixed;
        bottom: 14px;
        right: 14px;
        z-index: 50;
      }
    `;
    document.head.appendChild(style);
    document.body.innerHTML = renderCard(d);
    bindCardInteractions(d);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

/* ===================== ИНТЕРАКТИВ ВНУТРИ ПРЕВЬЮ И ГОСТЕВОГО РЕЖИМА ===================== */
function bindCardInteractions(d) {
  document.addEventListener('click', e => {
    const qrBtn = e.target.closest('[data-action="card-qr"]');
    if (qrBtn) {
      e.preventDefault();
      openQrModal(d);
    }

    const exBtn = e.target.closest('[data-action="open-exchange"]');
    if (exBtn) {
      e.preventDefault();
      promptExchangeContact(d);
    }

    const vcfBtn = e.target.closest('[data-action="save-vcf"]');
    if (vcfBtn && d.enableExchange) {
      setTimeout(() => promptExchangeContact(d), 900);
    }
  });
}

function promptExchangeContact(d) {
  const guestName = prompt(`Поделитесь своим контактом с ${d.firstName || 'владельцем визитки'}!\nВаше Имя и Телефон:`);
  if (!guestName) return;
  const msg = encodeURIComponent(`Здравствуйте! Делюсь своим контактом через вашу визитку pinlex.work:\n${guestName}`);
  const wa = (d.socials?.whatsapp || d.phone || '').replace(/\D/g, '');
  const tg = clean(d.socials?.telegram || '');
  if (wa) window.open(`https://wa.me/${wa}?text=${msg}`, '_blank');
  else if (tg) window.open(`https://t.me/${tg}?text=${msg}`, '_blank');
  else toast('Спасибо! Контакт подготовлен к отправке.');
}

/* ===================== СОСТОЯНИЕ И ХРАНИЛИЩЕ ===================== */
let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...structuredClone(EMPTY),
        ...parsed,
        socials: { ...(parsed.socials || {}) },
        customLinks: Array.isArray(parsed.customLinks) ? parsed.customLinks : structuredClone(EMPTY.customLinks),
        stats: Array.isArray(parsed.stats) ? parsed.stats : structuredClone(EMPTY.stats),
        services: Array.isArray(parsed.services) ? parsed.services : structuredClone(EMPTY.services),
        faqs: Array.isArray(parsed.faqs) ? parsed.faqs : structuredClone(EMPTY.faqs),
      };
    }
  } catch {}
  return structuredClone(EMPTY);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    toast('Внимание: фото слишком большое для локального кэша');
  }
}

/* ===================== ОБНОВЛЕНИЕ ПРЕДПРОСМОТРА И UI ===================== */
function update() {
  const t = getEffectiveTheme(state);
  const stage = $('#stage');
  if (stage) {
    stage.style.background = t.page;
    stage.innerHTML = renderCard(state, { preview: true });
  }

  // Превью аватара и обложки
  const ap = $('#avatarPreview');
  if (ap) {
    ap.classList.toggle('has-img', !!state.avatar);
    ap.style.backgroundImage = state.avatar ? `url(${state.avatar})` : '';
  }
  const cp = $('#coverPreview');
  if (cp) {
    cp.classList.toggle('has-img', !!state.cover);
    cp.style.backgroundImage = state.cover ? `url(${state.cover})` : '';
  }

  // Активная тема
  document.querySelectorAll('.theme-card').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === state.theme);
  });

  // Значение радиуса
  const rv = $('#radiusVal');
  if (rv) rv.textContent = `${state.borderRadius ?? 16}px`;

  // Блок своих цветов
  const ccb = $('#customColorsBox');
  if (ccb) ccb.classList.toggle('enabled', !!state.useCustomColors);

  saveState();
}

function syncInputsFromState() {
  document.querySelectorAll('[data-field]').forEach(el => {
    const key = el.dataset.field;
    if (state[key] !== undefined) el.value = state[key];
  });
  document.querySelectorAll('[data-check]').forEach(el => {
    const key = el.dataset.check;
    el.checked = Boolean(state[key]);
  });
  document.querySelectorAll('[data-social]').forEach(el => {
    const id = el.dataset.social;
    el.value = state.socials?.[id] || '';
  });

  renderDynamicLists();
}

/* ===================== ДИНАМИЧЕСКИЕ СПИСКИ В РЕДАКТОРЕ ===================== */
function renderDynamicLists() {
  // 1. Произвольные кнопки
  const clContainer = $('#customLinksList');
  if (clContainer) {
    if (!state.customLinks.length) {
      clContainer.innerHTML = `<div class="dyn-item__empty">Нет дополнительных кнопок. Нажмите «+ Добавить кнопку», чтобы добавить портфолио, прайс или сайт.</div>`;
    } else {
      clContainer.innerHTML = state.customLinks.map((item, idx) => `
        <div class="dyn-item">
          <div class="dyn-item__row">
            <input type="text" style="width:52px;text-align:center" value="${esc(item.icon || '🔗')}" placeholder="🔥" data-cl-idx="${idx}" data-cl-prop="icon" title="Эмодзи или иконка">
            <input type="text" style="flex:1" value="${esc(item.title)}" placeholder="Заголовок кнопки (например: Моё портфолио)" data-cl-idx="${idx}" data-cl-prop="title">
            <button type="button" class="btn btn--danger btn--xs" data-cl-remove="${idx}" title="Удалить">✕</button>
          </div>
          <div class="dyn-item__row">
            <input type="text" style="flex:1" value="${esc(item.subtitle || '')}" placeholder="Подзаголовок (необязательно)" data-cl-idx="${idx}" data-cl-prop="subtitle">
            <input type="text" style="flex:1" value="${esc(item.url || '')}" placeholder="https://..." data-cl-idx="${idx}" data-cl-prop="url">
            <label class="switch" title="Выделить рамкой">
              <input type="checkbox" ${item.highlight ? 'checked' : ''} data-cl-idx="${idx}" data-cl-prop="highlight">
              <span class="switch__track"></span>
              <span class="switch__label">Акцент</span>
            </label>
          </div>
        </div>
      `).join('');
    }
  }

  // 2. Цифры и факты
  const stContainer = $('#statsList');
  if (stContainer) {
    if (!state.stats.length) {
      stContainer.innerHTML = `<div class="dyn-item__empty">Добавьте 2–3 ключевые цифры о вашем опыте.</div>`;
    } else {
      stContainer.innerHTML = state.stats.map((st, idx) => `
        <div class="dyn-item">
          <div class="dyn-item__row">
            <input type="text" style="width:140px;font-weight:700" value="${esc(st.value)}" placeholder="7+ лет" data-st-idx="${idx}" data-st-prop="value">
            <input type="text" style="flex:1" value="${esc(st.label)}" placeholder="опыта в индустрии" data-st-idx="${idx}" data-st-prop="label">
            <button type="button" class="btn btn--danger btn--xs" data-st-remove="${idx}">✕</button>
          </div>
        </div>
      `).join('');
    }
  }

  // 3. Услуги и прайс
  const svContainer = $('#servicesList');
  if (svContainer) {
    if (!state.services.length) {
      svContainer.innerHTML = `<div class="dyn-item__empty">Добавьте свои услуги с ценами — клиент сможет заказать их в 1 клик.</div>`;
    } else {
      svContainer.innerHTML = state.services.map((sv, idx) => `
        <div class="dyn-item">
          <div class="dyn-item__row">
            <input type="text" style="flex:1;font-weight:600" value="${esc(sv.title)}" placeholder="Название услуги" data-sv-idx="${idx}" data-sv-prop="title">
            <input type="text" style="width:140px" value="${esc(sv.price)}" placeholder="от 50 000 ₸" data-sv-idx="${idx}" data-sv-prop="price">
            <button type="button" class="btn btn--danger btn--xs" data-sv-remove="${idx}">✕</button>
          </div>
          <input type="text" value="${esc(sv.desc || '')}" placeholder="Краткое описание услуги и что входит в стоимость" data-sv-idx="${idx}" data-sv-prop="desc">
        </div>
      `).join('');
    }
  }

  // 4. FAQ
  const fqContainer = $('#faqList');
  if (fqContainer) {
    if (!state.faqs.length) {
      fqContainer.innerHTML = `<div class="dyn-item__empty">Добавьте ответы на частые вопросы клиентов.</div>`;
    } else {
      fqContainer.innerHTML = state.faqs.map((fq, idx) => `
        <div class="dyn-item">
          <div class="dyn-item__row">
            <input type="text" style="flex:1;font-weight:600" value="${esc(fq.q)}" placeholder="Вопрос (например: Как происходит оплата?)" data-fq-idx="${idx}" data-fq-prop="q">
            <button type="button" class="btn btn--danger btn--xs" data-fq-remove="${idx}">✕</button>
          </div>
          <input type="text" value="${esc(fq.a)}" placeholder="Ответ на вопрос" data-fq-idx="${idx}" data-fq-prop="a">
        </div>
      `).join('');
    }
  }
}

/* ===================== QR-КОД И ШЕРИНГ ===================== */
function openQrModal(d = state) {
  const modal = $('#qrModal');
  if (!modal) return;
  const url = getShareUrl(d);
  $('#qrImage').src = getQrImageUrl(url, 240);
  $('#qrName').textContent = fullName(d) || 'pinlex.work';
  $('#qrRole').textContent = d.role || '';
  modal.hidden = false;
}

async function copyShareLink() {
  if (!fullName(state)) return toast('Укажите хотя бы имя в профиле');
  const url = getShareUrl(state);
  try {
    await navigator.clipboard.writeText(url);
    toast('Ссылка на визитку скопирована в буфер обмена!');
  } catch {
    prompt('Скопируйте ссылку на вашу визитку:', url);
  }
}

/* ===================== ИНИЦИАЛИЗАЦИЯ КОНСТРУКТОРА ===================== */
function initStudio() {
  // 1. Поля соцсетей
  $('#socialsEditor').innerHTML = SOCIALS.map(s => `
    <label class="social-input" title="${s.label}">
      <span class="social-input__icon" style="background:${s.color}">
        <img src="${ICON_CDN(s.slug)}" alt="${s.label}">
      </span>
      <input type="text" data-social="${s.id}" placeholder="${s.label}: ${s.ph}">
    </label>
  `).join('');

  // 2. Карточки 12 тем
  $('#themesGrid').innerHTML = Object.entries(THEMES).map(([id, t]) => `
    <button type="button" class="theme-card" data-theme="${id}">
      <div class="theme-card__preview" style="background:${t.card}">
        <div class="theme-card__band" style="background:${t.band}"></div>
        <span class="theme-card__dot" style="background:${t.accent}"></span>
      </div>
      <span class="theme-card__name">${t.name}</span>
    </button>
  `).join('');

  // 3. Переключение вкладок
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      $(`#tab-${tab.dataset.tab}`)?.classList.add('active');
    });
  });

  // 4. Мобильное переключение Редактор / Предпросмотр
  document.querySelectorAll('[data-mobile-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-mobile-mode]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.classList.toggle('mobile-preview-active', btn.dataset.mobileMode === 'preview');
    });
  });

  // 5. Переключение рамки Смартфон / ПК
  document.querySelectorAll('.device-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const frame = $('#deviceFrame');
      frame.classList.toggle('device-frame--phone', btn.dataset.device === 'phone');
      frame.classList.toggle('device-frame--desktop', btn.dataset.device === 'desktop');
    });
  });

  // 6. Быстрые шаблоны (Presets)
  document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.dataset.preset;
      if (PRESETS[presetKey]) {
        state = structuredClone(PRESETS[presetKey]);
        syncInputsFromState();
        update();
        toast(`Применен шаблон «${btn.textContent.trim()}»`);
      }
    });
  });

  // 7. Слушатели стандартных полей
  document.querySelectorAll('[data-field]').forEach(el => {
    el.addEventListener('input', () => {
      state[el.dataset.field] = el.value;
      update();
    });
  });

  document.querySelectorAll('[data-check]').forEach(el => {
    el.addEventListener('change', () => {
      state[el.dataset.check] = el.checked;
      update();
    });
  });

  document.querySelectorAll('[data-social]').forEach(el => {
    el.addEventListener('input', () => {
      state.socials[el.dataset.social] = el.value;
      update();
    });
  });

  document.querySelectorAll('.theme-card').forEach(btn => {
    btn.addEventListener('click', () => {
      state.theme = btn.dataset.theme;
      update();
    });
  });

  // 8. Делегирование событий для динамических списков
  document.addEventListener('input', e => {
    const t = e.target;
    if (t.dataset.clIdx !== undefined) {
      const idx = Number(t.dataset.clIdx);
      const prop = t.dataset.clProp;
      state.customLinks[idx][prop] = t.type === 'checkbox' ? t.checked : t.value;
      update();
    } else if (t.dataset.stIdx !== undefined) {
      state.stats[Number(t.dataset.stIdx)][t.dataset.stProp] = t.value;
      update();
    } else if (t.dataset.svIdx !== undefined) {
      state.services[Number(t.dataset.svIdx)][t.dataset.svProp] = t.value;
      update();
    } else if (t.dataset.fqIdx !== undefined) {
      state.faqs[Number(t.dataset.fqIdx)][t.dataset.fqProp] = t.value;
      update();
    }
  });

  document.addEventListener('click', e => {
    const clRem = e.target.closest('[data-cl-remove]');
    if (clRem) {
      state.customLinks.splice(Number(clRem.dataset.clRemove), 1);
      renderDynamicLists();
      update();
    }
    const stRem = e.target.closest('[data-st-remove]');
    if (stRem) {
      state.stats.splice(Number(stRem.dataset.stRemove), 1);
      renderDynamicLists();
      update();
    }
    const svRem = e.target.closest('[data-sv-remove]');
    if (svRem) {
      state.services.splice(Number(svRem.dataset.svRemove), 1);
      renderDynamicLists();
      update();
    }
    const fqRem = e.target.closest('[data-fq-remove]');
    if (fqRem) {
      state.faqs.splice(Number(fqRem.dataset.fqRemove), 1);
      renderDynamicLists();
      update();
    }
    const closeM = e.target.closest('[data-close-modal]');
    if (closeM) {
      $(`#${closeM.dataset.closeModal}`).hidden = true;
    }
  });

  // Кнопки добавления блоков
  $('#addCustomLink').addEventListener('click', () => {
    state.customLinks.push({ icon: '🔗', title: 'Новая кнопка', subtitle: '', url: 'https://', highlight: false });
    renderDynamicLists();
    update();
  });

  $('#addStat').addEventListener('click', () => {
    if (state.stats.length >= 4) return toast('Максимум 4 карточки фактов');
    state.stats.push({ value: '100%', label: 'результат' });
    renderDynamicLists();
    update();
  });

  $('#addService').addEventListener('click', () => {
    state.services.push({ title: 'Консультация / Услуга', price: '25 000 ₸', desc: 'Описание того, что получает клиент.' });
    renderDynamicLists();
    update();
  });

  $('#addFaq').addEventListener('click', () => {
    state.faqs.push({ q: 'Новый вопрос?', a: 'Подробный ответ для клиента.' });
    renderDynamicLists();
    update();
  });

  // 9. Загрузка аватара и обложки
  $('#avatarInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) resizeImage(file, 360, 360).then(url => { state.avatar = url; update(); });
    e.target.value = '';
  });
  $('#avatarRemove').addEventListener('click', () => { state.avatar = ''; update(); });

  $('#coverInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) resizeImage(file, 720, 320).then(url => { state.cover = url; update(); });
    e.target.value = '';
  });
  $('#coverRemove').addEventListener('click', () => { state.cover = ''; update(); });

  // 10. Кнопки экспорта, QR и скачивания
  $('#btnShowQrModal').addEventListener('click', () => openQrModal(state));
  $('#exportOpenQr').addEventListener('click', () => openQrModal(state));
  $('#btnCopyLink').addEventListener('click', copyShareLink);
  $('#exportCopyLink').addEventListener('click', copyShareLink);
  $('#btnCopyLinkFromQr').addEventListener('click', copyShareLink);

  $('#btnPublishModal').addEventListener('click', () => {
    document.querySelector('[data-tab="settings"]').click();
  });

  $('#exportDownloadHtml').addEventListener('click', () => {
    if (!fullName(state)) return toast('Укажите хотя бы имя');
    const slug = fullName(state).replace(/\s+/g, '_').toLowerCase();
    downloadFile(`pinlex_${slug}.html`, buildStandaloneHtml(state), 'text/html');
    toast('Готовый HTML-сайт визитки скачан!');
  });

  $('#exportDownloadVcf').addEventListener('click', () => {
    if (!fullName(state)) return toast('Укажите хотя бы имя');
    const slug = fullName(state).replace(/\s+/g, '_');
    downloadFile(`${slug}.vcf`, buildVcf(state), 'text/vcard');
    toast('Файл контакта .VCF скачан');
  });

  $('#btnDownloadQr').addEventListener('click', async () => {
    const url = getQrImageUrl(getShareUrl(state), 600);
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `pinlex_qr_${(fullName(state) || 'card').replace(/\s+/g, '_')}.png`;
      a.click();
      toast('QR-код скачан в формате PNG');
    } catch {
      window.open(url, '_blank');
    }
  });

  $('#btnOpenFullscreenPreview').addEventListener('click', () => {
    window.open(getShareUrl(state), '_blank');
  });

  // 11. Экспорт и Импорт JSON проекта
  $('#btnExportJson').addEventListener('click', () => {
    const slug = (fullName(state) || 'project').replace(/\s+/g, '_').toLowerCase();
    downloadFile(`pinlex_${slug}.json`, JSON.stringify(state, null, 2), 'application/json');
    toast('Файл проекта .JSON сохранен');
  });

  $('#inputImportJson').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        state = { ...structuredClone(EMPTY), ...imported };
        syncInputsFromState();
        update();
        toast('Проект успешно загружен!');
      } catch {
        toast('Ошибка: неверный формат файла JSON');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  $('#btnResetAll').addEventListener('click', () => {
    if (!confirm('Сбросить все поля к пустому шаблону?')) return;
    state = {
      ...structuredClone(EMPTY),
      firstName: '',
      lastName: '',
      role: '',
      company: '',
      location: '',
      statusText: '',
      bio: '',
      phone: '',
      email: '',
      website: '',
      mapUrl: '',
      ctaLabel: '',
      ctaUrl: '',
      avatar: '',
      cover: '',
      socials: {},
      customLinks: [],
      stats: [],
      services: [],
      faqs: [],
    };
    syncInputsFromState();
    update();
    toast('Поля очищены');
  });

  bindCardInteractions(state);
}

/* ===================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===================== */
function resizeImage(file, maxW, maxH) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        c.width = maxW;
        c.height = maxH;
        const ratio = Math.max(maxW / img.width, maxH / img.height);
        const w = img.width * ratio;
        const h = img.height * ratio;
        c.getContext('2d').drawImage(img, (maxW - w) / 2, (maxH - h) / 2, w, h);
        resolve(c.toDataURL('image/jpeg', 0.86));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function downloadFile(name, content, type) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type: type + ';charset=utf-8' }));
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ===================== ЗАПУСК ===================== */
if (!tryViewMode()) {
  const style = document.createElement('style');
  style.textContent = CARD_CSS;
  document.head.appendChild(style);
  initStudio();
  syncInputsFromState();
  update();
}
