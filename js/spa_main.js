$(document).ready(function($) {
		var father_name='';
		var child_name='';
		var li_name='';
		var click_num=0;
		var head_li=$('.item_name');
		var good_li=$('.item_contant li');
		var dataInt=null;
		var margin_num=0;
		head_li.each(function(index, el) {
			head_li.eq(index).on('click',function (event) {
				event.preventDefault();
				for(var i=0;i<head_li.length;i++){
					head_li.eq(i).removeClass('pink');
					good_li.eq(i).removeClass('open');
				}
			      $(this).toggleClass('pink');
			      good_li.eq(index).toggleClass('open');
			     	li_name=good_li.eq(index).attr('class').split(" ");
			     child_name='.'+good_li.eq(index).children('div').attr('class');
			     father_name='.'+li_name[0]; 
			     click_num=index;
			     dataInt=data_one;
			     margin_num=2;
				});
		});

		head_li.eq(0).trigger('click');//点进来时就赋予第一个分页瀑布流
		
var tab=$('.tab_box');
var contant=$('.tab_contant_02 ul');
var nav=$('.nav_button');
var b='';
var ul_name='';

tab.each(function(index, el) {
	tab.eq(index).on('click',function(event) {
		event.preventDefault();
		
		if(index==0){
			nav.removeClass('close');
			head_li.eq(click_num).trigger('click');
		}
		else {
			nav.addClass('close');
			ul_name=contant.eq(index).attr('class').split(" ");
			father_name='.'+ul_name[0];	
			child_name='.'+contant.eq(index).children('div').attr('class');
			dataInt=data_two;
			margin_num=4;
		}
		for(var i=0; i<tab.length;i++){
			contant.removeClass('open');
			tab.eq(i).find('span').removeClass('pink');
		}
		
		$(this).find('span').toggleClass('pink');
		contant.eq(index).toggleClass('open');
	});
});
waterfall(father_name,child_name,margin_num);//瀑布流**要填父子名称
		$(window).on('scroll',function(){
			join_data(father_name,child_name,dataInt,margin_num);
	    });
});//ready_end