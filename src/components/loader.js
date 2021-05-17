import React, { useEffect, useRef, useState } from 'react';
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

  ${media.tablet`font-size: 4vw;`};
  ${media.phablet`font-size: 18px;`};
`;

const Loader = ({ setLoaded }) => {
  const [animText, setAnimText] = useState('');
  let tl = gsap.timeline();
  let sectionContainer = useRef(null);
  let textRef = useRef([]);

  // A very hacky way of doing the intro animation
  useEffect(() => {
    setAnimText('Hey');
    setTimeout(() => setAnimText('Hey there.'), 400);
    setTimeout(() => setAnimText('Hey'), 1200);
    setTimeout(() => setAnimText('Thanks'), 1300);
    setTimeout(() => setAnimText('Thanks for'), 1400);
    setTimeout(() => setAnimText('Thanks for stopping'), 1500);
    setTimeout(() => setAnimText('Thanks for stopping by.'), 1600);
  }, []);

  useEffect(() => {
    tl.to(textRef, { yPercent: -120, ease: 'power3.inOut', duration: 0.8, delay: 2.5 }).to(
      sectionContainer,
      {
        scaleY: 0,
        ease: 'power3.inOut',
        duration: 1,
        onComplete: () => setLoaded(true),
      },
      '-=0.4',
    );
  }, [tl, sectionContainer, textRef, setLoaded]);

  return (
    <Div100vh ref={el => (sectionContainer = el)} style={{ transformOrigin: 'top' }}>
      <LoadingWrapper>
        <Container>
          <Overflow>
            <Text ref={el => (textRef = el)}>{animText}</Text>
          </Overflow>
        </Container>
      </LoadingWrapper>
    </Div100vh>
  );
};

export default Loader;
