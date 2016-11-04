var data_one={'data':[{'user_img':'good03.jpg','item_name':'美甲护手','good_price':'50','delet_price':'100','you_hui':'跳楼价大清仓','shop_name':'席梦思美甲','location_km':'100km'},{'user_img':'good03.jpg','item_name':'美甲护手','good_price':'50','delet_price':'100','you_hui':'跳楼价大清仓','shop_name':'席梦思美甲','location_km':'100km'},{'user_img':'good03.jpg','item_name':'美甲护手','good_price':'50','delet_price':'100','you_hui':'跳楼价大清仓','shop_name':'席梦思美甲','location_km':'100km'},{'user_img':'good03.jpg','item_name':'美甲护手','good_price':'50','delet_price':'100','you_hui':'跳楼价大清仓','shop_name':'席梦思美甲','location_km':'100km'}]};
/* console.log(dataInt);*/ 	
 var data_two={'data':[{'shop_img':'seller01.jpg','shop_name':'时光魅力景华南路分店','shop_locat':'广州市番禺区大石街景华路44号天河百货侧门A8101','shop_zz':'理事会单位','locat_km':'100'},{'shop_img':'seller01.jpg','shop_name':'时光魅力景华南路分店','shop_locat':'广州市番禺区大石街景华路44号天河百货侧门A8101','shop_zz':'理事会单位','locat_km':'100'},{'shop_img':'seller01.jpg','shop_name':'时光魅力景华南路分店','shop_locat':'广州市番禺区大石街景华路44号天河百货侧门A8101','shop_zz':'理事会单位','locat_km':'100'},{'shop_img':'seller01.jpg','shop_name':'时光魅力景华南路分店','shop_locat':'广州市番禺区大石街景华路44号天河百货侧门A8101','shop_zz':'理事会单位','locat_km':'100'}]};
/*console.log(data_two);*/
	function dox(big_box_name,small_box_name,jsona,ju) {
    $.each( jsona.data, function( index, value ){
        var $oPin = $('<div>').addClass(small_box_name).appendTo( $(big_box_name) );
        var data01="<div class=resolute'><img src='image/images/"+jsona.data[index].user_img+"'><div class='text_contant'><span class='good_name margin_left'>"+jsona.data[index].item_name+"</span><p class='money margin_left'>首尝：￥<span>"+jsona.data[index].good_price+"</span><span class='delete_line'>"+jsona.data[index].delet_price+"</span></p><p class='youhui margin_left'>"+jsona.data[index].you_hui+"</p><div class='seller_box clear'><span class='seller_name margin_left'>店家 : </span><span class='seller_name'>"+jsona.data[index].shop_name+"</span><div class='right_location'><i class='icon iconfont green'>&#xe600;</i><span class='location'>"+jsona.data[index].location_km+"</span></div></div></div></div>";
  	/*	console.log(big_box_name);*/
  			var data02="<li class='house_li'><div class='piture_box'><img src='image/images/"+jsona.data[index].shop_img+"'></div><div class='seller_text'><p class='good_name'>"+jsona.data[index].shop_name+"</p><div class='loact'><span class='youhui'>地址：</span><span class='youhui'>"+jsona.data[index].shop_locat+"</span></div><div class='seller_box margin_top clear'><span class='zizhi'>资质：</span><span class='zizhi'>"+jsona.data[index].shop_zz+"</span><div class='right_location'><i class='icon iconfont green'>&#xe600;</i><span class='location'>"+jsona.data[index].locat_km+"</span></div></div></div></li>";
        //解释json后html要拼接的代码**要手写
       $oPin.html(data01);
       var rightul='.'+'seller_house';
        if(big_box_name==rightul){
        	$oPin.html(data02);
        }
    });            
}//dox()_end