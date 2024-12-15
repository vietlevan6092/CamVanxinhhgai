$(function () {
    setTimeout(function () {
        $('.name').animate({
            opacity:"1",
            top:"15%"
        },2000);

    },3500);
    setTimeout(function () {
        $('.happy').animate({
            opacity:"1",
            top:"15%"
        },2000);

    },3500);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity:"1",
            top:"70%"
        },1500);
        $('.button-style2').animate({
            opacity:"1",
            top:"85%"
        },2000);
    },5500);
	$(window).click(function(){
		$('audio')[0].play();
	});
	window.audio=$('audio')[0].play();
})