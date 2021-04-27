import React from 'react';
import { graphql } from 'gatsby';
import { Projects } from '@views/home';

const HomePage = ({ data }) => {
  const docs = data.allPrismicProject.nodes;
  if (!docs) return null;

  return <Projects data={docs} />;
};

export default HomePage;

export const query = graphql`
  {
    allPrismicProject {
      nodes {
        data {
          title
          thumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            alt
          }
        }
        uid
      }
    }
  }
`;
