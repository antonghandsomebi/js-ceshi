$(function () {
    let poker=[];
    let colorArr=["s","h","d","c"];
    let flag={};
    let box=$(".box");
    for (let i=0;i<52;i++){
        let index=Math.floor(Math.random()*colorArr.length);
        let color=colorArr[index];
        let number=Math.round(Math.random()*12+1);
        while (flag[color+'_'+number]) {
            index=Math.floor(Math.random()*colorArr.length);
            color=colorArr[index];
            number=Math.round(Math.random()*12+1);
        }
        poker.push({color,number});
        flag[color+'_'+number]=true;
    }
    console.log(poker);

    let index=-1;
    for (let i=0;i<7;i++){
        for (let j=0;j<=i;j++){
            index++;
            let obj=poker[index];
            let lefts=350-50*i+100*j,tops=50*i;
            $('<div>')
                .addClass('poker')
                .attr("id",i+"_"+j)
                .appendTo(".box")
                .delay(index*100)
                .css({backgroundImage:`url(../IMG/imgs/${obj.number}${obj.color}.jpg)`})
                .animate({left:lefts,top:tops})
                .data('number',obj.number);
        }
    }
    for (;index<52;index++){
        let obj=poker[index];
        $('<div>')
            .attr("id",-2+'_'+(-2))
            .addClass('left')
            .delay(index*110)
            .addClass('poker')
            .appendTo(".box")
            .data('number',obj.number)
            .css({backgroundImage:`url(../IMG/imgs/${obj.number}${obj.color}.jpg)`})
            .animate({left:0,top:480,opacity:1});
    }
    let first=null;
    box.on("click" ,".poker",function () {
        let _this=$(this);
        let [i,j]=_this.attr('id').split('_');
        console.log([i, j]);
        let id1=i*1+1+'_'+j,id2=i*1+1+'_'+(j*1+1)
        console.log($('#' + id1).length);
        console.log(id2);
        if ($("#"+id1).length || $("#"+id2).length){
            return;
        }
        if (_this.hasClass('active')){
            $(this).removeClass('active').animate({top: '+=30px'})
        }else {
            $(this).addClass('active').animate({top: '-=30px'})
        }
        if (!first){
            first=_this;
        }else {
            let number1=first.data('number'),number2=_this.data('number')
            if (number1+number2===14){
                $('.active').animate({top:0,left:710,opacity: 0},function () {
                    $(this).remove()
                });
            }else{
                $('.active').animate({top:'+=30'},function () {
                    $(this).removeClass("active")
                })
            }
            first=null;
        }

    })
    let n=0;
    $('.rightBtn').on('click',function () {
        $('.left').last().css('zIndex' ,n++).animate({left:710},function () {
            $(this).removeClass('left').addClass('right')
        })
    })
    $('.leftBtn').on('click',function () {
        $('.right').first().css('zIndex' ,n++).animate({left:0},function () {
            $(this).removeClass('right').addClass('left')
        })
    })

})