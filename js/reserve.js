$(function(){
	$(".se_eve a").on("click",function(){
		$(this).addClass("becli").siblings().removeClass("becli");
		$(".mask").hide();
		$(".con1_men span").html($(this).html());
	})
	$(".con1_men").on("click",function(){
		$(".mask").show();
		$(".select_men").show();
		$(".select_pay").hide();
	})
	$(".se_pay a").on("click",function(){
		$(this).addClass("becli").siblings().removeClass("becli");
		$(".mask").hide();
		$(".con2_pay span").html($(this).find("span").html());
	})
	$(".con2_pay").on("click",function(){
		$(".mask").show();
		$(".select_men").hide();
		$(".select_pay").show();
	})
})