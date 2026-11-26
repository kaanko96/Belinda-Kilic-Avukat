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

Object.assign(EN, {
 "faqTitle": "Frequently Asked Questions",
 "faqIntro": "The questions most frequently asked by Turkish citizens living abroad about their legal matters in Türkiye. This information is general in nature; please contact us regarding your specific situation.",
 "fg1": "Recognition & Enforcement of Foreign Divorce Rulings",
 "fa1q": "I got divorced abroad. Am I also divorced in Türkiye?",
 "fa1a": "No. A divorce ruling issued by a foreign court or administrative authority does not automatically take effect in Türkiye. Until the ruling is recognised and entered in the civil registry, you will continue to appear as married in Turkish records. This prevents you from remarrying in Türkiye, may result in your former spouse appearing as your legal heir, and can cause serious problems in title deed, inheritance and property matters. That is why having a foreign divorce recognised in Türkiye is so important.",
 "fa2q": "What is the difference between recognition and enforcement?",
 "fa2a": "Recognition gives the foreign ruling the effect of a final judgment in Türkiye; recognition is usually sufficient to have the divorce entered in the civil registry. Enforcement, on the other hand, is needed so that the ruling can be executed in Türkiye. An enforcement case is filed for provisions that must be complied with, such as alimony, compensation, custody and contact with the child. Both cases are governed by Articles 50–59 of the Turkish Code on Private International and Procedural Law No. 5718 (MÖHUK).",
 "fa3q": "Why is it so important that the ruling is \"final\"?",
 "fa3a": "The law requires that, for recognition and enforcement, the foreign court ruling must be final under the law of the country where it was issued. In other words, no appeal or objection may still be available against it in that country. This is proven by a certificate of finality added by the competent authority, or by an official document showing that the ruling is final (for example the \"Rechtskraftvermerk\" in Germany). A case filed with a ruling that lacks this certificate, or that is not yet final, may fail or be needlessly delayed. That is why the documents should be prepared completely and correctly before the case is filed.",
 "fa4q": "Which documents are needed for a recognition and enforcement case?",
 "fa4a": "Generally the following are required: the original or a certified copy of the foreign court ruling; the certificate or document showing that it is final; an apostille on these documents issued by the competent authority of that country (or consular legalisation for countries not party to the Hague Apostille Convention); Turkish translations of the documents made by a sworn translator and certified by a notary; a civil registry extract and a power of attorney granted to your attorney. Our office coordinates the translation and certification in Türkiye.",
 "fa5q": "Do I need a court case, or is administrative recognition possible?",
 "fa5a": "Under Article 27/A of the Civil Registration Services Law, a divorce ruling issued by a competent authority, duly final and not manifestly contrary to Turkish public policy can be registered without a court case via the civil registry office or a consulate, if both spouses apply. The spouses may apply at different times, but no more than ninety days may pass between the two applications. This route only covers registration of the divorce itself. For provisions such as custody, alimony or compensation, or if one spouse does not take part in the application, a recognition or enforcement case must be filed in court. Which route is more suitable depends on your case.",
 "fa6q": "Do I have to come to Türkiye? Which court hears the case?",
 "fa6a": "Usually not. The case is filed and handled by your attorney on the basis of the power of attorney you grant. For the recognition and enforcement of divorce rulings, the family court has jurisdiction. If the other party has no domicile or residence in Türkiye, the case may be filed in Ankara, Istanbul or İzmir. If your former spouse also declares acceptance of the case, the process usually moves faster.",
 "fg2": "Inheritance",
 "fm1q": "I live abroad. Do I have rights to an inheritance in Türkiye?",
 "fm1a": "Yes. Where you live does not remove your rights as an heir. Under Turkish law, succession is generally governed by the law of the deceased's nationality; however, Turkish law always applies to real estate located in Türkiye (MÖHUK Art. 20). Holders of the Blue Card (Mavi Kart) who have acquired another citizenship also largely enjoy the same rights as Turkish citizens with regard to inheritance and acquiring real estate.",
 "fm2q": "How is a certificate of inheritance obtained?",
 "fm2a": "The certificate of inheritance shows the heirs and their shares, and it is the first step in every inheritance procedure. It can be obtained from a notary or from the civil court of peace. Where civil registry records are sufficient, the notary route is faster; where, for example, some heirs are foreign nationals or there is a will, an application to the civil court of peace may be required. A death that occurred abroad must first be entered in the Turkish civil registry. All of this can be done by power of attorney, without travelling to Türkiye.",
 "fm3q": "When must the inheritance tax return be filed?",
 "fm3a": "A return must be filed even if the inherited assets fall below the exemption amount. The deadlines, counted from the date of death, are: death in Türkiye and heir in Türkiye – 4 months; death in Türkiye and heir abroad – 6 months; death abroad and heir in Türkiye – 6 months; death abroad and heir in the same country – 4 months; heir in another foreign country – 8 months. Heirs living abroad may also file their returns with Turkish consulates. Late filing may lead to tax penalties.",
 "fm4q": "I want to renounce an inheritance. What should I do?",
 "fm4a": "Renouncing an inheritance is especially important where the deceased had debts. As a rule, the renunciation must be declared to the civil court of peace within three months of learning that you are an heir. If this deadline is missed, the inheritance is deemed accepted and you may become liable for the deceased's debts. If the deceased was clearly or officially insolvent at the time of death, the inheritance is deemed renounced. Renunciation can also be made from abroad with a power of attorney containing special authority.",
 "fm5q": "The heirs cannot agree. How is a house or plot in Türkiye divided?",
 "fm5a": "If the heirs agree, a partition agreement can be made or ownership can be arranged by transferring shares at the land registry. If no agreement can be reached, any heir may file a partition (dissolution of co-ownership) case. In this case the property is divided in kind where possible; otherwise it is sold and the proceeds are distributed according to the shares. If one heir uses the property alone, the other heirs may, where the conditions are met, claim compensation for unlawful use (ecrimisil).",
 "fm6q": "My parent transferred the title deed to my sibling disguised as a \"sale\". What can I do?",
 "fm6a": "This situation, which is common in families living abroad, is known in Turkish law as \"muris muvazaası\" (sham transaction by the deceased). If the deceased disguised what was in fact a gift as a sale in order to deprive the other heirs, those heirs may file a case to cancel the title deed and register the property in the name of the estate. A reduction claim may also be possible for gifts that infringe the reserved (compulsory) shares. In these cases, correctly assessing the evidence and time limits directly affects the outcome.",
 "fg3": "Power of Attorney",
 "fv1q": "I am a Turkish citizen. How do I grant a power of attorney?",
 "fv1a": "The easiest way is to have the power of attorney drawn up at the Turkish consulate in your country. A power of attorney issued at a consulate is directly valid in Türkiye; no apostille or translation is needed. Appointments are usually booked through the consulate's online system (konsolosluk.gov.tr). You will receive the required wording of the powers in writing in advance.",
 "fv2q": "I am not a Turkish citizen, or I cannot go to the consulate. What should I do?",
 "fv2a": "In this case, the power of attorney is drawn up before a local notary in your country, in your own language (for example Danish, German or English). An apostille is then obtained for the document from the competent authority of that country. The original apostilled power of attorney is sent to us, and our office handles its translation into Turkish by a sworn translator and its notarisation in Türkiye. This allows foreign-national clients and anyone unable to travel to Türkiye to start their proceedings easily. For countries not party to the Hague Apostille Convention, consular legalisation is required instead of an apostille.",
 "fv3q": "What should a power of attorney contain?",
 "fv3a": "The power of attorney must clearly state the matter it covers. Special authority is required for matters such as divorce, recognition and enforcement, renunciation of inheritance, waiver of claims or settlement. For land registry transactions such as sale, purchase or mortgage, the power of attorney must also bear the grantor's photograph and state the powers explicitly. Since an incomplete power of attorney delays the process, a suitable text is prepared and sent to you in advance, tailored to your matter.",
 "fv4q": "How do I follow the process after granting the power of attorney?",
 "fv4a": "Developments in your case are reported to you regularly via WhatsApp or e-mail, and important documents are shared digitally. You can also view your files via e-Devlet if you wish. You may revoke the power of attorney at any time through a notary.",
 "fg4": "Other Common Questions from Turks Abroad",
 "fd1q": "Can I file a case or carry out procedures without coming to Türkiye?",
 "fd1a": "In most cases, yes. Once you have granted a power of attorney, your attorney handles the case and procedures. Whether you must attend hearings in person depends on the specific case; you will be informed in advance if necessary.",
 "fd2q": "Can I sell or rent out my home in Türkiye while living abroad?",
 "fd2a": "Yes. With a power of attorney bearing your photograph and including the authority to sell, the sale can be completed at the land registry on your behalf. If you rent the property out, drafting the lease, following up on rent payments and, if necessary, eviction proceedings can also be handled by proxy.",
 "fd3q": "Someone is living in my home in Türkiye without my permission, or refuses to leave. What can I do?",
 "fd3a": "If the person is a tenant, eviction can be sought through an eviction case or enforcement proceedings, based on the lease and the statutory grounds for eviction. If there is no lease (for example a relative or a former tenant whose lease has expired), cases for cessation of interference and for compensation for unlawful use (ecrimisil) can be filed.",
 "fd4q": "How can I find out whether there is a case or enforcement proceeding against me in Türkiye?",
 "fd4a": "You can see court and enforcement files registered in your name through the UYAP citizen services on e-Devlet. If you do not have an e-Devlet password, you can also obtain one from Turkish consulates. Your attorney, once granted a power of attorney, can also review all your files via UYAP and inform you of your situation."
});
Object.assign(DA, {
 "faqTitle": "Ofte stillede spørgsmål",
 "faqIntro": "De spørgsmål, som tyrkiske statsborgere i udlandet oftest stiller om deres juridiske forhold i Tyrkiet. Oplysningerne er generelle; kontakt os altid vedrørende din konkrete situation.",
 "fg1": "Anerkendelse og fuldbyrdelse af udenlandske skilsmisser",
 "fa1q": "Jeg er blevet skilt i udlandet. Er jeg også skilt i Tyrkiet?",
 "fa1a": "Nej. En skilsmisseafgørelse fra en udenlandsk domstol eller myndighed har ikke automatisk virkning i Tyrkiet. Indtil afgørelsen er anerkendt og registreret i folkeregistret, står du fortsat som gift i de tyrkiske registre. Det forhindrer dig i at gifte dig igen i Tyrkiet, kan betyde, at din tidligere ægtefælle fremstår som din lovlige arving, og kan skabe alvorlige problemer i sager om fast ejendom, arv og deling af formue. Derfor er det meget vigtigt at få en udenlandsk skilsmisse anerkendt i Tyrkiet.",
 "fa2q": "Hvad er forskellen på anerkendelse og fuldbyrdelse?",
 "fa2a": "Anerkendelse giver den udenlandske afgørelse virkning som en endelig dom i Tyrkiet; anerkendelse er som regel nok til, at skilsmissen kan registreres i folkeregistret. Fuldbyrdelse er derimod nødvendig, for at afgørelsen kan tvangsfuldbyrdes i Tyrkiet. Der anlægges en fuldbyrdelsessag for bestemmelser, der skal opfyldes, fx underholdsbidrag, erstatning, forældremyndighed og samvær med barnet. Begge sager behandles efter artikel 50–59 i den tyrkiske lov nr. 5718 om international privatret og procesret (MÖHUK).",
 "fa3q": "Hvorfor er det så vigtigt, at afgørelsen er \"endelig\"?",
 "fa3a": "Loven kræver, at den udenlandske afgørelse er endelig efter lovgivningen i det land, hvor den blev truffet, før den kan anerkendes og fuldbyrdes. Det betyder, at der ikke længere må være adgang til anke eller indsigelse i det pågældende land. Dette dokumenteres med en påtegning om endelighed fra den kompetente myndighed eller et officielt dokument, der viser, at afgørelsen er endelig (fx \"Rechtskraftvermerk\" i Tyskland). En sag, der anlægges med en afgørelse uden denne påtegning eller som endnu ikke er endelig, kan mislykkes eller blive unødigt forsinket. Derfor er det vigtigt, at dokumenterne forberedes fuldstændigt og korrekt, før sagen anlægges.",
 "fa4q": "Hvilke dokumenter skal bruges til en sag om anerkendelse og fuldbyrdelse?",
 "fa4a": "Normalt kræves: originalen eller en bekræftet kopi af den udenlandske afgørelse; påtegningen eller dokumentet, der viser, at den er endelig; en apostille på disse dokumenter fra den kompetente myndighed i det pågældende land (eller konsulær legalisering for lande, der ikke har tiltrådt Haag-konventionen om apostille); tyrkiske oversættelser foretaget af en edsvoren translatør og bekræftet af en notar; en udskrift fra folkeregistret og en fuldmagt til din advokat. Vores kontor koordinerer oversættelse og bekræftelse i Tyrkiet.",
 "fa5q": "Skal jeg anlægge en retssag, eller er administrativ anerkendelse mulig?",
 "fa5a": "Efter artikel 27/A i den tyrkiske lov om folkeregistrering kan en skilsmisseafgørelse, der er truffet af en kompetent myndighed, er endelig og ikke åbenbart strider mod tyrkisk ordre public, registreres uden retssag via folkeregistret eller et konsulat, hvis begge ægtefæller ansøger. Ægtefællerne kan ansøge på forskellige tidspunkter, men der må højst gå halvfems dage mellem de to ansøgninger. Denne vej omfatter kun registrering af selve skilsmissen. For bestemmelser om fx forældremyndighed, underholdsbidrag eller erstatning – eller hvis den ene ægtefælle ikke deltager i ansøgningen – skal der anlægges en sag om anerkendelse eller fuldbyrdelse ved retten. Hvilken vej der er bedst, afhænger af din sag.",
 "fa6q": "Skal jeg komme til Tyrkiet? Hvilken domstol behandler sagen?",
 "fa6a": "Som regel ikke. Sagen anlægges og føres af din advokat på grundlag af den fuldmagt, du giver. Ved anerkendelse og fuldbyrdelse af skilsmisser er familieretten kompetent. Har modparten ingen bopæl eller opholdssted i Tyrkiet, kan sagen anlægges i Ankara, Istanbul eller İzmir. Hvis din tidligere ægtefælle også erklærer at acceptere sagen, går processen som regel hurtigere.",
 "fg2": "Arv",
 "fm1q": "Jeg bor i udlandet. Har jeg ret til en arv i Tyrkiet?",
 "fm1a": "Ja. Hvor du bor, fjerner ikke din ret som arving. Efter tyrkisk ret er arv som udgangspunkt underlagt lovgivningen i det land, afdøde var statsborger i; for fast ejendom i Tyrkiet gælder dog altid tyrkisk ret (MÖHUK art. 20). Indehavere af det Blå Kort (Mavi Kart), som har fået et andet statsborgerskab, har også i vidt omfang de samme rettigheder som tyrkiske statsborgere med hensyn til arv og erhvervelse af fast ejendom.",
 "fm2q": "Hvordan får man et arvebevis?",
 "fm2a": "Arvebeviset viser arvingerne og deres andele og er det første skridt i enhver arvesag. Det kan udstedes af en notar eller af fredsretten (sulh hukuk). Hvor folkeregisteroplysningerne er tilstrækkelige, er notarvejen hurtigst; hvis fx nogle arvinger er udenlandske statsborgere, eller der foreligger et testamente, kan det være nødvendigt at gå til fredsretten. Et dødsfald i udlandet skal først registreres i det tyrkiske folkeregister. Alt dette kan klares via fuldmagt – uden at rejse til Tyrkiet.",
 "fm3q": "Hvornår skal arveafgiftsangivelsen indgives?",
 "fm3a": "Der skal indgives en angivelse, selv om den arvede formue ligger under fribeløbet. Fristerne regnet fra dødsdagen er: dødsfald i Tyrkiet og arving i Tyrkiet – 4 måneder; dødsfald i Tyrkiet og arving i udlandet – 6 måneder; dødsfald i udlandet og arving i Tyrkiet – 6 måneder; dødsfald i udlandet og arving i samme land – 4 måneder; arving i et andet udenlandsk land – 8 måneder. Arvinger i udlandet kan også indgive angivelsen på et tyrkisk konsulat. For sen indgivelse kan medføre skattemæssige sanktioner.",
 "fm4q": "Jeg vil give afkald på en arv. Hvad skal jeg gøre?",
 "fm4a": "Afkald på arv er særlig vigtigt, hvis afdøde havde gæld. Som hovedregel skal afkaldet erklæres over for fredsretten inden tre måneder fra det tidspunkt, hvor du fik kendskab til, at du er arving. Overskrides fristen, anses arven for modtaget, og du kan blive ansvarlig for afdødes gæld. Hvis afdøde åbenlyst eller officielt var insolvent ved dødsfaldet, anses arven for afslået. Afkald kan også gives fra udlandet med en fuldmagt, der indeholder særlig bemyndigelse.",
 "fm5q": "Arvingerne kan ikke blive enige. Hvordan deles et hus eller en grund i Tyrkiet?",
 "fm5a": "Hvis arvingerne er enige, kan der indgås en skifteaftale, eller ejerskabet kan ordnes ved overdragelse af andele i tingbogen. Kan der ikke opnås enighed, kan enhver arving anlægge sag om ophævelse af sameje. I sagen deles ejendommen fysisk, hvis det er muligt; ellers sælges den, og provenuet fordeles efter andelene. Hvis én arving bruger ejendommen alene, kan de øvrige arvinger, når betingelserne er opfyldt, kræve vederlag for uberettiget brug (ecrimisil).",
 "fm6q": "Min forælder har overdraget skødet til min søskende forklædt som et \"salg\". Hvad kan jeg gøre?",
 "fm6a": "Denne situation, som ofte ses i familier bosat i udlandet, kaldes i tyrkisk ret \"muris muvazaası\" (proformaoverdragelse fra arvelader). Hvis arvelader har forklædt det, der i realiteten var en gave, som et salg for at unddrage de øvrige arvinger, kan disse anlægge sag om annullering af skødet og registrering. Der kan også rejses krav om reduktion for gaver, der krænker tvangsarven. I disse sager har en korrekt vurdering af beviser og frister direkte betydning for resultatet.",
 "fg3": "Fuldmagt",
 "fv1q": "Jeg er tyrkisk statsborger. Hvordan giver jeg en fuldmagt?",
 "fv1a": "Den nemmeste vej er at få fuldmagten udstedt på det tyrkiske konsulat i dit land. En fuldmagt udstedt på et konsulat er direkte gyldig i Tyrkiet; der kræves hverken apostille eller oversættelse. Tid bestilles normalt via konsulatets onlinesystem (konsolosluk.gov.tr). Du får på forhånd den nødvendige ordlyd af fuldmagten skriftligt.",
 "fv2q": "Jeg er ikke tyrkisk statsborger, eller jeg kan ikke komme på konsulatet. Hvad gør jeg?",
 "fv2a": "I så fald udstedes fuldmagten hos en lokal notar i dit land på dit eget sprog (fx dansk, tysk eller engelsk). Derefter forsynes dokumentet med en apostille fra den kompetente myndighed i landet – i Danmark Udenrigsministeriet. Den originale fuldmagt med apostille sendes til os, og vores kontor sørger for oversættelse til tyrkisk ved en edsvoren translatør samt notarbekræftelse i Tyrkiet. Således kan også udenlandske statsborgere og personer, der ikke kan rejse til Tyrkiet, nemt komme i gang. For lande, der ikke har tiltrådt Haag-konventionen om apostille, kræves konsulær legalisering i stedet.",
 "fv3q": "Hvad skal en fuldmagt indeholde?",
 "fv3a": "Fuldmagten skal tydeligt angive, hvad den omfatter. Der kræves særlig bemyndigelse til fx skilsmisse, anerkendelse og fuldbyrdelse, afkald på arv, frafald af krav eller forlig. Ved tinglysningsforretninger som salg, køb eller pant skal fuldmagten desuden være forsynet med fuldmagtsgivers foto og angive beføjelserne udtrykkeligt. Da en mangelfuld fuldmagt forsinker sagen, udarbejdes og sendes en passende tekst til dig på forhånd, tilpasset din sag.",
 "fv4q": "Hvordan følger jeg sagen, når jeg har givet fuldmagt?",
 "fv4a": "Du orienteres løbende om udviklingen i sagen via WhatsApp eller e-mail, og vigtige dokumenter deles digitalt. Du kan også selv se dine sager via e-Devlet. Du kan til enhver tid tilbagekalde fuldmagten via en notar.",
 "fg4": "Andre hyppige spørgsmål fra tyrkere i udlandet",
 "fd1q": "Kan jeg anlægge sag eller få sager ordnet uden at komme til Tyrkiet?",
 "fd1a": "I de fleste tilfælde ja. Når du har givet fuldmagt, varetager din advokat sagen. Om du skal møde personligt i retten, afhænger af den konkrete sag; du får besked i god tid, hvis det bliver nødvendigt.",
 "fd2q": "Kan jeg sælge eller udleje min bolig i Tyrkiet, mens jeg bor i udlandet?",
 "fd2a": "Ja. Med en fuldmagt med foto, der indeholder bemyndigelse til salg, kan salget gennemføres i tingbogen på dine vegne. Ved udlejning kan udarbejdelse af lejekontrakt, opfølgning på huslejebetalinger og om nødvendigt udsættelse også varetages via fuldmagt.",
 "fd3q": "Nogen bor i min bolig i Tyrkiet uden min tilladelse eller vil ikke flytte. Hvad kan jeg gøre?",
 "fd3a": "Er personen lejer, kan udsættelse kræves ved retssag eller fogedforretning ud fra lejekontrakten og de lovbestemte ophævelsesgrunde. Er der ingen lejekontrakt (fx en slægtning eller en tidligere lejer, hvis kontrakt er udløbet), kan der anlægges sag om ophør af indgreb samt om vederlag for uberettiget brug (ecrimisil).",
 "fd4q": "Hvordan finder jeg ud af, om der er en retssag eller en inkassosag mod mig i Tyrkiet?",
 "fd4a": "Du kan se rets- og inkassosager registreret i dit navn via UYAP-borgerservicen på e-Devlet. Har du ikke en e-Devlet-adgangskode, kan du også få en på et tyrkisk konsulat. Din advokat kan med fuldmagt ligeledes gennemgå alle dine sager i UYAP og orientere dig om din situation."
});

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
