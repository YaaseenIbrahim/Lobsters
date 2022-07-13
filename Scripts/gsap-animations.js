
gsap.to('#join-header', {
    scrollTrigger:{
        trigger: ".goal-container",
        scrub: 1,
        start: "40% center",
        end: '+=600',
    },
    x: 580,
    ease: 'none',
})
const tl = gsap.timeline({ 
    scrollTrigger: {
        trigger: "#timeline-container",
        start: "top center",
        end: '+=300',
    },
});
tl.to('#inosuke',  {
    left: 429,
    opacity: 1,
    duration: 2.5,
    ease: 'power3'
},
    "somelabel"
);
tl.from('.aswe', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 1.5,
    ease: 'power1',
},
    "<0.5", //Start at 0.5s of previos animation
)
tl.from('#grad', {
    opacity: 0,
    x: 200,
    duration: 2,
    ease: "power2",
    
},
    1.35
)
tl.from('.line9', {
    opacity: 0,
    duration: 1.5,
    ease: 'power1',

},
    "-=1.5",
)
tl.from('#boys', {
    opacity: 0,
    duration:2,
    ease: "power2",
    x: 200,
})
