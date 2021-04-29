const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicProject(sort: { fields: first_publication_date }) {
        nodes {
          id
          uid
        }
      }
    }
  `);

  const allPages = await graphql(`
    {
      allPrismicProject(sort: { fields: first_publication_date }) {
        edges {
          node {
            uid
            data {
              cover {
                url
                alt
              }
            }
          }
        }
      }
    }
  `);

  pages.data.allPrismicProject.nodes.forEach(node => {
    function getPagination(projects, currentProject) {
      let elements = [];

      projects.forEach((project, index) => {
        const isThisPage = project.node.uid === currentProject.uid;

        if (isThisPage) {
          const next = index + 1 === projects.length ? projects[0].node : projects[index + 1].node;
          const previous =
            index === 0 ? projects[projects.length - 1].node : projects[index - 1].node;

          elements.push({ next, previous });
        }
      });

      return elements;
    }

    let paginationObject = getPagination(allPages.data.allPrismicProject.edges, node);

    createPage({
      path: `/${node.uid}`,
      component: path.resolve(__dirname, 'src/templates/project.js'),
      context: {
        id: node.id,
        pagination: paginationObject
      },
    });
  });
};

//www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
https: exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@views': path.resolve(__dirname, 'src/views'),
      },
    },
  });

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
