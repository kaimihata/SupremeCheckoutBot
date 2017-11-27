//when the page loads it sends a message to bring up the "view all" page of the
//shop, which will call refresh.js if the shop hasn't launched yet
$(function() {
  console.log($("#enable").is(":checked"));
  chrome.storage.local.get({
    keyword: "",
    type: "",
    color: ""
  }, function(items) {
    if (items.keyword != "") {
      $("#keyword").val(items.keyword);
    }
    $("#type").val(items.type);
    $("#color").val(items.color);

  })

  $("#view_all").click(function(){
    chrome.storage.local.set({
      keyword: $("#keyword").val(),
      type: $("#type").val(),
      color: $("#color").val()
    });
    var key_url;
    key_url = "http://www.supremenewyork.com/shop/all/" + $("#type").val();
    console.log(key_url);
    chrome.runtime.sendMessage({
      type: "refresh",
      url: key_url
    });

  })

});
