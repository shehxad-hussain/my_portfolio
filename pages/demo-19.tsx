import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hooks -------- //
import useLightBox from 'hooks/useLightBox';
import useProgressbar from 'hooks/useProgressbar';
// -------- custom component -------- //
import { Hero19 } from 'components/blocks/hero';
import { About20 } from 'components/blocks/about';
import { Facts13 } from 'components/blocks/facts';
import { Navbar3 } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import { CTA8 } from 'components/blocks/call-to-action';
import { Portfolio10 } from 'components/blocks/portfolio';
import { Testimonial16 } from 'components/blocks/testimonial';
import { Services21, Services22 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress';

const Demo19: NextPage = () => {
  // lighbox hook called
  useLightBox();
  // used for the animated line
  useProgressbar();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar3 logoAlt="logo-dark" stickyBox={false} />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero19 />

        <section className="wrapper bg-light">
          <div className="container pb-15 pb-md-17">
            {/* ========== services section ========== */}
            <Services21 />

            {/* ========== why choose sandbox section ========== */}
            <Services22 />
          </div>
        </section>

        {/* ========== what makes section ========== */}
        <Facts13 />

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== testimonial section ========== */}
            <Testimonial16 />

            {/* ========== latest project section ========== */}
            <Portfolio10 />

            {/* ========== what make us section ========== */}
            <About20 />
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <CTA8 />
      </main>

      {/* ========== footer section ========== */}
      <Footer11 />
    </Fragment>
  );
};

export default Demo19;
