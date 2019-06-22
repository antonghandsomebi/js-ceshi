$(function () {
    let main=$('main')
    let aside=$('aside')
    let input=$('input')
    input.on('input',function () {
        let val=$(this).val()
        let newarr=arr.filter(ele=>ele.name.includes(val))
        render(newarr)
    })
    let arr = [
        {
            name: "陈龙", tell: "18406585685", py: "chenlong"
        },
        {
            name: "罗腾达", tell: "18406581566", py: "luotengda"
        },
        {
            name: "刘彦红", tell: "18406587859", py: "liuyanhong"
        },
    ]
    render(arr)
    function render(arr) {
        main.empty()
        aside.empty()
        let person = {};
// 分类

    arr.forEach(ele => {
        let firstChatr = ele.py.charAt(0).toUpperCase()
        if (!person[firstChatr]) {
            person[firstChatr] = [];
        }
        person[firstChatr].push(ele)

    })
        // 排序
    // console.log(person);
    let keysarr = Object.keys(person).sort();

    let html = '';
    for (let i = 0; i < keysarr; i++) {
        let ele = keysarr[i]
        html += `
            <section><h2>${ele}</h2>
            `;
        for (let j = 0; j < person[ele].length; j++) {
            let info = person[ele][j];
            html += `
                    <div> <a href="tell:${info.tell}">${info.name}</a></div>`
        }
        html += '</section>';
    }
    main.empty();
    main.html(html)
    }
})