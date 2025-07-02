const 图片点击 = document.getElementById("头像预览");
图片点击.addEventListener("click" ,function(){
  const 原图 = document.getElementById("原图");
  原图.showModal()

  const  关闭1 = document.getElementById("关闭1")
  关闭1.addEventListener("click",function(){
    原图.close();
  })
 
});

const 关于 = document.getElementById("关于");
关于.addEventListener("click",function(){
  alert("没事做的")
});

const QQ号 = document.getElementById("qq号");
QQ号.addEventListener("click",function(){
  alert("3590906525")
});

const 文章1 =document.querySelector(".文章1");
文章1.addEventListener("click",function(e){
  const 弹窗 = document.querySelector(".文章1内容");
   弹窗.showModal()
  
  const 关闭 = document.getElementById("关闭")
  const 视频 = 弹窗.querySelector("video");
  关闭.addEventListener("click",function(){
    弹窗.close();
    视频.pause();
  });
    
});
