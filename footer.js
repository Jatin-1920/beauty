





const targetS = gsap.utils.toArray(".splitA")



  targetS.forEach(ta => {
    let splits = SplitText.create(ta, {
      type: "word,char,lines",
      autoSplit: true,
      mask: "lines",
      

    })
    gsap.from(splits.lines, {
      duration: .75,
      stagger: {
        each: 0.05,
        ease: "expo.out",
        y: "-100%",
      },

      scrollTrigger: {
        trigger: ".footer",
        start: "top 35%"
      }

    })
    })

  