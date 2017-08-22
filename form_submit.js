function buttonTest() {
  var userInfo = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    telephone: document.getElementById("telephone").value,
    address1: document.getElementById("address1").value,
    address2: document.getElementById("address2").value,
    zip: document.getElementById("zip").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    country: document.getElementById("country").value,
    save_address: document.getElementById("save_address").value,
    type: document.getElementById("type").value,
    card_num: document.getElementById("card_num").value,
    exp_mon: document.getElementById("exp_mon").value,
    exp_year: document.getElementById("exp_year").value,
    ccv: document.getElementById("ccv").value,
    t_and_c: document.getElementById("t_and_c").value
  };

  if (userInfo["t_and_c"] === "on") {
    userInfo["t_and_c"] = true;
  }

  if (userInfo["save_address"] === "on") {
    userInfo["save_address"] = true;
  }

  var jsonInfo = JSON.stringify(userInfo);
  //chrome storage
  chrome.storage.sync.set({'userInfo': userInfo}, function(){
    console.log("Info Saved but not encrypted");
  })

  //saving using normal chrome save file
  //saveData(jsonInfo, 'info.json', 'text/plain');
}

function saveData(text, name, type) {
  var a = document.createElement("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.click();
}
