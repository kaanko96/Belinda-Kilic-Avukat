/* Av. Belinda Kılıç – Sprachen (TR/EN/DA), Menü, Animationen
   Türkische Texte stehen direkt in index.html, Englisch und Dänisch hier. */
document.documentElement.classList.add('js');

const EN = {
  skip: 'Skip to content',
  brandSub: 'Law & Consultancy',
  navAbout: 'About', navAreas: 'Practice Areas', navAbroad: 'Clients Abroad', navProcess: 'Process', navContact: 'Contact',
  heroEyebrow: 'Antalya Bar Association · Muratpaşa / Antalya',
  heroAv: 'Attorney at Law',
  heroScript: 'Law & Consultancy',
  heroLead: 'Legal counsel and representation for individuals and businesses across a broad range of fields, including criminal, family, inheritance, real estate, employment and enforcement law. We also support Turkish citizens living abroad with their legal matters in Türkiye.',
  btnWhatsapp: 'Message on WhatsApp',
  btnAbroad: 'Living Abroad?',
  cardBar: 'Bar', cardBarVal: 'Antalya Bar', cardReg: 'Reg. No', cardLang: 'Languages', cardLangVal: 'Turkish · English',
  aboutLabel: 'About',
  aboutRole: 'Founding Attorney · Belinda Kılıç Law & Consultancy',
  aboutP1: 'Belinda Kılıç graduated from Selçuk University Faculty of Law in 2022. After completing her legal traineeship at the İzmir Bar Association in 2023, she founded her own office in Antalya and practises as an independent attorney registered with the Antalya Bar Association.',
  aboutP2: 'The office provides counsel and litigation services to individuals and businesses in a wide range of fields, including criminal, family and divorce, inheritance, real estate and tenancy, employment, enforcement and bankruptcy, commercial and contract law. Every step, from pre-litigation advice and contract drafting to mediation and court proceedings, is handled with care.',
  aboutP3: 'A significant part of her work involves the legal matters in Türkiye of Turkish citizens living abroad. She has assisted many clients living in Europe and elsewhere with the recognition and enforcement of foreign judgments, inheritance procedures and property disputes, often without them having to travel to Türkiye.',
  aboutP4: 'In every case, she places importance on keeping clients informed clearly and regularly, and on reliable communication within the rules of the profession and the duty of confidentiality. Consultations are available in Turkish and English.',
  tl1: 'Selçuk University Faculty of Law – Graduation',
  tl2: 'İzmir Bar Association – Completion of legal traineeship',
  tlNow: 'Today',
  tl3: 'Antalya Bar Association – Independent attorney (Reg. No: 10989)',
  misLabel: 'Mission',
  misText: 'To protect our clients’ rights and interests in line with the rule of law, with care and transparent communication, and to make legal processes understandable for everyone.',
  visLabel: 'Vision',
  visText: 'To be a principled, solution-oriented law office that clients in Türkiye and abroad can reach with confidence, regardless of distance.',
  v1t: 'Trust & Confidentiality', v1d: 'Everything you share is protected under the attorney’s duty of confidentiality.',
  v2t: 'Transparency', v2d: 'Process, deadlines and costs are explained clearly from the start.',
  v3t: 'Accessibility', v3d: 'Easy to reach by phone, WhatsApp and e-mail, including from abroad.',
  v4t: 'Diligence', v4d: 'Every case is prepared carefully, taking its specific circumstances into account.',
  quote: '“Justice is the foundation of the state.”',
  areasLabel: 'Practice Areas', areasTitle: 'Main areas of legal support',
  a1t: 'Criminal Law', a1d: 'Defence and representation of suspects, defendants and victims during investigation and trial; legal assistance at statements and hearings.',
  a2t: 'Family Law & Divorce', a2d: 'Uncontested and contested divorce, custody, alimony, division of marital property and protection orders.',
  a3t: 'Inheritance Law', a3d: 'Certificates of inheritance, wills, estate division, partition of co-ownership, reduction claims and renunciation of inheritance.',
  a4t: 'Recognition & Enforcement', a4d: 'Recognition and enforcement in Türkiye of divorce rulings and other judgments issued abroad, and their registration in the civil registry.',
  a5t: 'Real Estate & Tenancy Law', a5d: 'Title deed cancellation and registration, rent determination and eviction cases, condominium disputes, counsel on property purchases and sales.',
  a6t: 'Employment Law', a6d: 'Employee receivables, severance and notice pay, reinstatement claims, mediation and drafting of employment contracts.',
  a7t: 'Enforcement & Bankruptcy Law', a7d: 'Enforcement proceedings with or without judgment, annulment of objections, negative declaratory actions, attachment and debt recovery.',
  a8t: 'Contract, Commercial & Consumer Law', a8d: 'Drafting contracts, debt and compensation claims, commercial disputes, consumer arbitration committee and consumer court proceedings.',
  a9t: 'Foreigners Law', a9d: 'Counsel for foreigners living in Türkiye on residence permits, property acquisition by foreigners and other legal matters.',
  abLabel: 'For Those Living Abroad',
  abTitle: 'While you are away, your affairs in Türkiye are in safe hands',
  abP1: 'Cases and procedures in Türkiye of Turkish citizens living in Germany, Denmark, the Netherlands, Austria, France and other countries can often be handled with a single power of attorney, without you having to travel to Türkiye.',
  abP2: 'Belinda Kılıç has assisted many Turkish citizens abroad with their cases and procedures in Türkiye. Consultations take place via WhatsApp, video call or e-mail; documents are shared digitally and you are kept informed throughout.',
  abC1: 'Handled by power of attorney, without travelling to Türkiye',
  abC2: 'Consultation via WhatsApp and video call',
  abC3: 'Appointment times that suit your time zone',
  abC4: 'Communication in Turkish and English',
  b1t: 'Recognition & Enforcement', b1d: 'A divorce obtained abroad is not automatically valid in Türkiye; you may still appear as married in the civil registry. We handle recognition and registration of the ruling, and enforcement of provisions such as custody and alimony.',
  b2t: 'Inheritance & Probate', b2d: 'Obtaining a certificate of inheritance, transferring real estate to the heirs, inheritance tax declarations, estate division, partition of co-ownership and renunciation of inheritance.',
  b3t: 'Title Deeds & Real Estate', b3d: 'Buying or selling your house, land or field in Türkiye by proxy, title deed cancellation and registration cases, co-ownership issues, eviction of tenants and rent claims.',
  b4t: 'Power of Attorney & Documents', b4d: 'Guidance on granting a power of attorney at a Turkish consulate or before a local notary with apostille; assistance with translation and certification of foreign documents.',
  b5t: 'Civil Registry Matters', b5d: 'Registration of marriages and divorces concluded abroad, and cases to correct civil registry entries such as name, surname or date of birth.',
  b6t: 'Debts, Enforcement & Other Cases', b6d: 'Collection of your receivables in Türkiye, enforcement proceedings, family disputes and all other cases and procedures in Türkiye.',
  faqTitle: 'Frequently Asked Questions',
  q1: 'Can I file a case without coming to Türkiye?',
  q1a: 'In most cases, yes. With a power of attorney granted at the Turkish consulate in your country or before a local notary (with apostille), your attorney can handle the case or procedure. Whether personal attendance at hearings is required depends on the specific case.',
  q2: 'I got divorced abroad. Am I also divorced in Türkiye?',
  q2a: 'A foreign court ruling does not automatically take effect in Türkiye. To make it valid and have it entered in your civil registry record, a recognition case is filed; where the conditions are met, an administrative application may also be possible. Otherwise, problems may arise regarding remarriage, inheritance or division of property.',
  q3: 'What do I need to do about an inheritance in Türkiye?',
  q3a: 'The first step is obtaining a certificate of inheritance. Then the real estate is registered in the heirs’ names, an inheritance tax return is filed and, if necessary, division or partition proceedings follow. If you wish to renounce the inheritance, the legal time limit (generally three months) must be observed.',
  q4: 'How do I grant a power of attorney?',
  q4a: 'A power of attorney can be issued at the Turkish consulate in your country, or before a local notary, apostilled and then translated into Turkish. You will be told in advance which powers it needs to include.',
  procLabel: 'Process', procTitle: 'How does the legal process work?',
  s1t: 'Initial Consultation', s1d: 'In a meeting by phone, WhatsApp, e-mail or at the office, your situation is heard and a preliminary legal assessment is made.',
  s2t: 'Case Review', s2d: 'Documents are reviewed and the possible course of action, deadlines and costs are explained transparently.',
  s3t: 'Follow-up & Updates', s3d: 'Throughout the case or transaction, you are kept regularly informed and your questions are answered at every stage.',
  contactLabel: 'Contact', contactTitle: 'For appointments and information',
  contactNote: 'Consultations are by appointment. From abroad, you can reach us via WhatsApp or e-mail; you will receive a reply as soon as possible.',
  addrLabel: 'Address', phoneLabel: 'Phone / WhatsApp', mailLabel: 'E-mail', btnMail: 'E-mail',
  mapOpen: 'Open in Google Maps →',
  footerSub: 'Law & Consultancy · Antalya Bar · Reg. No: 10989',
  legalTitle: 'Legal Notice',
  legalText: 'This website has been prepared for informational purposes only, in accordance with the Turkish Attorneys’ Act No. 1136 and the Union of Turkish Bar Associations’ Professional Rules and Regulation on the Prohibition of Advertising. The information on this website does not constitute legal opinion or advice; please consult an attorney regarding your specific situation. Use of this website does not establish an attorney–client relationship.',
  kvkkTitle: 'Privacy (KVKK)',
  kvkkText: 'This website does not collect personal data through any form and does not use cookies. Your language preference is stored only in your own browser. Map, photos and fonts are loaded from third-party services (Google, Unsplash). Information you share via WhatsApp, e-mail, Facebook or phone is processed solely to assess your request, in accordance with the Turkish Personal Data Protection Law No. 6698 and the attorney’s duty of confidentiality.',
  rights: 'All rights reserved.',
  backTop: 'Back to top ↑',
};

const DA = {
  skip: 'Gå til indhold',
  brandSub: 'Advokatvirksomhed & Rådgivning',
  navAbout: 'Om mig', navAreas: 'Retsområder', navAbroad: 'Bosat i udlandet', navProcess: 'Forløb', navContact: 'Kontakt',
  heroEyebrow: 'Antalya Advokatsamfund · Muratpaşa / Antalya',
  heroAv: 'Advokat',
  heroScript: 'Jura & Rådgivning',
  heroLead: 'Juridisk rådgivning og repræsentation for privatpersoner og virksomheder inden for en lang række områder, bl.a. strafferet, familieret, arveret, fast ejendom, ansættelsesret og fogedsager. Vi hjælper også tyrkiske statsborgere bosat i udlandet med deres retssager og sager i Tyrkiet.',
  btnWhatsapp: 'Skriv på WhatsApp',
  btnAbroad: 'Bor du i udlandet?',
  cardBar: 'Advokatsamfund', cardBarVal: 'Antalya', cardReg: 'Reg.-nr.', cardLang: 'Sprog', cardLangVal: 'Tyrkisk · Engelsk',
  aboutLabel: 'Om mig',
  aboutRole: 'Stiftende advokat · Belinda Kılıç Jura & Rådgivning',
  aboutP1: 'Belinda Kılıç blev uddannet fra Det Juridiske Fakultet ved Selçuk Universitet i 2022. Efter at have afsluttet sin advokatpraktik ved İzmir Advokatsamfund i 2023 grundlagde hun sit eget kontor i Antalya, hvor hun praktiserer som selvstændig advokat, registreret ved Antalya Advokatsamfund.',
  aboutP2: 'Kontoret yder rådgivning og procesførelse for privatpersoner og virksomheder inden for mange områder, herunder strafferet, familie- og skilsmisseret, arveret, fast ejendom og leje, ansættelsesret, fogedret og konkurs, handelsret og aftaleret. Hvert skridt – fra rådgivning før en sag og udarbejdelse af kontrakter til mægling og retssag – håndteres omhyggeligt.',
  aboutP3: 'En væsentlig del af hendes arbejde omfatter juridiske sager i Tyrkiet for tyrkiske statsborgere, der bor i udlandet. Hun har hjulpet mange klienter bosat i Europa og andre steder med anerkendelse og fuldbyrdelse af udenlandske domme, arvesager og ejendomstvister – ofte uden at de har behøvet at rejse til Tyrkiet.',
  aboutP4: 'I hver sag lægger hun vægt på, at klienten informeres klart og løbende, og på en pålidelig kommunikation inden for de advokatetiske regler og tavshedspligten. Rådgivning tilbydes på tyrkisk og engelsk.',
  tl1: 'Selçuk Universitet, Det Juridiske Fakultet – Kandidat',
  tl2: 'İzmir Advokatsamfund – Afsluttet advokatpraktik',
  tlNow: 'I dag',
  tl3: 'Antalya Advokatsamfund – Selvstændig advokat (Reg.-nr. 10989)',
  misLabel: 'Mission',
  misText: 'At beskytte klienternes rettigheder og interesser i overensstemmelse med retsstatsprincippet, med omhu og åben kommunikation, og at gøre juridiske processer forståelige for alle.',
  visLabel: 'Vision',
  visText: 'At være et principfast og løsningsorienteret advokatkontor, som klienter i Tyrkiet og i udlandet trygt kan kontakte – uanset afstand.',
  v1t: 'Tillid & Fortrolighed', v1d: 'Alt, hvad du deler, er beskyttet af advokatens tavshedspligt.',
  v2t: 'Gennemsigtighed', v2d: 'Forløb, frister og omkostninger forklares tydeligt fra starten.',
  v3t: 'Tilgængelighed', v3d: 'Let at kontakte via telefon, WhatsApp og e-mail – også fra udlandet.',
  v4t: 'Omhu', v4d: 'Hver sag forberedes grundigt under hensyn til dens særlige omstændigheder.',
  quote: '“Retfærdighed er statens fundament.”',
  areasLabel: 'Retsområder', areasTitle: 'De vigtigste områder for juridisk bistand',
  a1t: 'Strafferet', a1d: 'Forsvar og repræsentation af mistænkte, tiltalte og forurettede under efterforskning og retssag; bistand ved afhøringer og retsmøder.',
  a2t: 'Familieret & Skilsmisse', a2d: 'Skilsmisse efter aftale eller ved tvist, forældremyndighed, underholdsbidrag, deling af fællesbo og beskyttelsesordrer.',
  a3t: 'Arveret', a3d: 'Arvebevis, testamenter, skifte af dødsbo, ophævelse af sameje, krav om reduktion og afkald på arv.',
  a4t: 'Anerkendelse & Fuldbyrdelse', a4d: 'Anerkendelse og fuldbyrdelse i Tyrkiet af skilsmissedomme og andre afgørelser afsagt i udlandet samt registrering i folkeregistret.',
  a5t: 'Fast ejendom & Lejeret', a5d: 'Sager om annullering og registrering af skøder, fastsættelse af leje og udsættelse, ejerlejlighedstvister samt rådgivning ved køb og salg.',
  a6t: 'Ansættelsesret', a6d: 'Lønkrav, fratrædelsesgodtgørelse og opsigelsesvarsel, genansættelse, mægling og udarbejdelse af ansættelseskontrakter.',
  a7t: 'Fogedret & Konkurs', a7d: 'Inkasso- og fogedsager med eller uden dom, ophævelse af indsigelser, negative anerkendelsessøgsmål, udlæg og inddrivelse af gæld.',
  a8t: 'Aftale-, Handels- & Forbrugerret', a8d: 'Udarbejdelse af kontrakter, krav om betaling og erstatning, erhvervstvister samt sager ved forbrugerklagenævn og forbrugerdomstol.',
  a9t: 'Udlændingeret', a9d: 'Rådgivning til udlændinge i Tyrkiet om opholdstilladelse, udlændinges erhvervelse af fast ejendom og andre juridiske forhold.',
  abLabel: 'For dig, der bor i udlandet',
  abTitle: 'Mens du er væk, er dine sager i Tyrkiet i trygge hænder',
  abP1: 'Retssager og sager i Tyrkiet for tyrkiske statsborgere bosat i Tyskland, Danmark, Holland, Østrig, Frankrig og andre lande kan ofte klares med én enkelt fuldmagt – uden at du behøver at rejse til Tyrkiet.',
  abP2: 'Belinda Kılıç har hjulpet mange tyrkere i udlandet med deres retssager og sager i Tyrkiet. Rådgivningen foregår via WhatsApp, videoopkald eller e-mail; dokumenter deles digitalt, og du holdes løbende orienteret.',
  abC1: 'Håndteres via fuldmagt – uden rejse til Tyrkiet',
  abC2: 'Rådgivning via WhatsApp og videoopkald',
  abC3: 'Mødetider, der passer til din tidszone',
  abC4: 'Kommunikation på tyrkisk og engelsk',
  b1t: 'Anerkendelse & Fuldbyrdelse', b1d: 'En skilsmisse opnået i udlandet er ikke automatisk gyldig i Tyrkiet; du kan stadig stå som gift i folkeregistret. Vi sørger for anerkendelse og registrering af dommen samt fuldbyrdelse af bestemmelser om fx forældremyndighed og underholdsbidrag.',
  b2t: 'Arv & Dødsbo', b2d: 'Udstedelse af arvebevis, overførsel af fast ejendom til arvingerne, angivelse af arveafgift, skifte, ophævelse af sameje og afkald på arv.',
  b3t: 'Skøder & Fast ejendom', b3d: 'Køb eller salg af dit hus, din grund eller mark i Tyrkiet via fuldmagt, sager om annullering og registrering af skøder, problemer med sameje, udsættelse af lejere og lejekrav.',
  b4t: 'Fuldmagt & Dokumenter', b4d: 'Vejledning om fuldmagt udstedt på et tyrkisk konsulat eller hos en lokal notar med apostille; hjælp til oversættelse og legalisering af udenlandske dokumenter.',
  b5t: 'Folkeregistersager', b5d: 'Registrering af ægteskaber og skilsmisser indgået i udlandet samt sager om rettelse af navn, efternavn eller fødselsdato i folkeregistret.',
  b6t: 'Gæld, Inddrivelse & Andre sager', b6d: 'Inddrivelse af dine tilgodehavender i Tyrkiet, fogedsager, familietvister og alle andre retssager og sager i Tyrkiet.',
  faqTitle: 'Ofte stillede spørgsmål',
  q1: 'Kan jeg anlægge en sag uden at komme til Tyrkiet?',
  q1a: 'I de fleste tilfælde ja. Med en fuldmagt udstedt på det tyrkiske konsulat i dit land eller hos en lokal notar (med apostille) kan din advokat føre sagen. Om personligt fremmøde i retten er nødvendigt, afhænger af den konkrete sag.',
  q2: 'Jeg er blevet skilt i udlandet. Er jeg også skilt i Tyrkiet?',
  q2a: 'En udenlandsk dom har ikke automatisk virkning i Tyrkiet. For at den bliver gyldig og registreret i folkeregistret, anlægges en anerkendelsessag; hvis betingelserne er opfyldt, kan en administrativ ansøgning også komme på tale. Ellers kan der opstå problemer i forbindelse med nyt ægteskab, arv eller deling af formue.',
  q3: 'Hvad skal jeg gøre ved en arv i Tyrkiet?',
  q3a: 'Første skridt er at få udstedt et arvebevis. Derefter registreres ejendommen i arvingernes navne, arveafgift angives, og om nødvendigt gennemføres deling eller ophævelse af sameje. Ønsker du at give afkald på arven, skal den lovbestemte frist (som udgangspunkt tre måneder) overholdes.',
  q4: 'Hvordan giver jeg en fuldmagt?',
  q4a: 'Fuldmagten kan udstedes på det tyrkiske konsulat i dit land eller hos en lokal notar, forsynes med apostille og derefter oversættes til tyrkisk. Du får på forhånd besked om, hvilke beføjelser den skal indeholde.',
  procLabel: 'Forløb', procTitle: 'Hvordan forløber en juridisk sag?',
  s1t: 'Første samtale', s1d: 'Ved en samtale via telefon, WhatsApp, e-mail eller på kontoret gennemgås din situation, og der foretages en foreløbig juridisk vurdering.',
  s2t: 'Gennemgang af sagen', s2d: 'Dokumenterne gennemgås, og den mulige fremgangsmåde, frister og omkostninger forklares åbent.',
  s3t: 'Opfølgning & Orientering', s3d: 'Under hele sagen holdes du løbende orienteret, og dine spørgsmål besvares i alle faser.',
  contactLabel: 'Kontakt', contactTitle: 'Tidsbestilling og information',
  contactNote: 'Samtaler foregår efter aftale. Fra udlandet kan du kontakte os via WhatsApp eller e-mail; du får svar hurtigst muligt.',
  addrLabel: 'Adresse', phoneLabel: 'Telefon / WhatsApp', mailLabel: 'E-mail', btnMail: 'E-mail',
  mapOpen: 'Åbn i Google Maps →',
  footerSub: 'Jura & Rådgivning · Antalya Advokatsamfund · Reg.-nr. 10989',
  legalTitle: 'Juridisk meddelelse',
  legalText: 'Denne hjemmeside er udelukkende udarbejdet til informationsformål i overensstemmelse med den tyrkiske advokatlov nr. 1136 samt Det Tyrkiske Advokatsamfunds advokatetiske regler og reklameforbud. Oplysningerne på siden udgør ikke juridisk rådgivning; kontakt altid en advokat vedrørende din konkrete situation. Brug af siden etablerer ikke et klient–advokat-forhold.',
  kvkkTitle: 'Privatliv (KVKK)',
  kvkkText: 'Denne hjemmeside indsamler ikke personoplysninger via formularer og bruger ikke cookies. Dit sprogvalg gemmes kun i din egen browser. Kort, fotos og skrifttyper indlæses fra tredjepartstjenester (Google, Unsplash). Oplysninger, du deler via WhatsApp, e-mail, Facebook eller telefon, behandles udelukkende for at vurdere din henvendelse i overensstemmelse med den tyrkiske persondatalov nr. 6698 og advokatens tavshedspligt.',
  rights: 'Alle rettigheder forbeholdes.',
  backTop: 'Til toppen ↑',
};

const META = {
  tr: { title: 'Av. Belinda Kılıç | Hukuk ve Danışmanlık · Antalya', wa: 'Merhaba Av. Belinda Kılıç, randevu almak istiyorum.' },
  en: { title: 'Att. Belinda Kılıç | Law & Consultancy · Antalya', wa: 'Hello Ms. Kılıç, I would like to make an appointment.' },
  da: { title: 'Advokat Belinda Kılıç | Jura & Rådgivning · Antalya', wa: 'Hej Belinda Kılıç, jeg vil gerne bestille en tid.' },
};

const nodes = document.querySelectorAll('[data-i18n]');
const TR = {};
nodes.forEach(el => { TR[el.dataset.i18n] = el.innerHTML; });
const DICTS = { tr: TR, en: EN, da: DA };

function setLang(lang) {
  if (!DICTS[lang]) lang = 'tr';
  const dict = DICTS[lang];
  nodes.forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = dict[key] !== undefined ? dict[key] : TR[key];
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
if (DICTS[urlLang]) initial = urlLang;
else { try { initial = localStorage.getItem('bk-lang') || 'tr'; } catch (e) { /* ignore */ } }
setLang(initial);

document.querySelectorAll('[data-lang-btn]').forEach(b =>
  b.addEventListener('click', () => setLang(b.dataset.langBtn)));

/* Header beim Scrollen */
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Mobiles Menü */
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

/* Einblenden beim Scrollen */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.08 + 's'; io.observe(el); });
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

document.getElementById('year').textContent = new Date().getFullYear();
