import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import { Container, Overflow, media } from '@styles';
import { gsap } from 'gsap';

const LoadingWrapper = styled.div`
  position: fixed;
  background-color: var(--dark);
  color: var(--light);
  width: 100vw;
  height: 100%;
  z-index: 9998;
  padding: 5.1vw 0;
`;
const Text = styled.div`
  font-size: 2vw;
  position: absolute;

  ${media.tablet`font-size: 4vw;`};
  ${media.phablet`font-size: 18px;`};
`;
const StyledOverflow = styled(Overflow)`
  display: inline-block;
`;
const Word = styled.div`
  opacity: 0;
`;

const Loader = ({ setLoaded }) => {
  let tl = gsap.timeline();
  let sectionContainer = useRef(null);
  let textRef = useRef([]);
  let nextLine = useRef([]);

  useEffect(() => {
    tl.set(textRef.current[0], { yPercent: 100, opacity: 1 })
      .set(textRef.current[1], { yPercent: 100, opacity: 1 })
      .set(nextLine.current[2], { yPercent: 100, opacity: 1 })
      .set(nextLine.current[3], { yPercent: 100, opacity: 1 })
      .set(nextLine.current[4], { yPercent: 100, opacity: 1 })
      .set(nextLine.current[5], { yPercent: 100, opacity: 1 });

    setTimeout(() => {
      tl.staggerTo(textRef.current, 1, { yPercent: 0, ease: 'power3.out' }, 0.2)
        .staggerTo(textRef.current, 1, { yPercent: -100, ease: 'power3.in' }, 0.2)
        .staggerTo(nextLine.current, 1, { yPercent: 0, ease: 'power3.out' }, 0.2)
        .staggerTo(nextLine.current, 1, { yPercent: -100, ease: 'power3.in' }, 0.2)
        .to(sectionContainer, {
          scaleY: 0,
          ease: 'power3.inOut',
          duration: 1,
          onComplete: () => setLoaded(true),
        });
    }, 400);
  }, [tl, setLoaded]);

  return (
    <Div100vh ref={el => (sectionContainer = el)} style={{ transformOrigin: 'top' }}>
      <LoadingWrapper>
        <Container>
          <Text>
            <StyledOverflow>
              <Word ref={el => (textRef.current[0] = el)}>Hey&nbsp;</Word>
            </StyledOverflow>
            <StyledOverflow>
              <Word ref={el => (textRef.current[1] = el)}>there.</Word>
            </StyledOverflow>
          </Text>
          <Text>
            <StyledOverflow>
              <Word ref={el => (nextLine.current[2] = el)}>Thanks&nbsp;</Word>
            </StyledOverflow>
            <StyledOverflow>
              <Word ref={el => (nextLine.current[3] = el)}>for&nbsp;</Word>
            </StyledOverflow>
            <StyledOverflow>
              <Word ref={el => (nextLine.current[4] = el)}>stopping&nbsp;</Word>
            </StyledOverflow>
            <StyledOverflow>
              <Word ref={el => (nextLine.current[5] = el)}>by.</Word>
            </StyledOverflow>
          </Text>
        </Container>
      </LoadingWrapper>
    </Div100vh>
  );
};

export default Loader;
