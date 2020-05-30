$(function () {
    //nav hover하면 스르륵 나타나게 또는 사라지게
    $("#nav>li").eq(0).mouseover(function () {
        $(".sub").stop().fadeIn(300)
    })

    $("#nav>li").eq(0).mouseout(function () {
        $(".sub").stop().fadeOut(300);
    })

    //.sortContents 클릭하면 css에서 active준걸로 바뀌면서 sortMenu에 나타나게
    $(".sortContents").click(function (e) {
        e.preventDefault();
        $(this).addClass("active");
        $(".sortMenu").css("display", "block");
    })


    //sortMenu>li를 클릭하면 해당하는 li가 .sortContents>a자리로 오고,
    //active 사라지게
    //.sortMenu는 안보이게
    $(".sortMenu>li").click(function (e) {
//        e.preventDefault();
        var selected = $(this).text();
        $(".sortContents>a").text(selected);
        $(".sortContents").removeClass("active");
        $(".sortMenu").css("display", "none");
    })


    //length=갯수
    //.pr1>.Advanced에 자식으로 있는 li의 갯수만큼 숫자가 .number1나타난다.
    //li 갯수가 추가되면 .number1 갯수도 추가되게
    var pr1 = $(".pr1>.Advanced").children("li").length;
    var pr2 = $(".pr2>.Advanced").children("li").length;
    var pr3 = $(".pr3>.Advanced").children("li").length;
    var pr4 = $(".pr4>.Advanced").children("li").length;
    var prSum = pr1 + pr2 + pr3 + pr4;
    //prSum은 전체갯수
    //    console.log(prSum);
    $(".all").text(prSum);
    $(".number1").text(pr1);
    $(".number2").text(pr2);
    $(".number3").text(pr3);
    $(".number4").text(pr4);



    //하트 버튼 누르면 색깔이 변하게
    $(".like").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
    })

    //slideBtn을 누르면 다음 제품들인 나오게
    $(".rightBtn").click(function (e) {
//        e.preventDefault();
        $(".pr3,.pr4").css("display", "block").siblings(".pr1, .pr2").css("display", "none");
    })

    $(".leftBtn").click(function (e) {
//        e.preventDefault();
        $(".pr1,.pr2").css("display", "block").siblings(".pr3,.pr4").css("display", "none");
    })


    //topBtn
    $(".topBtn").click(function (e) {
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000)
    })


    
    $(".buyBtn>a").click(function(e){
        e.preventDefault();
    })

})
