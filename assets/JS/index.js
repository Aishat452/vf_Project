const faqSelect = document.querySelector('#faq-select');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqSelect.addEventListener('change', () => {
  faqAnswers.forEach((answer) => {
    answer.style.display = 'none';
  });
  const selectedAnswer = document.querySelector('#' + faqSelect.value);
  selectedAnswer.style.display = 'block';
});

