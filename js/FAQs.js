document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
  
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(faq => {
                if (faq !== item && faq.classList.contains('active')) {
                    faq.classList.remove('active');
                    faq.querySelector('p').style.maxHeight = "0";
                }
            });
  
            // Toggle the clicked FAQ item
            item.classList.toggle('active');
  
            if (item.classList.contains('active')) {
                // Smoothly open the answer
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                // Smoothly close the answer
                answer.style.maxHeight = "0";
            }
        });
    });
  });
  