function join_data(big_box_name,small_box_name,dataInt,ju){
    var ab=big_box_name,abc=small_box_name;
            var ac=abc.replace(/./,' ');
            
        if(checkscrollside(ab,abc)){
            dox(ab,ac,dataInt,ju);
            waterfall(ab,abc,ju);//滚动到底部时加入
        };
};
function checkscrollside(parent,child){
    var first_parent=$(parent);
    var $aPin = first_parent.find(child);
    var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop = $( window ).scrollTop();//注意解决兼容性
    var documentH = $( window ).height();//页面高度
    return (lastPinH < scrollTop + documentH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
}

function waterfall(parent,child,jian){
    var first_parent=$(parent);
    var $aPin = first_parent.find(child);
    var iPinW = $aPin.eq( 0 ).width();// 一个块框pin的宽
    var num = Math.floor( $( window ).width() / iPinW );//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
    //oParent.style.cssText='width:'+iPinW*num+'px;ma rgin:0 auto;';//设置父级居中样式：定宽+自动水平外边距
    first_parent.css({
        'width:' : iPinW * num,
        'margin' : '0 auto'
    });
    var pinHArr=[];//用于存储 每列中的所有块框相加的高度。

    var jians =  parseInt(jian);
    if(jians){
        jians = jians;
    }else{
        jians = 0;
    }
    $aPin.each( function( index, value ){
        var pinH = $aPin.eq( index ).innerHeight();

        if( index < num ){
            pinHArr[ index ] = pinH; //第一行中的num个块框pin 先添加进数组pinHArr
        }else{
            var minH = Math.min.apply( null, pinHArr );//数组pinHArr中的最小值minH
            var minHIndex = $.inArray( minH, pinHArr );

            if(num>1){
                $( value ).css({
                    'position': 'absolute',
                    'top': minH + jians,
                    'left': $aPin.eq( minHIndex ).position().left
                });
            }else{
                $( value ).css({
                    'float':"left"
                });
            }
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
        pinHArr[ minHIndex ] += $aPin.eq( index ).innerHeight() + jians;
            //更新添加了块框后的列高
            first_parent.height(pinHArr[ minHIndex ]);//更新添加了块框后的列高
        }
    });
}

