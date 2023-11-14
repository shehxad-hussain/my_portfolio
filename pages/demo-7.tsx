import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero7 } from 'components/blocks/hero';
import { Facts6 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer3 } from 'components/blocks/footer';
import { Services10 } from 'components/blocks/services';
import { About7, About8 } from 'components/blocks/about';
import { Portfolio2 } from 'components/blocks/portfolio';
import { Testimonial8 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const Demo7: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          fancy
          social
          logoAlt="logo-purple"
          navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero7 />

        <section className="wrapper bg-light">
          <div className="container">
            {/* ========== what we do section ========== */}
            <Services10 />

            {/* ========== join our community section ========== */}
            <Facts6 />
          </div>

          {/* ========== our recent project section ========== */}
          <Portfolio2 />
        </section>

        <section className="wrapper bg-light">
          <div className="container pb-8 pb-lg-10">
            {/* ========== have perfect section ========== */}
            <About8 />

            {/* ========== why choose us section ========== */}
            <About7 />

            {/* ========== happy customer section ========== */}
            <Testimonial8 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer3 />
    </Fragment>
  );
};

export default Demo7;
