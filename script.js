var tl = gsap.timeline();

tl.from("#navP1 , #navP2>li , #navP3>i , #navP3>select,#navP3>li,#navP3>button",{
    y:-100,
    delay:1,
    opacity:0,
    stagger:0.1
});

var h1 =document.querySelector("#landingSectionL>h1").textContent.split("")
var clutter="";
h1.forEach(function(elem){
    clutter+=`<span>${elem}</span>`
})
document.querySelector("#landingSectionL>h1").innerHTML=clutter;


tl.from("#landingSectionL>h1>span",{
    opacity:0,
    stagger:0.05
})

tl.from(".btnSection",{
    opacity:0,
    stagger:0.8,
    x:-200
})

document.querySelector("#navP3>button")
.addEventListener("mouseover",function(){
    gsap.to("#navP3>button>i",{
        scale:1.1,
        x:8
    })
})
document.querySelector("#navP3>button")
.addEventListener("mouseout",function(){
    gsap.to("#navP3>button>i",{
        scale:1,
        x:0
    })
})
var x = document.querySelectorAll(".btnSection>button>.i")
x.forEach(function(elem) {
    elem.addEventListener("mouseover",function(){
        gsap.to(elem,{
            x:25,
            scale:2
        })
    })
    elem.addEventListener("mouseout",function(){
        gsap.to(elem,{
            x:0,
            scale:1
        })
    })
});