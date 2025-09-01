gsap.registerPlugin(ScrollTrigger)


const navToggle = document.querySelector(".menu")


const navTl = gsap.timeline({paused:true})

navTl.to(".navigation",{height:"100dvh",ease:"power1.inOut",
                 duration:.85}).from(".dLine",{scaleY:0,transformOrigin:"0% 0%" ,duration:1,
              ease:"power2.inOut"},0.2).from(".hLine",{scaleX:0,transformOrigin:"0% 0%" ,duration:1,
            ease:"power1.inOut"},0.2)



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

gsap.to(".nav-mask",{
scaleX:0,
ease:"power1.inOut",

duration:.6,
delay:.8,
transformOrigin:"left"
})
gsap.from(".nav-img img",{
scale:1.2,
ease:"power1.inOut",
delay:.85,
duration:1,
})
  } else{
gsap.to(".nav-mask",{
scaleX:1,
ease:"power1.inOut",

duration:.1,
delay:2,
transformOrigin:"left"
})
    navTl.reverse()

  }
}
 
navToggle.addEventListener("click",switchMenu)