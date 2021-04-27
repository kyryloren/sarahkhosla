/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Container } from '@styles';
import { SectionWrapper, StyledTitle, Letter, StyledOverflow } from './style';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  let tl = gsap.timeline();
  let fullText = useRef(null);
  let letters = useRef([]);

  useEffect(() => {
    tl.staggerFrom(letters.current, 1.2, { yPercent: 100, ease: 'power3.inOut', delay: 1.5 }, 0.05);
  }, []);

  useEffect(() => {
    tl.to(fullText, {
      scrollTrigger: {
        trigger: fullText,
        scroller: '#___container',
        start: 'top top',
        pin: true,
        scrub: true,
        markers: true,
      },
      top: '-90%',
      left: '5.1vw',
      fontSize: '2.5vw',
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <SectionWrapper>
      <Container>
        <StyledTitle ref={el => (fullText = el)}>
          <div data-scroll data-scroll-sticky data-scroll-target="#___gatsby">
            <StyledOverflow>
              <Letter ref={el => (letters.current[0] = el)}>S</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[1] = el)}>a</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[2] = el)}>r</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[3] = el)}>a</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[4] = el)}>h&nbsp;</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[5] = el)}>K</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[6] = el)}>h</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[7] = el)}>o</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[8] = el)}>s</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[9] = el)}>l</Letter>
            </StyledOverflow>
            <StyledOverflow>
              <Letter ref={el => (letters.current[10] = el)}>a</Letter>
            </StyledOverflow>
          </div>
        </StyledTitle>
      </Container>
    </SectionWrapper>
  );
};

export default Hero;
