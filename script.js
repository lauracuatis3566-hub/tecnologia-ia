document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. CUESTIONARIO INTERACTIVO SOBRE IA
  // ==========================================
  const quizForm = document.getElementById('quiz-form');
  const quizResult = document.getElementById('quiz-result');

  // Respuestas correctas del cuestionario (Ajusta los valores según las opciones de tu HTML)
  const correctAnswers = {
    q1: 'b',
    q2: 'a',
    q3: 'c'
  };

  if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let score = 0;
      let totalQuestions = Object.keys(correctAnswers).length;
      const formData = new FormData(quizForm);

      // Evaluación de respuestas
      for (let question in correctAnswers) {
        const userAnswer = formData.get(question);
        if (userAnswer === correctAnswers[question]) {
          score++;
        }
      }

      // Mensaje según la puntuación
      let percentage = (score / totalQuestions) * 100;
      let feedbackMessage = '';

      if (percentage === 100) {
        feedbackMessage = '¡Excelente trabajo! Tienes un dominio completo sobre el tema.';
      } else if (percentage >= 50) {
        feedbackMessage = '¡Buen intento! Tienes un conocimiento sólido, pero puedes mejorar.';
      } else {
        feedbackMessage = 'Sigue repasando la información para mejorar tu puntaje.';
      }

      // Mostrar resultados
