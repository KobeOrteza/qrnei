/* =========================================================
   DATA
========================================================= */
const HUNDRED_THINGS = ["I like how your name, Shanelle, somehow becomes even cuter when I call you Nei, wash me Nei, Wash me NeiNei.", "I like listening to you speak Japanese.", "I like how “Nei” became a name that feels special to me.", "I like knowing that a random “do u play codm” started all of this UHAUAUAUHUAHUAHUAHU.", "I like how three months somehow passed without me noticing.", "I like how talking to you never feels forced.", "I like having someone I can randomly message about absolutely nothing.", "I like how our conversations can go in the weirdest directions.", "I like the little things you say that randomly stay in my head.", "I like your “time is gold po” moment HAHAHA.", "I like how your messages have their own personality.", "I like the random energy you bring into a conversation.", "I like how easily you can make me laugh.", "I like the way you make simple conversations memorable.", "I like how comfortable talking to you has become.", "I like being able to be silly around you.", "I like how I don't have to overthink every message I send.", "I like the little jokes that somehow become our thing.", "I like how you can make an ordinary day feel a little more interesting.", "I like having someone whose messages I actually look forward to.", "I like your creative side.", "I like the fact that you make anik-anik things just because you can.", "I like how clay becomes something completely different when you start creating with it.", "I like imagining you making little jewelry holders and random creations.", "I like the thought you probably put into the things you make.", "I like how painting gives you another way to express yourself.", "I like that you have hobbies that let you create instead of just consume.", "I like how your creativity seems to show up in little ways.", "I like that you can turn something simple into something cute.", "I like knowing there's a creative side of you I still want to discover more of.", "I like your weekly pickleball tradition, ay meron pa ba now, cuz bz and all UAHUAHUAH.", "I like knowing that you get to spend that time with your parents.", "I like how family to you can be part of something as simple as a weekly game, huiei.", "I like imagining how competitive those pickleball matches probably get even tho natamaan ka ni papa mo UAHUAHUHAUHA.", "I like that you have little routines to look forward to.", "I like how you can enjoy something without needing a huge occasion for it.", "I like the energy you probably bring when you're having fun.", "I like that you make room for both hobbies and family.", "I like knowing there are parts of your week that are just yours.", "I like how those small routines make your life feel uniquely yours.", "I like your relationship with music.", "I like knowing that there's probably a song playing somewhere around you most of the time.", "I like wondering what song you're listening to whenever I think about you.", "I like how music gets to be part of your everyday life.", "I like imagining you having completely different songs for completely different moods.", "I like that you can find comfort in something as simple as a good song.", "I like how music seems to follow you everywhere.", "I like the thought that some songs might eventually remind you of certain moments.", "I like how your taste in music is another little piece of you.", "I like getting to know you through the things you listen to.", "I like your love for movies and series.", "I like how easily a good story can pull you in.", "I like that The Amazing Spider-Man made its way into your favorites.", "I like how Hachiko is somehow a favorite even though it destroys everyone emotionally.", "I like that Loki was your first MCU crush HAHAHA.", "I like hearing about the characters you become attached to.", "I like how certain stories clearly leave an impression on you.", "I like the way your favorites tell little pieces of your personality.", "I like discovering another movie or series that makes me think of you.", "I like that your watchlist probably contains a little bit of everything.", "I like your CODM side, trastok, and actually the reason why I'm talking to you right neow.", "I like knowing that you can get competitive over a game.", "I like the fact that Minecraft is part of your gaming world too.", "I like how funny it is that your interests can go from peaceful Minecraft moments to intense CODM games.", "I like imagining your reactions when a game goes completely wrong.", "I like that games are another thing you can genuinely have fun with.", "I like how easy it is to imagine you getting completely invested in a match.", "I like that your hobbies aren't all the same kind of thing.", "I like how there's a playful side of you that comes out through games.", "I like knowing there's probably a competitive version of Nei waiting to appear HAHAHA.", "I like your love for blue.", "I like how blue somehow feels like it belongs to you now.", "I like that I can see something blue and randomly think of you.", "I like imagining your world filled with different shades of blue.", "I like how a favorite color can somehow become part of someone's identity.", "I like your love for Miffy.", "I like how cute your taste can be.", "I like how blue and Miffy together feel very specifically you.", "I like the tiny things you choose to love.", "I like how those little preferences make you easy to remember.", "I like knowing about Yum, Yuki, and Chloe and all of the other dogs engk, marami sila UAUAUHA.", "I like the fact that you have dogs to come home to.", "I like how each of their names is somehow easy to remember.", "I like Chloe's entire 2021 biting-you lore HAHAHA, not funny but uhm.", "I like that even a chaotic memory like that became part of your story.", "I like how much personality seems to exist in the stories you tell about your dogs.", "I like seeing the softer side of you when you talk about the things you care about.", "I like knowing that your pets are part of your everyday life.", "I like how the things you love become little pieces of the stories you tell.", "I like learning about the people, pets, and things that matter to you.", "I like how focused you are before exams and quizzes.", "I like how you become a prof to your friends AIUHAIJA.", "I'd like to see da Brazilian dance sampol, Kimi.", "I like the little voice messages you sent (music to my ears) luh oa.", "I like how certain little details about you somehow stick with me.", "I like remembering your favorite foods without even realizing I memorized them.", "I like that yogurt, pesto, and liempo can all somehow remind me of you.", "I like how even something as random as Mallows can become a little Nei fact in my brain.", "I like having small things throughout the day that make me think of you.", "I like how naturally you became someone I want to tell things to.", "I like the way your presence slowly became part of my everyday life.", "I like that getting to know you has given me so many tiny memories to keep.", "I like how, after three months, oa wala pa pero it's close UAUHUAHUA, there are already so many things about you that I genuinely appreciate.", "I like you, Nei, just because you are you — for all the little reasons I can explain, and probably just as many that I can't. ♡"];
const QUIZ = [
  { en: 'How do you say "Good morning"?', options: ['おはよう', 'こんばんは', 'ありがとう', 'さようなら'], answer: 0 },
  { en: 'How do you say "Good night"?', options: ['おやすみ', 'こんにちは', 'すみません', 'ただいま'], answer: 0 },
  { en: 'How do you say "Thank you"?', options: ['ごめんね', 'ありがとう', 'おねがい', 'はじめまして'], answer: 1 },
  { en: 'How do you say "Sorry"?', options: ['ごめんね', 'どうも', 'おかえり', 'またね'], answer: 0 },
  { en: 'How do you say "Hello"?', options: ['さようなら', 'おやすみ', 'こんにちは', 'いただきます'], answer: 2 },
  { en: 'How do you say "Friend"?', options: ['ともだち', 'かぞく', 'せんせい', 'がっこう'], answer: 0 },
  { en: 'How do you say "Water"?', options: ['おちゃ', 'みず', 'たべもの', 'ひかり'], answer: 1 },
  { en: 'How do you say "Cute"?', options: ['かわいい', 'こわい', 'さむい', 'うるさい'], answer: 0 },
  { en: 'How do you say "Food"?', options: ['のみもの', 'たべもの', 'くだもの', 'いろ'], answer: 1 },
  { en: 'How do you say "I like you"?', options: ['すきです', 'きらいです', 'げんきです', 'たのしいです'], answer: 0 }
];

const ITEMS_PER_PAGE = 10;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   AMBIENT PETALS
========================================================= */
const petalField = document.getElementById('petalField');
const PETAL_GLYPHS = ['❀', '✿', '❁', '·'];
let activePetals = 0;
function spawnPetal() {
  if (reduceMotion || activePetals > 14) return;
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = PETAL_GLYPHS[Math.floor(Math.random() * PETAL_GLYPHS.length)];
  p.style.left = `${Math.random() * 100}%`;
  p.style.setProperty('--drift', `${(Math.random() * 120 - 60).toFixed(0)}px`);
  p.style.animationDuration = `${8 + Math.random() * 6}s`;
  p.style.fontSize = `${12 + Math.random() * 12}px`;
  petalField.appendChild(p);
  activePetals++;
  p.addEventListener('animationend', () => { p.remove(); activePetals--; });
}
if (!reduceMotion) {
  for (let i = 0; i < 5; i++) setTimeout(spawnPetal, i * 900);
  setInterval(spawnPetal, 1800);
}

function burstPetals(x, y) {
  if (reduceMotion) return;
  const glyphs = ['❀', '✿', '♡', '❁'];
  for (let i = 0; i < 10; i++) {
    const b = document.createElement('span');
    b.className = 'burst-petal';
    b.textContent = glyphs[i % glyphs.length];
    b.style.left = `${x}px`;
    b.style.top = `${y}px`;
    const angle = (Math.PI * 2 * i) / 10;
    const dist = 70 + Math.random() * 50;
    b.style.setProperty('--bx', `${Math.cos(angle) * dist}px`);
    b.style.setProperty('--by', `${Math.sin(angle) * dist}px`);
    document.body.appendChild(b);
    b.addEventListener('animationend', () => b.remove());
  }
}

/* =========================================================
   CURSOR GLOW
========================================================= */
const glowCursor = document.getElementById('glowCursor');
if (window.matchMedia('(hover: hover)').matches && !reduceMotion) {
  window.addEventListener('mousemove', (e) => {
    glowCursor.style.left = `${e.clientX}px`;
    glowCursor.style.top = `${e.clientY}px`;
  });
}

/* =========================================================
   SOFT CLICK SOUND (synthesized, no external asset)
========================================================= */
let audioCtx;
function playClick() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(720, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(920, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.18);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
  } catch (e) { /* audio not available, ignore */ }
}
document.querySelectorAll('.btn-primary').forEach(btn => btn.addEventListener('click', playClick));

/* =========================================================
   MUSIC WIDGET
========================================================= */
const bgm = document.getElementById('bgm');
const musicToggle = document.getElementById('musicToggle');
const musicNote = document.getElementById('musicNote');
const volumeSlider = document.getElementById('volumeSlider');
bgm.volume = 0.5;
let musicStarted = false;

function tryPlayMusic() {
  bgm.play().then(() => {
    musicStarted = true;
    musicToggle.classList.add('playing');
    musicNote.textContent = 'now playing ♪';
  }).catch(() => {
    musicNote.textContent = 'add song.mp3 to this folder to play music';
  });
}

musicToggle.addEventListener('click', () => {
  if (bgm.paused) {
    tryPlayMusic();
  } else {
    bgm.pause();
    musicToggle.classList.remove('playing');
    musicNote.textContent = 'paused — tap ♪ to resume';
  }
});
volumeSlider.addEventListener('input', () => { bgm.volume = Number(volumeSlider.value); });

/* =========================================================
   SCENE ROUTER
========================================================= */
const scenes = {};
document.querySelectorAll('.scene').forEach(s => { scenes[s.dataset.scene] = s; });
let currentScene = 'landing';

function goToScene(name, opts = {}) {
  const from = scenes[currentScene];
  const to = scenes[name];
  if (!to || from === to) return;

  if (opts.burstFrom) burstPetals(opts.burstFrom.x, opts.burstFrom.y);

  const finishSwitch = () => {
    from.classList.remove('scene-active', 'scene-leaving');
    to.classList.add('scene-active', 'scene-entering');
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    currentScene = name;
    setTimeout(() => to.classList.remove('scene-entering'), 550);
    if (name === 'confession') setupConfessionReveal();
    if (name === 'book') renderBookPage();
  };

  if (reduceMotion) { finishSwitch(); return; }
  from.classList.add('scene-leaving');
  setTimeout(finishSwitch, 320);
}

/* =========================================================
   QUIZ LOGIC
========================================================= */
let quizIndex = 0;
const quizPicked = Array(QUIZ.length).fill(null);

const quizProgressEl = document.getElementById('quizProgress');
const quizQuestionEl = document.getElementById('quizQuestion');
const quizOptionsEl = document.getElementById('quizOptions');
const quizDotsEl = document.getElementById('quizDots');
const quizBackBtn = document.getElementById('quizBack');
const quizNextBtn = document.getElementById('quizNext');

function pad2(n) { return n < 10 ? `0${n}` : `${n}`; }

function initQuizDots() {
  quizDotsEl.innerHTML = QUIZ.map((_, i) => `<span data-i="${i}"></span>`).join('');
}

function renderQuiz() {
  const item = QUIZ[quizIndex];
  quizProgressEl.textContent = `${pad2(quizIndex + 1)} / ${pad2(QUIZ.length)}`;
  quizQuestionEl.textContent = item.en;
  quizBackBtn.disabled = quizIndex === 0;
  quizNextBtn.disabled = quizPicked[quizIndex] === null;
  quizNextBtn.textContent = quizIndex === QUIZ.length - 1 ? 'finish →' : 'next →';

  [...quizDotsEl.children].forEach((dot, i) => {
    dot.className = i === quizIndex ? 'active' : (quizPicked[i] !== null ? 'done' : '');
  });

  quizOptionsEl.innerHTML = item.options.map((opt, i) => `
    <button type="button" class="quiz-opt" data-i="${i}">${opt}</button>
  `).join('');

  const picked = quizPicked[quizIndex];
  const optionEls = [...quizOptionsEl.children];
  optionEls.forEach(btn => btn.addEventListener('click', () => selectQuizOption(Number(btn.dataset.i))));

  if (picked !== null) {
    optionEls.forEach((btn, i) => {
      btn.disabled = true;
      if (i === item.answer) btn.classList.add('opt-correct');
      else if (i === picked) btn.classList.add('opt-incorrect');
    });
  }
}

function selectQuizOption(i) {
  if (quizPicked[quizIndex] !== null) return;
  quizPicked[quizIndex] = i;
  renderQuiz();
}

function nextQuiz() {
  if (quizPicked[quizIndex] === null) return;
  if (quizIndex < QUIZ.length - 1) {
    quizIndex++;
    renderQuiz();
  } else {
    const score = QUIZ.reduce((sum, q, i) => sum + (q.answer === quizPicked[i] ? 1 : 0), 0);
    document.getElementById('quizResult').textContent = `You got ${score} / ${QUIZ.length} ♡`;
    goToScene('madeit');
  }
}

function prevQuiz() {
  if (quizIndex > 0) { quizIndex--; renderQuiz(); }
}

quizNextBtn.addEventListener('click', nextQuiz);
quizBackBtn.addEventListener('click', prevQuiz);

/* =========================================================
   CONFESSION REVEAL
========================================================= */
let confessionObserver = null;
function setupConfessionReveal() {
  const paras = document.querySelectorAll('#scene-confession .reveal-p');
  if (confessionObserver) confessionObserver.disconnect();
  if (reduceMotion) { paras.forEach(p => p.classList.add('in-view')); return; }
  confessionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        confessionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });
  paras.forEach(p => confessionObserver.observe(p));
}

/* =========================================================
   BOOK / 100 THINGS
========================================================= */
let bookPage = 0;
const totalPages = Math.ceil(HUNDRED_THINGS.length / ITEMS_PER_PAGE);
const pageListEl = document.getElementById('pageList');
const bookPageCountEl = document.getElementById('bookPageCount');
const bookPrevBtn = document.getElementById('bookPrev');
const bookNextBtn = document.getElementById('bookNext');
const downloadWrap = document.getElementById('downloadWrap');

function renderBookPage() {
  const start = bookPage * ITEMS_PER_PAGE;
  const pageItems = HUNDRED_THINGS.slice(start, start + ITEMS_PER_PAGE);
  pageListEl.setAttribute('start', String(start + 1));
  pageListEl.innerHTML = pageItems.map(text => `<li>${text}</li>`).join('');
  bookPageCountEl.textContent = `page ${bookPage + 1} / ${totalPages}`;
  bookPrevBtn.disabled = bookPage === 0;
  bookNextBtn.disabled = bookPage === totalPages - 1;
  bookNextBtn.textContent = bookPage === totalPages - 1 ? 'the end ♡' : 'next page →';
  downloadWrap.classList.toggle('visible', bookPage === totalPages - 1);

  const pageEl = document.getElementById('bookPage');
  pageEl.style.animation = 'none';
  void pageEl.offsetWidth;
  pageEl.style.animation = '';
}

bookPrevBtn.addEventListener('click', () => { if (bookPage > 0) { bookPage--; renderBookPage(); } });
bookNextBtn.addEventListener('click', () => { if (bookPage < totalPages - 1) { bookPage++; renderBookPage(); } });

/* =========================================================
   NAVIGATION WIRING
========================================================= */
document.getElementById('startBtn').addEventListener('click', (e) => {
  if (!musicStarted) tryPlayMusic();
  const r = e.target.getBoundingClientRect();
  goToScene('quiz', { burstFrom: { x: r.left + r.width / 2, y: r.top + r.height / 2 } });
});
document.getElementById('continueBtn').addEventListener('click', (e) => {
  const r = e.target.getBoundingClientRect();
  goToScene('choice', { burstFrom: { x: r.left + r.width / 2, y: r.top + r.height / 2 } });
});
document.getElementById('choiceContinueBtn').addEventListener('click', (e) => {
  const r = e.target.getBoundingClientRect();
  goToScene('confession', { burstFrom: { x: r.left + r.width / 2, y: r.top + r.height / 2 } });
});
document.getElementById('choicePauseBtn').addEventListener('click', () => {
  goToScene('pause');
});
document.getElementById('pauseBackBtn').addEventListener('click', () => {
  goToScene('landing');
});
document.getElementById('afterLetterBtn').addEventListener('click', (e) => {
  const r = e.target.getBoundingClientRect();
  goToScene('before100', { burstFrom: { x: r.left + r.width / 2, y: r.top + r.height / 2 } });
});
document.getElementById('openBookBtn').addEventListener('click', (e) => {
  const r = e.target.getBoundingClientRect();
  goToScene('book', { burstFrom: { x: r.left + r.width / 2, y: r.top + r.height / 2 } });
});

/* =========================================================
   INIT
========================================================= */
initQuizDots();
renderQuiz();
