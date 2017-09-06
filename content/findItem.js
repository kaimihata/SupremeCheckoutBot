// search page for item with keyword
//then opens the page
$(function() {
chrome.storage.local.get({
  keyword: ""
}, function(items) {
  if (items.keyword == "") {
    alert("You didn't select a keyword!");
  } else {
    var arr = [], l = document.links;
    console.log(l);
    for(var i=0; i<l.length; i++) {
      arr.push(l[i].href);
    }
    for (var i=0; i<arr.length;i++) {
      if (arr[i].includes(items.keyword)) {
          console.log(arr[i]);
          //sends a message to the background.js to open the href of the first
          //item containing the keyword
          chrome.runtime.sendMessage({
            type: "findItem",
            url: arr[i]
          });
          break;
      }
    }
  }
});
});
