




gsap.registerPlugin(ScrollTrigger,SplitText)
document.addEventListener("DOMContentLoaded", () => {

/* let motiveScroll = document.querySelector(".smoothScroll")
  const locoScroll = new LocomotiveScroll({
    el: motiveScroll,
lerp:0.5,
multiplier:1,
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


    /*pinType: motiveScroll.style.transform ? "transform": "fixed

  })
 */
const lenis = new Lenis({ 
    direction: 'both',
    gestureDirection: 'both',
    lerp: 0.07,
    smooth: true,
    smoothTouch: true,
    smoothWheel: true,
    touchMultiplier: 0.7,
    wheelMultiplier: 0.7,
    infinite: false,
    autoResize: true,
    normalizeWheel:true
  });



lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0) 


 

  
  /* gsap.to(".intro-animation img", {
     clipPath: "polygon(0% 100%,100% 100%, 100% 0%,0% 0%)",
     duration: 1.5,
     ease: "power4.inOut",
     stagger: {
       amount: 1.5
     },
   })
   animTl.to(".intro-animation", {
     clipPath: "polygon(0% 0%,100% 0%, 100% 0%,0% 0%)",
     duration: 2,
     delay: 2,
 
     ease: "power4.inOut"
   }).to(".mask-img", {
     scaleY: 0,
     ease: "power1.inOut",
     duration: .7,
     delay: .5,
 
     transformOrigin: "bottom"
 
   }
 
   )
 */


   
  gsap.fromTo(
    ".card-trans1", {
    y: "0%",
    z: 0,
    opacity: 1,
    rotationX: 0
  }, {
    y: "-50%",
    z: -250,
    opacity: 0,
    rotationX: 45,
    scrollTrigger: {
      trigger: ".cardStick2",
      start: "top 85%",
      end: "top -75%",
      scrub: true,
      pin: ".cardStick1",
      pinSpacing: false
    }
  }
  )



  const heroImg = document.querySelectorAll(".hero img")
  const heroImgTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".top-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
     
      ease: "none",
    }

  })
  heroImg.forEach(imge => {
    heroImgTl.to(imge, {
      y: gsap.utils.random(-200, -400),
      ease: "none"

    }, 0)
  })




  let spil;
  const targets = gsap.utils.toArray(".splits")
  targets.forEach(tar => {
    let splitt = SplitText.create(tar, {
      type: "word,char,lines",
      autoSplit: true,
      mask: "lines",

    })
    gsap.from(splitt.lines, {
      duration: .6,
      stagger: {
        each: 0.05,
        ease: "expo.out",
        y: "-100%",
      },

      scrollTrigger: {
        trigger: tar,
        start: "top bottom",
       
      }

    })

  }
  )

  let maskTl = document.querySelectorAll(".maskG")

  maskTl.forEach(e => {
    const maskImgTl = gsap.timeline({
      scrollTrigger: {
        trigger: e,
        start: "top 35%",
       
      }
    })
    const newMask = e.querySelector(".newMask")
    const newMaskImg = e.querySelector("img")
    maskImgTl.to(newMask, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1,
      ease: "power3.inOut"

    }).from(newMaskImg, {
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut"
    }, "-=.5")

  })

  // parallax section //
  const prlxSection = document.querySelectorAll(".prlxSection")

  prlxSection.forEach(e => {
    const prlxImg = e.querySelector(".prlxImg")
    const prlxTl = gsap.timeline({
      scrollTrigger: {
        trigger: e,
        start: "top bottom",
        end: "bottom top",
        scrub: true,

      }
    })
    const yHeight = prlxImg.offsetHeight - e.offsetHeight
    const prlxDiv = e.querySelectorAll(".prlxDiv")
    prlxTl.fromTo(prlxImg, { y: -yHeight }, {
      y: 0,
      ease: "none"
    }).to(prlxDiv, {
      y: -100,
      ease: "none"
    }, 0)
  })





  const hovP = document.querySelectorAll(".dispHovP")

  hovP.forEach((e) => {
    e.addEventListener("mouseenter", (i) => {
      let slideP = e.dataset.transf
      let sldP = parseInt(slideP)
      gsap.to(".dispHovI", {
        x: `-${sldP}%`,
        ease: "power3.inOut",
        duration: .75
      })
    })
    e.addEventListener("mouseleave", (i) => {
      gsap.to(".dispHovI", {
        x: 0,
        ease: "power3.inOut",
        duration: .75
      })

    })

  })



/* ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.defaults({scroller:motiveScroll})
  ScrollTrigger.refresh();
 */

})

