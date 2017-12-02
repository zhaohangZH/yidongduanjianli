var swiper = new Swiper('.swiper-container', {
    direction:'vertical',
    loop : true,
    onSlideChangeEnd:function(swiper){
        var slides = swiper.slides;
        var curIndex = swiper.activeIndex;
        var trueSlideNum = slides.length-2;
        var lastSlideNum  = trueSlideNum+1;
        [].forEach.call(slides,function(item,index){
            item.id = "";
            if(index == curIndex){
                switch (index){
                    case 0 :
                        item.id = "page"+ trueSlideNum;
                        break;
                    case lastSlideNum :
                        item.id = "page1";
                        break;
                    default  :
                        item.id = "page"+curIndex;
                }
            }
        })
    }
});
var beyond = document.querySelector("#beyond");
var music = document.querySelector(".music");
window.setTimeout(function(){
    beyond.play();
    beyond.addEventListener("canplay",function(){
        music.className = "music musicMove";
        music.style.opacity = 1;
    })

},1000);
music.addEventListener("click",function(){
    if(beyond.paused){
        beyond.play();
        music.className = "music musicMove";
    }else{//播放
        beyond.pause();
        music.className = "music";
    }
})