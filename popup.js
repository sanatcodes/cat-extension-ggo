document.getElementById('replaceBtn').addEventListener('click', () => {
    console.log('Replace Images button clicked');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceImages' }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('Error sending message:', chrome.runtime.lastError);
        } else {
          console.log('Response from content script:', response.status);
        }
      });
    });
  });