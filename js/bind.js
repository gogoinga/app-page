$(function(){
	$(".form input").on("blur",function(){
		if($(".form input").eq(0).val() && $(".form input").eq(1).val() && $(".form input").eq(2).val()){
			$(".code").removeClass("fc4").addClass("bbb");
			$(".sbm").removeClass("ddd").addClass("fc4");
		}else{
			$(".code").removeClass("ddd").addClass("fc4");
			$(".sbm").removeClass("fc4").addClass("bbb");
		}
	})
})