//when the page loads it sends a message to bring up the "view all" page of the
//shop, which will call refresh.js if the shop hasn't launched yet
$(function() {

  $("#view_all").click(function(){
    chrome.storage.local.set({
      keyword: $("#keyword").val()
    });
    key_url = key_url = "http://www.supremenewyork.com/shop/" + "accessories" + "/" + $("#keyword").val();
    chrome.runtime.sendMessage({
       type: "refresh",
       url: key_url
     });
  })

});
