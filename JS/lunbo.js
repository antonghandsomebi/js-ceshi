$(function () {
    let buttonprev = $(".button-prev")
    let buttonnext = $(".button-next")
    let bannerImg = $("li.choose")
    let list = $(".pagelist>li")
    // console.log(bannerImg);
    let current = 0, next = 0;
    console.log(next);
    let w = bannerImg[0].offsetWidth;
    let flag = true;
    buttonnext.click(function () {
        if (!flag) {
            return;
        }
        flag = false;
        next++;
        // console.log(next);
        if (next === bannerImg.length) {
            next = 0;
        }

        bannerImg[next].style.left = w + "px";
        console.log(bannerImg[next]);
        $(bannerImg[current]).animate( {left: -w});
        $(bannerImg[next]).animate( {left: 0}, function f() {
            flag = true;
        });
        list[current].classList.remove("hot")
        list[next].classList.add("hot")
        current = next;
    })
    buttonprev.click(function () {
        next--;
        if (!flag) {
            return;
        }
        flag = false;
        if (next < 0) {
            next = bannerImg.length - 1;
        }
        bannerImg[next].style.left = -w + "px";
        $(bannerImg[current]).animate({left: w}, function f() {
            flag = true;
        });
        $(bannerImg[next]).animate( {left: 0});
        list[current].classList.remove("hot")
        list[next].classList.add("hot")
        current = next;
    })

})