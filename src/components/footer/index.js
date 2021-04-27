import React from 'react';
import { Icon } from '@components';
import { FooterWrapper, Row, Col, Year, FooterLink, MobileCol, InformationLink } from './style';
import { Container } from '@styles';

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <Year>&copy; {currentYear}</Year>
          </Col>
          <Col right>
            <Row>
              <Row>
                <Icon name="arrow" />
                <FooterLink>LinkedIn</FooterLink>
              </Row>
              <Row>
                <Icon name="arrow" />
                <FooterLink>Instagram</FooterLink>
              </Row>
              <Row>
                <Icon name="arrow" />
                <FooterLink>Mail</FooterLink>
              </Row>
            </Row>
          </Col>
          <MobileCol>
            <Row>
              <Icon name="arrow" />
              <InformationLink>Information</InformationLink>
            </Row>
          </MobileCol>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
