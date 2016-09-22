/**
 * Created by 孟磊 on 2016/8/15.
 */
var num=0
$(".wheel .ul li").click(function(){
    var index= $(".wheel .ul li").index(this);

    $(".wheel .ul li").css({background:"rgba(0,0,0,.4)"});
    $(this).css({background:"rgba(255,255,255,.5)"})
    $(".wheel-img").css("opacity",0);
    $(".wheel-img").eq(index).css("opacity",1)
    num=index
    if(num==0){
        $(".wheel-box").css("background","rgb(246,188,193)")
    }else if(num==1){
        $(".wheel-box").css("background","rgb(232, 232, 232)")
    }else if(num==2){
        $(".wheel-box").css("background","rgb(255, 209, 212)")
    }else if(num==3){
        $(".wheel-box").css("background","rgb(232, 232, 232)")
    }else if(num==4){
        $(".wheel-box").css("background","rgb(235, 123, 151)")
    }else if(num==5){
        $(".wheel-box").css("background","rgb(84, 170,193)")
    }
})

function fun(){
    num++
    if(num>$(".wheel-img").length-1){
        num=0
    }
    $(".wheel-img").animate({opacity:0})
    $(".wheel-img").eq(num).finish()
    $(".wheel-img").eq(num).animate({opacity:1})
    $(".wheel .ul li").css({background:"rgba(0,0,0,.4)"}).eq(num).css({background:"rgba(255,255,255,.5)"});
    if(num==0){
        $(".wheel-box").css("background","rgb(246,188,193)")
    }else if(num==1){
        $(".wheel-box").css("background","rgb(232, 232, 232)")
    }else if(num==2){
        $(".wheel-box").css("background","rgb(255, 209, 212)")
    }else if(num==3){
        $(".wheel-box").css("background","rgb(232, 232, 232)")
    }else if(num==4){
        $(".wheel-box").css("background","rgb(235, 123, 151)")
    }else if(num==5){
        $(".wheel-box").css("background","rgb(84, 170,193)")
    }
}
var t=setInterval(fun,2000)
$(".wheel").hover(function(){
    clearInterval(t)
},function(){
    t=setInterval(fun,2000)
})

$(".dsbbb").hover(function(){
    var index=$(".dsbbb").index(this)
    $(".dsbbb2").eq(index).css("display","block")
},function(){
    var index=$(".dsbbb").index(this)
    $(".dsbbb2").eq(index).css("display","none")
})
