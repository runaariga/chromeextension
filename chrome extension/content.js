// content.js
// This script runs on all websites to ensure the screen stays awake.

// Listen for visibility change
document.addEventListener('visibilitychange', handleVisibilityChange);

// Handle visibility change
function handleVisibilityChange() {
  if (document.visibilityState === 'visible') {
    // Keep the screen awake by simulating a user action (click)
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    document.dispatchEvent(clickEvent);
  }
}