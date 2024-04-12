$(document).ready(function(){
    $(".down-menu").hover(function () { 
   
      
      $(".dropdown").show();
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

});

