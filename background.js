// background.js
//message listener
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.type == "findItem") {
    //updates the tab to the item url
    chrome.tabs.update(null, { url: request.url});
  } else if (request.type == "goToShop") {
    chrome.tabs.update(null, { url: "http://www.supremenewyork.com/shop/all"});
  } else if (request.type == "refresh") {
    //tries to go to the "view all" page of the shop
    chrome.tabs.update(null, { url: request.url});
  } else if (request.type == "checkout") {
    chrome.tabs.update(null, "https://www.supremenewyork.com/checkout")
  }
  return true;
});
