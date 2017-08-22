//chose size and color for item and go to checkout

var sizes;
chrome.storage.local.get({
  size: ""
}, function(items) {
  sizes = items.size;
  setInterval(function(){
  				if(!$('.in-cart').is(":visible")) {
  					$("#size option").each(function(i) {
  						if($(this).text() == items.size[0]) {
  							$('#size').prop('selectedIndex', i);
  						} else if ($(this).text() == items.size[1]) {
                $('#size').prop('selectedIndex', i);
              } else if (($(this).text() == items.size[1]) {
                $('#size').prop('selectedIndex', i);
              }
  					});
  				}
  			}, 100);
});
