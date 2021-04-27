import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProjectsSection, ProjectWrapper, ProjectTitle } from './style';
import { Container } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }) => {
  let imageRef = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      imageRef.current.forEach(el => {
        let tl = gsap.timeline().to(el, {
          y: 0,
          opacity: 1,
          ease: 'power3.inOut',
          duration: 1,
        });

        ScrollTrigger.create({
          trigger: el,
          animation: tl,
          scroller: '#___container',
          start: 'top center+=200',
        });
        ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
        ScrollTrigger.refresh();
      });
    }, 500);
  }, []);

  return (
    <ProjectsSection>
      <Container>
        {data.map((node, index) => {
          const data = node.data;
          return (
            <ProjectWrapper to={node.uid} key={index} ref={el => (imageRef.current[index] = el)}>
              <GatsbyImage
                image={data.thumbnail.localFile.childImageSharp.gatsbyImageData}
                alt={data.thumbnail.alt && data.thumbnail.alt}
              />
              {data.title && <ProjectTitle>{data.title}</ProjectTitle>}
            </ProjectWrapper>
          );
        })}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
