import React from 'react';
import { Helmet } from 'react-helmet';

import Project from '@views/project';
import { graphql } from 'gatsby';

const ProjectPage = ({ data, pageContext }) => {
  const doc = data.allPrismicProject.edges.slice(0, 1).pop();
  if (!doc) return null;

  return (
    <>
      <Helmet title={doc.node.data.title} />
      <Project data={doc.node.data} pagination={pageContext.pagination[0]} />
    </>
  );
};

export default ProjectPage;

export const query = graphql`
  query project($id: String) {
    allPrismicProject(filter: { id: { eq: $id } }) {
      edges {
        node {
          data {
            title
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 85)
                }
              }
              url
              alt
            }
            body {
              __typename
              ... on PrismicProjectBodyInformation {
                items {
                  title
                }
                primary {
                  description {
                    raw
                  }
                }
              }
              __typename
              ... on PrismicProjectBodyFullImage {
                primary {
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
                      }
                    }
                    alt
                  }
                }
              }
              __typename
              ... on PrismicProjectBodyHalfImage {
                primary {
                  left_image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
                      }
                    }
                    alt
                  }
                  right_image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
                      }
                    }
                    alt
                  }
                }
              }
              __typename
              ... on PrismicProjectBodyVideo {
                primary {
                  video {
                    url
                  }
                  gif {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
