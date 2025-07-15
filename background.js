chrome.contextMenus.create({
  id: "loremFill",
  title: "Lorem Fill",
  contexts: ["editable"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "loremFill") {
    chrome.tabs.sendMessage(tab.id, { action: "fillLorem" });
  }
});