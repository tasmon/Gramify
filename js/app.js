/* My Gramify — application logic, written from scratch. */
(function () {
  "use strict";

  const $ = (s, c) => (c || document).querySelector(s);
  const app = $("#app");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // ---------------------------------------------------------------
  // Progress storage (minimal: chapters read, best score per chapter)
  // ---------------------------------------------------------------
  const STORE_KEY = "gramifyProgressV1";
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { read: {}, scores: {}, fullTestBest: null };
  }
  function saveProgress() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) {}
  }
  let progress = loadProgress();

  // ---------------------------------------------------------------
  // Router state
  // ---------------------------------------------------------------
  const state = { view: "home", chapterId: null, test: null };

  function nav(view, extra) {
    state.view = view;
    Object.assign(state, extra || {});
    window.scrollTo(0, 0);
    render();
  }

  // ---------------------------------------------------------------
  // Toast
  // ---------------------------------------------------------------
  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  // ---------------------------------------------------------------
  // Seeded shuffle helpers
  // ---------------------------------------------------------------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------------------------------------------------------------
  // Views
  // ---------------------------------------------------------------
  function viewHome() {
    const chapters = window.CHAPTERS;
    const totalRead = Object.keys(progress.read).length;
    let html =
      '<div class="toc-intro"><h1>My Gramify</h1>' +
      '<p class="muted">An English grammar reference, organised the way a course book is: parts, chapters, and a test at the end of each one.</p>' +
      '<p class="muted">' + totalRead + " of " + chapters.length + " chapters read.</p>" +
      '<button type="button" class="btn btn-p btn-lg mt-1" data-nav="test">Take the full test</button>' +
      "</div>";

    window.PARTS.forEach((part) => {
      html += '<div class="toc-part">Part ' + toRoman(part.id) + " — " + esc(part.title) + "</div>";
      chapters.filter((c) => c.part === part.id).forEach((c) => {
        const done = progress.read[c.id];
        const score = progress.scores[c.id];
        html +=
          '<button type="button" class="toc-chapter" data-open-chapter="' + c.id + '">' +
          '<span class="toc-num">' + c.number + "</span>" +
          '<span class="toc-title">' + esc(c.title) + "</span>" +
          '<span class="toc-status' + (done ? " done" : "") + '">' +
          (score != null ? score + "%" : done ? "Read" : "") +
          "</span></button>";
      });
    });
    app.innerHTML = html;
  }

  function toRoman(n) {
    const vals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
    return vals[n - 1] || String(n);
  }

  function viewChapter(id) {
    const chapters = window.CHAPTERS;
    const c = chapters.find((x) => x.id === id);
    if (!c) { nav("home"); return; }
    progress.read[id] = true;
    saveProgress();

    const idx = chapters.indexOf(c);
    const prev = chapters[idx - 1];
    const next = chapters[idx + 1];

    let html =
      '<div class="chapter-head">' +
      '<div class="chapter-eyebrow">Part ' + toRoman(c.part) + " · Chapter " + c.number + "</div>" +
      "<h1>" + esc(c.title) + "</h1>" +
      '<p class="chapter-summary">' + esc(c.summary) + "</p>" +
      "</div>";

    c.sections.forEach((s) => {
      html += '<div class="section-block"><h2>' + esc(s.heading) + "</h2>";
      (s.body || []).forEach((p) => { html += "<p>" + esc(p) + "</p>"; });
      if (s.examples && s.examples.length) {
        html += '<ul class="example-list">';
        s.examples.forEach((e) => {
          html +=
            '<li class="example-item"><div class="example-text">' + esc(e.text) + "</div>" +
            (e.note ? '<div class="example-note">' + esc(e.note) + "</div>" : "") +
            "</li>";
        });
        html += "</ul>";
      }
      html += "</div>";
    });

    if (c.mistakes && c.mistakes.length) {
      html +=
        '<div class="section-block"><h2>Common mistakes</h2>' +
        '<table class="mistakes-table"><thead><tr><th>Instead of</th><th>Write</th></tr></thead><tbody>';
      c.mistakes.forEach((m) => {
        html +=
          "<tr><td><span class=\"wrong-text\">" + esc(m.wrong) + "</span></td>" +
          "<td><span class=\"right-text\">" + esc(m.right) + "</span>" +
          (m.why ? '<div class="example-note mt-1">' + esc(m.why) + "</div>" : "") +
          "</td></tr>";
      });
      html += "</tbody></table></div>";
    }

    if (c.recap && c.recap.length) {
      html +=
        '<div class="section-block"><h2>In short</h2><ul class="recap-list">' +
        c.recap.map((r) => "<li>" + esc(r) + "</li>").join("") +
        "</ul></div>";
    }

    html += '<button type="button" class="btn btn-p btn-lg btn-block mt-1" data-open-test="' + c.id + '">Test yourself on this chapter</button>';

    html += '<div class="chapter-nav">';
    html += prev
      ? '<button type="button" class="chapter-nav-btn" data-open-chapter="' + prev.id + '"><div class="chapter-nav-label">← Previous</div><div class="chapter-nav-title">' + esc(prev.title) + "</div></button>"
      : "<div></div>";
    html += next
      ? '<button type="button" class="chapter-nav-btn" data-open-chapter="' + next.id + '"><div class="chapter-nav-label">Next →</div><div class="chapter-nav-title">' + esc(next.title) + "</div></button>"
      : "<div></div>";
    html += "</div>";

    app.innerHTML = html;
  }

  // ---------------------------------------------------------------
  // Test engine (used for both single-chapter and full test)
  // ---------------------------------------------------------------
  function startChapterTest(chapterId) {
    const bank = (window.QUESTIONS[chapterId] || []).slice();
    if (!bank.length) { toast("No test available for this chapter yet."); return; }
    const qs = shuffle(bank).slice(0, Math.min(10, bank.length));
    nav("test", { test: { scope: "chapter", chapterId, qs, i: 0, answers: [], answered: false, chosen: null, typed: "" } });
  }

  function startFullTest() {
    const chapters = window.CHAPTERS;
    let pool = [];
    chapters.forEach((c) => {
      const bank = window.QUESTIONS[c.id] || [];
      if (bank.length) pool = pool.concat(shuffle(bank).slice(0, 2).map((q) => Object.assign({ _chapter: c.id }, q)));
    });
    pool = shuffle(pool);
    nav("test", { test: { scope: "full", qs: pool, i: 0, answers: [], answered: false, chosen: null, typed: "" } });
  }

  function checkTyped(q, typed) {
    const norm = (s) => String(s || "").trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,!?]+$/, "");
    const t = norm(typed);
    return (q.accepted || []).some((a) => norm(a) === t);
  }

  function viewTest() {
    const t = state.test;
    if (!t) { nav("home"); return; }

    if (t.i >= t.qs.length) {
      app.innerHTML = renderScoreReport(t);
      return;
    }

    const q = t.qs[t.i];
    const num = t.i + 1;
    const pct = Math.round((t.i / t.qs.length) * 100);

    let html =
      '<div class="test-progress"><span>Question ' + num + " of " + t.qs.length + "</span>" +
      "<span>" + (t.scope === "full" ? "Full test" : "Chapter test") + "</span></div>" +
      '<div class="test-bar"><div class="test-bar-fill" style="width:' + pct + '%"></div></div>' +
      '<div class="card q-card"><div class="q-prompt">' + esc(q.prompt) + "</div>";

    if (q.type === "mcq") {
      html += q.options.map((opt, i) => {
        let cls = "q-option";
        if (t.answered) {
          if (i === q.answer) cls += " correct";
          else if (i === t.chosen) cls += " incorrect";
        } else if (i === t.chosen) cls += " selected";
        return '<button type="button" class="' + cls + '" data-pick-option="' + i + '"' + (t.answered ? " disabled" : "") + ">" + esc(opt) + "</button>";
      }).join("");
    } else {
      html +=
        '<input type="text" class="q-type-input" id="typedAnswer" placeholder="Type your answer" value="' + esc(t.typed) + '"' +
        (t.answered ? " disabled" : "") + ' autocomplete="off" autocapitalize="off" spellcheck="false" />';
      if (!t.answered) {
        html += '<button type="button" class="btn btn-p btn-block" data-submit-typed>Check answer</button>';
      }
    }

    if (t.answered) {
      const correct = q.type === "mcq" ? t.chosen === q.answer : checkTyped(q, t.typed);
      html +=
        '<div class="q-feedback ' + (correct ? "ok" : "no") + '">' +
        '<div class="q-feedback-title">' + (correct ? "Correct" : "Not quite") + "</div>" +
        (!correct && q.type === "type" ? '<div class="mb-1">Accepted answer: <strong>' + esc(q.accepted[0]) + "</strong></div>" : "") +
        esc(q.explain) +
        "</div>" +
        '<button type="button" class="btn btn-p btn-block" data-next-question>' + (t.i + 1 >= t.qs.length ? "See results" : "Next question") + "</button>";
    }

    html += "</div>";
    app.innerHTML = html;

    if (q.type === "type" && !t.answered) {
      const input = $("#typedAnswer");
      if (input) {
        input.focus();
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") submitTyped(); });
        input.addEventListener("input", (e) => { t.typed = e.target.value; });
      }
    }
  }

  function submitTyped() {
    const t = state.test;
    const q = t.qs[t.i];
    if (t.answered) return;
    t.answered = true;
    const correct = checkTyped(q, t.typed);
    t.answers.push({ q, correct, given: t.typed });
    render();
  }

  function renderScoreReport(t) {
    const score = t.answers.filter((a) => a.correct).length;
    const pct = Math.round((score / t.qs.length) * 100);
    if (t.scope === "chapter") {
      const prevBest = progress.scores[t.chapterId];
      if (prevBest == null || pct > prevBest) progress.scores[t.chapterId] = pct;
    } else {
      if (progress.fullTestBest == null || pct > progress.fullTestBest) progress.fullTestBest = pct;
    }
    saveProgress();

    let html =
      '<div class="card score-report"><div class="score-number">' + pct + '%</div>' +
      '<div class="score-label">' + score + " of " + t.qs.length + " correct</div>" +
      '<div class="btn-row" style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap">' +
      '<button type="button" class="btn btn-p" data-retry-test>Try again</button>' +
      (t.scope === "chapter"
        ? '<button type="button" class="btn btn-s" data-open-chapter="' + t.chapterId + '">Back to chapter</button>'
        : '<button type="button" class="btn btn-s" data-nav="home">Back to contents</button>') +
      "</div></div>";

    html += '<div class="card mt-1"><h2>Review</h2>';
    t.answers.forEach((a, i) => {
      html +=
        '<div class="review-item"><span class="review-mark ' + (a.correct ? "ok" : "no") + '">' + (a.correct ? "✓" : "✕") + "</span>" +
        "<strong>" + esc(a.q.prompt) + "</strong>";
      if (!a.correct) {
        const rightAnswer = a.q.type === "mcq" ? a.q.options[a.q.answer] : a.q.accepted[0];
        html += '<div class="muted mt-1">Correct answer: <strong class="right-text">' + esc(rightAnswer) + "</strong></div>";
      }
      html += '<div class="muted mt-1">' + esc(a.q.explain) + "</div></div>";
    });
    html += "</div>";
    return html;
  }

  // ---------------------------------------------------------------
  // Progress page
  // ---------------------------------------------------------------
  function viewProgress() {
    const chapters = window.CHAPTERS;
    const readCount = Object.keys(progress.read).length;
    const scored = Object.values(progress.scores);
    const avg = scored.length ? Math.round(scored.reduce((a, b) => a + b, 0) / scored.length) : 0;

    let html =
      '<h1>Your progress</h1>' +
      '<div class="stat-row">' +
      '<div class="card stat-box"><div class="stat-num">' + readCount + "/" + chapters.length + '</div><div class="stat-lbl">Chapters read</div></div>' +
      '<div class="card stat-box"><div class="stat-num">' + (scored.length ? avg + "%" : "—") + '</div><div class="stat-lbl">Average score</div></div>' +
      '<div class="card stat-box"><div class="stat-num">' + (progress.fullTestBest != null ? progress.fullTestBest + "%" : "—") + '</div><div class="stat-lbl">Best full test</div></div>' +
      "</div>";

    html += '<div class="card">';
    chapters.forEach((c) => {
      const score = progress.scores[c.id];
      html +=
        '<div class="progress-row"><span>' + c.number + ". " + esc(c.title) + "</span>" +
        '<span class="flex" style="display:flex;align-items:center;gap:.5rem">' +
        '<span class="mini-bar"><span class="mini-bar-fill" style="width:' + (score || 0) + '%"></span></span>' +
        '<span class="muted" style="min-width:2.4rem;text-align:right">' + (score != null ? score + "%" : "—") + "</span>" +
        "</span></div>";
    });
    html += "</div>";

    html += '<button type="button" class="btn btn-s mt-2" data-reset-progress>Reset all progress</button>';
    app.innerHTML = html;
  }

  // ---------------------------------------------------------------
  // About page — short, plain, no stats
  // ---------------------------------------------------------------
  function viewAbout() {
    app.innerHTML =
      '<div class="card"><h1>About</h1>' +
      '<p>My Gramify is a free English grammar reference and self-test tool. No ads, no subscription.</p>' +
      '<p class="muted">Read a chapter, then test yourself on it.</p>' +
      '<div class="theme-row">' +
      THEMES.map((th) => '<button type="button" class="theme-swatch" data-set-theme="' + th.id + '" style="background:' + th.swatch + '" title="' + th.label + '"></button>').join("") +
      "</div>" +
      '<hr class="rule" />' +
      "<p><strong>Developer:</strong> " + esc(DEVELOPER.name) + "<br>" +
      '<strong>Email:</strong> <a href="mailto:' + esc(DEVELOPER.email) + '">' + esc(DEVELOPER.email) + "</a></p>" +
      "</div>";
    markActiveTheme();
  }

  const DEVELOPER = { name: "Tasmon Islam", email: "tasmon@outlook.com" };

  // ---------------------------------------------------------------
  // Theme
  // ---------------------------------------------------------------
  const THEMES = [
    { id: "light", swatch: "#faf8f4", label: "Light" },
    { id: "dark", swatch: "#14161c", label: "Dark" }
  ];
  function initTheme() {
    const th = localStorage.getItem("gramifyTheme") || "light";
    document.documentElement.setAttribute("data-theme", th);
  }
  function setTheme(id) {
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("gramifyTheme", id);
    markActiveTheme();
  }
  function markActiveTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    document.querySelectorAll(".theme-swatch").forEach((el) => {
      el.classList.toggle("active", el.getAttribute("data-set-theme") === cur);
    });
  }

  // ---------------------------------------------------------------
  // Render dispatcher + nav highlighting
  // ---------------------------------------------------------------
  function render() {
    if (state.view === "home") viewHome();
    else if (state.view === "chapter") viewChapter(state.chapterId);
    else if (state.view === "test") viewTest();
    else if (state.view === "progress") viewProgress();
    else if (state.view === "about") viewAbout();
    else viewHome();

    document.querySelectorAll(".topnav-item, .bnav-item").forEach((el) => {
      const target = el.getAttribute("data-nav");
      const activeView = state.view === "chapter" ? "home" : state.view;
      el.classList.toggle("active", target === activeView);
    });
  }

  // ---------------------------------------------------------------
  // Event delegation
  // ---------------------------------------------------------------
  document.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) {
      const v = navBtn.getAttribute("data-nav");
      if (v === "test") startFullTest();
      else nav(v);
      return;
    }
    const chBtn = e.target.closest("[data-open-chapter]");
    if (chBtn) { nav("chapter", { chapterId: chBtn.getAttribute("data-open-chapter") }); return; }

    const testBtn = e.target.closest("[data-open-test]");
    if (testBtn) { startChapterTest(testBtn.getAttribute("data-open-test")); return; }

    const optBtn = e.target.closest("[data-pick-option]");
    if (optBtn) {
      const t = state.test;
      if (t.answered) return;
      const i = parseInt(optBtn.getAttribute("data-pick-option"), 10);
      t.chosen = i;
      t.answered = true;
      const q = t.qs[t.i];
      t.answers.push({ q, correct: i === q.answer, given: q.options[i] });
      render();
      return;
    }

    if (e.target.closest("[data-submit-typed]")) { submitTyped(); return; }

    if (e.target.closest("[data-next-question]")) {
      const t = state.test;
      t.i++;
      t.answered = false;
      t.chosen = null;
      t.typed = "";
      render();
      return;
    }

    if (e.target.closest("[data-retry-test]")) {
      const t = state.test;
      if (t.scope === "chapter") startChapterTest(t.chapterId);
      else startFullTest();
      return;
    }

    const themeBtn = e.target.closest("[data-set-theme]");
    if (themeBtn) { setTheme(themeBtn.getAttribute("data-set-theme")); return; }

    if (e.target.closest("[data-reset-progress]")) {
      if (confirm("Reset all reading and test progress? This can't be undone.")) {
        progress = { read: {}, scores: {}, fullTestBest: null };
        saveProgress();
        render();
        toast("Progress reset.");
      }
      return;
    }
  });

  // ---------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------
  initTheme();
  render();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
