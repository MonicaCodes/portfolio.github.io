var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,8000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}


$(document).ready(function() {
    $("#navToggle a").click(function(e){
        e.preventDefault();

        $("header > nav").slideToggle("medium");
        $("#logo").toggleClass("menuUp menuDown");
    });

    $(window).resize(function() {
        if($( window ).width() >= "600") {
            $("header > nav").css("display", "block");

            if($("#logo").attr('class') == "menuDown") {
                $("#logo").toggleClass("menuUp menuDown");
            }
        }
        else {
            $("header > nav").css("display", "none");
        }
    });

    $("header > nav.mainMenu > ul > li > a").click(function(e) {
        if($( window ).width() <= "600") {
            if($(this).siblings().size() > 0 ) {
                $(this).siblings().slideToggle("fast")
				$(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
            }
        }
    });
});
