import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero12 } from 'components/blocks/hero';
import { Facts8 } from 'components/blocks/facts';
import { About14 } from 'components/blocks/about';
import { Navbar2 } from 'components/blocks/navbar';
import { Footer4 } from 'components/blocks/footer';
import { Contact6 } from 'components/blocks/contact';
import { Process10 } from 'components/blocks/process';
import { Services16 } from 'components/blocks/services';
import { Portfolio6 } from 'components/blocks/portfolio';
import { Testimonial12 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const Demo12: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar2 />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero sections ========== */}
        <Hero12 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16 pb-md-17">
            {/* ========== services section ========== */}
            <Services16 />

            {/* ========== process section ========== */}
            <Process10 />

            {/* ========== why choose us section ========== */}
            <About14 />
          </div>
        </section>

        {/* ========== facts section ========== */}
        <Facts8 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16 pb-md-17">
            {/* ========== testimonial section ========== */}
            <Testimonial12 />

            {/* ========== projects section ========== */}
            <Portfolio6 />
          </div>
        </section>

        {/* ========== contact section ========== */}
        <Contact6 />
      </main>

      {/* ========== footer section ========== */}
      <Footer4 />
    </Fragment>
  );
};

export default Demo12;
