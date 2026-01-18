// script.js
let editor, timerInterval, startTime, currentTask;

function normalizeCode(code) {
  return code
    .replace(/\r\n/g, '\n')
    .replace(/\s+$/gm, '')  // trim trailing spaces
    .replace(/\n+/g, '\n')  // collapse multiple empty lines
    .trim();
}

function countErrors(user, solution) {
  const u = normalizeCode(user);
  const s = normalizeCode(solution);
  let errors = 0;
  const max = Math.max(u.length, s.length);
  for (let i = 0; i < max; i++) {
    if (u[i] !== s[i]) errors++;
  }
  return { errors, userLength: u.length, correctLength: s.length };
}

function calculateResults(userCode, solution, seconds) {
  const { errors, userLength, correctLength } = countErrors(userCode, solution);
  const minutes = seconds / 60;
  const cpm = minutes > 0 ? Math.round(userLength / minutes) : 0;
  const accuracy = userLength > 0 ? Math.round(((userLength - errors) / userLength) * 100) : 100;

  let evaluation = "Slow";
  if (cpm > 300 && accuracy > 95) evaluation = "Excellent";
  else if (cpm > 200 && accuracy > 90) evaluation = "Very Good";
  else if (cpm > 120 && accuracy > 80) evaluation = "Good";

  return { seconds, cpm, accuracy, errors, evaluation, charsTyped: userLength };
}

// Challenge Page
function initChallengePage() {
  if (!window.currentConfig) {
    location.href = "index.html";
    return;
  }
  applyTranslations();

  const { lang, level, progLang } = window.currentConfig;
  const tasks = challenges[progLang][level];
  currentTask = tasks[Math.floor(Math.random() * tasks.length)];

  document.getElementById("taskDescription").textContent = currentTask.description;

  editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: progLang === "javascript" ? "javascript" :
          progLang === "html" ? "xml" :
          progLang === "css" ? "css" :
          progLang === "python" ? "python" : "clike",
    theme: "monokai",
    scrollbarStyle: "simple"
  });

  document.getElementById("exitBtn").onclick = () => location.href = "index.html";
  document.getElementById("startBtn").onclick = startChallenge;
  document.getElementById("submitBtn").onclick = submitChallenge;
}

function startChallenge() {
  editor.setValue("");
  editor.getDoc().clearHistory();
  startTime = Date.now();
  document.getElementById("timer").textContent = "00:00";
  document.getElementById("startBtn").disabled = true;
  document.getElementById("submitBtn").disabled = false;

  timerInterval = setInterval(() => {
    const secs = Math.floor((Date.now() - startTime) / 1000);
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `\( {m}: \){s}`;
  }, 500);
}

function submitChallenge() {
  clearInterval(timerInterval);
  const userCode = editor.getValue();
  const seconds = Math.floor((Date.now() - startTime) / 1000);
  const results = calculateResults(userCode, currentTask.solution, seconds);

  window.lastResults = results;
  location.href = "results.html";
}

// Results Page
function displayResults() {
  if (!window.lastResults) {
    location.href = "index.html";
    return;
  }
  const r = window.lastResults;
  document.getElementById("timeTaken").textContent = `\( {Math.floor(r.seconds / 60)}m \){r.seconds % 60}s`;
  document.getElementById("charsTyped").textContent = r.charsTyped;
  document.getElementById("cpm").textContent = r.cpm;
  document.getElementById("accuracy").textContent = r.accuracy + "%";
  document.getElementById("errors").textContent = r.errors;
  document.getElementById("evaluation").textContent = r.evaluation;
}