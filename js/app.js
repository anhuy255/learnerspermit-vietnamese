// PennDOT Vietnamese Study Guide — tiny no-build SPA.
// Routing is hash-based so the app works as plain static files (no server build).
// Content lives in /data; this file only renders shared UI components.

import { TOPICS, TOPIC_BY_ID } from "../data/topics.js";
import { QUESTIONS } from "../data/questions.js";
import {
  FLASHCARDS,
  FLASHCARD_CATEGORIES,
  FLASHCARDS_BY_CATEGORY
} from "../data/flashcards.js";

const app = document.getElementById("app");
const LETTERS = ["A", "B", "C", "D"];

// --- small helpers ---------------------------------------------------------

// Escape user/data text before inserting into HTML.
function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Quiz runtime state (kept in memory; reset on retry).
let quiz = null;

// How many questions per practice attempt. The PA knowledge test is ~18;
// we draw a fresh random subset from the bank each attempt for variety.
// If the bank is smaller than this, all questions are used.
const QUIZ_LENGTH = 20;

// Flash card runtime state (kept in memory).
let flash = null;

// --- views -----------------------------------------------------------------

function renderHome() {
  const topicCards = TOPICS.map(
    (t) => `
    <a class="card" href="#/topic/${t.id}">
      <h2>${esc(t.title_vi)}</h2>
      <p>${esc(t.blurb_vi)}</p>
    </a>`
  ).join("");

  app.innerHTML = `
    <h1 class="page-title">Học thi bằng lái xe tạm thời Pennsylvania</h1>
    <p class="lead">
      Ôn tập theo chủ đề bằng tiếng Việt và làm bài thi thử. Mỗi lần thi gồm
      ${Math.min(QUIZ_LENGTH, QUESTIONS.length)} câu hỏi ngẫu nhiên lấy từ
      ngân hàng ${QUESTIONS.length} câu.
    </p>

    <a class="btn" href="#/quiz">📝 Bắt đầu bài thi thử (${Math.min(QUIZ_LENGTH, QUESTIONS.length)} câu)</a>
    <a class="btn btn--secondary" href="#/flashcards">🃏 Thẻ ghi nhớ (${FLASHCARDS.length} thẻ)</a>

    <h2 class="page-title" style="font-size:1.15rem;margin-top:22px;">Chủ đề ôn tập</h2>
    ${topicCards}
  `;
}

function renderTopic(id) {
  const topic = TOPIC_BY_ID[id];
  if (!topic) return renderNotFound();

  const sections = topic.sections
    .map(
      (s) => `
      <div class="study-section">
        <h3>${esc(s.heading_vi)}</h3>
        <ul>${s.points_vi.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <p class="source-tag">Nguồn: ${esc(s.source_ref)}</p>
      </div>`
    )
    .join("");

  app.innerHTML = `
    <a class="back-link" href="#/">← Trang chủ</a>
    <h1 class="page-title">${esc(topic.title_vi)}</h1>
    ${sections}
    <a class="btn" href="#/quiz">📝 Làm bài thi thử</a>
  `;
}

function startQuiz() {
  quiz = {
    // Draw a fresh random subset each attempt for better practice.
    questions: shuffle(QUESTIONS).slice(0, QUIZ_LENGTH),
    index: 0,
    selected: null, // index of chosen answer for current question
    submitted: false,
    score: 0
  };
  location.hash = "#/quiz";
  renderQuiz();
}

function renderQuiz() {
  if (!quiz) return startQuiz();

  const total = quiz.questions.length;
  const q = quiz.questions[quiz.index];
  const pct = Math.round((quiz.index / total) * 100);

  const imageHtml = q.image
    ? `<img class="question-img" src="images/${esc(q.image)}"
         alt="Hình minh họa cho câu hỏi"
         onerror="this.style.display='none'" />`
    : "";

  const choicesHtml = q.choices_vi
    .map((choice, i) => {
      let cls = "choice";
      if (quiz.submitted) {
        if (i === q.correct_answer) cls += " correct";
        else if (i === quiz.selected) cls += " wrong";
      } else if (i === quiz.selected) {
        cls += " selected";
      }
      return `
        <button class="${cls}" data-choice="${i}" ${quiz.submitted ? "disabled" : ""}>
          <span class="letter">${LETTERS[i]}</span>
          <span>${esc(choice)}</span>
        </button>`;
    })
    .join("");

  let feedbackHtml = "";
  let actionHtml = "";
  if (quiz.submitted) {
    const correct = quiz.selected === q.correct_answer;
    feedbackHtml = `
      <div class="explanation">
        <p class="verdict ${correct ? "ok" : "no"}">
          ${correct ? "✓ Chính xác!" : "✗ Chưa đúng"}
        </p>
        <p>${esc(q.explanation_vi)}</p>
        <p class="source-tag">Nguồn: ${esc(q.source_ref)}</p>
      </div>`;
    const last = quiz.index === total - 1;
    actionHtml = `<button class="btn" id="next-btn">${
      last ? "Xem kết quả →" : "Câu tiếp theo →"
    }</button>`;
  } else {
    actionHtml = `<button class="btn" id="submit-btn" ${
      quiz.selected === null ? "disabled" : ""
    }>Kiểm tra đáp án</button>`;
  }

  app.innerHTML = `
    <a class="back-link" href="#/">← Thoát</a>
    <div class="quiz-progress">Câu ${quiz.index + 1} / ${total} · Điểm: ${quiz.score}</div>
    <div class="progress-bar"><span style="width:${pct}%"></span></div>
    ${imageHtml}
    <p class="question-text">${esc(q.question_vi)}</p>
    ${choicesHtml}
    ${feedbackHtml}
    ${actionHtml}
  `;

  // Wire up interactions.
  if (!quiz.submitted) {
    app.querySelectorAll(".choice").forEach((btn) => {
      btn.addEventListener("click", () => {
        quiz.selected = Number(btn.dataset.choice);
        renderQuiz();
      });
    });
    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn)
      submitBtn.addEventListener("click", () => {
        if (quiz.selected === null) return;
        quiz.submitted = true;
        if (quiz.selected === q.correct_answer) quiz.score++;
        renderQuiz();
      });
  } else {
    document.getElementById("next-btn").addEventListener("click", () => {
      if (quiz.index === total - 1) {
        location.hash = "#/results";
        renderResults();
      } else {
        quiz.index++;
        quiz.selected = null;
        quiz.submitted = false;
        renderQuiz();
      }
    });
  }
}

function renderResults() {
  if (!quiz) return renderHome();
  const total = quiz.questions.length;
  const score = quiz.score;
  const pct = Math.round((score / total) * 100);
  // PA knowledge test passing is commonly 15/18 (~83%); use 80% as a study target.
  const passed = pct >= 80;

  app.innerHTML = `
    <h1 class="page-title">Kết quả</h1>
    <div class="score-circle">
      <div>
        <div class="num">${score}/${total}</div>
        <div class="pct">${pct}%</div>
      </div>
    </div>
    <p class="result-msg ${passed ? "pass" : "fail"}">
      ${passed ? "🎉 Tốt lắm! Bạn đã đạt mức mục tiêu." : "Hãy ôn lại và thử lại nhé!"}
    </p>
    <button class="btn" id="retry-btn">🔄 Làm lại bài thi</button>
    <a class="btn btn--secondary" href="#/">← Về trang chủ</a>
  `;

  document.getElementById("retry-btn").addEventListener("click", startQuiz);
}

function renderNotFound() {
  app.innerHTML = `
    <h1 class="page-title">Không tìm thấy trang</h1>
    <a class="btn" href="#/">← Về trang chủ</a>
  `;
}

// --- flash cards (Thẻ ghi nhớ) ----------------------------------------------

// Category menu: pick "Tất cả" or one category.
function renderFlashcardsHome() {
  const cards = FLASHCARD_CATEGORIES.map((c) => {
    const n = FLASHCARDS_BY_CATEGORY[c].length;
    const withImg = FLASHCARDS_BY_CATEGORY[c].filter((card) => card.front.image).length;
    return `
      <a class="card" href="#/flashcards/${encodeURIComponent(c)}">
        <h2>${esc(c)}</h2>
        <p>${n} thẻ${withImg ? ` · ${withImg} thẻ có hình` : ""}</p>
      </a>`;
  }).join("");

  app.innerHTML = `
    <a class="back-link" href="#/">← Trang chủ</a>
    <h1 class="page-title">🃏 Thẻ ghi nhớ</h1>
    <p class="lead">
      Lật thẻ để ôn nhanh biển báo, tín hiệu và quy tắc. Nhấn vào thẻ để xem
      mặt sau.
    </p>
    <a class="btn" href="#/flashcards/${encodeURIComponent("__all__")}">▶️ Học tất cả (${FLASHCARDS.length} thẻ)</a>
    <h2 class="page-title" style="font-size:1.15rem;margin-top:22px;">Theo chủ đề</h2>
    ${cards}
  `;
}

// Build the deck for a category (or all) and show the first card.
function startFlashcards(category) {
  const deck =
    category === "__all__"
      ? FLASHCARDS.slice()
      : (FLASHCARDS_BY_CATEGORY[category] || []).slice();
  if (!deck.length) return renderNotFound();
  flash = { category, cards: deck, index: 0, flipped: false };
  renderFlashcard();
}

function renderFlashcard() {
  if (!flash) return renderFlashcardsHome();
  const total = flash.cards.length;
  const card = flash.cards[flash.index];
  const title =
    flash.category === "__all__" ? "Tất cả thẻ" : flash.category;

  const frontImg = card.front.image
    ? `<img class="fc-img" src="images/${esc(card.front.image)}"
         alt="${esc(card.front.title_vi)}" onerror="this.style.display='none'" />`
    : "";

  const b = card.back;
  const backRows = [
    `<p class="fc-explain">${esc(b.explanation_vi)}</p>`,
    b.english_ref
      ? `<p class="fc-row"><span class="fc-key">Tiếng Anh:</span> ${esc(b.english_ref)}${
          b.pronunciation ? ` <span class="fc-pron">(${esc(b.pronunciation)})</span>` : ""
        }</p>`
      : "",
    b.memory_tip
      ? `<p class="fc-tip"><span class="fc-key">💡 Mẹo nhớ:</span> ${esc(b.memory_tip)}</p>`
      : ""
  ].join("");

  app.innerHTML = `
    <a class="back-link" href="#/flashcards">← Chọn chủ đề</a>
    <div class="quiz-progress">${esc(title)} · Thẻ ${flash.index + 1} / ${total}</div>
    <div class="progress-bar"><span style="width:${((flash.index + 1) / total) * 100}%"></span></div>

    <div class="flashcard ${flash.flipped ? "is-flipped" : ""}" id="flashcard" tabindex="0"
         role="button" aria-label="Nhấn để lật thẻ">
      <div class="fc-inner">
        <div class="fc-face fc-front">
          <span class="fc-cat">${esc(card.category)}</span>
          ${frontImg}
          <p class="fc-title">${esc(card.front.title_vi)}</p>
          <span class="fc-hint">Nhấn để lật ↻</span>
        </div>
        <div class="fc-face fc-back">
          <span class="fc-cat">${esc(card.front.title_vi)}</span>
          ${backRows}
          <span class="fc-hint">Nhấn để lật lại ↻</span>
        </div>
      </div>
    </div>

    <div class="fc-controls">
      <button class="btn btn--secondary" id="fc-prev" ${flash.index === 0 ? "disabled" : ""}>← Trước</button>
      <button class="btn btn--secondary" id="fc-next" ${flash.index === total - 1 ? "disabled" : ""}>Tiếp →</button>
    </div>
    <button class="btn btn--ghost" id="fc-shuffle">🔀 Xáo trộn thẻ</button>
  `;

  const flip = () => {
    flash.flipped = !flash.flipped;
    document.getElementById("flashcard").classList.toggle("is-flipped");
  };
  const cardEl = document.getElementById("flashcard");
  cardEl.addEventListener("click", flip);
  cardEl.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flip();
    }
  });

  const go = (delta) => {
    const next = flash.index + delta;
    if (next < 0 || next >= total) return;
    flash.index = next;
    flash.flipped = false;
    renderFlashcard();
  };
  document.getElementById("fc-prev").addEventListener("click", () => go(-1));
  document.getElementById("fc-next").addEventListener("click", () => go(1));
  document.getElementById("fc-shuffle").addEventListener("click", () => {
    flash.cards = shuffle(flash.cards);
    flash.index = 0;
    flash.flipped = false;
    renderFlashcard();
  });
}

// --- router -----------------------------------------------------------------

function router() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/"); // ["topic","id"] etc.

  if (hash === "#/" || parts[0] === "") return renderHome();
  if (parts[0] === "topic") return renderTopic(parts[1]);
  if (parts[0] === "quiz") return quiz ? renderQuiz() : startQuiz();
  if (parts[0] === "results") return renderResults();
  if (parts[0] === "flashcards") {
    if (parts[1]) return startFlashcards(decodeURIComponent(parts[1]));
    return renderFlashcardsHome();
  }
  return renderNotFound();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
router();
