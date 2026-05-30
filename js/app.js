// PennDOT Vietnamese Study Guide — tiny no-build SPA.
// Routing is hash-based so the app works as plain static files (no server build).
// Content lives in /data; this file only renders shared UI components.

import { TOPICS, TOPIC_BY_ID } from "../data/topics.js";
import { QUESTIONS } from "../data/questions.js";

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
      Ôn tập theo chủ đề bằng tiếng Việt và làm bài thi thử ${QUESTIONS.length} câu hỏi.
    </p>

    <a class="btn" href="#/quiz">📝 Bắt đầu bài thi thử (${QUESTIONS.length} câu)</a>

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
    // Shuffle question order each attempt for better practice.
    questions: shuffle(QUESTIONS),
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

// --- router -----------------------------------------------------------------

function router() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/"); // ["topic","id"] etc.

  if (hash === "#/" || parts[0] === "") return renderHome();
  if (parts[0] === "topic") return renderTopic(parts[1]);
  if (parts[0] === "quiz") return quiz ? renderQuiz() : startQuiz();
  if (parts[0] === "results") return renderResults();
  return renderNotFound();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
router();
