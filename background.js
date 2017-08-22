// background.js
//message listener
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.type == "findItem") {
    //updates the tab to the item url
    chrome.tabs.update(null, { url: request.url});
  } else if (request.type == "goToShop") {
    //SET TO THE PREVIEW NOW, NEEDS TO BE CHANGED TO THE ACTUAL SHOP LINK
    //OTHERWISE THIS WILL NOT WORK
    chrome.tabs.create({ url: "http://www.supremenewyork.com/previews/fallwinter2017/all"});
  } else if (request.type == "refresh") {
    //tries to go to the "view all" page of the shop
    chrome.tabs.update(null, { url: request.url});
  }
  return true;
});
