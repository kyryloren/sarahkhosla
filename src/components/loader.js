import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import { TextScramble } from '@components';
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

  ${media.tablet`font-size: 4vw;`};
  ${media.phablet`font-size: 18px;`};
`;

const Loader = ({ setLoaded }) => {
  let tl = gsap.timeline();
  let sectionContainer = useRef(null);
  let textRef = useRef([]);

  useEffect(() => {
    const phrases = ['Hey there.', 'Thanks for stopping by.'];
    const fx = new TextScramble(textRef);

    let counter = 0;
    const next = () => {
      if (counter < 2) {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 1000);
        });
        counter = counter + 1;
      } else {
        tl.to(textRef, { yPercent: -100, ease: 'power3.out', duration: 0.8 }).to(
          sectionContainer,
          {
            scaleY: 0,
            ease: 'power3.inOut',
            duration: 1,
            onComplete: () => setLoaded(true),
          },
          '-=0.4',
        );
      }
    };

    next();
  }, [tl, setLoaded]);

  return (
    <Div100vh ref={el => (sectionContainer = el)} style={{ transformOrigin: 'top' }}>
      <LoadingWrapper>
        <Container>
          <Overflow>
            <Text ref={el => (textRef = el)} />
          </Overflow>
        </Container>
      </LoadingWrapper>
    </Div100vh>
  );
};

export default Loader;
