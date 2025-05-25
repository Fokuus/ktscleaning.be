// Hero section text animation
document.addEventListener('DOMContentLoaded', function() {
  // Only run if the hero section exists
  if (document.querySelector('.cleansy-hero')) {
    const words = document.querySelectorAll('.words-wrapper b');
    let currentIndex = 0;
    const animationDelay = 3000; // 3 seconds per word
    
    // Hide all words except the first one
    words.forEach((word, index) => {
      if (index !== 0) {
        word.classList.add('is-hidden');
        word.classList.remove('is-visible');
      } else {
        word.classList.add('is-visible');
        word.classList.remove('is-hidden');
      }
    });
    
    // Rotate words
    function rotateWords() {
      // Hide current word
      words[currentIndex].classList.remove('is-visible');
      words[currentIndex].classList.add('is-hidden');
      
      // Move to next word or back to first
      currentIndex = (currentIndex + 1) % words.length;
      
      // Show next word
      words[currentIndex].classList.remove('is-hidden');
      words[currentIndex].classList.add('is-visible');
    }
    
    // Start rotation with interval
    setInterval(rotateWords, animationDelay);
  }
});
