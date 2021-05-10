/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useMemo } from 'react';
import { PaginationSection, Row, Col, BigText } from './style';
import { Icon, CursorContext } from '@components';
import { Container } from '@styles';

const Pagination = ({ data }) => {
  const { setImage } = React.useContext(CursorContext);
  const [hoveringPrev, setHoveringPrev] = useState(false);
  const [hoveringNext, setHoveringNext] = useState(false);

  useMemo(() => {
    if (hoveringPrev)
      setImage({
        hovering: true,
        url: data.previous.data.cover.url,
        alt: data.previous.data.cover.alt && data.previous.data.cover.alt,
      });
    else
      setImage({
        hovering: false,
        url: data.previous.data.cover.url,
        alt: data.previous.data.cover.alt && data.previous.data.cover.alt,
      });
  }, [hoveringPrev]);

  useMemo(() => {
    if (hoveringNext)
      setImage({
        hovering: true,
        url: data.next.data.cover.url,
        alt: data.next.data.cover.alt && data.next.data.cover.alt,
      });
    else
      setImage({
        hovering: false,
        url: data.next.data.cover.url,
        alt: data.next.data.cover.alt && data.next.data.cover.alt,
      });
  }, [hoveringNext]);

  return (
    <PaginationSection>
      <Container>
        <Row>
          <Col to={`/${data.previous.uid}`} id="prev">
            <Row
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
    </PaginationSection>
  );
};

export default Pagination;
