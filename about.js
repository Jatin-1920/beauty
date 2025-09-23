

gsap.to(".aboutKnowImg img",{
    y:-100,
    ease:"none",
    scrollTrigger:{
        trigger:".aboutKnowImg",
        start:"top bottom",
        end:"bottom top",
        scrub:true
    }
})


const targetSt = gsap.utils.toArray(".splitTop")

  targetSt.forEach(ta => {
    let splits = SplitText.create(ta, {
      type: "word,char,lines",
      autoSplit: true,
      mask: "lines",
      

    })
    gsap.from(splits.lines, {
      duration: .75,
      delay:1,
      stagger: {
        each: 0.05,
        ease: "expo.out",
        y: "-100%",
      },
scrollTrigger:{
  trigger:".splitText",
  start:"top 30%"
}
    })
    })


    const raceT = document.querySelector(".Hrace")
function getScrollAmounts(){
    let racesWidths = raceT.scrollWidth
    return -(racesWidths-window.innerWidth)

}
const sliderT = gsap.to(raceT,{
    x:getScrollAmounts,
    duration:5,ease:"none",
  

})






ScrollTrigger.create({
    trigger:".Hrace",
    start:"top 0%",
    end:()=> `+=${getScrollAmounts()*-1}`,
    pin:true,
    scrub:1,
    invalidateOnRefresh:true,
    animation:sliderT,
  
})
gsap.from(".raceLine",{
  scaleX:0,
  duration:.75,
  transformOrigin:"left",
  ease:"power1.inOut",
  stagger:{
    each:0.05
  },
  scrollTrigger:{
    trigger:".racePrlx2",
    start:"right left"
  }
})

      