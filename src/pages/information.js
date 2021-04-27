import React from 'react';
import Div100vh from 'react-div-100vh';
import { graphql } from 'gatsby';

import Information from '@views/information';

const InformationPage = ({ data, location }) => {
  const doc = data.allPrismicInformation.edges.slice(0, 1).pop();
  if (!doc) return null;

  return (
    <Div100vh>
      <Information data={doc.node.data} state={location.state} />
    </Div100vh>
  );
};

export default InformationPage;

export const query = graphql`
  {
    allPrismicInformation {
      edges {
        node {
          data {
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
