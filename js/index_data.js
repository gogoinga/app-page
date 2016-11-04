var dataInt={'data':[{'src':'good1.jpg'},{'src':'good2.jpg'},{'src':'good3.jpg'},{'src':'good4.jpg'}]};  
function dox(big_box_name,small_box_name,jsona,ju) {
    $.each( jsona.data, function( index, value ){
                var $oPin = $('<div>').addClass(small_box_name).appendTo( $(big_box_name) );//解释json后html要拼接的代码**要手写
                $oPin.html("<div class='piture_box'><img src='image/images/"+jsona.data[index].src+"'></div>"+"<div class='good_box'><div class='top_box'><i class='head_piture'><img src='image/images/head.png'></i><div class='message'><span class='name'>周杰伦</span><p class='time'>2016-10-12</p></div><a href='javascript:;'><span class='item'>最美唇色</span></a></div><div class='bottom_box'><p class='text'>口红没有错，是你不会选！</p><div><i class='icon1'></i><span class='count'>123</span></div><div><i class='icon2'></i><span class='count'>123</span></div></div></div>");      
    });   
       
};