const CLOSE_DELAY = 15000;
const timers = {};

function startTimer(tabId) {
  clearTimer(tabId);

  timers[tabId] = setTimeout(() => {
    chrome.tabs.get(tabId, (tab) => {
      if (chrome.runtime.lastError) return;
      if (tab.url === "about:blank") {
        chrome.tabs.remove(tabId);
      }
    });
  }, CLOSE_DELAY);
}

function clearTimer(tabId) {
  if (timers[tabId]) {
    clearTimeout(timers[tabId]);
    delete timers[tabId];
  }
}

// on tab created
chrome.tabs.onCreated.addListener((tab) => {
  if (tab.url === "about:blank") {
    startTimer(tab.id);
  }
});

// on tab updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url === "about:blank" || tab.url === "about:blank") {
    startTimer(tabId);
  } else {
    clearTimer(tabId);
  }
});

// on tab removed
chrome.tabs.onRemoved.addListener((tabId) => {
  clearTimer(tabId);
});