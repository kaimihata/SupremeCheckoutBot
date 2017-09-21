//chose size and color for item and go to checkout
$(function() {
  chrome.storage.local.get({
  size1: "Large",
  size2: "Medium"
  }, function(items) {
    console.log(items);
          $("#s > option").each(function() {
              if ($(this).text() == items.size1) {
                $('#s option[value='$(this).val()']').attr("selected", "selected");
              }
              console.log($(this).text());
          });

      //$(".button").click();

    chrome.runtime.sendMessage({
      type: "checkout"
    });


  });
});
