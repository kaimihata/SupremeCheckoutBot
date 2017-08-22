$(function(){

  console.log("emailPage.js");

  chrome.storage.local.get({
    email: "update ur settings"
  }, function(items) {
    $("#email").val(items.email);
    $(".iCheck-helper").click();
  })
});
