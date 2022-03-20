jQuery( document ).ready(function(){
    $(function (){
    $(".Open-Close").click(function(){
    $(".Header-nav-phone").slideToggle(500);
 });
    $(window).resize(function(){
  $(".Header-nav-phone").hide();
});    
});
});
