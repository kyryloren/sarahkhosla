import styled from 'styled-components';
import { Overflow, media } from '@styles';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const StyledTitle = styled.h1`
  font-size: 17.6vw;
  line-height: 85%;
  font-family: var(--font-family-serif);
  color: var(--dark);
  font-weight: 400;
  margin: 0;
  white-space: nowrap;

  ${media.phablet`font-size: 16.9vw;`};
`;
export const Letter = styled.span`
  display: inline-block;
`;
export const StyledOverflow = styled(Overflow)`
  display: inline-block;
`;
