/**
 * Created by Administrator on 2016/6/19 0019.
 */
$(document).ready(function(){
    $("a").attr("target","_blank")
    $(".select").click(function(){ //当鼠标点击slelct Region 弹出新对话框 打开遮蔽罩
        $("a").attr("target","")
        $(".switch").slideDown();//打开新对话框
        $(".shield").fadeIn();//打开遮蔽罩
        return false
    });
    $(".x").click(function(){
        $(".switch").slideUp();
        $(".shield").fadeOut();

    });//当鼠标点击x，关闭新对话框，关闭遮蔽罩

    $(".topbar-care").mouseenter(function(){ //鼠标移入购物车
        $(".care-menu").slideToggle() // 显示购物车详细
        $(".kong").addClass("kong-change");
        $(".topbar-care").addClass("care-change");
    });
    $(".topbar-care").mouseleave(function(){  //鼠标移出
        setTimeout(function(){$(".care-menu").slideToggle();}, 300);  //关掉购物车页面
        setTimeout(function(){$(".kong").removeClass("kong-change");}, 400)
        setTimeout(function(){$(".topbar-care").removeClass("care-change");}, 500);
    });
    var menus=new Array(".menu-guide-1",".menu-guide-2",".menu-guide-3",".menu-guide-4",".menu-guide-5",".menu-guide-6",".menu-guide-7",".menu-guide-8",".menu-guide-9",".menu-guide-10");
    for (var i = 0; i < 10; i++) {
        $(menus[i]).mouseenter(function(){
            $(this).children("div").show()
        })
        $(menus[i]).mouseleave(function(){
            $(this).children("div").hide()
        })
    };
    $(".header-nav").mouseenter(function(){  // 顶部导航 开启占位div
        $(".zhanwei-div").show()
    });
    $(".header-nav").mouseleave(function(){  // 顶部导航 关闭占位div
        $(".zhanwei-div").hide()
    });

    $(".header-nav-li").mouseenter(function(){  // 顶部导航
        if ($(".zhanwei-div").css("display") == "none") { //如果占位div不存在则代表第一次移入 开启动画效果
            $(this).children("div").slideDown()
        } else {  //如果占位div存在则代表不是第一次移入 关闭动画
            $(this).children("div").show()
        }
    });
    $(".header-nav-li").mouseleave(function(){  // 顶部导航
        $(this).children("div").hide()
    });
    var oa=new Array("rolling-a-0","rolling-a-1","rolling-a-2","rolling-a-3","rolling-a-4")
    $(".rolling").click(function(){
        $(".rolling").removeClass("touch");
        $(this).addClass("touch");
        var n= $(this).text()
        $(".rolling0").fadeTo(300,0.0)   //把其他图片的透明度调成0
        $(".rolling0").eq(n).fadeTo(100,1.0)  //把当前透明度调整1
        var ahref=$(".rolling0").eq(n).attr("href");  //获取当前按钮的herf
        $(".rolling0").eq(4).attr("href",ahref) //塞入最上面一张图
        return false;
    });
    $(".rolling").mouseenter(function(){
        clearInterval(timer) //检测到鼠标移动到原点就关闭计时器
    });
    //轮播定时器
    var oclick=new Array(".click-0",".click-1",".click-2",".click-3",".click-4")
    var iNow=0;  //iNow第一张
    timer=setInterval(function(){  //打开定时器
        iNow++;       //图片加1，成为下一张
        if(iNow>4){
            iNow=0;
        }
        $(oclick[iNow]).trigger("click"); //触发小圆点的click
    },4000);
    //上部展示切换
    $(".con-bottom-onclick").click(function(){
        $(".carousel-one").fadeIn(500)
        $(".carousel-tow").fadeOut(500)
        return false;
    });
    $(".con-bottom-unclick").click(function(){
        $(".carousel-tow").fadeIn(800)
        $(".carousel-one").fadeOut(800)
        return false;
    });
    var rclick=new Array(".con-bottom-onclick",".con-bottom-unclick")
    var R=0;
    Rclick=setInterval(function(){
        R++;
        if(R>1){
            R=0;
        }
        $(rclick[R]).trigger("click");
    },5000);
    for (var i = 0; i < 4; i++) { //第一行 热门耳机
        $(".top-button-click").eq(i).mouseenter(function(){
            var atext=$(this).text()
            if (atext=="热门") {  //如果触摸的是热门
                $(".hot-headset").show()  // 显示热门标签
                $(".hot-headset").siblings().hide() //隐藏其他同辈标签
            };
            if (atext=="耳机音箱") {
                $(".headset").siblings().hide()
                $(".headset").show()
            };
            if (atext=="电源") {
                $(".memory").siblings().hide()
                $(".memory").show()
            };
            if (atext=="电池存储卡") {
                $(".source").siblings().hide()
                $(".source").show()
            };
            $(".top-button-click").removeClass("top-button-color")
            $(".top-button-click").removeClass("top-button-border")
            $(this).addClass("top-button-color")
            $(this).addClass("top-button-border")
            $(this).removeClass("gray-424242")
        })
    };
    $(".top-button-click").click(function(){
        return false;
    })
    for (var i = 0; i < 5; i++) {

        $(".tow-top-button-click").eq(i).mouseenter(function(){
            var atext=$(this).text()
            if (atext=="热门") {
                $(".hot-protect").show()
                $(".hot-protect").siblings().hide()
            };
            if (atext=="保护套") {
                $(".protect").siblings().hide()
                $(".protect").show()
            };
            if (atext=="后盖") {
                $(".lid").siblings().hide()
                $(".lid").show()
            };
            if (atext=="贴膜") {
                $(".film").siblings().hide()
                $(".film").show()
            };
            if (atext=="其他配件") {
                $(".parts").siblings().hide()
                $(".parts").show()
            };
            $(".tow-top-button-click").removeClass("top-button-color")
            $(".tow-top-button-click").removeClass("top-button-border")
            $(this).addClass("top-button-color")
            $(this).addClass("top-button-border")
            $(this).removeClass("gray-424242")
            return false; //防止误点击跳转
        })
    };
    for (var i = 0; i < 5; i++) {
        $(".three-top-button-click").eq(i).mouseenter(function(){
            var atext=$(this).text()
            if (atext=="热门") {
                $(".hot-clothes").show()  // 显示热门标签
                $(".hot-clothes").siblings().hide()
            };
            if (atext=="服装") {
                $(".clothes").siblings().hide()
                $(".clothes").show()
            };
            if (atext=="米兔") {
                $(".rabbit").siblings().hide()
                $(".rabbit").show()
            };
            if (atext=="生活周边") {
                $(".periphery").siblings().hide()
                $(".periphery").show()
            };
            if (atext=="箱包") {
                $(".bag").siblings().hide()
                $(".bag").show()
            };
            $(".three-top-button-click").removeClass("top-button-color")
            $(".three-top-button-click").removeClass("top-button-border")
            $(this).addClass("top-button-color")
            $(this).addClass("top-button-border")
            $(this).removeClass("gray-424242")
            return false; //防止误点击跳转
        })
    };

});