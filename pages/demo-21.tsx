import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { FAQ6 } from 'components/blocks/faq';
import { Team4 } from 'components/blocks/team';
import { Hero21 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { About22 } from 'components/blocks/about';
import { Facts15 } from 'components/blocks/facts';
import { Footer13 } from 'components/blocks/footer';
import { Process14 } from 'components/blocks/process';
import { Services24 } from 'components/blocks/services';
import { Portfolio3 } from 'components/blocks/portfolio';
import { Testimonial17 } from 'components/blocks/testimonial';
import NextLink from 'components/reuseable/links/NextLink';
import PageProgress from 'components/common/PageProgress';

const Demo21: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={<NextLink href="#" title="Contact" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero21 />

        {/* ========== services section ========== */}
        <Services24 />

        {/* ========== our strategy section ========== */}
        <Process14 />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
            {/* ========== company facts section ========== */}
            <Facts15 />

            {/* ========== team section ========== */}
            <Team4 />
          </div>

          {/* ========== projects section ========== */}
          <Portfolio3 />

          {/* ========== customer section ========== */}
          <Testimonial17 />

          {/* ========== faq section ========== */}
          <FAQ6 />
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
};

export default Demo21;
