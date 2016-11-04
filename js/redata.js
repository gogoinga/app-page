// $(function(){
	var dataInt={'data':[{
        'src':'recommend_2.jpg',
        'tiaoName':'冈拉梅朵',
        'tiaoTime':'7天前',
        'tiaoPing':'62',
        'h3':'你跟他合不合适，吃顿饭就知道了！',
        'i1':'&#xe606;',
        'i2':'&#xe608;',
        'src2':''
    },{
        'src':'recommend_2.jpg',
        'tiaoName':'冈拉梅朵',
        'tiaoTime':'7天前',
        'tiaoPing':'62',
        'h3':'你跟他合不合适，吃顿饭就知道了！',
        'i1':'&#xe606;',
        'i2':'&#xe608;',
        'src2':''
    },{
        'src':'recommend_2.jpg',
        'tiaoName':'冈拉梅朵',
        'tiaoTime':'7天前',
        'tiaoPing':'62',
        'h3':'你跟他合不合适，吃顿饭就知道了！',
        'i1':'&#xe606;',
        'i2':'&#xe608;',
        'src2':''
    },{
        'src':'recommend_2.jpg',
        'tiaoName':'冈拉梅朵',
        'tiaoTime':'7天前',
        'tiaoPing':'62',
        'h3':'你跟他合不合适，吃顿饭就知道了！',
        'i1':'&#xe606;',
        'i2':'&#xe608;',
        'src2':''
    },{
        'src':'recommend_2.jpg',
        'tiaoName':'冈拉梅朵',
        'tiaoTime':'7天前',
        'tiaoPing':'62',
        'h3':'你跟他合不合适，吃顿饭就知道了！',
        'i1':'&#xe606;',
        'i2':'&#xe608;',
        'src2':''

    }]};
    var dataInt2={'data':[{
                            'src':'recommend_3.jpg',
                            'tiaoName':'冈拉梅朵',
                            'tiaoTime':'7天前',
                            'tiaoPing':'62',
                            'h3':'你跟他合不合适，吃顿饭就知道了！',
                            'i1':'&#xe606;',
                            'i2':'&#xe608;',
                            'src2':''
                        },{
                            'src':'recommend_3.jpg',
                            'tiaoName':'冈拉梅朵',
                            'tiaoTime':'7天前',
                            'tiaoPing':'62',
                            'h3':'你跟他合不合适，吃顿饭就知道了！',
                            'i1':'&#xe606;',
                            'i2':'&#xe608;',
                            'src2':''
                        },{
                            'src':'recommend_3.jpg',
                            'tiaoName':'冈拉梅朵',
                            'tiaoTime':'7天前',
                            'tiaoPing':'62',
                            'h3':'你跟他合不合适，吃顿饭就知道了！',
                            'i1':'&#xe606;',
                            'i2':'&#xe608;',
                            'src2':''
                        },{
                            'src':'recommend_3.jpg',
                            'tiaoName':'冈拉梅朵',
                            'tiaoTime':'7天前',
                            'tiaoPing':'62',
                            'h3':'你跟他合不合适，吃顿饭就知道了！',
                            'i1':'&#xe606;',
                            'i2':'&#xe608;',
                            'src2':''
                        },{
                            'src':'recommend_3.jpg',
                            'tiaoName':'冈拉梅朵',
                            'tiaoTime':'7天前',
                            'tiaoPing':'62',
                            'h3':'你跟他合不合适，吃顿饭就知道了！',
                            'i1':'&#xe606;',
                            'i2':'&#xe608;',
                            'src2':'image/images/wang.png'
                        }]};
function dox(big_box_name,small_box_name,jsona,ju) {
        $.each( jsona.data, function( index, value ){
                var $oPin = $('<li>').addClass(small_box_name).appendTo( $(big_box_name) );//解释json后html要拼接的代码**要手写
                var text = "<img class='tiao_img' src='image/images/"+jsona.data[index].src+"' />"+
                            "<div class='tiao_des'>"+
                            "<h3><span>"+jsona.data[index].h3+"</span></h3>"+
                            "<div class='tiao_info'>"+
                            "<p class='tiao_name'>"+jsona.data[index].tiaoName+"</p>"+
                            "<p class='tiao_time'><i class='iconfont yell'>&#xe606;</i><span>"+jsona.data[index].tiaoTime+"</span></p>"+
                            "<p class='tiao_ping'><i class='iconfont yell'>&#xe608;</i><span>"+jsona.data[index].tiaoPing+"</span></p>"+
                            "</div></div>";
                var text2 = "<img class='tiao_img' src='image/images/"+jsona.data[index].src+"' />"+
                            "<img class='wangguan2' src='"+jsona.data[index].src2+"' />"+
                            "<div class='tiao_des'>"+
                            "<h3><span>"+jsona.data[index].h3+"</span></h3>"+
                            "<div class='tiao_info'>"+
                            "<p class='tiao_name'>"+jsona.data[index].tiaoName+"</p>"+
                            "<p class='tiao_time'><i class='iconfont yell'>&#xe606;</i><span>"+jsona.data[index].tiaoTime+"</span></p>"+
                            "<p class='tiao_ping'><i class='iconfont yell'>&#xe608;</i><span>"+jsona.data[index].tiaoPing+"</span></p>"+
                            "</div></div>";
                if(jsona.data[index].src2){
                    $oPin.html(text2);
                }else{
                    $oPin.html(text);
                }
            }   
        );            
    };

    
// })