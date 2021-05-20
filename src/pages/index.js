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
    allPrismicProject(sort: { fields: first_publication_date }) {
      nodes {
        data {
          title
          alignment
          thumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, quality: 85, placeholder: BLURRED)
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
