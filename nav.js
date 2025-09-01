gsap.registerPlugin(ScrollTrigger)
const navToggle = document.querySelector(".menu")


const navTl = gsap.timeline({paused:true})

navTl.to(".navigation",{height:"100dvh",ease:"power2.inOut",
                 duration:.85}).from(".dLine",{scaleY:0,transformOrigin:"0% 0%" ,duration:1,
              ease:"power2.inOut"},0.2).from(".hLine",{scaleX:0,transformOrigin:"0% 0%" ,duration:1,
            ease:"power2.inOut"},0.2)



let state = false

function switchMenu() {
  state = !state
  if(state){
    navTl.play()
  } else{
    navTl.reverse()
  }
}

