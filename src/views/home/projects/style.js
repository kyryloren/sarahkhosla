import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, mixins } from '@styles';

export const ProjectsSection = styled.div`
  position: relative;
  margin-top: 8vw;

  ${media.tablet`margin-top: 10vw;`};
  ${media.phablet`margin-top: 12vw;`};
`;
export const ProjectWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.alignment ? 'right' : 'left')};
  transform: translateY(15%);
  opacity: 0;

  :not(:first-child) {
    margin-top: 15vw;
  }

  :first-child {
    max-width: 83%;

    ${media.thone`max-width: 100%;`};
  }
`;
export const ProjectTitle = styled.p`
  ${mixins.normalText};
  color: var(--dark);
  margin-top: 1vw;
  ${props => props.ml && `margin-left: 15.1vw;`};
`;
