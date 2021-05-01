import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Container } from '@styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeroSection, ImageContainer, WrapperSection } from './style';

import Information from './information';
import Full from './full';
import Half from './half';
import Pagination from './pagination';

gsap.registerPlugin(ScrollTrigger);

const Project = ({ data, pagination }) => {
  let sectionRef = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      sectionRef.current.forEach(el => {
        let tl = gsap.timeline().to(el, {
          y: 0,
          opacity: 1,
          ease: 'power3.inOut',
          duration: 0.5,
        });

        ScrollTrigger.create({
          trigger: el,
          animation: tl,
          scroller: '#___container',
          start: 'top center+=600',
        });
        ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
        ScrollTrigger.refresh();
      });
    }, 500);
  }, []);

  return (
    <>
      <HeroSection>
        <Container>
          <ImageContainer>
            <GatsbyImage
              image={data.cover.localFile.childImageSharp.gatsbyImageData}
              alt={data.cover.alt && data.cover.alt}
            />
          </ImageContainer>
        </Container>
      </HeroSection>
      {data.body.map((slice, index) => {
        const typename = slice.__typename;

        switch (typename) {
          case 'PrismicProjectBodyInformation':
            return (
              <WrapperSection ref={el => (sectionRef.current[index] = el)}>
                <Information data={slice} index={index} />
              </WrapperSection>
            );
          case 'PrismicProjectBodyFullImage':
            return (
              <WrapperSection ref={el => (sectionRef.current[index] = el)}>
                <Full data={slice} />
              </WrapperSection>
            );
          case 'PrismicProjectBodyHalfImage':
            return (
              <WrapperSection ref={el => (sectionRef.current[index] = el)}>
                <Half data={slice} />
              </WrapperSection>
            );
          default:
            return null;
        }
      })}
      <Pagination data={pagination} />
    </>
  );
};

export default Project;
