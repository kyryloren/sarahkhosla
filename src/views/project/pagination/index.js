import React, { useState } from 'react';
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
          <Col to={`/${data.previous.uid}`} id="prev">
            <Row
              onMouseMove={mouseMove}
              onHoverStart={() => setHoveringPrev(true)}
              onHoverEnd={() => setHoveringPrev(false)}>
              <Icon name="left-arrow" />
              <div>
                <BigText>Previous</BigText>
                <BigText>Project</BigText>
              </div>
            </Row>
          </Col>
          <Col next to={`/${data.next.uid}`} id="next">
            <Row
              onMouseMove={mouseMove}
              onHoverStart={() => setHoveringNext(true)}
              onHoverEnd={() => setHoveringNext(false)}>
              <div>
                <BigText>Next</BigText>
                <BigText>Project</BigText>
              </div>
              <Icon name="left-arrow" />
            </Row>
          </Col>
        </Row>
      </Container>
      <div style={{ top: `${position.y - 400}px`, left: `${position.x}px`, position: 'absolute' }}>
        <StyledImage
          src={data.previous.data.cover.url}
          alt={data.previous.data.cover.alt && data.previous.data.cover.alt}
          animate={hoveringPrev ? { opacity: 1 } : { opacity: 0 }}
        />
      </div>
      <div style={{ top: `${position.y - 400}px`, left: `${position.x}px`, position: 'absolute' }}>
        <StyledImage
          src={data.next.data.cover.url}
          alt={data.next.data.cover.alt && data.next.data.cover.alt}
          animate={hoveringNext ? { opacity: 1 } : { opacity: 0 }}
        />
      </div>
    </PaginationSection>
  );
};

export default Pagination;
