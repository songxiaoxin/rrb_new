$(function () {
    //缴纳社保 缴纳公积金模块
    if ($(window).width() > 768) {
        $(".taocan-box li").mouseover(function () {
            $(this).css("position", "relative");
            $(this).animate({"top": "-20px"}, 100);
        }).mouseleave(function () {
            $(this).animate({position: "static", top: "0"}, 100);
        });
    }
    //鼠标放上去切换计算器
    $(".entry-title a").click(function () {
        $(".entry-title a").removeClass('active');
        $(this).addClass('active')
        var index=$(this).index();
        if(index==0){
            $('.entry-content-gongjijin').removeClass('bounceInLeft entry-content-show');
            $('.entry-content-shebao').addClass('bounceInLeft entry-content-show');
        }else {
            $('.entry-content-gongjijin').addClass('entry-content-show bounceInLeft ');
            $('.entry-content-shebao').removeClass('bounceInLeft entry-content-show');
        };
    })

//  点击社保详细出现弹框
    $('.mingxi').click(function () {
        $('.md-overlay').addClass('md-bg-show');
        $('.md-modal').addClass(' md-show ');
    })

    $('.close_xiangxi').click(function () {
        $('.md-overlay').removeClass('md-bg-show');
        $('.md-modal').removeClass('md-show ');
    });

//行业信息模块
    $(window).scroll(function(){
        var height = window.pageYOffset;
        if(height > 400){
            $('.icon_box').addClass('flipInX')
        }
    })

    //企业定制服务
    $(".qiye_btn").mouseover(function () {
        $(".qiye_btn").removeClass('active');
        $(this).addClass('active')
        var index=$(this).index();
        if(index==0){
            $('.qiyegjj_title').removeClass('bounceInRight qiye-show');
            $('.qiye_title').addClass('bounceInRight qiye-show');
        }else {
            $('.qiyegjj_title').addClass('qiye-show bounceInRight ');
            $('.qiye_title').removeClass('bounceInRight qiye-show');
        };
    })
//底部微信公众号鼠标放上去显示
    $('.ben_weixin').hover(function () {
            $('.weixin_public').addClass('MD-home-sidebar-show rollIn');
    },function () {
             $('.weixin_public').removeClass('MD-home-sidebar-show rollIn');
    })
//    底部点击更多显示隐藏
    $('.more-friend').click(function () {
        $('.Friendship_link').toggleClass('Friendship_link_more')
    })
//右侧漂浮栏目
    $('.MD-home-sidebar-js-btn').click(function () {
        $('.MD-home-sidebar-js-btn').removeClass('MD-home-sidebar-active');
        $(this).addClass('MD-home-sidebar-active');
        var index=$(this).index();
       if(index==0){
           $('.MD-home-sidebar-js-list').removeClass('MD-home-sidebar-show');
           $('.MD-home-sidebar-free-show').addClass('MD-home-sidebar-show');
       }else if(index==1){
           $('.MD-home-sidebar-js-list').removeClass('MD-home-sidebar-show');
           $('.MD-home-sidebar-app-down').addClass('MD-home-sidebar-show');
       }else{
           $('.MD-home-sidebar-js-list').removeClass('MD-home-sidebar-show');
           $('.MD-home-sidebar-public-number').addClass('MD-home-sidebar-show');
       }
    })

//    app点击关闭
    $('.MD-home-sidebar-app-close').click(function () {
        $('.MD-home-sidebar-js-btn').removeClass('MD-home-sidebar-active');
        $('.MD-home-sidebar-js-list').removeClass('MD-home-sidebar-show');

    })

   //点击返回顶部
    $(".MD-home-sidebar-toTop").click(function () {
        $({ top: $(window).scrollTop() }).animate(
            { top: 0 },
            {
                duration: 700,
                step: function () {
                    $(window).scrollTop(this.top);
                }
            }
        );
    });


})