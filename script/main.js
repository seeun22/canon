//메뉴 
$(function () {
    $("#nav>li").eq(0).mouseover(function () {
        $(".sub").stop().fadeIn(300)
    })

    $("#nav>li").eq(0).mouseout(function () {
        $(".sub").stop().fadeOut(300);
    })

    //제품찾기 버튼 클릭하면 search가 슬라이드로 내려오게
    $(".prSearch>a").click(function (e) {
        e.preventDefault();
        $(".search").stop().slideToggle(300);
    })

    $(".search>li").click(function (e) {
        e.preventDefault();
        var selected = $(this).text();
        $(".prSearch>a").text(selected);
        $(".search").slideUp(300);
    })

    //banner
    //배너 슬라이브 버튼을 누르면 움직이고, 자동으로도 움직이게
    //배너 복사하기
    var banner = $(".banner>li").clone();
    //배너뒤에 붙이기
    $(".banner").append(banner);

    //slide 버튼 누르면 해당하는 배너가 보이게 왼쪽으로 이동, 버튼 클릭하면 해당하는 버튼은 색깔이 변하게
    var sNum = 0;

    function moveBanner() {

        if (sNum == 3) {
            slideBtn.eq(0).addClass("active").siblings().removeClass("active");
        }
        $(".banner").stop().animate({
            "margin-left": -sNum * 100 + "%"
        }, 1000)

        slideBtn.eq(sNum).addClass("active").siblings().removeClass("active");
    }

    var slideBtn = $(".slide>li")
    slideBtn.on("click", function () {
        sNum = $(this).index();
        moveBanner();
    })

    //    3초마다 배너가 왼쪽으로 자동 이동
    var time = setInterval(function () {
        if (sNum == 3) {
            sNum = 0;
            $(".banner").css("margin-left", 0);
        }
        sNum++;
        moveBanner();
    }, 3000)

    // 배너에 마우스가 들어가면 자동재생 stop
    $("#visual").mouseenter(function () {
        clearInterval(time);
    })


    $("#visual").mouseleave(function () {
        time = setInterval(function () {
            if (sNum == 3) {
                sNum = 0;
                $(".banner").css("margin-left", 0);
            }
            sNum++;
            moveBanner();
        }, 3000)
    })




    //product
    var num = 0;
    var prWidth = $(".prImg > li").outerWidth();
    var copy = $(".prImg > li").clone();
    $(".prImg").append(copy);
    $(".prBtnR").click(function (e) {
        e.preventDefault();
        console.log(num);
        if (num == 5) {
            $(".prImg>li").eq(0).children("a").stop().animate({
                "width": 90 + "%"
            }, 100)
        }

        if (num == 6) {
            num = 0;
            $(".prImg").css("margin-left", 0);
            $(".prImg>li").eq(0).children("a").stop().animate({
                "width": "80%"
            }, 100)
        }

        num++;
        movePr();
    })

    $(".prBtnL").click(function (e) {
        e.preventDefault();
        console.log(num);
        if (num == 1) {
            $(".prImg>li").eq(6).children("a").stop().animate({
                "Width": 90 + "%"
            }, 100)
        }
        if (num == 0) {
            num = 6;
            $(".prImg").css("margin-left", -prWidth * num + "px")
        }
        num--;
        movePr();
    })

    function movePr() {
        $(".prImg").stop().animate({
            "margin-left": -prWidth * num + "px"
        }, 1000);

        $(".prImg>li").eq(num).addClass("active").siblings().removeClass("active");
        if (!(num == 6)) {
            $(".prText > li").eq(num).css("display", "block").siblings().css("display", "none");
        } else {
            $(".prText > li").eq(0).css("display", "block").siblings().css("display", "none");
        }
    }


    //topBtn
    
    $(".topBtn").click(function (e) {
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000)
    })


    //    video


    $(".banner>li").eq(2).on("mouseenter", function () {
        $("#playBtn").css("display", "block");
    })

    $(".banner>li").eq(2).on("mouseleave", function () {
        $("#playBtn").css("display", "none");
    })

    $("#playBtn").click(function () {
        //        $("#video")[0].pause();

        if ($("#playBtn").hasClass("active")) {

            $("#video")[0].play();
            $("#playBtn").toggleClass("active");
            //             console.log($("#playBtn").hasClass("active"));
        } else {
            //            console.log($("#playBtn").hasClass("active"));
            $("#video")[0].pause();
            $("#playBtn").toggleClass("active");
        }

    })






})
