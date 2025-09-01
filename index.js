




gsap.registerPlugin(ScrollTrigger)


const motiveScroll = document.querySelector('.smoothScroll')
const locoScroll = new LocomotiveScroll({
  el:motiveScroll ,
  lerp: 1,
  gestureDirection:"both",
  smartphone: {
    smooth: true
  }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(motiveScroll, {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, 
  
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
,
  
  
/* pinType: motiveScroll.style.transform ? "transform": "fixed" 
*/
}) 

gsap.fromTo(
    ".card-trans",{
y:"0%",
z:0,
rotationX:0
    },{
        y:"-50%",
        z:-250,
        rotationX:45,
        scrollTrigger:{
            trigger:".cardStick2",
            start:"top 85%",
            end:"top -75%",
            scrub:true,
            pin:".cardStick2",
            pinSpacing:false
        }
    }
)

 gsap.to(".mask-img",{
scaleY:0,
ease:"power1.inOut",
duration:.7,
delay:.5,
transformOrigin:"bottom"

}

)

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



ScrollTrigger.addEventListener("refresh", () => locoScroll.update()); 

ScrollTrigger.refresh(); 

