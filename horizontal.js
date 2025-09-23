
gsap.registerPlugin(ScrollTrigger, SplitText)
const races = document.querySelector(".hScroll")
function getScrollAmount(){
    let racesWidth = races.scrollWidth
    return -(racesWidth-window.innerWidth)

}
const slider = gsap.to(races,{
    x:getScrollAmount,
    duration:5,ease:"none",
  

})
const parallaxDiv = document.querySelectorAll(".parallaxDiv")





ScrollTrigger.create({
    trigger:".hScroll",
    start:"top 20%",
    end:()=> `+=${getScrollAmount()*-1}`,
    pin:true,
    scrub:1,
    invalidateOnRefresh:true,
    animation:slider,
})

      parallaxDiv.forEach(e=>{
      
  

   gsap.to(e,{
  x:"-30vw",
  ease:"none",
     scrollTrigger:{
    trigger:e,
    start:"left right",
  end:"right left",
    scrub: true,
    containerAnimation:slider,
      id:"id"
     }
})

})

const raceCircle = document.querySelectorAll(".raceCircle")
raceCircle.forEach(e=>{
  gsap.to(e,{
    rotation:360,
    ease:"none",
     scrollTrigger:{
    trigger:e,
    start:"left right",
  end:"right left",
    scrub: true,
    containerAnimation:slider,
      id:"id"
     }
  })
})