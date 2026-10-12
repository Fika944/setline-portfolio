document.getElementById('year').textContent = String(new Date().getFullYear());
const portfolio = document.getElementById('portfolio-dialog');
const projectDialog = document.getElementById('project-dialog');
const projectsByCategory = {
 publishing: [
  {title:'Art book',image:'publishing-1.webp',description:'A photography-led publication concept, combining restrained typography with tactile print finishes.'},
  {title:'Editorial magazine',image:'publishing-2.webp',description:'An editorial layout concept with a clear typographic hierarchy and a black, white and red visual rhythm.'}
 ],
 exhibition: [
  {title:'Exhibition stand',image:'exhibition-1.webp',description:'A stand concept with integrated brand surfaces, display areas and space for visitor interaction.'},
  {title:'Museum exhibition',image:'exhibition-2.webp',description:'A thematic exhibition concept combining spatial storytelling, display design and interactive media.'}
 ],
 outdoor: [
  {title:'Storefront signage',image:'outdoor-1.webp',description:'An illuminated signage concept that connects a storefront with a consistent visual identity.'},
  {title:'Facade lightbox',image:'outdoor-2.webp',description:'A large-format illuminated advertising concept designed for clear visibility after dark.'}
 ],
 graphic: [
  {title:'Visual identity',image:'graphic-1.webp',description:'A visual identity concept expressed through logo applications, stationery and printed brand materials.'},
  {title:'Packaging design',image:'graphic-2.webp',description:'A coordinated packaging concept using minimal graphics and a focused colour palette.'}
 ],
 promotional: [
  {title:'Corporate souvenir set',image:'promotional-1.webp',description:'A coordinated concept for branded everyday objects, including a notebook, pen and mug.'},
  {title:'Business gift collection',image:'promotional-2.webp',description:'A corporate gift concept combining useful products, considered presentation and brand applications.'}
 ]
};
projectsByCategory.museums = [projectsByCategory.exhibition[1]];
projectsByCategory.exhibition = [projectsByCategory.exhibition[0]];
projectsByCategory.events = [];
delete projectsByCategory.promotional;
const translations = {
 "az": {
  "title": "Setline — İdeyadan reallığa",
  "intro": "Setline — reklam istehsalı, tədbir və sərgilərin təşkili və texniki təminatı, eləcə də konsepsiyadan reallaşdırmaya qədər muzeylərin yaradılması üzrə ixtisaslaşmış şirkətdir.",
  "heading": [
   "İdeyadan",
   "Reallığa."
  ],
  "portfolio": "Portfoliomuz",
  "contact": "Əlaqə",
  "address": "Ünvan",
  "phone": "Telefon",
  "email": "E-poçt",
  "addressLines": [
   "Globus Center, 11-ci mərtəbə,",
   "609, Cəfər Cabbarlı küçəsi, Bakı"
  ],
  "view": "Layihələrə bax",
  "close": "Bağla",
  "closePortfolio": "Portfolionu bağla",
  "closeProject": "Layihəni bağla",
  "concept": "Konsept layihə",
  "conceptFull": "Konsept layihə · İllüstrativ nümunə",
  "empty": "Bu bölməyə layihələr tezliklə əlavə olunacaq.",
  "skip": "Əsas məzmuna keç",
  "home": "Setline ana səhifə",
  "switch": "Dil seçimi",
  "heroAlt": "Sərgi stendi, çap dizaynı, promo məhsullar, brend maketləri və xarici reklam kollajı",
  "categories": {
   "exhibition": {
    "title": "Sərgilər",
    "description": "Sərgi stendlərinin və pavilyonların konsepsiyasını hazırlayır, dizaynını, istehsalını və quraşdırılmasını həyata keçiririk."
   },
   "events": {
    "title": "Tədbirlər və təchizat",
    "description": "Tədbirlərin təşkilini, məkanın qurulmasını, səhnə, işıq, səs və digər avadanlıqlarla texniki təminatını həyata keçiririk."
   },
   "museums": {
    "title": "Muzeylər",
    "description": "Muzeyləri konsepsiyadan reallaşdırmaya qədər yaradır, ekspozisiyaları, multimedia həllərini və interaktiv elementləri vahid məkan daxilində birləşdiririk."
   },
   "outdoor": {
    "title": "Reklam istehsalı: in / out",
    "description": "Daxili və xarici reklam vasitələri, işıqlı lövhələr, həcmli hərflər, vitrin və fasad həllərini istehsal edir, quraşdırırıq."
   },
   "publishing": {
    "title": "Nəşriyyat: rəqəmsal və ofset",
    "description": "Kitab, jurnal, kataloq və digər çap məhsullarını hazırlayır, redaktə, səhifələmə, rəqəmsal və ofset çap xidmətləri göstəririk."
   },
   "graphic": {
    "title": "Kreativ və dizayn",
    "description": "Brendlər üçün kreativ konsepsiyalar, loqotiplər, korporativ üslub, qablaşdırma və müxtəlif vizual kommunikasiya materialları hazırlayırıq."
   }
  }
 },
 "en": {
  "title": "Setline — From Idea to Reality",
  "intro": "Setline is a company specialising in advertising production, the organisation and technical support of events and exhibitions, and the creation of museums from concept to completion.",
  "heading": [
   "From Idea",
   "to Reality."
  ],
  "portfolio": "Our portfolio",
  "contact": "Contact",
  "address": "Address",
  "phone": "Phone",
  "email": "E-mail",
  "addressLines": [
   "Globus Center, 11th floor,",
   "609, Jafar Jabbarlı street, Baku"
  ],
  "view": "View projects",
  "close": "Close",
  "closePortfolio": "Close portfolio",
  "closeProject": "Close project",
  "concept": "Concept project",
  "conceptFull": "Concept project · Illustrative example",
  "empty": "Projects will be added to this section soon.",
  "skip": "Skip to content",
  "home": "Setline home",
  "switch": "Select language",
  "heroAlt": "Collage of an exhibition stand, print design, promotional products, branding mockups and outdoor advertising",
  "categories": {
   "exhibition": {
    "title": "Exhibitions",
    "description": "We develop concepts for exhibition stands and pavilions and handle their design, production and installation."
   },
   "events": {
    "title": "Events and equipment",
    "description": "We organise events, set up venues and provide technical support with staging, lighting, sound and other equipment."
   },
   "museums": {
    "title": "Museums",
    "description": "We create museums from concept to completion, bringing exhibitions, multimedia solutions and interactive elements together within a unified space."
   },
   "outdoor": {
    "title": "Advertising production: in / out",
    "description": "We produce and install indoor and outdoor advertising, illuminated signs, dimensional lettering, and storefront and facade solutions."
   },
   "publishing": {
    "title": "Publishing: digital and offset",
    "description": "We produce books, magazines, catalogues and other printed materials, providing editing, page layout, digital and offset printing services."
   },
   "graphic": {
    "title": "Creative and design",
    "description": "We develop creative concepts, logos, corporate identities, packaging and a variety of visual communication materials for brands."
   }
  }
 }
};
const projectTranslations = {
 "Art book": [
  "İncəsənət kitabı",
  "Təmkinli tipoqrafiyanı və toxunma hissi yaradan çap işləmələrini birləşdirən, fotoşəkillərə əsaslanan nəşr konsepsiyası."
 ],
 "Editorial magazine": [
  "Jurnal dizaynı",
  "Aydın tipoqrafik iyerarxiyaya və qara, ağ və qırmızı rəng ritminə malik jurnal tərtibatı konsepsiyası."
 ],
 "Exhibition stand": [
  "Sərgi stendi",
  "Brend səthlərini, nümayiş sahələrini və ziyarətçilərlə qarşılıqlı əlaqə məkanını birləşdirən stend konsepsiyası."
 ],
 "Museum exhibition": [
  "Muzey ekspozisiyası",
  "Məkan vasitəsilə hekayə anlatımını, ekspozisiya dizaynını və interaktiv medianı birləşdirən tematik sərgi konsepsiyası."
 ],
 "Storefront signage": [
  "Vitrin lövhəsi",
  "Vitrini vahid vizual kimliklə birləşdirən işıqlı reklam lövhəsi konsepsiyası."
 ],
 "Facade lightbox": [
  "Fasad işıq qutusu",
  "Qaranlıqda aydın görünməsi üçün hazırlanmış böyükformatlı işıqlı reklam konsepsiyası."
 ],
 "Visual identity": [
  "Vizual kimlik",
  "Loqonun tətbiqləri, dəftərxana ləvazimatları və çap olunmuş brend materialları ilə ifadə olunan vizual kimlik konsepsiyası."
 ],
 "Packaging design": [
  "Qablaşdırma dizaynı",
  "Minimal qrafika və seçilmiş rəng palitrasından istifadə edən vahid qablaşdırma konsepsiyası."
 ]
};

let language = 'az';
let selectedCategory = null;
let selectedProject = null;
const text = () => translations[language];
const projectText = project => language === 'az' ? {title: projectTranslations[project.title][0], description: projectTranslations[project.title][1]} : project;
function renderProject(project) {
 const translated = projectText(project);
 document.getElementById('project-title').textContent = translated.title;
 const img = document.getElementById('project-image');
 img.src = 'assets/' + project.image;
 img.alt = translated.title + ' — ' + text().concept;
 document.getElementById('project-description').textContent = translated.description;
}
function openProject(project) {
 selectedProject = project;
 renderProject(project);
 projectDialog.showModal();
}
function renderPortfolio(category) {
 document.getElementById('portfolio-title').textContent = text().categories[category].title;
 const grid = document.getElementById('portfolio-grid');
 grid.replaceChildren();
 if (!projectsByCategory[category].length) {
  const empty = document.createElement('p'); empty.id = 'empty-portfolio'; empty.textContent = text().empty; grid.append(empty);
 }
 projectsByCategory[category].forEach(project => {
  const translated = projectText(project);
  const card = document.createElement('button'); card.type = 'button'; card.className = 'project-card';
  const img = document.createElement('img'); img.src = 'assets/' + project.image; img.alt = translated.title + ' — ' + text().concept; img.loading = 'lazy';
  const name = document.createElement('h3'); name.textContent = translated.title;
  const label = document.createElement('span'); label.className = 'concept-label'; label.textContent = text().concept;
  card.append(img, name, label); card.addEventListener('click', () => openProject(project)); grid.append(card);
 });
}
function setLanguage(next) {
 language = next;
 const t = text();
 document.documentElement.lang = language;
 document.title = t.title;
 document.querySelector('meta[name="description"]').content = t.intro;
 document.querySelector('meta[property="og:title"]').content = t.title;
 document.querySelector('meta[property="og:description"]').content = t.intro;
 document.querySelector('.skip').textContent = t.skip;
 document.querySelector('.brand').setAttribute('aria-label', t.home);
 document.querySelector('.hero-photo').alt = t.heroAlt;
 const heading = document.querySelector('h1'); heading.replaceChildren();
 // Preserve the original English line break and red emphasis.
 if (language === 'en') heading.append('From Idea', document.createElement('br'), 'to ');
 else heading.append(t.heading[0], document.createElement('br'));
 const accent = document.createElement('span'); accent.textContent = language === 'en' ? 'Reality.' : t.heading[1]; heading.append(accent);
 document.querySelector('.hero-content > p').textContent = t.intro;
 document.querySelector('#catalogues > h2').textContent = t.portfolio;
 document.querySelector('#contact > h2').textContent = t.contact;
 document.querySelectorAll('.contact-grid h3').forEach((element, i) => element.textContent = [t.address, t.phone, t.email][i]);
 document.querySelector('address').replaceChildren(t.addressLines[0], document.createElement('br'), t.addressLines[1]);
 document.querySelectorAll('[data-category]').forEach(button => {
  const category = t.categories[button.dataset.category];
  button.dataset.title = category.title; button.textContent = t.view;
  button.parentElement.querySelector('h3').textContent = category.title;
  button.parentElement.querySelector('p').textContent = category.description;
 });
 document.querySelector('.language-switch').setAttribute('aria-label', t.switch);
 document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
 [portfolio, projectDialog].forEach((dialog, i) => {
  const close = dialog.querySelector('.close'); close.textContent = t.close; close.setAttribute('aria-label', i === 0 ? t.closePortfolio : t.closeProject);
 });
 projectDialog.querySelector('.concept-label').textContent = t.conceptFull;
 if (selectedCategory) renderPortfolio(selectedCategory);
 if (selectedProject) renderProject(selectedProject);
 try { localStorage.setItem('setline-language', language); } catch {}
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
document.querySelectorAll('[data-category]').forEach(button => {
 button.addEventListener('click', () => {
  selectedCategory = button.dataset.category; renderPortfolio(selectedCategory);
  portfolio.showModal(); document.body.classList.add('modal-open');
 });
});
[portfolio, projectDialog].forEach(dialog => {
 dialog.querySelector('.close').addEventListener('click', () => dialog.close());
 dialog.addEventListener('close', () => { if (!portfolio.open && !projectDialog.open) document.body.classList.remove('modal-open'); });
 dialog.addEventListener('click', event => {
  if (event.target === dialog) { const b = dialog.getBoundingClientRect(); if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom) dialog.close(); }
 });
});
let initialLanguage = 'az';
try { if (localStorage.getItem('setline-language') === 'en') initialLanguage = 'en'; } catch {}
setLanguage(initialLanguage);
