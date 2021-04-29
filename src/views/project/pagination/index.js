import React, { useEffect, useState } from 'react';
import { PaginationSection, Row, Col, BigText, StyledImage } from './style';
import { Icon } from '@components';
import { Container } from '@styles';

const Pagination = ({ data }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringPrev, setHoveringPrev] = useState(false);
  const [hoveringNext, setHoveringNext] = useState(false);

  const mouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <PaginationSection>
      <Container>
        <Row>
          <Col
            onMouseMove={mouseMove}
            onHoverStart={() => setHoveringPrev(true)}
            onHoverEnd={() => setHoveringPrev(false)}>
            <Row>
              <Icon name="left-arrow" />
              <div>
                <BigText>Previous</BigText>
                <BigText>Project</BigText>
              </div>
            </Row>
          </Col>
          <Col
            next
            onMouseMove={mouseMove}
            onHoverStart={() => setHoveringNext(true)}
            onHoverEnd={() => setHoveringNext(false)}>
            <Row>
              <div>
                <BigText>Next</BigText>
                <BigText>Project</BigText>
              </div>
              <Icon name="left-arrow" />
            </Row>
          </Col>
        </Row>
      </Container>
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#___sticky"
        style={{ top: `${position.x}px`, left: `${position.y}px`, position: 'absolute' }}>
        <StyledImage
          src={data.previous.data.cover.url}
          animate={hoveringPrev ? { width: '10vw' } : { width: 0 }}
        />
      </div>
    </PaginationSection>
  );
};

export default Pagination;
