$(document).ready(function(){
    waterfall('.bigbig_box','.main_box',1);//瀑布流**要填父子名称
    $(window).on('scroll',function(){
    join_data('.bigbig_box','.main_box',dataInt,1);//这个父子名称也要手写
    });
 
});//ready-end