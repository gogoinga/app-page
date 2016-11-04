!(function(win, doc){
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var winWidth =  window.innerWidth;
        // doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ; 
        // 2016-01-13 订正
        // 640宽度以上进行限制 需要css进行配合
        var size=(winWidth/640)*40;
        doc.documentElement.style.fontSize = (size < 40 ? size : 40) + 'px' ;
    }
    var evt='onorientationchange' in win ? 'orientationchange' : 'resize';
    var timer=null;
    win.addEventListener(evt, function () {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }
    }, false);
    // 初始化
    setFontSize();
}(window, document));

$(document).ready(function(){
    var bottom_li=$('.li_nav');
    
    bottom_li.each(function(index, el) {
        bottom_li.eq(index).on('click',function(event) {
            event.preventDefault();
            for (var i=0;i<bottom_li.length;i++) {
                bottom_li.eq(i).find('a i,span').removeClass('active');
            }
           $(this).find('a i,span').toggleClass('active');
        });
    });
})