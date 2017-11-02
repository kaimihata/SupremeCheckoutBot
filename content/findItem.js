// search page for item with keyword
//then opens the page
$(function() {
  chrome.storage.local.get({
    keyword: "",
    type: "",
    color: "",
    enable: false
  }, function(items) {

    if (items.enable) {

      if (items.keyword == "") {
        alert("You didn't select a keyword!");
      } else {
        $(".name-link").each(function() {
          if ($(this).html().toLowerCase().indexOf((items.keyword).toLowerCase()) != -1) {
            //all items of the given style, now must check color
            var href = $(this).attr('href');
            //console.log($('a[href="' + href + '"]').text() + " xd " + items.color);
            if ($('a[href="' + href + '"]').text().toLowerCase().indexOf((items.color).toLowerCase()) != -1) {
              var key_url = "http://www.supremenewyork.com" + $(this).attr('href');
              chrome.runtime.sendMessage({
                type: "goToUrlSameTab",
                url: key_url
              });
            }
          }
          var ref_url = "http://www.supremenewyork.com/shop/all/" + items.type;
          setTimeout( function() {
            chrome.runtime.sendMessage({
              type: "refresh",
              url: ref_url
            })
          }, 4000)
        });

      }

  } else {
    console.log("Bot not enabled");
  }

  });
});
