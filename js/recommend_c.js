window.onload = function(){
    window.onscroll=function(){
        join_data('.main','.content',dataInt,ju);   //这个父子名称也要手写
    };
    var ju = 5;
    waterfall('.main','.content',ju);
}
function join_data(big_box_name,small_box_name,dataInt,ju){
        var ab=big_box_name,abc=small_box_name;
                var ac=abc.replace(/./,' ');
            if(checkscrollside(ab,abc)){
                dox(ab,ac,dataInt,ju);
                waterfall(ab,abc,ju);//滚动到底部时加入
            };
    };
var dataInt={'data':[{
                            'src':'recommend_con2.jpg',
                            'user_name':'冈拉梅朵',
                            'content_time':'7天前',
                            'content_guan':'62',
                            'con_des':'情感交流美丽圈',
                            'con_tit':'你跟他合不合适，吃顿饭就知道了！',
                            'content_body':'据说旅行是检验婚姻的唯一标准，两个人一起去旅行后还没有彼此厌恶反感后，就会幸福一辈子！…',
                            'user_img':'head_logo.jpg'
                        },{
                            'src':'recommend_con1.jpg',
                            'user_name':'冈拉梅朵',
                            'content_time':'7天前',
                            'content_guan':'62',
                            'con_des':'情感交流美丽圈',
                            'con_tit':'美甲圈最污的10款美甲，怎么污了？',
                            'content_body':'冬天你的美甲也要换换了，很多人问小编今年美甲最流行什么颜色，小编只想说，适合自己的才是最好的。请关注教你健康丰乳aajnjk但是还是有颜色流行趋向的，今年各种酒红色风潮，当然美甲也少不了它了，真的很显肤色，真的很漂亮的颜色哦。…',
                            'user_img':'head_logo.jpg'
                        },{
                            'src':'recommend_con1.jpg',
                            'user_name':'冈拉梅朵',
                            'content_time':'7天前',
                            'content_guan':'62',
                            'con_des':'情感交流美丽圈',
                            'con_tit':'你跟他合不合适，吃顿饭就知道了！',
                            'content_body':'据说旅行是检验婚姻的唯一标准，两个人一起去旅行后还没有彼此厌恶反感后，就会幸福一辈子！…',
                            'user_img':'head_logo.jpg'
                        },{
                            'src':'recommend_con2.jpg',
                            'user_name':'冈拉梅朵',
                            'content_time':'7天前',
                            'content_guan':'62',
                            'con_des':'情感交流美丽圈',
                            'con_tit':'美甲圈最污的10款美甲，怎么污了？',
                            'content_body':'冬天你的美甲也要换换了，很多人问小编今年美甲最流行什么颜色，小编只想说，适合自己的才是最好的。请关注教你健康丰乳aajnjk但是还是有颜色流行趋向的，今年各种酒红色风潮，当然美甲也少不了它了，真的很显肤色，真的很漂亮的颜色哦。…',
                            'user_img':'head_logo.jpg'
                        }]};
function dox(big_box_name,small_box_name,jsona,ju) {
    $.each( jsona.data, function( index, value ){
            var $oPin = $('<div>').addClass(small_box_name).appendTo( $(big_box_name) );//解释json后html要拼接的代码**要手写
            var text = "<a class='content_zong' href='javascript:void(0)'>"+
                        "<div class='content_header clear'>"+
                        "<img class='user_img' src='image/images/"+dataInt.data[index].user_img+"' alt=''>"+
                        "<div class='info'>"+
                            "<p class='user_info clear'><span class='user_name'>"+dataInt.data[index].user_name+"</span><i class='icon iconfont tu_jian'>&#xe606;</i><span class='content_time'>"+dataInt.data[index].content_time+"</span><i class='icon iconfont tu_eye'>&#xe603;</i><span class='content_guan'>"+dataInt.data[index].content_guan+"</span><span class='con_des'>"+dataInt.data[index].con_des+"</span></p>"+
                            "<p></p>"+
                            "<h2 class='con_tit'>"+dataInt.data[index].con_tit+"</h2>"+
                        "</div>"+
                        "</div>"+
                        "<div class='content_body'>"+
                            "<p class='con_det'>"+dataInt.data[index].content_body+"</p>"+
                            "<img src='image/images/"+dataInt.data[index].src+"' alt=''>"+
                        "</div>"+
                        "</a>";
            $oPin.html(text);
        }   
    );            
};