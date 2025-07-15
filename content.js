chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillLorem") {
    const activeEl = document.activeElement;

    if (activeEl && (activeEl.tagName === "TEXTAREA" || (activeEl.tagName === "INPUT" && activeEl.type === "text"))) {
      const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      const max = activeEl.getAttribute("maxlength");

      if (max !== null) {
        activeEl.value = lorem.slice(0, parseInt(max));
      } else {
        activeEl.value = lorem;
      }
    }
  }
});