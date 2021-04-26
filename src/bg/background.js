const id = "caniuse-extension";

search = function (info) {
  var query = info.selectionText;
  chrome.tabs.create({
    url: "https://caniuse.com/?search=" + query,
  });
};

chrome.contextMenus.create({
  id,
  title: "Search on caniuse.com",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId == id) {
    search(info);
  }
});
