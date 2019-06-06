// console.log('hello world');
// var a =10;
// console.log(a);
// var b;
// b =20;
// console.log(b);
// // console.log(c);
// b =100;
// console.log(b);
// var b;
// b=50;
// console.log(b);
//
//
// console.log(c,d);
// var c , d ;
// var num1 ,num2;
// num1="1";
// num2="2";
// console.log(num1+num2);
// var e=10;
// // console.log(++e);
// console.log(e++);
// console.log(e);
// console.log(e+++5)
// console.log(e)

// for (var i = 2; i <= 10; i += 2)
//     document.write(i+" ");
// for (var i=0 ;i<=10;i+=1)
//     document.write(  i+"");
// for(var i=0;i<=10;i++){
//     if( i % 2==0){
//         console.log(i);
//     }
// }
// // var sum=0;
// // for(var j=0;j<=10;j++){
// //     sum+=j;
// // }
// // console.log(sum);
// var sum=0
// for(var j=0;j<=10;j++){
//     if(j%2==0){
//         sum+=j;
//     }
// }
// console.log(sum);
// for(j=0;j<=10;j++){
//     for(var i=1; i<=j*2-1 ; i++){
//         document.write("*");
//     }document.write("<br>")
// }
// for (var i=0 ;i<=10;i++){
//     for (var p=0;p<=10-i;p++){
//         document.write(" ");
//     }
    // for(var i=1; i<=j*2-1 ; i++){
//         document.write("*");
//     }
//     document.write("<br>");
// }
// for (var i=0 ;i<=10;i++) {
//     for (var p = 0; p <= 10 - i; p++) {
//         document.write("&nbsp;");
//     }
//     for (var j=1;j<=i*2+1;j++){
//         document.write("*");
//     }
//     document.write("<br>")
// }
// for (var i=10 ;i>=1;i--) {
//     for (var p = 0; p <= 10 - i; p++) {
//         document.write("&nbsp;");
//     }
//     for (var j=i*2-1;j>=1;j--){
//         document.write("*");
//     }
//     document.write("<br>")
// }
//     document.write("<table>")
//     for (var i=1 ; i<9 ; i++){
//         document.write("<tr>")
//         for (var j=1;j<9 ;j++){
//             document.write("<td>"+i+j+"</td>")
//         }
//         document.write("</tr>")
//     }
//     document.write("</table>")

// document.write("<table>")
//     for(var i=1;i<=9;i++){
//         "<table>" += "<tr></tr>"
//     }
// var cols =6; //６列
//
// var rows =6; //６行
//
// var htmlstr = "<table border='1px'>";
//
// for(i = 1; i <= rows; i++) {
//
//     htmlstr += "<tr>";
//
//     for(j = 1; j <= cols; j++) {
//
//         htmlstr += "<td >" + i + "行" + j + "列" + "</td>";
//
//     }
//
//     htmlstr += "</tr>";
//
// }
//
// htmlstr += "</table>";
//
// document.write(htmlstr);
// var table="<table>"
// for (var i=0;i<9;i++){
//     table+="<tr>"
//         for (var j=0;j<11;j++){
//             table+="<td>"+i+"-------"+j+"</td>"
//         }
//     table+="</tr>"
// }
// table+="</table>"
// document.write(table)
//
//     var k=0.1;
//     var n=1;
//     for(var a=1 ;a<=n;a++){
//         i=k*2;
//         k=i
//         if(k<8848){
//             n++
//         }
//         else{
//             console.log(a)
//         }
//     }
//     var k=0.1;
//     var n=0;
//     var i=0;
//     while(i<8848){
//         i=k*2;
//         k=i;
//         n++;
//     }
//     console.log(n)


var arr=[12,34,5,6,78,9];
// numMax(arr)
// function numMax(a) {
//     max=a[0];
//     for(i=0;i<=a.length;i++){
//         if(a[i]<a[i+1]){
//             max=a[i+1]
//         }
//     }
//     console.log(max);
// }
// var arrOdd=[];
// even(arr);
// function even(a) {
//     for(i=0;i<=a.length;i++){
//         if(a[i]%2==1){
//            arrOdd.push(a[i]);
//         }
//     }
//     console.log(arrOdd);
// }
// var s=10;
// var b=false
// choose(arr,s)
// function choose(a,s) {
//     for (i=0;i<=a.length;i++){
//         if(a[i]==s){
//             b=true;
//             console.log("找到"+s);
//         }
//     }
//     if (b==false)
//     console.log("找不到"+s)
// }
// positive(arr)
// function positive(a) {
//     for (i=0;i<=a.length;i++){
//         if (a[i]>0){
//             console.log(a[i]+"为正数");
//         }
//     }
// }

// maxNum(arr);
// function maxNum(a) {
//     var max=a[0];
//     for (i=0;i<=a.length;i++){
//         if(max<a[i]){
//             max=a[i];
//         }
//     }
//     console.log(max);
// }
// minNum(arr);
// function minNum(a) {
//     var min=a[0];
//     for (i=0;i<=a.length;i++){
//         if(min>a[i]){
//             min=a[i];
//         }
//     }
//     console.log(min);
// }
// zuiNum(arr,'-');
// function zuiNum(a,type) {
//     if (type==">"){
//         maxNum(arr);
//     }
//     if (type=="<"){
//         minNum(arr)
//     }
//     else {
//         console.log("请重新输入");
//     }
//
// }
// ceshi(arr)
// function ceshi(a) {
//     for (i=0;i<arguments.length;i++) {
//         arr.push(arguments[i]);
//     }
//     console.log(a)
// }
// change(arr,"a","b" ,"c")
// function change(a) {
//     var newArr=[]
//     for(i=0;i<=a.length;i++){
//         newArr[i]=a[i];
//     }
//     var a=[]
//     for(j=1;j<=arguments.length;i++){
//
//     }
// }
// function sort(elements) {
//     for (var i=0;i<elements.length-1;i++){
//         for (var j=0;j<elements.length-i-1;j++){
//             if (elements[j]>elements[j+1]){
//                 var swap=elements[j];
//                 elements[j]=elements[j+1];
//                 elements[j+1]=swap;
//             }
//         }
//     }
// }
// var elements=[1,2,2,34,2,34,5,67,894,561,23];
// // console.log("before"+elements);
// // sort(elements);
// // console.log("after"+elements);
// console.log(delRepeat(elements) )
// function delRepeat(elements) {
//     var newarr=[];
//     for(var i=0;i<elements.length;i++){
//         if(!isExist(newarr,elements[i])){
//             newarr.push(elements[i]);
//         }
//     }
//    return newarr;
// }
// function  isExist(elements,value) {
//     for(var i=0;i<elements.length;i++){
//         if (elements[i]==value){
//             return true;
//         }
//     }
//     return false;
// }
// jc(5)
// function jc(a) {
//     var sum=1
//     for (var i=1;i<=a;i++){
//         sum*=i;
//         console.log(sum);
//     }
// }
// console.log(jc(5));
// function jc(n) {
//     let sum=1;
//     if(n>1){
//         return  sum=n*jc(n-1)
//     }
//     else {
//         return 1;
//     }
// }

// function Person() {
//    this.name="安彤";
//    this.age ="20";
//    this.girl="单单"
// }
// let antong=new Person();
// console.log(antong);

// function person(name ){
//     let obj =new Object();
//     obj.name= function talk() {
//         console.log("我是安彤")
//     }
//     return obj;
// }
// console.log(obg.name)

// function MyArray() {
//     for(var i=0;i<arguments.length;i++){
//         this[i]=arguments[i];
//     }
//     this.length=arguments.length;
//     this.push=function () {
//         for (i=0;i<arguments.length;i++){
//             this[this.length++]=arguments[i];
//      }
//         }
//      this.max=function () {
//          let maxNum = this[0];
//          for (i = 1; i < this.length; i++) {
//              if(maxNum< this[i]){
//                  maxNum = this[i]
//              }
//          }
//          console.log(maxNum)
//      }
//      this.weizhi=function (w) {
//          // var w=7
//          for (i=1;i<this.length;i++){
//              if (w==this[i]){
//                  console.log(i)
//              }
//          }
//      }
//      // this.fangda=function () {
//      //    let da=[]
//      //     // for (i=1;i<=this.length;i++) {
//      //         da[i] =this[i]
//      //     }
//      //    console.log(da[i])
//      //     console.log(this[i])
//      this.some=function (callback) {
//
//          for (let i=0;i<=this.length;i++) {
//              if(callback(this[i])){
//                  flag=true;
//              }
//          }
//          return flag;
//      }
// }
// let flag =MyArray.some(function (value) {
//     return (value>0)
//
// })

//
// let Arr=new MyArray('1','6','7')
// // Arr.push('1');
// // Arr.max();
// // Arr.weizhi(7)
// console.log(Arr);
// console.log(Arr);
// console.log(Arr.some());

// var arr = [1, 2, 3, 4, 5];
// var arr2 = arr.map(function(item){
//     return item*item;
// });
// console.log(arr2); //[1, 4, 9, 16, 25]
//
// var arr=[2,3,4,5,6];
// var arr2=arr.map()

// var items = ['1','2','4','5','6','7','8','9','10'];
// function getRandomArrayElements(arr, count) {
//     var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
//     while (i-- > min) {
//         index = Math.floor((i + 1) * Math.random());
//         temp = shuffled[index];
//         shuffled[index] = shuffled[i];
//         shuffled[i] = temp;
//     }
//     return shuffled.slice(min);
// }
// var items = ['1','2','4','5','6','7','8','9','10'];
// console.log( getRandomArrayElements(items, 4) );
// let sort=[1,2,3,4,5]
// let cart2=[
//     {cart2:10},
//     {cart2:20},
//     {cart2:30}
//     ]
// let a=sort.reduce(function (prev,recount) {
//     return prev+recount;
// })
// console.log(a)
// let b=cart2.reduce(function (prev,recount) {
//     return prev+recount.cart2
// } ,0)
// console.log(b)
//
// var str='ab,c,d,ef,g'
// arr=str.split(",")
// console.log(arr);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    // arr1=arr.reverse()
// console.log(arr1);
// str=arr1.join(',')
// console.log(str);
//
//
// console.log(str.indexOf("c,d"));


// var str="a.bcd.png"
// function Houzhui (str) {
//     a=str.lastIndexOf(".")
//     console.log(a);
//     houzhui=str.slice(a)
//     console.log(houzhui);
//     console.log(str.replace('a','p'))
// }
// Houzhui()

let str="123444456";
console.log(str.length);
let rstr="4";
replaceStr(str,rstr)
function replaceStr(str,rstr) {
    let str1="*".repeat(rstr.length);
    while (str.includes(rstr)) {
        str=str.replace(rstr,str1)
} console.log(str);
    return str;
}

console.log(charCount(str));
function charCount(str) {
    let obg={}
    for (let i=0;i<str.length;i++){
        let char=str[i]
        obg[char] ? obg[char]++ : obg[char]=1;
    }

    return obg;

}

window.onload=function () {
    let spans=document.getElementsByTagName("span")
   setInterval(fn,1000)
    
    function fn() {
        let arr=[]
        let date=new Date()
        let dw  =new Date(2019 ,5,7,0,0,0);
        let time=Math.floor((dw.getTime()-date.getTime())/1000);
        let day=Math.floor(time/60/60/24);
        arr.push(day)
        time%=(time*60*60*24);
        let hour=Math.floor(time/60*60)

    }
}



