/* Av. Belinda Kılıç – Sprache (TR/EN), Menü, Animationen */
document.documentElement.classList.add('js');

/* ---------- Englische Texte (Türkisch steht direkt im HTML) ---------- */
const EN = {
  skip: 'Skip to content',
  brandSub: 'Law & Consultancy',
  navAbout: 'About',
  navAreas: 'Practice Areas',
  navProcess: 'Process',
  navContact: 'Contact',
  heroEyebrow: 'Antalya Bar Association · Muratpaşa / Antalya',
  heroAv: 'Attorney at Law',
  heroScript: 'Law & Consultancy',
  heroLead: 'Legal counsel and representation for individuals and businesses across a broad range of fields, including criminal, family, inheritance, real estate, employment and enforcement law.',
  btnWhatsapp: 'Message on WhatsApp',
  btnContact: 'Contact Details',
  cardBar: 'Bar',
  cardBarVal: 'Antalya Bar',
  cardReg: 'Reg. No',
  cardLang: 'Languages',
  cardLangVal: 'Turkish · English',
  aboutLabel: 'About',
  aboutTitle: 'Att. Belinda Kılıç',
  aboutP1: 'Belinda Kılıç graduated from Selçuk University Faculty of Law in 2022. She completed her legal traineeship at the İzmir Bar Association in 2023 and now practises as an independent attorney in Antalya, registered with the Antalya Bar Association.',
  aboutP2: 'Her office provides counsel and litigation services to individuals and businesses in many fields, including criminal, family, inheritance, real estate, employment, enforcement and contract law. In every case, she places importance on keeping clients informed clearly and in plain language.',
  tl1: 'Selçuk University Faculty of Law – Graduation',
  tl2: 'İzmir Bar Association – Completion of legal traineeship',
  tlNow: 'Today',
  tl3: 'Antalya Bar Association – Independent attorney (Reg. No: 10989)',
  areasLabel: 'Practice Areas',
  areasTitle: 'Main areas of legal support',
  a1t: 'Criminal Law',
  a1d: 'Defence and representation of suspects, defendants and victims during investigation and trial; legal assistance at statements and hearings.',
  a2t: 'Family Law & Divorce',
  a2d: 'Uncontested and contested divorce, custody, alimony, division of marital property, recognition of foreign judgments and protection orders.',
  a3t: 'Inheritance Law',
  a3d: 'Certificates of inheritance, wills, estate division, partition of co-ownership, reduction claims and renunciation of inheritance.',
  a4t: 'Real Estate & Tenancy Law',
  a4d: 'Title deed cancellation and registration, rent determination and eviction cases, condominium disputes, counsel on property purchases and sales.',
  a5t: 'Employment Law',
  a5d: 'Employee receivables, severance and notice pay, reinstatement claims, mediation and drafting of employment contracts.',
  a6t: 'Contract & Obligations Law',
  a6d: 'Drafting and reviewing contracts, debt collection and compensation claims, formal notices.',
  a7t: 'Enforcement & Bankruptcy Law',
  a7d: 'Enforcement proceedings with or without judgment, annulment of objections, negative declaratory actions, attachment and debt recovery.',
  a8t: 'Commercial & Consumer Law',
  a8d: 'Company formation and agreements, commercial disputes, consumer arbitration committee and consumer court proceedings.',
  a9t: 'Foreigners Law',
  a9d: 'Counsel for foreigners living in Türkiye on residence permits, property acquisition by foreigners and other legal matters.',
  procLabel: 'Process',
  procTitle: 'How does the legal process work?',
  s1t: 'Initial Consultation',
  s1d: 'In a meeting by phone, WhatsApp or at the office, your situation is heard and a preliminary legal assessment is made.',
  s2t: 'Case Review',
  s2d: 'Documents are reviewed and the possible course of action, deadlines and costs are explained transparently.',
  s3t: 'Follow-up & Updates',
  s3d: 'Throughout the case or transaction, you are kept regularly informed and your questions are answered at every stage.',
  contactLabel: 'Contact',
  contactTitle: 'For appointments and information',
  contactNote: 'Consultations are by appointment. You will receive a reply as soon as possible.',
  addrLabel: 'Address',
  phoneLabel: 'Phone',
  btnCall: 'Call Now',
  mapOpen: 'Open in Google Maps →',
  footerSub: 'Law & Consultancy · Antalya Bar · Reg. No: 10989',
  legalTitle: 'Legal Notice',
  legalText: 'This website has been prepared for informational purposes only, in accordance with the Turkish Attorneys’ Act No. 1136 and the Union of Turkish Bar Associations’ Professional Rules and Regulation on the Prohibition of Advertising. The information on this website does not constitute legal opinion or advice; please consult an attorney regarding your specific situation. Use of this website does not establish an attorney–client relationship.',
  kvkkTitle: 'Privacy (KVKK)',
  kvkkText: 'This website does not collect personal data through any form and does not use cookies. Your language preference is stored only in your own browser. Map and fonts are loaded via Google services. Information you share via WhatsApp, Facebook or phone is processed solely to assess your request, in accordance with the Turkish Personal Data Protection Law No. 6698 and the attorney’s duty of confidentiality.',
  rights: 'All rights reserved.',
  backTop: 'Back to top ↑',
};

const META = {
  tr: {
    title: 'Av. Belinda Kılıç | Hukuk ve Danışmanlık · Antalya',
    wa: 'Merhaba Av. Belinda Kılıç, randevu almak istiyorum.',
  },
  en: {
    title: 'Att. Belinda Kılıç | Law & Consultancy · Antalya',
    wa: 'Hello Ms. Kılıç, I would like to make an appointment.',
  },
};

const nodes = document.querySelectorAll('[data-i18n]');
const TR = {};
nodes.forEach(el => { TR[el.dataset.i18n] = el.innerHTML; });

function setLang(lang) {
  const dict = lang === 'en' ? EN : TR;
  nodes.forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  document.title = META[lang].title;
  document.querySelectorAll('[data-lang-btn]').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.langBtn === lang)));
  document.querySelectorAll('a[data-wa]').forEach(a => {
    a.href = 'https://wa.me/905079144378?text=' + encodeURIComponent(META[lang].wa);
  });
  try { localStorage.setItem('bk-lang', lang); } catch (e) { /* ignore */ }
}

let initial = 'tr';
const urlLang = new URLSearchParams(location.search).get('lang');
if (urlLang === 'en' || urlLang === 'tr') initial = urlLang;
else {
  try { initial = localStorage.getItem('bk-lang') || initial; } catch (e) { /* ignore */ }
}
if (initial === 'en') setLang('en');

document.querySelectorAll('[data-lang-btn]').forEach(b =>
  b.addEventListener('click', () => setLang(b.dataset.langBtn)));

/* ---------- Header beim Scrollen ---------- */
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobiles Menü ---------- */
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
function closeMenu() {
  nav.classList.remove('open');
  header.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
toggle.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  header.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* ---------- Einblenden beim Scrollen ---------- */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.08 + 's'; io.observe(el); });
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

/* ---------- Jahr im Footer ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
