chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes("https://chatgpt.com/")) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["content.js"]
      });
    }
  });
  