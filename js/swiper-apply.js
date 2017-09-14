/**
 * Created by 1 on 2016/11/28.
 */
$(function () {
    var my_Swiper = new Swiper ('.banner_swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay:3000,
        // 如果需要分页器
        grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        pagination: '.swiper-pagination',
        paginationClickable :true,

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        preventLinksPropagation : false

    });
    $('.banner_swiper').mouseenter(function(){
        my_Swiper.stopAutoplay();
    });
    $('.banner_swiper').mouseleave(function(){
        my_Swiper.startAutoplay();
    });

    var width=$(window).width();
        if(width<768){
            var game_detail_Swiper = new Swiper ('.game_detail_swiper', {
                loop: true,
                //autoplay:5000,
                visibilityFullFit : true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                paginationClickable :true

            })
        }else{
            var game_detail_Swiper = new Swiper ('.game_detail_swiper', {
                direction: 'horizontal',
                loop: true,
                slidesPerView :2,
                spaceBetween :20,
                slidesPerGroup : 2,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                paginationClickable :true,
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            })
        }
});