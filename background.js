const CLOSE_DELAY = 15000;
const timers = {};

function isBlank(tab) {
  return !tab.url || tab.url === "about:blank";
}

function startTimer(tabId) {
  clearTimer(tabId);

  timers[tabId] = setTimeout(() => {
    chrome.tabs.get(tabId, (tab) => {
      if (chrome.runtime.lastError) return;
      if (isBlank(tab)) {
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

chrome.tabs.onCreated.addListener((tab) => {
  if (isBlank(tab)) {
    startTimer(tab.id);
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url === "about:blank" || isBlank(tab)) {
    startTimer(tabId);
  } else {
    clearTimer(tabId);
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  clearTimer(tabId);
});
