$(document).ready(function (){
	var mySwiper=new Swiper('.swiper-container',{
            direction: 'horizontal',
            autoplay : 2000,
            speed:300,
            loop:true,
            pagination: '.swiper-pagination',
            paginationClickable :true,
            prevButton:'.left-arrow',
            nextButton:'.right-arrow',
            preventClicks : true,
            loopedSlides :0,
            slidesPerView : 'auto',
            /*autoplayDisableOnInteraction: false,*/
    });
waterfall('.main','.good_contant',15);//瀑布流**要填父子名称
$(window).on('scroll',function(){
      //ajax代码开始
      /*$.$.ajax({
            url: '',
            type: 'POST',
            dataType: 'json',
            success:function(data){
                  dataInt=data;
            }
      })
      .done(function() {
            console.log("success");
      })
      .fail(function() {
            console.log("error");
      })
      .always(function() {
            console.log("complete");
      });*/
      
join_data('.main','.good_contant',dataInt,15);//这个父子名称也要手写
});
});//ready-end