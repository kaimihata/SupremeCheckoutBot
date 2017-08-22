// background.js

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.type == "findItem") {
    chrome.tabs.update(null, { url: request.url});
  } else if (request.type == "goToShop") {
    chrome.tabs.create({ url: "http://www.supremenewyork.com/previews/fallwinter2017/all"});
  } else if (request.type == "refresh") {
    chrome.tabs.update(null, { url: request.url});
  }
  return true;
});
