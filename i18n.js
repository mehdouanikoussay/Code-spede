const translations = {
  en: {
    title: "Code Typing Speed Challenge",
    select_language: "Select Language",
    skill_level: "Skill Level",
    programming_language: "Programming Language",
    start_challenge: "Start Challenge",
    exit: "Exit",
    task: "Task",
    start: "Start Typing",
    submit: "Submit",
    results_title: "Your Results",
    time_taken: "Time Taken",
    characters_typed: "Characters Typed",
    cpm: "Characters Per Minute (CPM)",
    accuracy: "Accuracy",
    errors: "Errors",
    evaluation: "Evaluation",
    try_again: "Try Again"
  },
  fr: {
    title: "Défi de Vitesse de Frappe de Code",
    select_language: "Choisir la langue",
    skill_level: "Niveau de compétence",
    programming_language: "Langage de programmation",
    start_challenge: "Démarrer le défi",
    exit: "Quitter",
    task: "Tâche",
    start: "Commencer à taper",
    submit: "Soumettre",
    results_title: "Vos Résultats",
    time_taken: "Temps écoulé",
    characters_typed: "Caractères tapés",
    cpm: "Caractères par minute",
    accuracy: "Précision",
    errors: "Erreurs",
    evaluation: "Évaluation",
    try_again: "Réessayer"
  },
  ar: {
    title: "تحدي سرعة كتابة الكود",
    select_language: "اختر اللغة",
    skill_level: "مستوى المهارة",
    programming_language: "لغة البرمجة",
    start_challenge: "ابدأ التحدي",
    exit: "خروج",
    task: "المهمة",
    start: "ابدأ الكتابة",
    submit: "إرسال",
    results_title: "نتائجك",
    time_taken: "الوقت المستغرق",
    characters_typed: "عدد الأحرف المكتوبة",
    cpm: "عدد الأحرف في الدقيقة",
    accuracy: "الدقة",
    errors: "عدد الأخطاء",
    evaluation: "التقييم",
    try_again: "جرب مرة أخرى"
  }
};

function applyTranslations() {
  const lang = window.currentConfig?.lang || "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.getAttribute("data-t");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}