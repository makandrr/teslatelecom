const nodrags = document.querySelectorAll('.nodrag');

for(let element of nodrags) {
    element.ondragstart = function(e) {
        e.preventDefault();
    }
}

// gsap.set('.overlay .logo', {
//     y: -100
// })

const openTl = gsap.timeline();

openTl.fromTo('.overlay .logo', {
    opacity: 0,
    duration: 0,
    y: -100,
    ease: 'sine.out'
}, {
    opacity: 1,
    y: 0,
    duration: 2
})
.to('.overlay .logo', {
    opacity: 0,
    duration: 2
})
.to('.overlay .left', {
    width: 0,
    duration: 0.8,
    ease: 'sine.in'
}, '+=0.4')
.to('.overlay .right', {
    width: 0,
    duration: 0.8,
    ease: 'sine.in'
}, '-=0.8')
.to('.overlay', {
    pointerEvents: 'none',
    duration: 0
})
.from('nav', {
    opacity: 0,
    yPercent: -100
})
.fromTo('.header', {
    backgroundSize: '120%'
}, {
    backgroundSize: '100%',
    duration: 1.4,
    ease: 'sine.inOut'
}, '-=1')
.from('.header .line', {
    opacity: 0,
    x: 400,
    stagger: 0.15
})
// .fromTo('header .line, header .line2', {
//     left: '-50%'
// },
// {
//     left: '100%',
//     duration: 5,
//     ease: 'none',
//     repeatDelay: 1.8,
//     repeat: -1
// })
.from('.header .content h2, .header .content p', {
    opacity: 0,
    stagger: 0.3
})

// gsap.set('.overlay', {
//     display: 'none'
// })

// const ulToRights = document.querySelectorAll('.ul-toRight');

// for(let ul of ulToRights) {
//     for(let i = 0; i < ul.children.length; i++) {
//         ul.children[i].style.marginLeft = `${i+0.3}em`
//     }
// }

gsap.from('.tarifs .nav li', {
    yPercent: -100,
    duration: 1,
    stagger: 0.5,
    ease: 'bounce.out',
    scrollTrigger: {
        trigger: '.tarifs .nav'
    }
})

gsap.from('.tarifs h2', {
    xPercent: 100,
    scrollTrigger: '.tarifs h2',
    duration: 1,
    ease: 'power2.out'
})

gsap.from('.tarifs .tarif .right .fade', {
    x: 100,
    stagger: 0.05,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: '.tarifs .tarif ul',
    ease: 'power2.out'
})

gsap.from('.tarifs .tarif .left', {
    xPercent: -100,
    scrollTrigger: '.tarifs .tarif ul',
    duration: 1.2,
    ease: 'power2.out'
})

gsap.from('.tarifs .tarif2 h3', {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.tarifs .tarif2 h3'
})

gsap.from('.tarifs .tarif2 .cards .card', {
    scrollTrigger: '.tarifs .tarif2 .cards',
    stagger: 0.3,
    duration: 0.2,
    opacity: 0
})

gsap.from('.tarifs .tarif2 .right', {
    xPercent: 100,
    duration: 1.3,
    scrollTrigger: '.tarifs .tarif2 .right'
})

