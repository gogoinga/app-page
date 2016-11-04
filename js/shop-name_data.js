var data_one={'data':[{'good_img':'good03.jpg','item_name':'美甲护手','good_moeny':'50','delet_moeny':'100','capacity':'100','result':'66','xjb':'2','month_sell':'6'},{'good_img':'good03.jpg','item_name':'美甲护手','good_moeny':'50','delet_moeny':'100','capacity':'100','result':'66','xjb':'2','month_sell':'6'},{'good_img':'good03.jpg','item_name':'美甲护手','good_moeny':'50','delet_moeny':'100','capacity':'100','result':'66','xjb':'2','month_sell':'6'},{'good_img':'good03.jpg','item_name':'美甲护手','good_moeny':'50','delet_moeny':'100','capacity':'100','result':'66','xjb':'2','month_sell':'6'}]};
	
 var data_two={'data':[{'head_pic':'head.png','dianzhu_id':'周姐伦','keren_id':'冈拉梅朵','lou':'21','pinglun':'客服美女态度很好，老师不仅技术好，而且态度很好很棒棒哒，美美 哒哦……','date':'2016-10-12','dianzhu_speak1':'谢谢亲的评价哈','dianzhu_speak2':'觉得好就买买买吧','keren_speak1':'真的好好哦好','keren_speak2':'那我们就加fackbook好友吧'},{'head_pic':'talk_head.png','dianzhu_id':'周姐伦','keren_id':'冈拉梅朵','lou':'21','pinglun':'客服美女态度很好，老师不仅技术好，而且态度很好很棒棒哒，美美 哒哦……','date':'2016-10-12','dianzhu_speak1':'谢谢亲的评价哈','dianzhu_speak2':'觉得好就买买买吧','keren_speak1':'真的好好哦好','keren_speak2':'那我们就加fackbook好友吧'}]};
 /*console.log(data_two); */
	function dox(big_box_name,small_box_name,jsona,ju) {
		
    $.each( jsona.data, function( index, value ){
        var $oPin = $('<div>').addClass(small_box_name).appendTo( $(big_box_name) );
    var data01="<div class='resolute'><img src='image/images/"+jsona.data[index].good_img+"'><div class='text_contant'><span class='good_name margin_left'>"+jsona.data[index].item_name+"</span><p class='money margin_left'>价格：<span>￥<span>"+jsona.data[index].good_moeny+"</span></span><span class='delete_line'>   ￥<span>"+jsona.data[index].delet_moeny+"</span></span></p><p class='youhui margin_left'>容量 : <span>"+jsona.data[index].capacity+"</span><span>ml</span></p><div class='seller_box clear'><p class='item_tst'>效果: <span>"+jsona.data[index].result+"</span></p><p class='item_tst'>性价比: <span>"+jsona.data[index].xjb+"</span></p><p class='item_tst'>月销: <span>"+jsona.data[index].month_sell+"</span></p></div></div></div>";
  	/*	console.log(big_box_name);*/
	var data02="<div class='tablk_head clear'><div class='head_logo clear'><i class='head_logo_box'><img src='image/images/"+jsona.data[index].head_pic+"'></i><span class='worder_name'>"+jsona.data[index].keren_id+"</span></div><div class='louceng'><span class='lou_num'>"+jsona.data[index].lou+"</span>楼</div></div><div class='talk_title_contant'><span>"+jsona.data[index].pinglun+"</span></div><div class='time_box clear'><span class='time'>"+jsona.data[index].date+"</span><div class='right_box'><i class='link icon iconfont'>&#xe61b;</i><i class='word icon iconfont'>&#xe61d;</i></div></div><div class='talking_box'><p><span class='worder_id'>"+jsona.data[index].dianzhu_id+"：</span><span class='word_speak'>"+jsona.data[index].dianzhu_speak1+"</span></p><p><span class='worder_id'>"+jsona.data[index].keren_id+" </span> 回复 <span class='worder_id'>"+jsona.data[index].dianzhu_id+" ：</span><span class='word_speak'>"+jsona.data[index].keren_speak1+"</span></p><p><span class='worder_id'>"+jsona.data[index].dianzhu_id+" </span> 回复 <span class='worder_id'>"+jsona.data[index].keren_id+" ：</span><span class='word_speak'>"+jsona.data[index].dianzhu_speak2+"</span></p><p><span class='worder_id'>"+jsona.data[index].keren_id+" </span> 回复 <span class='worder_id'>"+jsona.data[index].dianzhu_id+" ：</span><span class='word_speak'>"+jsona.data[index].keren_speak2+"</span></p></div>";
        //解释json后html要拼接的代码**要手写
       var rightul='.'+'seller_house';
        if(big_box_name==rightul){
        	$oPin.html(data02);
        }else{
        	$oPin.html(data01);
        }
    });            
};