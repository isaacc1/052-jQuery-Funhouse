$(".garage-door-opener").click(function() {
   $(".garage-door").slideToggle(); 
});

$(".pokeball").click(function() {
    $(".pikachu").fadeIn();
});

$(".light-switch").click(function() {
$(".garage-door").toggle();
$(".light-bulb").hide().delay(800).show().delay(800).hide();

});
$(".hand").click(function() {
    $(".curtain").slideToggle();
});