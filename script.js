document.addEventListener("DOMContentLoaded", function() {
  const ctaButton = document.querySelector('.cta-button');
  
  ctaButton.addEventListener('click', function() {
    alert('You clicked the CTA button!');
  });
});
document.querySelector('.arrow-left').addEventListener('click', () => {
  document.querySelector('.slider-container').scrollBy({ left: -1400, behavior: 'smooth' });
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  document.querySelector('.slider-container').scrollBy({ left: 1400, behavior: 'smooth' });
});

