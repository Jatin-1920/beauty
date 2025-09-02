gsap.registerPlugin(ScrollTrigger)
document.addEventListener("DOMContentLoaded", () => {

const navToggle = document.querySelector(".menu")

const navImage = document.querySelectorAll(".upperNav .nav2 h1")


const navTl = gsap.timeline({paused:true})

navTl.to(".navigation",{height:"100dvh",ease:"expo.inOut",
                 duration:1.35}).from(".dLine",{scaleY:0,transformOrigin:"0% 0%" ,duration:1,
              ease:"power1.inOut"},"+=.85").from(".hLine",{scaleX:0,transformOrigin:"0% 0%" ,duration:1,
            ease:"power1.inOut"},"-=.85").to(".smoothScroll",{
y:"30vh",
duration:1.35,
ease:"expo.inOut"

},0).to(".mask-body",{
display:"block"
},0).to(".mask-body",{
opacity:.9,
duration:1.35,
ease:"power1.inOut"
},0)



let state = false;

function switchMenu() {
  state = !state
  navToggle.disabled = true;
    setTimeout(()=>{
      navToggle.disabled = false;
    navToggle.innerHTML = state ? "Close":"Menu"
  },1000)
  if(state){
    navTl.play()
gsap.to(".nav-img",{
display:"flex",
duration:0,
delay:2.1,
})
gsap.to(".nav-mask",{
scaleX:0,
transformOrigin:"left",
delay:2.2,
duration:.6,
ease:"power1.inOut"
})
gsap.from(".nav-img img",{
scale:1.2,
delay:2.3,
duration:.85,
ease:"power1.inOut"
})

  } else{
gsap.to(".nav-mask",{
scaleX:1,
delay:1.8,
duration:1,
ease:"power1.inOut"
})
    navTl.reverse()

  }
}
 
navImage.forEach((e)=>{
e.addEventListener("mouseenter",(i)=>{
let slideTxt = e.dataset.slide
let sldTxt = parseInt(slideTxt)
gsap.to(".nav-img img",{
y:`-${sldTxt}%`,
ease:"power3.inOut",
duration:1,

})
})
e.addEventListener("mouseleave",(i)=>{
gsap.to(".nav-img img",{
y:0,
ease:"power3.inOut",
duration:1,

})
})

}
)
navToggle.addEventListener("click",switchMenu)
})

