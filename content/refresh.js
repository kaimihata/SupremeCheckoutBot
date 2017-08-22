
//tries to go to the "view all" page of the shop
// if it gets redirected to the home page, it tries again

chrome.runtime.sendMessage({
  type: "refresh",
  url: "http://www.supremenewyork.com/shop/all"
})
