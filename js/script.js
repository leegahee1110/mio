document.addEventListener("DOMContentLoaded", function () {
    function addHoverEffect(element) {
        element.addEventListener("mouseenter", function () {
            let circle = document.createElement("div");
            circle.classList.add("hover-circle");
            element.appendChild(circle);

            setTimeout(() => {
                circle.style.transform = "scale(10)"; 
                circle.style.opacity = "1"; 
            }, 10); 
        });

        element.addEventListener("mouseleave", function () {
            let circle = element.querySelector(".hover-circle");
            if (circle) {
                circle.style.transform = "scale(0)"; 
                circle.style.opacity = "0"; 
                setTimeout(() => {
                    circle.remove();
                }, 800);
            }
        });
    }

    let locationBox = document.querySelector(".location");
    let customerBox = document.querySelector(".customer");

    if (locationBox && customerBox) {
        addHoverEffect(locationBox);
        addHoverEffect(customerBox);
    }

    console.log("Hover effect initialized");

    $('#slide ul li').hide();
    $('#slide ul li:nth-child(1)').show();
    setInterval(function(){
        $('#slide ul li:nth-child(1)').fadeOut(2000).next().fadeIn(2000).end().appendTo('#slide ul');
    }, 4000);

    setTimeout(function() {
        $('#slide2 ul li').hide();
        $('#slide2 ul li:nth-child(1)').show();
        setInterval(function(){
            $('#slide2 ul li:nth-child(1)').fadeOut(2000).next().fadeIn(2000).end().appendTo('#slide2 ul');
        }, 4000);
    }, 2000);

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('.btn_gotop').show();
        } else{
            $('.btn_gotop').hide();
        }
    });

    $('.btn_gotop').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });

    function toggleMenu() {
        const menu = document.getElementById('m_menu');
        menu.classList.toggle('active');
        console.log("Menu toggled");
    }
});



$('#slide ul li').hide();
$('#slide ul li:nth-child(1)').show();
setInterval(function(){
    $('#slide ul li:nth-child(1)').fadeOut(2000).next().fadeIn(2000).end()
    .appendTo('#slide ul');
}, 4000); // 변경 간격을 4초로 설정

// #slide2의 실행을 2초 지연
setTimeout(function() {
    $('#slide2 ul li').hide();
    $('#slide2 ul li:nth-child(1)').show();
    setInterval(function(){
        $('#slide2 ul li:nth-child(1)').fadeOut(2000).next().fadeIn(2000).end()
        .appendTo('#slide2 ul');
    }, 4000);
}, 2000);  // #slide2는 2초 후에 시작

$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.btn_gotop').show();
	} else{
		$('.btn_gotop').hide();
	}
});
$('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});

function toggleMenu() {
    const menu = document.getElementById('m_menu');
    menu.classList.toggle('active');
  }