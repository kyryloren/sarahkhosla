import React from 'react';
import { graphql } from 'gatsby';

import Information from '@views/information';

const InformationPage = ({ data, location }) => {
  const doc = data.allPrismicInformation.edges.slice(0, 1).pop();
  if (!doc) return null;

  return <Information data={doc.node.data} state={location.state} />;
};

export default InformationPage;

export const query = graphql`
  {
    allPrismicInformation {
      edges {
        node {
          data {
            headshot {
              url
              alt
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
