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
});