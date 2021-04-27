import React from 'react';
import Project from '@views/project';
import { graphql } from 'gatsby';

const ProjectPage = ({ data }) => {
  const doc = data.allPrismicProject.edges.slice(0, 1).pop();
  if (!doc) return null;

  return <Project data={doc.node.data} />;
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
                  gatsbyImageData(layout: FULL_WIDTH)
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
                        gatsbyImageData(layout: FULL_WIDTH)
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
                        gatsbyImageData(layout: FULL_WIDTH)
                      }
                    }
                    alt
                  }
                  right_image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                      }
                    }
                    alt
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