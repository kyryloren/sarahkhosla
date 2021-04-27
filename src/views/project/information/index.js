/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { gsap } from 'gsap';
import { RichText } from 'prismic-reactjs';
import { Elements } from 'prismic-richtext';
import { Container, Overflow } from '@styles';
import { Icon } from '@components';
import {
  InfoSection,
  Row,
  Col,
  Title,
  TextWrapper,
  NormalText,
  UnorderedList,
  ButtonWrapper,
  StyledHamburgerBox,
} from './style';

const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key });
};

var htmlSerializer = function (type, element, content, children, key) {
  var props = {};

  switch (type) {
    case Elements.paragraph:
      return React.createElement(NormalText, propsWithUniqueKey(props, key), children);
    case Elements.list:
      return React.createElement(UnorderedList, propsWithUniqueKey(props, key), children);
    default:
      return null;
  }
};

const Information = ({ data, index }) => {
  let tl = gsap.timeline();
  let textRef = useRef([]);
  let descriptionRef = useRef(null);
  const [playAnim, setPlayAnim] = useState(false);
  const [truncated, setTruncated] = useState(true);

  const toggleTruncate = () => {
    setTruncated(!truncated);

    setTimeout(() => window.scroll.update(), 300);
  };

  useEffect(() => {
    setTimeout(() => {
      if (!isMobile) {
        window.scroll.on('scroll', args => {
          if (typeof args.currentElements[`infoSection${index}`] === 'object') {
            if (args.currentElements[`infoSection${index}`].inView) setPlayAnim(true);
          }
        });
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (playAnim) {
      tl.staggerFrom(
        textRef.current,
        1,
        {
          yPercent: -100,
          ease: 'power3.inOut',
          delay: 0.2,
        },
        0.5,
      ).from(
        descriptionRef,
        {
          opacity: 0,
          yPercent: -10,
          ease: 'power3.inOut',
          duration: 1,
        },
        '-=1',
      );
    }
  }, [playAnim]);

  return (
    <InfoSection data-scroll data-scroll-id={`infoSection${index}`}>
      <Container>
        <Row>
          <Col>
            {data.items.map((items, index) => (
              <Overflow key={index}>
                <Title ref={el => (textRef.current[index] = el)}>{items.title}</Title>
              </Overflow>
            ))}
          </Col>
          <Col ref={el => (descriptionRef = el)}>
            <TextWrapper truncated={truncated}>
              <RichText render={data.primary.description.raw} htmlSerializer={htmlSerializer} />
            </TextWrapper>
            <ButtonWrapper onClick={toggleTruncate}>
              <StyledHamburgerBox truncated={truncated}>
                <Icon name="cross" />
              </StyledHamburgerBox>
              <NormalText label>{truncated ? 'Expand view' : 'Close expanded view'}</NormalText>
            </ButtonWrapper>
          </Col>
        </Row>
      </Container>
    </InfoSection>
  );
};

export default Information;
