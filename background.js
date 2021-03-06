chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: "#302833" }, function () {
    console.log("The color is Kurobeni.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher(/*{
            pageUrl: { hostEquals: "developer.chrome.com" },
          }*/),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});
