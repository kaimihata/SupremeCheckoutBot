//chose size and color for item and go to checkout
$(function() {
  chrome.storage.local.get({
<<<<<<< HEAD
  size: "Medium",
  }, function(items) {
    console.log(items);
			setInterval(function(){
				if(!$('.in-cart').is(":visible")) {
					$("#size option").each(function(i) {
						if($(this).text() == items.size) {
							$('#size').prop('selectedIndex', i);
=======
  size1: "Large",
  size2: "Medium"
  }, function(items) {
<<<<<<< HEAD
    console.log(items);
          $("#s > option").each(function() {
              if ($(this).text() == items.size1) {
                $('#s option[value='$(this).val()']').attr("selected", "selected");
              }
              console.log($(this).text());
          });

      //$(".button").click();
=======
			setInterval(function(){
				if(!$('.in-cart').is(":visible")) {
					$("#s option").each(function(i) {
						if($(this).text() == "Large") {
							$('#s').prop('selectedIndex', i);
>>>>>>> 9093263be5addd626bd9e3387f611b237b815e57
						}
					});
				}
			}, 100);

<<<<<<< HEAD
      $(".button").click();

});
=======
    //add to cart
    setTimeout(
      function() {
        $(".button").click();
      }, 100);
>>>>>>> 703c25a5a139b969f16c2c9ae4772f64ad822157

    setTimeout(
      function() {
        $(".button.checkout").click();
      }, 200);

<<<<<<< HEAD

  });
=======
});
>>>>>>> 703c25a5a139b969f16c2c9ae4772f64ad822157
>>>>>>> 9093263be5addd626bd9e3387f611b237b815e57
});
