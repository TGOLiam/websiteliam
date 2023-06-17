
// Create a media query
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Check if the media query matches
if (mediaQuery.matches) {
    typeText2();
} else {
    typeText();
}

// Add a listener for changes in the media query
mediaQuery.addListener((mq) => {
  if (mq.matches) {
    typeText2();
  } else {
    typeText();
  }
});
