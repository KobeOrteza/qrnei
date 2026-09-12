NEI — INTERACTIVE CONFESSION EXPERIENCE
=========================================

Open index.html in any modern browser (double-click it, or drag it into a
Chrome/Edge/Firefox window). No server or install needed.

WHAT'S INSIDE
-------------
index.html   the whole experience (all 6 scenes)
styles.css   all styling
script.js    all behavior + the 100 Things list + quiz questions
bmo.png, miffy.png, spiderman.png   the character art, used throughout
100-things-i-like-about-you.pdf     the downloadable keepsake at the end

THE MUSIC (P.Y.T. by Michael Jackson)
--------------------------------------
I can't legally source or embed that song for you — Anthropic's policy
(and just, copyright law) doesn't let me fetch/attach a copyrighted
commercial track. But the site is wired up to play it:

  1. Get your own legally-owned copy of the song as an MP3.
  2. Rename the file to exactly: song.mp3
  3. Drop it in this same folder, next to index.html.

That's it — the little "♪" widget in the top-right corner will pick it up
and start it the moment Nei taps "はじめましょう". If the file isn't
there, the site still works fine — the widget just shows a quiet note
that music isn't set up yet, instead of breaking anything.

HOW THE EXPERIENCE IS STRUCTURED
---------------------------------
It's one HTML file, but built as 6 full-screen "scenes" that only ever
show one at a time, so it never feels like a long scrolling page:

  1. Landing            — こんにちは, Nei + the "はじめましょう" button
  2. Quiz                — 10 questions, English prompts / Japanese-only answers
  3. You Made It         — score + a breath before the confession
  4. Confession          — your letter, revealed paragraph by paragraph
  5. A Little Something  — the teaser before the keepsake
  6. The 100 Things      — a page-by-page "book" of all 100, ending in the
                            PDF download

Doing it this way (instead of separate .html files per page) is what lets
the music keep playing seamlessly as she moves through every scene, and
keeps the whole thing easy for you to edit later — it's still just three
plain files.

EDITING THINGS LATER
---------------------
- Quiz questions:      the QUIZ array near the top of script.js
- The 100 Things list: the HUNDRED_THINGS array at the very top of script.js
- The confession text: search index.html for "reveal-p" — each paragraph
  is inside a <p class="reveal-p">
- Colors: the :root section at the top of styles.css (all named like
  --sky-100, --sky-500, etc.)

Made with a lot of blue, flowers, and courage ♡
