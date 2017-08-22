//chose size and color for item and go to checkout
$(function() {
  chrome.storage.local.get({
  size: "Medium",
  }, function(items) {
    console.log(items);
			setInterval(function(){
				if(!$('.in-cart').is(":visible")) {
					$("#size option").each(function(i) {
						if($(this).text() == items.size) {
							$('#size').prop('selectedIndex', i);
						}
					});
				}
			}, 100);

      $(".button").click();

});
});
