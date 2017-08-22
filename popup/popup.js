$(function() {

  $("#view_all").click(function(){
    chrome.storage.local.set({
      keyword: $("#keyword").val()
    });
    chrome.runtime.sendMessage({ type: "goToShop"});
  })

});
