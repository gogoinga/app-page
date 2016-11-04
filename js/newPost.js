var docObj=document.getElementById("doc");
var imgObjPreview=document.getElementById("preview");
var localImagId = document.getElementById("localImag");
function setImagePreview() {
    
    if(docObj.files[0].type == "image/jpeg"){
        if(docObj.files &&    docObj.files[0]){
                //火狐下，直接设img属性
                imgObjPreview.style.display = 'block';                  
                //imgObjPreview.src = docObj.files[0].getAsDataURL();

            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式  
            imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);

        }else{
                //IE下，使用滤镜
                docObj.select();
                var imgSrc = document.selection.createRange().text;
                //必须设置初始大小
                //图片异常的捕捉，防止用户修改后缀来伪造图片
                try{
                        localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                        localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                }catch(e){
                        alert("您上传的图片格式不正确，请重新选择!");
                        return false;
                }
                imgObjPreview.style.display = 'none';
                document.selection.empty();
        }
        return true;
    }
}
$(function(){
    function seltogg(){
        $(".sel_eve").slideToggle(function(){
            if($(".sel_eve").css('display')==='block'){
                $(".sel_biao").css({
                    "backgroundPosition":"92% -34%"
                })
            }else{
                $(".sel_biao").css({
                    "backgroundPosition":"92% 126%"
                })
            }
        });
    };
    $(".sel_biao").on("click",function(){
        seltogg();
    });
    $(".sel_eve p").on("click",function(){
        $(".sel_biao").html($(this).html());
        seltogg();
    });
    $("textarea").get(0).oninput = function(){
        if($(this).val().length<=1000){
          $(".con_len span").html($(this).val().length);  
      }else{
        $("textarea").val($("textarea").val().slice(0,1000));
        $(".con_len span").html(1000);
      }
        
    }
})