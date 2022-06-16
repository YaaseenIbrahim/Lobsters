
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
tl.to('#back3', {
    left: 415,
    opacity: 1,
    duration: 2.5,
    ease: 'power3'
});
tl.from('.aswe', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 1.5,
    ease: 'power1',
},
    "<0.5", //Start at 0.5s of previos animation
)
