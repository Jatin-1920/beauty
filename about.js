

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