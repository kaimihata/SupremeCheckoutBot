//chose size and color for item and go to checkout
$(function() {
  chrome.storage.local.get({
    size: "Large",

  }, function(items) {
    console.log(items);
    $("#s > option").each(function() {
        if ($(this).text() == items.size) {
          var temp = $(this).val();
          $('#s option[value=' + temp +']').attr("selected", "selected");
        }
        console.log($(this).text());
    });

    //$(".button").click();
		setInterval(function(){
			if(!$('.in-cart').is(":visible")) {
				$("#s option").each(function(i) {
					if($(this).text() == items.size) {
						$('#s').prop('selectedIndex', i);
					}
				});
			}

		}, 100);
    $(".button").click();
  });
    console.log($(".button"));
    $(".button").click();

    setTimeout(
      function() {
        $(".button checkout").click();
    },200);
    var key_url = "https://www.supremenewyork.com/checkout";
    chrome.runtime.sendMessage({
      type: "goToUrlSameTab",
      url: key_url
    });
});
