window.onload=function () {
    let box=document.querySelector(".box")
    let speed=10,speedy=10;
    let maxH=window.innerHeight-parseInt(getComputedStyle(box,null).height)
    let maxW=window.innerWidth-parseInt(getComputedStyle(box,null).width)
    setInterval(function () {
        let tops=parseInt(getComputedStyle(box,null).top)
        let lefts=parseInt(getComputedStyle(box ,null ).left)
        tops+=speed;
        lefts+=speedy
        if (tops>maxH){
            tops=maxH;
            speed*=-1;
        }
        if (tops<=0){
            tops=0;
            speed*=-1
        }
        if (lefts>maxW){
            lefts=maxW;
            speedy*=-1;
        }
        if (lefts<=0){
            lefts=0;
            speedy*=-1
        }
        box.style.left=lefts+"px";
        box.style.top=tops+"px";
    },100)
}