import styled from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@styles';

export const ProjectsSection = styled.div`
  position: relative;
  margin-top: 8vw;

  ${media.tablet`margin-top: 10vw;`};
  ${media.phablet`margin-top: 12vw;`};
`;
export const ProjectWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  transform: translateY(15%);
  opacity: 0;

  :nth-child(odd) {
    text-align: right;
  }

  :not(:first-child) {
    padding-top: 15vw;
  }

  :first-child {
    max-width: 83%;

    ${media.thone`max-width: 100%;`};
  }
`;
export const ProjectTitle = styled.p`
  font-size: 2vw;
  color: var(--dark);
  margin: 0;
  padding-top: 2vw;

  ${media.phablet`font-size: 4vw;`};
`;
