/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef, useContext, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { RichText } from 'prismic-reactjs';
import { Elements } from 'prismic-richtext';
import { gsap } from 'gsap';
import {
  SectionContainer,
  Row,
  ParaLine,
  StyledHamburgerBox,
  BigText,
  ContentWrapper,
  ContactRows,
  SmallLink,
  LinkWrapper,
  SmallLinkGatsby,
  TextWrapper,
  StyledMobileImage,
} from './style';
import { Icon, CursorContext } from '@components';
import { Container, Overflow } from '@styles';

const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key });
};

var htmlSerializer = function (type, element, content, children, key) {
  var props = {};

  switch (type) {
    case Elements.paragraph:
      return React.createElement(ParaLine, propsWithUniqueKey(props, key), children);
    default:
      return null;
  }
};

const PhotoLink = ({ data }) => {
  const { setImage } = useContext(CursorContext);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering)
      setImage({
        hovering: true,
        url: data.headshot.url,
        alt: data.headshot.alt,
      });
    else
      setImage({
        hovering: false,
        url: data.headshot.url,
        alt: data.headshot.alt,
      });
  }, [hovering]);

  if (isMobile) return null;

  return (
    <>
      <SmallLink
        id="cursor_hide"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{ cursor: 'default' }}>
        Photo of me
      </SmallLink>
      <Icon name="arrow" />
    </>
  );
};

const Information = ({ state, data }) => {
  let tl = gsap.timeline();
  let linesRef = useRef([]);
  let textRef = useRef(null);
  let buttonRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      tl.fromTo(
        textRef,
        {
          opacity: 0,
          yPercent: 10,
        },
        {
          opacity: 1,
          transform: 'translate(0)',
          ease: 'power3.inOut',
          delay: 0.5,
          duration: 0.5,
        },
      )
        .staggerFromTo(
          linesRef.current,
          1,
          { yPercent: 100 },
          { yPercent: 0, opacity: 1, ease: 'power3.inOut' },
          0.2,
        )
        .fromTo(buttonRef, { scale: 0 }, { scale: 1, opacity: 1, ease: 'power3.inOut' }, '-=1');
    }, 800);
  }, [tl, textRef, linesRef]);

  return (
    <SectionContainer>
      <Container>
        <ContentWrapper>
          <Row>
            <TextWrapper>
              {isMobile && (
                <StyledMobileImage
                  image={data.headshot.localFile.childImageSharp.gatsbyImageData}
                  alt={data.headshot.alt && data.headshot.alt}
                />
              )}
              <div style={{ opacity: 0 }} ref={el => (textRef = el)}>
                <RichText render={data.description.raw} htmlSerializer={htmlSerializer} />
              </div>
            </TextWrapper>
            <div>
              <StyledHamburgerBox
                to={state && state.prev ? state.prev : '/'}
                style={{ opacity: 0 }}
                ref={el => (buttonRef = el)}>
                <Icon name="cross" />
              </StyledHamburgerBox>
            </div>
          </Row>
          <Row bottom>
            <Row col contact>
              {data.big_links[0].email && (
                <ContactRows>
                  <Overflow>
                    <div style={{ opacity: 0 }} ref={el => (linesRef.current[5] = el)}>
                      <BigText href={`mailto:${data.big_links[0].email}`}>
                        {data.big_links[0].email}
                      </BigText>
                    </div>
                  </Overflow>
                </ContactRows>
              )}
              {data.big_links[0].phone && (
                <ContactRows>
                  <Overflow>
                    <div style={{ opacity: 0 }} ref={el => (linesRef.current[6] = el)}>
                      <BigText href={`tel:${data.big_links[0].phone.replace(/\s/g, '')}`}>
                        {data.big_links[0].phone}
                      </BigText>
                    </div>
                  </Overflow>
                </ContactRows>
              )}
            </Row>
            <Row col>
              <Overflow>
                <LinkWrapper photo style={{ opacity: 0 }} ref={el => (linesRef.current[7] = el)}>
                  <PhotoLink data={data} />
                </LinkWrapper>
              </Overflow>
              <Overflow>
                <LinkWrapper style={{ opacity: 0 }} ref={el => (linesRef.current[8] = el)}>
                  <SmallLinkGatsby to="/">Work</SmallLinkGatsby>
                  <Icon name="arrow" />
                </LinkWrapper>
              </Overflow>
              {data.links &&
                data.links.map((data, index) => (
                  <Overflow key={index}>
                    <LinkWrapper
                      style={{ opacity: 0 }}
                      ref={el => (linesRef.current[8 + (index + 1)] = el)}>
                      <SmallLink
                        href={data.link.url && data.link.url}
                        target={data.link.target}
                        rel="noopener noreferrer">
                        {data.name && data.name}
                      </SmallLink>
                      <Icon name="arrow" />
                    </LinkWrapper>
                  </Overflow>
                ))}
            </Row>
          </Row>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default Information;
