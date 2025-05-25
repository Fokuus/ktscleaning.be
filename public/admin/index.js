// Clear cache on load
window.addEventListener('load', () => {
  // Clear localStorage
  if (window.localStorage) {
    console.log('Clearing Decap CMS cache...');
    const keys = Object.keys(window.localStorage);
    keys.forEach(key => {
      if (key.startsWith('netlify-cms') || key.startsWith('decap-cms')) {
        window.localStorage.removeItem(key);
      }
    });
  }
  
  // Reload after a short delay
  setTimeout(() => {
    console.log('Cache cleared, reloading admin...');
    window.location.reload();
  }, 1000);
});
