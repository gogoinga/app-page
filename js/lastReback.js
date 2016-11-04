$(function(){
    var dataIn = dataInt;
    var imgIndex = 0,scroll = false;
    for(var i=0,len=dataIn.data.length;i<len;i++){
        var imgs = $('<img />');
        imgs.attr("src","image/images/"+dataIn.data[i].src);
        imgs.on("load",function(){
            imgIndex++;
            if(imgIndex == len){
                scroll = true;
            }
        })  
    }
    window.onscroll=function(){
        if(scroll){
            join_data('.tiao_list','.tiao_conn',dataIn);   //这个父子名称也要手写
        }
        
    };  
    
    
    $(".ping").on("click",function(){
        $(this).parents(".con_foo").siblings(".ping_deta").slideToggle();
    })


    $(".tiao_list").html('');
	dox('.tiao_list','tiao_conn',dataIn);
	waterfall('.tiao_list','.tiao_conn');

    $(".list_item a").on("click",function(){
    	$(this).addClass("bgcli").siblings().removeClass("bgcli");
    	switch ($(this).html()){
    		case "全部":
    			$(".tiao_list").html('');
    			dataIn = dataInt;
				dox('.tiao_list','tiao_conn',dataIn);
				waterfall('.tiao_list','.tiao_conn');
				break;
			case "问达人":
				$(".tiao_list").html('');
				dataIn = dataInt2;
				dox('.tiao_list','tiao_conn',dataIn);
				waterfall('.tiao_list','.tiao_conn');
				break;
			case "知识库":
				$(".tiao_list").html('');
				dox('.tiao_list','tiao_conn',dataInt);
				waterfall('.tiao_list','.tiao_conn');
				break;
			case "养生食疗":
				$(".tiao_list").html('');
				dox('.tiao_list','tiao_conn',dataInt);
				waterfall('.tiao_list','.tiao_conn');
				break;
			default :
				$(".tiao_list").html('');
				dox('.tiao_list','tiao_conn',dataInt);
				waterfall('.tiao_list','.tiao_conn');
    	}
    });


    var starX = 0,endX = 0;
    var liW = $(".nav li").width();
    var starN = '';
    $(".nav").get(0).addEventListener("touchstart",function(e){
    	starX = e.touches[0].clientX;
    	starN = parseInt($(".nav").css("left"));
    });
    $(".nav").get(0).addEventListener("touchmove",function(e){
    	endX = e.changedTouches[0].clientX - starX;
    	$(".nav").css("left",starN+endX);
    	if(parseInt($(".nav").css("left"))>=0){
    		$(".nav").css("left",0);
    	}else if(parseInt($(".nav").css("left"))<=-liW){
    		$(".nav").css("left",-liW);
    	}
    });


    $(".titmask").get(0).addEventListener("touchmove",function(e){
		e.preventDefault();
		e.stopPropagation();
    });
	$(".titmask li").on("click",function(event){
    	$(".head_tittle span").html($(this).find("p").html());
    	$(this).addClass("becli_list").siblings().removeClass("becli_list");
    	$(".titmask").hide();
		event.preventDefault();
		event.stopPropagation();
    });
    $(".head_tittle").on("click",function(){
    	$(".titmask").show();
    })
})
