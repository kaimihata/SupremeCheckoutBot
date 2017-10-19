//gets all checkout info from local storage
//adds it to the checkout fields on the supreme website
//does NOT hit the checkout button for you

$(function() {
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
    t_and_c: true
  }, function(res) {
      $('#order_billing_name').val(res.name);
      $('#order_email').val(res.email);
      $('#order_tel').val(res.telephone);
      $('#bo').val(res.address1);
      $('#order_billing_zip').val(res.zip);
      $('#order_billing_city').val(res.city);
      $('#order_billing_state').val(res.state);
      $('#order_billing_country').val(res.country);
      $('#credit_card_type').val(res.type);
      $('#cnb').val(res.card_num);
      $('#credit_card_month').val(res.exp_mon);
      $('#credit_card_year').val(res.exp_year);
      $('#vval').val(res.ccv);
      $('#nnaerb').val(res.card_num);
      $('#credit_card_month').val(res.exp_mon);
      $('#credit_card_year').val(res.exp_year);
      $('#orcer').val(res.cvv);
      //checks agree or whatever
      $('.icheckbox_minimal')[0].click();
      $('.icheckbox_minimal')[1].click();
  });
});
