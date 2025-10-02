
gsap.registerPlugin(Flip)

const animTl = gsap.timeline()
  let flipClass = document.querySelector(".introImg")

let stated = Flip.getState(flipClass)

  flipClass.classList.add("introFlip")
  Flip.from(stated, {
    absolute: true,
    duration: 1,
    ease: "power1.inOut",


  })
  animTl.to(".flipImg", {
    scale: 1,
    delay: 1,
    duration: 2,
    ease: "expo.inOut",
  }).to(".introH1",{
y:0,
transformOrigin:"bottom",
duration:1,
ease:"power1.inOut"
  }).to(".introLine",{
width:"100%",
transformOrigin:"left",
duration:1,
ease:"power1.inOut"
  }).to(".introAnim",{
    position:"absolute",
    zIndex:3,
  }).to(".animImg",{
    display:"none",
  })

  