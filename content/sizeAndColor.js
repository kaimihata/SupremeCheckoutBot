//chose size and color for item and go to checkout
$(function() {
  chrome.storage.local.get({
  size1: "Large",
  size2: "Medium"
  }, function(items) {
			setInterval(function(){
				if(!$('.in-cart').is(":visible")) {
					$("#s option").each(function(i) {
						if($(this).text() == items.size1) {
							$('#s').prop('selectedIndex', i);
						}
					});
				}
			}, 100);

    //add to cart
    setTimeout(
      function() {
        $(".button").click();
      }, 100);

    setTimeout(
      function() {
        $(".button.checkout").click();
      }, 200);

});
});
