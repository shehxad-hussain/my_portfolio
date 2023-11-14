import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero14 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { About15 } from 'components/blocks/about';
import { Facts10 } from 'components/blocks/facts';
import { Footer1 } from 'components/blocks/footer';
import { Contact9 } from 'components/blocks/contact';
import { Process11 } from 'components/blocks/process';
import { Services17 } from 'components/blocks/services';
import { Portfolio8 } from 'components/blocks/portfolio';
import { Testimonial14 } from 'components/blocks/testimonial';
import NextLink from 'components/reuseable/links/NextLink';
import PageProgress from 'components/common/PageProgress';

const Demo14: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero14 />

        {/* ========== what we do section ========== */}
        <Services17 />

        {/* ========== our community section ========== */}
        <Contact9 />

        {/* ========== projects section ========== */}
        <Portfolio8 />

        {/* ========== facts section ========== */}
        <Facts10 />

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-17">
            {/* ========== testimonial section ========== */}
            <Testimonial14 />

            {/* ========== process section ========== */}
            <Process11 />

            {/* ========== why choose us section ========== */}
            <About15 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer1 />
    </Fragment>
  );
};

export default Demo14;
