$(document).ready(function(){
		var tab_li=$('.tab_box');
		var tab_ul=$('.tab_contant_02 ul');
		var father_name='';
		var child_name='';
		var li_name='';
		var dataInt=null;
		var margin_num=0;
		tab_li.each(function(index, el) {
			tab_li.eq(index).on('click',function(){
				for(var i=0;i<tab_li.length;i++){
					tab_li.eq(i).find('p').removeClass('pink');
					tab_ul.eq(i).removeClass('open');
				}

		if(index==0){
		li_name=tab_ul.eq(index).find('.picture_fall').attr('class').split(" ");
		father_name=''; 
		child_name='';
		dataInt='';

	}else {
		li_name=tab_ul.eq(index).attr('class').split(" ");
		father_name='.'+li_name[0]; 
		child_name='.'+tab_ul.eq(index).children('div').attr('class');
		dataInt=data_two;
		margin_num=3;
	}

				tab_li.eq(index).find('p').toggleClass('pink');
				tab_ul.eq(index).toggleClass('open');
			})
		});

		$('.tab_li').eq(0).trigger('click');

		waterfall(father_name,child_name,margin_num);//瀑布流**要填父子名称
		$(window).on('scroll',function(){
			join_data(father_name,child_name,dataInt,margin_num);
	    });
	})//ready-end