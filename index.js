




gsap.registerPlugin(ScrollTrigger)
document.addEventListener("DOMContentLoaded", () => {

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

gsap.to(".intro-animation img",{
clipPath: "polygon(0% 100%,100% 100%, 100% 0%,0% 0%)",
duration:1.5,
ease:"power4.inOut",
stagger:{
amount:1.5
},
})
gsap.to(".intro-animation",{
clipPath: "polygon(0% 0%,100% 0%, 100% 0%,0% 0%)",
duration:2,
delay:2,

ease:"power4.inOut"
}).to(".mask-img",{
scaleY:0,
ease:"power1.inOut",
duration:.7,
delay:1,

transformOrigin:"bottom"

}

)

gsap.fromTo(
    ".card-trans1",{
y:"0%",
z:0,
opacity:1,
rotationX:0
    },{
        y:"-50%",
        z:-250,
opacity:0,
        rotationX:45,
        scrollTrigger:{
            trigger:".cardStick2",
            start:"top 85%",
            end:"top -75%",
            scrub:true,
            pin:".cardStick1",
            pinSpacing:false
        }
    }
)

 

gsap.to(".imgSld",{
y:-150,
ease:"none",
scrollTrigger:{
trigger:".top-display",
start:"top bottom",
end:"bottom top",
scrub:true
}

}

)

let spil;
const targets = gsap.utils.toArray(".splits")
targets.forEach(tar=>{
let splitt = SplitText.create(tar,{
type:"word,char,lines",
autoSplit:true,
mask:"lines",

})
gsap.from(splitt.lines,{
duration:.6,
stagger:{each:0.05,
ease:"expo.out",
y:"-100%",
},

scrollTrigger:{
trigger:tar,
start:"top 30%"
}

})

}
)



ScrollTrigger.addEventListener("refresh", () => locoScroll.update()); 

ScrollTrigger.refresh(); 
})

