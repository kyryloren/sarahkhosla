import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from '@components';
import { FooterWrapper, Row, Col, Year, FooterLink, MobileCol, InformationLink } from './style';
import { Container } from '@styles';

const Footer = () => {
  const query = useStaticQuery(graphql`
    query {
      allPrismicInformation {
        edges {
          node {
            data {
              footer {
                link {
                  url
                  target
                }
                text
              }
            }
          }
        }
      }
    }
  `);
  let currentYear = new Date().getFullYear();
  const doc = query.allPrismicInformation.edges.slice(0, 1).pop();
  const data = doc.node.data;

  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <Year>&copy; {currentYear}</Year>
          </Col>
          <Col right>
            <Row>
              {data.footer.map((data, index) => (
                <Row>
                  <Icon name="arrow" />
                  <FooterLink
                    href={data.link.url && data.link.url}
                    target={data.link.target}
                    rel="noopener noreferrer">
                    {data.text}
                  </FooterLink>
                </Row>
              ))}
              <Row>
                <Icon name="arrow" />
                <FooterLink
                  href="mailto:hello@sarahkhosla.com"
                  target="_blank"
                  rel="noopener” “noreferrer">
                  Mail
                </FooterLink>
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
