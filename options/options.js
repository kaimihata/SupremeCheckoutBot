//stores the users info in the chrome local storage

function storeUserInfo() {
  //gets all the info from the fields on the options page
  console.log("STORING INFO");
  var name = $("#name").val();
  var email = $("#email").val();
  var telephone = $("#telephone").val();
  var address1 = $("#address1").val();
  var address2 = $("#address2").val();
  var zip = $("#zip").val();
  var city = $("#city").val();
  var state = $("#state").val();
  var country = $("#country").val();
  var save_address = $("#save_address").val();
  var type = $("#type").val();
  var card_num = $("#card_num").val();
  var exp_mon = $("#exp_mon").val();
  var exp_year = $("#exp_year").val();
  var ccv = $("#ccv").val();
  var t_and_c = $("#t_and_c").val();
  var size = $("#size").val();
  var color = $("#color").val();

  //these don't really do anything, i don't think i implemented this in the
  //checkout page
  if (t_and_c === "on") {
    t_and_c = true;
  }

  if (save_address === "on") {
      save_address = true;
  }

  //stores all of the user info locally
  //safe from external threats, but anyone can locally access this information
  chrome.storage.local.set({
    name: name,
    email: email,
    telephone: telephone,
    address1: address1,
    address2: address2,
    zip: zip,
    city: city,
    state: state,
    country: country,
    type: type,
    card_num: card_num,
    exp_mon: exp_mon,
    exp_year: exp_year,
    ccv: ccv,
    t_and_c: t_and_c,
    size: size,
    color: color

  }, function() {
    alert("Checkout Info Saved");
  });
}

//fills all the fields with the stored information
function init() {
  chrome.storage.local.get({
    name: "lul",
    email: "",
    telephone: "",
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    type: "",
    card_num: "",
    exp_mon: "",
    exp_year: "",
    ccv: "",
    t_and_c: true,
    size: "",
    color: ""

  }, function(items) {
    //lol idk why i didn't use jquery here but im too lazy to change it
      document.getElementById("name").value = items.name;
      document.getElementById("email").value = items.email;
      document.getElementById("telephone").value = items.telephone;
      document.getElementById("address1").value = items.address1;
      document.getElementById("address2").value = items.address2;
      document.getElementById("zip").value = items.zip;
      document.getElementById("city").value = items.city;
      document.getElementById("state").value = items.state;
      document.getElementById("country").value = items.country;
      document.getElementById("save_address").value = items.save_address;
      document.getElementById("type").value = items.type;
      document.getElementById("card_num").value = items.card_num;
      document.getElementById("exp_mon").value = items.exp_mon
      document.getElementById("exp_year").value = items.exp_year;
      document.getElementById("ccv").value = items.ccv;
      document.getElementById("t_and_c").value = items.t_and_c;
      document.getElementById("size").value = items.size;
      document.getElementById("color").value = items.color;
  });
}
//once the page is loaded it runs init
document.addEventListener('DOMContentLoaded', init);
//click listener for the submit button
document.getElementById('submit').addEventListener('click', storeUserInfo);
