// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// });
gsap.to(".main", {
  background: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -20%",
    end: "top -30%",
    scrub: 2,
  },
});
gsap.to(".navbar", {
  background: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -20%",
    end: "top -30%",
    scrub: 2,
  },
});
gsap.to(".left-section", {
  opacity: 1,
  left: 0,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    markers: false,
    start: "top -70%",
    end: "top -80%",
    scrub: 2,
  },
});
gsap.to(".page", {
  opacity: 1,
  left: 0,
  scrollTrigger: {
    trigger: ".page-3",
    scroller: "body",
    markers: false,
    start: "top -50%",
    end: "top -80%",
    scrub: 2,
  },
});
gsap.to(".contact", {
  opacity: 1,
  top: 0,
  scrollTrigger: {
    trigger: ".page-3",
    scroller: "body",
    markers: false,
    start: "top -50%",
    end: "top -80%",
    scrub: 2,
  },
});
gsap.to(".right-section", {
  opacity: 1,
  top: 0,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -70%",
    end: "top -90%",
    scrub: 2,
  },
});
gsap.to(".skills", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".page-3",
    scroller: "body",
    start: "top 30%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.to(".skills div:nth-child(odd)", {
  top: 0,
  scrollTrigger: {
    trigger: ".page-3",
    scroller: "body",
    start: "top 30%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.to(".pro h3:nth-child(odd)", {
  left : "-49%",
  opacity: 1,
  scrollTrigger: {
    trigger: ".projects",
    scroller: "body",
    start: "top 50%",
    end: "top 80%",
    scrub: 2,
  },
});
gsap.to(".pro h3:nth-child(even)", {
  left : "50%",
  opacity: 1,
  scrollTrigger: {
    trigger: ".projects",
    scroller: "body",
    start: "top 50%",
    end: "top 80%",
    scrub: 2,
  },
});
gsap.to(".css", {
  top: 0,
  scrollTrigger: {
    trigger: ".page-3",
    scroller: "body",
    start: "top 30%",
    end: "top 50%",
    scrub: 2,
  },
});
var menu = document.querySelector(".menu");
var lists = document.querySelector(".lists");
var logo = document.querySelector(".menu-page");
var logoimg = document.querySelector(".logo img")
var flag = 0
var h4 = document.querySelector(".lists h4")
menu.addEventListener("click", function () {
  if(flag == 0){
    lists.style.display = "block"
    logo.style.top = "0"
    flag = 1
  }
  else{
    lists.style.display = "none"
    logo.style.top = "-100%"
    flag = 0
  }
});