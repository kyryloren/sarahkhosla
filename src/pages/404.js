import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Icon } from '@components';
import { Container, mixins, media } from '@styles';

const PageWrapper = styled.div`
  width: 100vw;
  color: var(--dark);
`;
const ContentWrapper = styled.div`
  ${mixins.flexCenter};
  text-align: center;
  flex-direction: column;
  height: 65vh;
`;
const Title = styled.h1`
  font-size: 35vw;
  line-height: 85%;
  font-family: var(--font-family-serif);
  font-weight: 400;
  margin: 0;
  white-space: nowrap;

  ${media.tablet`font-size: 45vw;`};
`;
const CaptionWrapper = styled.div`
  max-width: 40%;
  margin-top: 2vw;
  font-size: 1.75vw;

  ${media.tablet`
    font-size: 3vw;
    max-width: 80%;
`};
  ${media.phablet`font-size: 5vw;`};
`;
const Caption = styled.p`
  font-size: inherit;
`;
const LinkWrapper = styled.div`
  ${mixins.flexCenter};

  svg {
    width: 1.4vw;
    height: 1.4vw;
    margin-right: 1vw;

    ${media.tablet`
      width: 2.5vw;
      height: 2.5vw;
      margin-right: 2vw;
    `};
    ${media.phablet`
      width: 4.5vw;
      height: 4.5vw;
    `};
  }
`;
const StyledLink = styled(Link)`
  position: relative;
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  ${mixins.animLine};
`;

const PageNotFound = () => {
  return (
    <>
      <Helmet title="Page not found" />
      <PageWrapper>
        <Container>
          <ContentWrapper>
            <Title>404</Title>
            <CaptionWrapper>
              <Caption>
                Either the internet is broken or we couldn't find the file that you were looking
                for.
              </Caption>
              <LinkWrapper>
                <Icon name="arrow" />
                <StyledLink to="/">Go home</StyledLink>
              </LinkWrapper>
            </CaptionWrapper>
          </ContentWrapper>
        </Container>
      </PageWrapper>
    </>
  );
};

export default PageNotFound;
