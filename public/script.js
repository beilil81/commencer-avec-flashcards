// === Vocabulaire pré-défini par thème (60 entrées, 4 langues) ===
const VOCABULARY = {
  greetings: {
    label: '👋 Salutations',
    cards: [
      { fr: 'Bonjour',          en: 'Hello',           es: 'Hola',          ar: 'مرحبا' },
      { fr: 'Au revoir',        en: 'Goodbye',         es: 'Adiós',         ar: 'وداعا' },
      { fr: 'Merci',            en: 'Thank you',       es: 'Gracias',       ar: 'شكرا' },
      { fr: "S'il vous plaît",  en: 'Please',          es: 'Por favor',     ar: 'من فضلك' },
      { fr: 'Oui',              en: 'Yes',             es: 'Sí',            ar: 'نعم' },
      { fr: 'Non',              en: 'No',              es: 'No',            ar: 'لا' },
      { fr: 'Bonjour (matin)',  en: 'Good morning',    es: 'Buenos días',   ar: 'صباح الخير' },
      { fr: 'Bonsoir',          en: 'Good evening',    es: 'Buenas noches', ar: 'مساء الخير' },
      { fr: 'Comment allez-vous ?', en: 'How are you?', es: '¿Cómo estás?', ar: 'كيف حالك؟' },
      { fr: "Je m'appelle",     en: 'My name is',      es: 'Me llamo',      ar: 'اسمي' },
      { fr: 'Enchanté',         en: 'Nice to meet you', es: 'Encantado',    ar: 'تشرفت بمعرفتك' },
      { fr: 'Excusez-moi',      en: 'Excuse me',       es: 'Disculpe',      ar: 'عذرا' },
      { fr: 'Désolé',           en: 'Sorry',           es: 'Lo siento',     ar: 'آسف' },
      { fr: 'Bienvenue',        en: 'Welcome',         es: 'Bienvenido',    ar: 'أهلا وسهلا' },
      { fr: 'À bientôt',        en: 'See you soon',    es: 'Hasta pronto',  ar: 'إلى اللقاء' },
    ],
  },
  travel: {
    label: '✈️ Voyage',
    cards: [
      { fr: 'Aéroport',         en: 'Airport',         es: 'Aeropuerto',    ar: 'مطار' },
      { fr: 'Train',            en: 'Train',           es: 'Tren',          ar: 'قطار' },
      { fr: 'Bus',              en: 'Bus',             es: 'Autobús',       ar: 'حافلة' },
      { fr: 'Hôtel',            en: 'Hotel',           es: 'Hotel',         ar: 'فندق' },
      { fr: 'Billet',           en: 'Ticket',          es: 'Billete',       ar: 'تذكرة' },
      { fr: 'Passeport',        en: 'Passport',        es: 'Pasaporte',     ar: 'جواز سفر' },
      { fr: 'Bagage',           en: 'Luggage',         es: 'Equipaje',      ar: 'أمتعة' },
      { fr: 'Carte',            en: 'Map',             es: 'Mapa',          ar: 'خريطة' },
      { fr: 'Où est… ?',        en: 'Where is…?',      es: '¿Dónde está…?', ar: 'أين…؟' },
      { fr: 'Gauche',           en: 'Left',            es: 'Izquierda',     ar: 'يسار' },
      { fr: 'Droite',           en: 'Right',           es: 'Derecha',       ar: 'يمين' },
      { fr: 'Tout droit',       en: 'Straight ahead',  es: 'Recto',         ar: 'مباشرة' },
      { fr: 'Gare',             en: 'Station',         es: 'Estación',      ar: 'محطة' },
      { fr: 'Taxi',             en: 'Taxi',            es: 'Taxi',          ar: 'سيارة أجرة' },
      { fr: 'Plage',            en: 'Beach',           es: 'Playa',         ar: 'شاطئ' },
    ],
  },
  food: {
    label: '🍽 Nourriture',
    cards: [
      { fr: 'Eau',              en: 'Water',           es: 'Agua',          ar: 'ماء' },
      { fr: 'Pain',             en: 'Bread',           es: 'Pan',           ar: 'خبز' },
      { fr: 'Café',             en: 'Coffee',          es: 'Café',          ar: 'قهوة' },
      { fr: 'Thé',              en: 'Tea',             es: 'Té',            ar: 'شاي' },
      { fr: 'Lait',             en: 'Milk',            es: 'Leche',         ar: 'حليب' },
      { fr: 'Pomme',            en: 'Apple',           es: 'Manzana',       ar: 'تفاحة' },
      { fr: 'Poulet',           en: 'Chicken',         es: 'Pollo',         ar: 'دجاج' },
      { fr: 'Poisson',          en: 'Fish',            es: 'Pescado',       ar: 'سمك' },
      { fr: 'Riz',              en: 'Rice',            es: 'Arroz',         ar: 'أرز' },
      { fr: 'Légumes',          en: 'Vegetables',      es: 'Verduras',      ar: 'خضروات' },
      { fr: 'Sel',              en: 'Salt',            es: 'Sal',           ar: 'ملح' },
      { fr: 'Sucre',            en: 'Sugar',           es: 'Azúcar',        ar: 'سكر' },
      { fr: 'Petit-déjeuner',   en: 'Breakfast',       es: 'Desayuno',      ar: 'فطور' },
      { fr: 'Déjeuner',         en: 'Lunch',           es: 'Almuerzo',      ar: 'غداء' },
      { fr: 'Dîner',            en: 'Dinner',          es: 'Cena',          ar: 'عشاء' },
    ],
  },
  numbers: {
    label: '🔢 Nombres',
    cards: [
      { fr: 'Zéro',             en: 'Zero',            es: 'Cero',          ar: 'صفر' },
      { fr: 'Un',               en: 'One',             es: 'Uno',           ar: 'واحد' },
      { fr: 'Deux',             en: 'Two',             es: 'Dos',           ar: 'اثنان' },
      { fr: 'Trois',            en: 'Three',           es: 'Tres',          ar: 'ثلاثة' },
      { fr: 'Quatre',           en: 'Four',            es: 'Cuatro',        ar: 'أربعة' },
      { fr: 'Cinq',             en: 'Five',            es: 'Cinco',         ar: 'خمسة' },
      { fr: 'Six',              en: 'Six',             es: 'Seis',          ar: 'ستة' },
      { fr: 'Sept',             en: 'Seven',           es: 'Siete',         ar: 'سبعة' },
      { fr: 'Huit',             en: 'Eight',           es: 'Ocho',          ar: 'ثمانية' },
      { fr: 'Neuf',             en: 'Nine',            es: 'Nueve',         ar: 'تسعة' },
      { fr: 'Dix',              en: 'Ten',             es: 'Diez',          ar: 'عشرة' },
      { fr: 'Vingt',            en: 'Twenty',          es: 'Veinte',        ar: 'عشرون' },
      { fr: 'Cinquante',        en: 'Fifty',           es: 'Cincuenta',     ar: 'خمسون' },
      { fr: 'Cent',             en: 'Hundred',         es: 'Cien',          ar: 'مائة' },
      { fr: 'Mille',            en: 'Thousand',        es: 'Mil',           ar: 'ألف' },
    ],
  },
};

// === Sélection des éléments DOM ===
const langFromEl   = document.getElementById('lang-from');
const langToEl     = document.getElementById('lang-to');
const swapBtn      = document.getElementById('swap-btn');
const inputText    = document.getElementById('input-text');
const outputText   = document.getElementById('output-text');
const translateBtn = document.getElementById('translate-btn');
const charCount    = document.getElementById('char-count');
const copyBtn      = document.getElementById('copy-btn');
const speakBtn     = document.getElementById('speak-btn');
const historySection = document.getElementById('history-section');
const historyList    = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

const HISTORY_KEY = 'linguaflow-history';
const MAX_HISTORY = 8;
const RTL_LANGS = new Set(['ar']);

let currentTranslation = '';
let debounceTimer = null;

// === Compteur de caractères ===
inputText.addEventListener('input', () => {
  charCount.textContent = `${inputText.value.length} / 500`;

  // Debounce : déclenche la traduction 800 ms après la dernière frappe
  clearTimeout(debounceTimer);
  if (inputText.value.trim()) {
    debounceTimer = setTimeout(() => translate(), 800);
  }
});

// === Bouton "Traduire" (déclenchement manuel immédiat) ===
translateBtn.addEventListener('click', () => {
  clearTimeout(debounceTimer);
  translate();
});

// Raccourci : Ctrl/Cmd + Entrée
inputText.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    clearTimeout(debounceTimer);
    translate();
  }
});

// === Bouton "Inverser" les langues ===
swapBtn.addEventListener('click', () => {
  const tmp = langFromEl.value;
  langFromEl.value = langToEl.value;
  langToEl.value = tmp;

  // Si une traduction existe, on remplace le texte source par la traduction
  if (currentTranslation && inputText.value.trim()) {
    inputText.value = currentTranslation;
    charCount.textContent = `${inputText.value.length} / 500`;
  }

  // Animation de rotation
  swapBtn.classList.add('rotating');
  setTimeout(() => swapBtn.classList.remove('rotating'), 500);

  if (inputText.value.trim()) translate();
});

// === Fonction principale de traduction ===
async function translate() {
  const text = inputText.value.trim();
  const from = langFromEl.value;
  const to   = langToEl.value;

  if (!text) {
    resetOutput();
    return;
  }

  translateBtn.classList.add('loading');
  translateBtn.disabled = true;

  try {
    const url = `/api/translate?text=${encodeURIComponent(text)}&from=${from}&to=${to}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      showError(data.error || 'Erreur de traduction.');
      return;
    }

    currentTranslation = data.translation;
    showTranslation(currentTranslation, to);
    saveToHistory(text, currentTranslation, from, to);
  } catch (err) {
    console.error(err);
    showError('Impossible de joindre le serveur. Vérifiez votre connexion.');
  } finally {
    translateBtn.classList.remove('loading');
    translateBtn.disabled = false;
  }
}

function showTranslation(text, toLang) {
  outputText.textContent = text;
  outputText.classList.toggle('rtl', RTL_LANGS.has(toLang));
  copyBtn.disabled = false;
  speakBtn.disabled = false;
}

function showError(msg) {
  outputText.innerHTML = `<span class="placeholder" style="color:#e74c3c;">⚠ ${msg}</span>`;
  outputText.classList.remove('rtl');
  copyBtn.disabled = true;
  speakBtn.disabled = true;
  currentTranslation = '';
}

function resetOutput() {
  outputText.innerHTML = '<span class="placeholder">La traduction apparaîtra ici…</span>';
  outputText.classList.remove('rtl');
  copyBtn.disabled = true;
  speakBtn.disabled = true;
  currentTranslation = '';
}

// === Bouton "Copier" ===
copyBtn.addEventListener('click', async () => {
  if (!currentTranslation) return;
  try {
    await navigator.clipboard.writeText(currentTranslation);
    copyBtn.classList.add('copied');
    setTimeout(() => copyBtn.classList.remove('copied'), 1500);
  } catch (err) {
    console.error('Échec de la copie :', err);
  }
});

// === Bouton "Écouter" (Text-to-Speech natif) ===
speakBtn.addEventListener('click', () => {
  if (!currentTranslation || !('speechSynthesis' in window)) return;

  // Stoppe toute lecture en cours
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(currentTranslation);
  // Correspondance code → BCP-47 pour la voix
  const langMap = { fr: 'fr-FR', en: 'en-US', es: 'es-ES', ar: 'ar-SA' };
  utterance.lang = langMap[langToEl.value] || 'en-US';
  utterance.rate = 0.95;

  utterance.onstart = () => speakBtn.classList.add('speaking');
  utterance.onend   = () => speakBtn.classList.remove('speaking');
  utterance.onerror = () => speakBtn.classList.remove('speaking');

  window.speechSynthesis.speak(utterance);
});

// === Historique (localStorage) ===
function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function saveToHistory(src, dst, from, to) {
  let history = loadHistory();
  // Évite les doublons consécutifs
  if (history[0] && history[0].src === src && history[0].from === from && history[0].to === to) return;
  history.unshift({ src, dst, from, to });
  history = history.slice(0, MAX_HISTORY);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const history = loadHistory();
  if (history.length === 0) {
    historySection.hidden = true;
    return;
  }
  historySection.hidden = false;
  historyList.innerHTML = '';
  history.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'history-item';
    li.innerHTML = `
      <div class="langs">${item.from} → ${item.to}</div>
      <div class="src"></div>
      <div class="dst"></div>
    `;
    // textContent pour éviter toute injection HTML
    li.querySelector('.src').textContent = item.src;
    li.querySelector('.dst').textContent = item.dst;
    li.addEventListener('click', () => {
      langFromEl.value = item.from;
      langToEl.value = item.to;
      inputText.value = item.src;
      charCount.textContent = `${item.src.length} / 500`;
      currentTranslation = item.dst;
      showTranslation(item.dst, item.to);
      inputText.focus();
    });
    historyList.appendChild(li);
  });
}

clearHistoryBtn.addEventListener('click', () => {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
});

// === Onglets ===
const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => {
      const active = b.dataset.tab === target;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', active);
    });
    tabPanels.forEach(p => p.classList.toggle('active', p.id === `tab-${target}`));
  });
});

// === Flashcards ===
const themeRow      = document.getElementById('theme-row');
const flashcardEl   = document.getElementById('flashcard');
const fcFrontLang   = document.getElementById('fc-front-lang');
const fcFrontText   = document.getElementById('fc-front-text');
const fcBackLang    = document.getElementById('fc-back-lang');
const fcBackText    = document.getElementById('fc-back-text');
const fcCounter     = document.getElementById('fc-counter');
const fcProgressFill = document.getElementById('fc-progress-fill');
const fcPrevBtn     = document.getElementById('fc-prev-btn');
const fcNextBtn     = document.getElementById('fc-next-btn');
const fcFlipBtn     = document.getElementById('fc-flip-btn');
const fcShuffleBtn  = document.getElementById('fc-shuffle-btn');
const fcSpeakBtn    = document.getElementById('fc-speak-btn');

const fcState = {
  themeKey: 'all',
  index: 0,
  cards: [],
};

// Génère les puces de thèmes : "Toutes" + un par catégorie
function buildThemeChips() {
  const themes = [
    { key: 'all', label: '🎲 Toutes' },
    ...Object.entries(VOCABULARY).map(([key, t]) => ({ key, label: t.label })),
  ];
  themeRow.innerHTML = '';
  themes.forEach(t => {
    const chip = document.createElement('button');
    chip.className = 'theme-chip' + (t.key === fcState.themeKey ? ' active' : '');
    chip.textContent = t.label;
    chip.addEventListener('click', () => selectTheme(t.key));
    themeRow.appendChild(chip);
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function selectTheme(key) {
  fcState.themeKey = key;
  // "Toutes" : on regroupe les cartes de tous les thèmes et on les mélange
  const sourceCards = key === 'all'
    ? Object.values(VOCABULARY).flatMap(t => t.cards)
    : VOCABULARY[key].cards;
  fcState.cards = key === 'all' ? shuffle(sourceCards) : [...sourceCards];
  fcState.index = 0;

  // Met à jour l'état "actif" des chips
  themeRow.querySelectorAll('.theme-chip').forEach((chip, idx) => {
    const keyAtIdx = idx === 0 ? 'all' : Object.keys(VOCABULARY)[idx - 1];
    chip.classList.toggle('active', keyAtIdx === key);
  });

  renderCard();
}

function renderCard() {
  if (fcState.cards.length === 0) return;
  flashcardEl.classList.remove('flipped'); // toujours commencer face avant

  const card = fcState.cards[fcState.index];
  const fromLang = langFromEl.value;
  const toLang   = langToEl.value;

  fcFrontLang.textContent = fromLang.toUpperCase();
  fcFrontText.textContent = card[fromLang] || '—';
  fcFrontText.classList.toggle('rtl', RTL_LANGS.has(fromLang));

  fcBackLang.textContent = toLang.toUpperCase();
  fcBackText.textContent = card[toLang] || '—';
  fcBackText.classList.toggle('rtl', RTL_LANGS.has(toLang));

  fcCounter.textContent = `${fcState.index + 1} / ${fcState.cards.length}`;
  const pct = ((fcState.index + 1) / fcState.cards.length) * 100;
  fcProgressFill.style.width = `${pct}%`;
}

function nextCard() {
  fcState.index = (fcState.index + 1) % fcState.cards.length;
  renderCard();
}
function prevCard() {
  fcState.index = (fcState.index - 1 + fcState.cards.length) % fcState.cards.length;
  renderCard();
}
function flipCard() {
  flashcardEl.classList.toggle('flipped');
}

// Événements flashcards
flashcardEl.addEventListener('click', flipCard);
flashcardEl.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(); }
});
fcFlipBtn.addEventListener('click', (e) => { e.stopPropagation(); flipCard(); });
fcNextBtn.addEventListener('click', nextCard);
fcPrevBtn.addEventListener('click', prevCard);
fcShuffleBtn.addEventListener('click', () => {
  fcState.cards = shuffle(fcState.cards);
  fcState.index = 0;
  renderCard();
});

// Bouton "écouter" sur la face arrière
fcSpeakBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!('speechSynthesis' in window)) return;
  const card = fcState.cards[fcState.index];
  const toLang = langToEl.value;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(card[toLang]);
  const langMap = { fr: 'fr-FR', en: 'en-US', es: 'es-ES', ar: 'ar-SA' };
  utterance.lang = langMap[toLang] || 'en-US';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
});

// Quand l'utilisateur change de langue source/cible, on actualise la carte affichée
langFromEl.addEventListener('change', () => { if (fcState.cards.length) renderCard(); });
langToEl.addEventListener('change',   () => { if (fcState.cards.length) renderCard(); });

// Raccourcis clavier dans l'onglet Flashcards : flèches ← →
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('tab-flashcards').classList.contains('active')) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight') nextCard();
  if (e.key === 'ArrowLeft')  prevCard();
});

// === Initialisation ===
renderHistory();
buildThemeChips();
selectTheme('all'); // démarre sur "Toutes" mélangées