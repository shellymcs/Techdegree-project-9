

// Scrollspy 
$('body').scrollspy({ target: '#navbarTogglerDemo02' })


//Don't fade in tagline until page/background photo loaded
$(window).bind("load", function() {
    $(document.getElementsByClassName('headline')).removeClass("hidden");
 });  