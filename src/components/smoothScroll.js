import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const scroll = {
  container: '#___container',
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.08,
  },
};

const Scroll = callbacks => {
  useEffect(() => {
    let locomotiveScroll;

    setTimeout(() => {
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector(scroll.container),
        ...scroll.options,
      });

      // Exposing to the global scope for ease of use.
      window.scroll = locomotiveScroll;
      setTimeout(() => locomotiveScroll.update(), 300);

      locomotiveScroll.on('scroll', ScrollTrigger.update);
      locomotiveScroll.on('scroll', func => {
        // Update `data-direction` with scroll direction.
        document.documentElement.setAttribute('data-direction', func.direction);
      });

      ScrollTrigger.scrollerProxy('#___container', {
        scrollTop(value) {
          return arguments.length
            ? locomotiveScroll.scrollTo(value, 0, 0)
            : locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('#___container').style.transform ? 'transform' : 'fixed',
      });
    }, 500);

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [callbacks]);

  return null;
};

export default Scroll;
