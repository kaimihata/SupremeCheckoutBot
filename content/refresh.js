
//tries to go to the "view all" page of the shop
// if it gets redirected to the home page, it tries again
function refresh(time) {
  setTimeout(function() {
    chrome.runtime.sendMessage({
      type: "refresh",
      url: "http://www.supremenewyork.com/shop/all"
    });
  }, time)
}

$(function() {
  refresh(5000);
});
