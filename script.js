gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -50%",
        end:"top - 80%",
        scrub:2
    }
})