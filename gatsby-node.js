const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicProject {
        nodes {
          id
          uid
        }
      }
    }
  `);

  pages.data.allPrismicProject.nodes.forEach(node => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(__dirname, 'src/templates/project.js'),
      context: { id: node.id },
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
