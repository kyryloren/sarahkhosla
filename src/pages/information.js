import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Information from '@views/information';

const InformationPage = ({ data, location }) => {
  const doc = data.allPrismicInformation.edges.slice(0, 1).pop();
  if (!doc) return null;

  return (
    <>
      <Helmet title="Information" />
      <Information data={doc.node.data} state={location.state} />
    </>
  );
};

export default InformationPage;

export const query = graphql`
  {
    allPrismicInformation {
      edges {
        node {
          data {
            headshot {
              url(imgixParams: { q: 100, width: 300 })
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 85)
                }
              }
            }
            description {
              raw
            }
            big_links {
              email
              phone
            }
            links {
              name
              link {
                url
                target
              }
            }
          }
        }
      }
    }
  }
`;
