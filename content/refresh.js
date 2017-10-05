
//tries to go to the "view all" page of the shop
// if it gets redirected to the home page, it tries again
function refresh(time) {
  setTimeout(function() {
    chrome.storage.local.get({
      keyword: "",
      type: ""
    }, function(items) {
      var key_url = "http://www.supremenewyork.com/shop/" + items.type + "/" + items.keyword;
      console.log(key_url);
      chrome.runtime.sendMessage({
          type: "refresh",
          url: key_url
        });
      });
    }, time);

};

$(function() {
  refresh(5000);
  console.log("xd");
});
