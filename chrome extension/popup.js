// Define the button element
const toggleButton = document.getElementById('toggleButton');

// Handle the button click
toggleButton.addEventListener('click', () => {
  // Change the button color to red
  toggleButton.style.backgroundColor = 'red';
  
  // Change the button text to "OFF"
  toggleButton.textContent = 'OFF';
  
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: toggleScreenAwake,
    });
  });
});

// Toggle screen awake function
function toggleScreenAwake() {
  const currentState = document.visibilityState;
  if (currentState === 'visible') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }
}

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

// Initial call to toggleScreenAwake
toggleScreenAwake();