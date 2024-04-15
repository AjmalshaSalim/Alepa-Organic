$(document).ready(function(){
    $(".down-menu").hover(function () { 
   
      
      $(".dropdown").toggle();
    });
    $(".down-menu1").click(function () { 
   
      
      $(".dropdown1").slideToggle();
    });
    $("#stainlesss").hover(function () { 
   
      
      $("#desc1").slideToggle();
    });
    $("#Wildforest-img").hover(function () { 
   
      
      $("#Wildforest").slideToggle();
    });
    $("#Multifloral-img").hover(function () { 
   
      
      $("#Multifloral").slideToggle();
    });
  });
  $(document).ready(function() {
    $(".fa-bars").click(function(e) {
        $(".mobile-nav").slideToggle(); // Show/hide the mobile-nav menu
    });
    $('#lightSlider').lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      slideMargin: 0,
      thumbItem: 3
  });
});
$(document).ready(function(){
  $(".fa-eye-slash").click(function(){
    var passwordField = $(this).closest(".input-group").find("input[type='password']");
    passwordField.attr("type", "text");
    $(this).hide();
    $(this).siblings(".fa-eye").show();
    $(this).addClass("form-control:focus");
  });
  
  $(".fa-eye").click(function(){
    var passwordField = $(this).closest(".input-group").find("input[type='text']");
    passwordField.attr("type", "password");
    $(this).hide();
    $(this).siblings(".fa-eye-slash").show();
  });
});
$(document).ready(function(){
  $(".box").hover(function(){
      $(this).find(".product-wrapper.backward").show().css({
          "position": "absolute",
          "top": "-px"
      });
      $(this).find(".product-img img").addClass("filter");
      $(this).find(".fa-trash").show();
  });
  $(".box").mouseleave(function(){
    $(this).find(".product-wrapper.backward").show().css({
        "position": "absolute",
        "top": "-px"
    });
    $(this).find(".product-img img").remove("filter");
    $(this).find(".fa-trash").hide();
});
$(".fa-trash").click(function(){
  $(this).closest(".box").remove();
});
// Calculate subtotal and update display when quantity button is clicked
$(".qtybtn").click(function(){
  var $row = $(this).closest("tr"); 
  var proprice = parseFloat($row.find(".pro-price span").text().replace("₹", ""));
  var proqty = parseFloat($row.find(".pro-quantity input").val());
  var prosubtotal = proprice * proqty;
  $row.find(".pro-subtotal span").text("$" + prosubtotal.toFixed(2));
  
  // Update total sum of subtotals
  updateTotal();
});

// Remove row when trash icon is clicked
$(".fa-trash-o").click(function(){
  $(this).closest('tr').remove();
  // Update total sum of subtotals after removing row
  updateTotal();
});

// Function to update total sum of subtotals
function updateTotal() {
  var total = 0;
  $(".pro-subtotal span").each(function() {
    total += parseFloat($(this).text().replace("₹", ""));
  });
  $("#total").text("$" + total.toFixed(2));
}

});

