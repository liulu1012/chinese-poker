/*
 *@name:98_web_game_list
 *@date:2016-11-24
 */
/*下载地址设置*/
var down_url = {
    jjby: {
        ios: "https://itunes.apple.com/cn/app/id1234827930?mt=8",//联网万炮
        //ios:"https://itunes.apple.com/cn/app/id1216080751?mt=8",//欢乐街机捕鱼
        android: 'http://cdn.game100.cn/app/1015/98by-y_98pk.apk'
    },
    hlby: {
        ios: "https://itunes.apple.com/cn/app/id1221753258?mt=8",
        android: 'javascript:void(0);'
    },

    ttjjby: {
        ios: "https://itunes.apple.com/cn/app/id1240760874?mt=8",
        android: 'http://cdn.game100.cn/app/1114/98by-y_98pk.apk'
    },
    zgdwf: {
        ios: "https://itunes.apple.com/cn/app/id1001945172?mt=8",
        android: 'javascript:void(0);'
    },
    fkjst: {
        ios: "javascript:void(0);",
        android: 'http://cdn.game100.cn/app/1035/98Boat.apk'
    },
    ddz: {
        ios: "javascript:void(0);",
        android: 'javascript:void(0);'
    },
    ermj: {
        ios: "https://itunes.apple.com/cn/app/id1230324420?mt=8",
        android: 'http://cdn.game100.cn/app/1054/98mahjong-y_98pk.apk'
    },
    zghmj: {
        ios: "https://itunes.apple.com/cn/app/id1229585087?mt=8",
        android: 'http://cdn.game100.cn/app/1054/98mahjong-y_98pk.apk'
    }
};

function we_ios_open_link(link) {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            setTimeout(function () {
                window.location.href =link;
            }, 1000);
        }
    }
}





$(function () {
    /*下载地址填充开始*/
    $(".jjby_link_ios").attr('href', down_url.jjby.ios);
    $(".jjby_link_android").attr('href', down_url.jjby.android);

    $(".hlby_link_ios").attr('href', down_url.hlby.ios);
    $(".hlby_link_android").attr('href', down_url.hlby.android);

    $(".ttjjby_link_ios").attr('href', down_url.ttjjby.ios);
    $(".ttjjby_link_android").attr('href', down_url.ttjjby.android);

    $(".zgdwf_link_ios").attr('href', down_url.zgdwf.ios);
    $(".zgdwf_link_android").attr('href', down_url.zgdwf.android);

    $(".fkjst_link_ios").attr('href', down_url.fkjst.ios);
    $(".fkjst_link_android").attr('href', down_url.fkjst.android);

    $(".ddz_link_ios").attr('href', down_url.ddz.ios);
    $(".ddz_link_android").attr('href', down_url.ddz.android);

    $(".ermj_link_ios").attr('href', down_url.ermj.ios);
    $(".ermj_link_android").attr('href', down_url.ermj.android);

    $(".zghmj_link_ios").attr('href', down_url.zghmj.ios);
    $(".zghmj_link_android").attr('href', down_url.zghmj.android);

    /*下载地址填充结束*/


    //设置幻灯片高度
    //var bd_width = $(".bd_imgs").width();//获取图片宽度
    //$(".bd_imgs").height(bd_width * 570 / 1920);//更具宽度设置高度

    //设置二维码的显示
    $(".swiper-wrapper,.detail_banner").on("mouseenter", ".icon", function () {
        $(this).siblings(".qr_pic").addClass("show");
    });
    $(".swiper-wrapper,.detail_banner").on("mouseenter", "span", function () {
        $(this).siblings(".qr_pic").addClass("show");
    });
    $(".swiper-wrapper,.detail_banner").on("mouseleave", ".icon", function () {
        $(this).siblings(".qr_pic").removeClass("show");
    });
    $(".swiper-wrapper,.detail_banner").on("mouseleave", "span", function () {
        $(this).siblings(".qr_pic").removeClass("show");
    });


    //联系我们
    $(".nav_tabs .content>li").hide();
    var index_li = $(".nav_tabs .title>li.active").index();
    $(".nav_tabs .content>li").eq(index_li).show();
    $(".nav_tabs .title>li").click(function () {
        var index_li = $(this).index();
        $(".nav_tabs .content>li").eq(index_li).show();
        $(".nav_tabs .content>li").eq(index_li).siblings().hide();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".nav_menu").click(function () {
        $(".nav_wrapper").toggle();
    });

    /* $(".quick_access .access_btn").mouseenter(function () {
     $(this).find(".icon").removeClass("icon-sanjiao1").addClass("icon-sanjiao2");
     });
     $(".quick_access .access_btn").mouseleave(function () {
     $(this).find(".icon").addClass("icon-sanjiao1").removeClass("icon-sanjiao2");
     });*/
    $(".recharge_list").on("click", "li", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".pay_way_wrapper").on("click", "li", function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".pay_way_w,.chose_game_w").on("click", "li", function () {
        $(this).addClass("active").siblings().removeClass("active");
    })


    /**
     * [isMobile 判断平台]
     * @param test: 0:iPhone    1:Android
     */
    function ismobile(test) {
        var u = navigator.userAgent, app = navigator.appVersion;
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
            if (window.location.href.indexOf("?mobile") < 0) {
                try {
                    if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                        return '0';
                    } else {
                        return '1';
                    }
                } catch (e) {
                }
            }
        } else if (u.indexOf('iPad') > -1) {
            return '0';
        } else {
            return '2';
        }
    }

    /*如果pla返回的是0:iPhone 1:Android*/
    var pla = ismobile(1);
    var screenW = $(window).width();
    if (screenW <= 1024) {
        if (pla == 0) {
            $(".ios_link").show();
            $(".android_link").hide();
        } else if (pla == 1) {
            $(".android_link").show();
            $(".ios_link").hide();
        }
    }

    $(".android_link").click(function () {
        if ($(this).attr('href') == 'javascript:void(0);') {
            alert("游戏升级中，敬请期待……");
            return false;
        }
        if(weStatus == 1){
            $("#we_bg").css("display", "block");
            $("#we_ios").css("display", "none");
            $("#we_android").css("display", "block");
            return false;
        }


    });
    $(".ios_link ").click(function () {
        /* if ($(this).hasClass("no_link")) {
         alert("游戏升级中，敬请期待……");
         }*/
        if ($(this).attr('href') == 'javascript:void(0);') {
            alert("游戏升级中，敬请期待……");
        }
    });
    $(".un_opened").click(function () {
        alert("该功能暂未开通，敬请期待~")
    });

    var u = navigator.userAgent;
    if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {//ios终端
        $("#ios_link").click();
    }

    /*微信判断*/
    var weStatus;
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        weStatus = 1;
        var bj = $("#we_bg");
        var android = $("#we_android");
        var ios = $("#we_ios");
        $(".we_link").show();
        $(".browser_link").hide();
        if (bj.css("display") === 'none') {
            var ua = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(ua)) {
                /*if(ios.css("display")==='none') {
                 ios.css("display","block");
                 }*/
            } else if (/android/.test(ua)) {
                bj.css("display", "block");
                if (android.css("display") === 'none') {
                    android.css("display", "block");
                }
            }
        } else {
            ios.css("display", "none");
            android.css("display", "none");
            bj.css("display", "none");
        }
        $(".alipayicon").hide();
    } else {
        weStatus = 0;

        //非微信手机端不显示微信支付
        if (pla < 2) {
            $(".wxpayicon").hide();
        }
        $(".we_link").hide();
        $(".browser_link").show();
    }

    /*    $(".index_banner").on("click",".we_link .btn",function () {
     var ua = window.navigator.userAgent.toLowerCase();
     if(ua.match(/MicroMessenger/i) == 'micromessenger'){
     var bj = $(".index #we_bg");
     var android =$(".index #we_android");
     var ios =$(".index #we_ios");
     if(bj.css("display") === 'none'){
     bj.css("display","block");
     var ua = navigator.userAgent.toLowerCase();
     if (/iphone|ipad|ipod/.test(ua)) {
     if(ios.css("display")==='none') {
     ios.css("display","block");
     }
     } else if (/android/.test(ua)) {
     if(android.css("display")==='none') {
     android.css("display","block");
     }
     }
     }else{
     ios.css("display","none");
     android.css("display","none");
     bj.css("display","none");
     }

     }
     });*/


    $(".we_bg").click(function () {
        $(this).hide();
    });


    /*登录注册页面开始*/
    $(".login").on("click", ".register_link", function () {
        $(".register_w").show();
    });
    $(".register_w").on("click", ".icon-close", function () {
        $(".register_w").hide();
    });
    /*找回密码*/
    $(".login").on("click", ".find_back_btn", function () {
        $(".find_psw_w").show();
    });
    $(".find_psw_w").on("click", ".icon-close", function () {
        $(".find_psw_w").hide();
    });
    /*密码显示隐藏切换开始*/
    /* $(".find_psw_w").on("click",".pwd-eye",function () {
     var $this = $(this);
     $this.toggleClass("icon-36x36guanbi");
     if($this.hasClass("icon-36x36guanbi")){
     $("#new_password").attr("type","password")
     }else{
     $("#new_password").attr("type","text")
     }
     });*/
    /*密码显示隐藏切换结束*/

    /*调用iPass插件*/
    //$(".login input[name='login_pwd']").iPass();
    //$(".login input[name='new_password']").iPass();
    //$(".login input[name='register_pwd']").iPass();
    //$(".login input[name='confirm_pwd']").iPass();

    /*登录注册页面结束*/

});


/*ipass 插件*/
(function ($) {

    $.fn.iPass = function (options) {
        var origFontStyle = $(this).css('fontStyle');
        var origColor = $(this).css('color');

        var defaults = {
            charReplace: '%u25CF',
            charDuration: 100,
            color: 'gray',
            //fontStyle: 'italic',
            retain: true
        }

        var opts = $.extend(defaults, options);
        var aktiv = null;

        $(this).each(function () {
            tempField = $(this).attr('name');
            $(this).attr('name', 'tmp_' + tempField);
            $(this).val($(this).attr('title'));
            $(this).css("font-style", opts.fontStyle);
            $(this).css("color", opts.color);
            $(this).parent().append('<input name="' + tempField + '" id="' + tempField + '" type="hidden" />');

        });

        if (opts.retain) {
            $(this).keydown(function () {
                clearField(this);
            });
        } else {
            $(this).focus(function () {
                clearField(this);
            });
        }

        $(this).blur(function () {
            if ($(this).val().length == 0) {
                $(this).val($(this).attr('title'));
                $(this).css("font-style", opts.fontStyle);
                $(this).css("color", opts.color);
            }
        });

        $(this).bind("keypress", function (evt) {
            clearTimeout(aktiv);
            var hiddenPass = '';
            if ($(this).val().length > 0) {
                if (evt.which == 8) {
                    deleteLast(this);
                } else {
                    currentValue = currentValue + $(this).val().slice($(this).val().length - 1);
                    for (i = 0; i <= $(this).val().length - 1; ++i) {
                        hiddenPass = hiddenPass + unescape(opts.charReplace);
                    }
                    lastLetter = $(this).val().charAt($(this).val().length - 1);
                    if (lastLetter != unescape(opts.charReplace)) {
                        saveString(lastLetter, this);
                    }
                    $(this).val(hiddenPass);
                    aktiv = setTimeout("hideAll('" + $(this).attr('name') + "')", opts.charDuration);
                }
            } else {
                currentValue = $(this).val();
                var tempField = $(this).attr('name');
                var hiddenID = tempField.substr(tempField.indexOf('_') + 1);
                $("input[name='" + hiddenID + "']").val('');
            }
        });

        clearField = function (el) {
            if ($(el).val() == $(el).attr('title')) {
                $(el).val("");
                $(el).css("font-style", origFontStyle);
                $(el).css("color", origColor);
            }
        }

        hideAll = function (el) {
            lastLetter = $("input[name='" + el + "']").val().charAt($("input[name='" + el + "']").val().length - 1);
            var hiddenID = el.substr(el.indexOf('_') + 1);
            var tmpstr = $("input[name='" + hiddenID + "']").val();
            $("input[name='" + hiddenID + "']").val(tmpstr + lastLetter);

            var hiddenPass = '';
            for (i = 0; i <= $("input[name='" + el + "']").val().length - 1; ++i) {
                hiddenPass = hiddenPass + unescape(opts.charReplace);
            }

            $("input[name='" + el + "']").val(hiddenPass);
        }

        saveString = function (str, el) {
            var tempField = $(el).attr('name');
            var hiddenID = tempField.substr(tempField.indexOf('_') + 1);

            var tmpstr = $("input[name='" + hiddenID + "']").val();
            $("input[name='" + hiddenID + "']").val(tmpstr + str);
        }

        deleteLast = function (el) {
            var tempField = $(el).attr('name');
            var hiddenID = tempField.substr(tempField.indexOf('_') + 1);
            var tmpstr = $("input[name='" + hiddenID + "']").val();
            var length = $("input[name='" + hiddenID + "']").val().length;
            $("input[name='" + hiddenID + "']").val(tmpstr.substring(0, length - 1));
        }

    };

})(jQuery);


