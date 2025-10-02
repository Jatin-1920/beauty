


/* const races = document.querySelector(".parallaxRace")
function getScrollAmount(){
    let racesWidth = races.scrollWidth
    return -(racesWidth-window.innerWidth)

}
const slider = gsap.to(races,{
    x:getScrollAmount,
    duration:5,ease:"none",
  

})
const parallaxDiv = selectAll(".parallaxDiv")





ScrollTrigger.create({
    trigger:".parallaxSlider",
    start:"top 20%",
    end:()=> `+=${getScrollAmount()*-1}`,
    pin:true,
    scrub:1,
    invalidateOnRefresh:true,
    animation:slider,
})

      parallaxDiv.forEach(e=>{
  
const paralxImg =  e.querySelector("img")
        const xWidth = e.offsetWidth - paralxImg.offsetWidth
   gsap.fromTo(paralxImg,{
    x:"-22.5vw",
},{
  x:0,
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
*/


