import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { StaticQuery, graphql } from 'gatsby';
import { Head, SmoothScroll, Nav, Footer, Loader, Cursor, CursorProvider } from '@components';
import { GlobalStyle, Transition } from '@styles';

const Layout = ({ children, location }) => {
  const infoPage = location.pathname === '/information' || location.pathname === '/information/';
  const [loaded, setLoaded] = useState(false);

  // We reset the overflow style on the body
  // because we are sitting it to none when the menu opens
  // This is a hacky way to reset the overflow on page change
  useEffect(() => {
    document.body.style.overflow = 'unset';
  }, [location]);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={site => (
        <>
          <Head metadata={site.site.siteMetadata} />
          <SmoothScroll callbacks={location} />

          <CursorProvider>
            <Cursor location={location} loaded={loaded} />
            <GlobalStyle />

            <AnimatePresence>
              <motion.main id="___container">
                {loaded ? (
                  <>
                    {infoPage && (
                      <Transition
                        key={location.pathname}
                        initial={{ height: 0 }}
                        animate={{ height: ['0vh', '100vh', '100vh', '0vh'] }}
                        transition={{ ease: 'easeInOut', duration: 0.8, times: [0, 0.7, 0.8, 1] }}
                      />
                    )}
                    <AnimatePresence>
                      <motion.div
                        id="___sticky"
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.3, delay: 0.2, when: 'beforeChildren' },
                        }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}>
                        {!infoPage && <Nav location={location} />}
                        {children}
                        {!infoPage && <Footer />}
                      </motion.div>
                    </AnimatePresence>
                  </>
                ) : (
                  <Loader setLoaded={setLoaded} />
                )}
              </motion.main>
            </AnimatePresence>
          </CursorProvider>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
