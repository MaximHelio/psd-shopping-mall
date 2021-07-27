$(function(){
    var top_bn_box = new Swiper('.top_bn_box .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.top_bn_box .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.top_bn_box .swiper-button.next',
          prevEl: '.top_bn_box .swiper-button.prev',
        },
    });
  var main_slide = new Swiper('.main_slide .swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.main_slide .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main_slide .swiper-button.next',
         prevEl: '.main_slide .swiper-button.prev',
    },
  });
  var new_product_slide = new Swiper('.new_product_slide .swiper-container', {
    slidesPerView: 5,
    spaceBetween:10,
    loop:true,
    pagination: {
    	el: '.new_product_slide .swiper-pagination',
        clickable: true,
    },
    navigation: {
      	nextEl: '.new_product_slide .swiper-button.next',
       	prevEl: '.new_product_slide .swiper-button.prev',
    }
  });
  $(".icon_box .icon").click(function(){
    $(this).toggleClass("on");
  });
});