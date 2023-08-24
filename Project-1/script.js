var tl = gsap.timeline()

tl.from("#nav img , #nav h3, #nav h4, #nav button", {
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2

})

tl.from("#main h1" , {
    y:100,
    stagger:0.2,
    opacity: 0
})

tl.from("#main>img",{
    scale:0,
    stagger:0.1,
    opacity:0
})

tl.from("h5",{
    opacity:0,
    scale:0
})
tl.to("h5",{
    y:30,
    duration:1,
    repeat:-1,
    yoyo:true
})