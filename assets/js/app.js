const faqBtns = document.querySelectorAll('.topics');
const hiddenTopic = document.querySelector('.hidden-topic');

faqBtns.forEach((faqBtn) => faqBtn.addEventListener('click', () => {
      if(faqBtn.classList.contains('active')) {
        faqBtn.classList.toggle('active');
      }
      else {
        faqBtns.forEach((faqBtn) => faqBtn.classList.remove('active'));
        faqBtn.classList.add('active');
      }
  })
);