
//tries to go to the "view all" page of the shop
// if it gets redirected to the home page, it tries again
function refresh(time) {
  setTimeout(function() {
    chrome.storage.local.get({
      keyword: "",
      type: "accessories"
    }, function(items) {
      key_url = "http://www.supremenewyork.com/shop/" + type + "/" + keyword;
      chrome.runtime.sendMessage({
          type: "refresh",
          url: key_url
        });
      }, time)
    })

}

$(function() {
  refresh(5000);
});
