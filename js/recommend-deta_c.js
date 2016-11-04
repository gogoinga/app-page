 $(function(){
    var dataInt={'data':[{
                            'src':'recommend_con1.jpg',
                            'user_name':'冈拉梅朵',
                            'content_time':'7天前',
                            'content_guan':'62',
                            'con_des':'情感交流美丽圈',
                            'con_tit':'你跟他合不合适，吃顿饭就知道了！',
                            'content_body':'据说旅行是检验婚姻的唯一标准，两个人一起去旅行后还没有彼此厌恶反感后，就会幸福一辈子！…',
                            'user_img':'head_logo.jpg',
                            'cheng':'楼主'
                        },{
                            'src':'recommend_con1.jpg',
                            'user_name':'冈拉梅朵',
                            'content_time':'7天前',
                            'content_guan':'62',
                            'con_des':'情感交流美丽圈',
                            'con_tit':'美甲圈最污的10款美甲，怎么污了？',
                            'content_body':'冬天你的美甲也要换换了，很多人问小编今年美甲最流行什么颜色，小编只想说，适合自己的才是最好的。请关注教你健康丰乳aajnjk但是还是有颜色流行趋向的，今年各种酒红色风潮，当然美甲也少不了它了，真的很显肤色，真的很漂亮的颜色哦。…',
                            'user_img':'head_logo.jpg',
                            'cheng':'层主'
                        },{
                            'src':'recommend_con1.jpg',
                            'user_name':'冈拉梅朵',
                            'content_time':'7天前',
                            'content_guan':'62',
                            'con_des':'情感交流美丽圈',
                            'con_tit':'你跟他合不合适，吃顿饭就知道了！',
                            'content_body':'据说旅行是检验婚姻的唯一标准，两个人一起去旅行后还没有彼此厌恶反感后，就会幸福一辈子！…',
                            'user_img':'head_logo.jpg',
                            'cheng':'层主'
                        },{
                            'src':'recommend_con2.jpg',
                            'user_name':'冈拉梅朵',
                            'content_time':'7天前',
                            'content_guan':'62',
                            'con_des':'情感交流美丽圈',
                            'con_tit':'美甲圈最污的10款美甲，怎么污了？',
                            'content_body':'冬天你的美甲也要换换了，很多人问小编今年美甲最流行什么颜色，小编只想说，适合自己的才是最好的。请关注教你健康丰乳aajnjk但是还是有颜色流行趋向的，今年各种酒红色风潮，当然美甲也少不了它了，真的很显肤色，真的很漂亮的颜色哦。…',
                            'user_img':'head_logo.jpg',
                            'cheng':'层主'
                        }]};
    var imgIndex = 0,scroll = false;
    for(var i=0,len=dataInt.data.length;i<len;i++){
        var imgs = $('<img />');
        imgs.attr("src","image/images/"+dataInt.data[i].src);
        imgs.on("load",function(){
            imgIndex++;
            if(imgIndex == len){
                scroll = true;
            }
        })  
    }
    waterfall('.main','.content',25);
    window.onscroll=function(){
        if(scroll){
            join_data('.main','.content',dataInt,25);   //这个父子名称也要手写
        }
        
    };
        
    function join_data(big_box_name,small_box_name,dataInt,ju){
        var ab=big_box_name,abc=small_box_name;
                var ac=abc.replace(/./,' ');
            if(checkscrollside(ab,abc)){
                dox(ab,ac,dataInt,ju);
                waterfall(ab,abc,ju);//滚动到底部时加入
            };
    };
    
    
    function dox(big_box_name,small_box_name,jsona,ju) {
        $.each( jsona.data, function( index, value ){
                var $oPin = $('<div>').addClass(small_box_name).appendTo( $(big_box_name) );//解释json后html要拼接的代码**要手写
                var text = "<div class='content_header clear'>"+
                            "<img class='user_img' src='image/images/"+jsona.data[index].user_img+"' alt=''>"+
                            "<div class='info'>"+
                            "<p class='user_info clear'><span class='user_name'>"+jsona.data[index].user_name+"</span><span class='content_time det_con_des'><i class='icon iconfont'>&#xe606;</i>7天前</span></p>"+
                            "<p class='no1'>"+jsona.data[index].cheng+"</p></div>"+
                            "<h2 class='lou_tit'>"+jsona.data[index].lou_tit+"</h2></div>"+
                            "<div class='content_body'>"+
                            "<p class='con_det'>"+jsona.data[index].con_det+"</p>"+
                            "<img src='image/images/"+jsona.data[index].src+"' alt=''>"+
                            "<div class='jian'>"+
                            "<div><h3>"+jsona.data[index].h3+"</h3><p>"+jsona.data[index].p+"</p></div>"+
                            "<div><h3>"+jsona.data[index].h3+"</h3><p>"+jsona.data[index].p+"</p></div>"+
                            "<div><h3>"+jsona.data[index].h3+"</h3><p>"+jsona.data[index].p+"</p></div>"+
                            "<div><h3>"+jsona.data[index].h3+"</h3><p>"+jsona.data[index].p+"</p></div>"+
                            "<div class='con_foo clear'>"+
                                "<a class='ping' href='javascript:void(0)'><i class='icon iconfont tu_jian'>&#xe608;</i>评论(538)</a>"+
                                "<a class='zhan' href='javascript:void(0)'><i class='icon iconfont tu_jian'>&#xe607;</i>(32)</a>"+
                                "<a class='sou' href='javascript:void(0)'><i class='icon iconfont tu_jian'>&#xe60a;</i>(56)</a>"+
                            "</div>";
                $oPin.html(text);
            }   
        );            
    };
    $(".ping").on("click",function(){
        $(this).parents(".con_foo").siblings(".ping_deta").slideToggle();
    })
 })
    