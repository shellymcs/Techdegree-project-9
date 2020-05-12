

// Scrollspy 
$('body').scrollspy({ target: '#navbarTogglerDemo02' })


//Dont fade in tagline until page/background photo loaded
$(window).bind("load", function() {
    $(document.getElementsByClassName('headline')).removeClass("hidden");
 });  