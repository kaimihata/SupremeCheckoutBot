//enters your email into the the current page on the supreme shop
//this doesn't really do anything tho ill prolly delete it

$(function(){

  console.log("emailPage.js");

  chrome.storage.local.get({
    email: "update ur settings"
  }, function(items) {
    $("#email").val(items.email);
    $(".iCheck-helper").click();
  })
});
