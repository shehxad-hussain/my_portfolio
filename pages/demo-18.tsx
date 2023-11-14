import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hook -------- //
import useProgressbar from 'hooks/useProgressbar';
// -------- custom component -------- //
import { Blog4 } from 'components/blocks/blog';
import { Hero18 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Facts12 } from 'components/blocks/facts';
import { Footer11 } from 'components/blocks/footer';
import { Contact11 } from 'components/blocks/contact';
import { Services20 } from 'components/blocks/services';
import { CTA7 } from 'components/blocks/call-to-action';
import { Testimonial15 } from 'components/blocks/testimonial';
import { About17, About18, About19 } from 'components/blocks/about';
import PageProgress from 'components/common/PageProgress';

const Demo18: NextPage = () => {
  // used for the animated line
  useProgressbar();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero18 />

        <section className="wrapper bg-light">
          <div className="container pt-14 pt-md-17 pb-14 pb-md-18">
            {/* ========== what we do section ========== */}
            <Services20 />

            {/* ========== have perfect section ========== */}
            <About17 />

            {/* ========== what makes section ========== */}
            <About18 />
          </div>
        </section>

        <section className="wrapper bg-light">
          {/* ========== facts section ========== */}
          <Facts12 />

          <div className="container">
            {/* ========== testimonial section ========== */}
            <Testimonial15 />

            {/* ========== case study section ========== */}
            <Blog4 />

            {/* ========== who are we section ========== */}
            <About19 />

            {/* ========== contact section ========== */}
            <Contact11 />
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <CTA7 />
      </main>

      {/* ========== footer section ========== */}
      <Footer11 />
    </Fragment>
  );
};

export default Demo18;
