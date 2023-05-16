// 1.
lists = document.querySelectorAll("li");
console.log(lists);

document.getElementById('todolist').style.listStyleType = 'none';

var now = new Date ();
console.log(now.getHours());

var hour = now.getHours();
var selector;

for(i = hour;i>=10;i--){
    console.log(i);
    var selector =document.getElementById("saat_" + i);
    selector.style.color = 'gray';
    selector.querySelector('input').checked = true;
}

//2.

var head = document.getElementById('head');
console.log(head);

head.addEventListener('click',function(){
   head.style.backgroundColor = "blue";
   head.style.color = 'blue';
})

// 4.
var box =document.getElementById('box');
console.log(box);

var isblue = false;

setInterval(function(){
    if(isblue == true){
        box.style.backgroundColor = 'red';
        isblue = false;
    } else if(isblue == false){
        box.style.backgroundColor = 'blue';
        isblue = true;
    }

},1000)

// 4.

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
console.log(box1+box2);

box1.addEventListener("mouseover",function(){
    img1.style.display = "none";
    img2.style.display = "block";
})

box2.addEventListener("mouseover",function(){
    img3.style.display = "none";
    img4.style.display = "block";

})




























// var box = document.getElementById('box');

// var red = document.getElementById('red');
// var yellow = document.getElementById('yellow');
// var green = document.getElementById('green');

// console.log(red+yellow+green);
// var isred = false;
// var isyellow = false;
// var isgreen = false;

// setInterval(function(){

//     if( isred == false){
//         red.style.backgroundColor = 'red'
//         isred = true
        
//     } else if(isred ==true){
//         red.style.backgroundColor = 'white'
//         yellow.style.backgroundColor = 'yellow'
//         isyellow = true;
//     }else if(isyellow == true){
//         yellow.style.backgroundColor = 'white'
//         green.style.backgroundColor = 'green'
   
//     }

    
// },1000)