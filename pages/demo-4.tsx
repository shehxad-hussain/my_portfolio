import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero4 } from 'components/blocks/hero';
import { Team4 } from 'components/blocks/team';
import { About4 } from 'components/blocks/about';
import { Facts2 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer2 } from 'components/blocks/footer';
import { Banner3 } from 'components/blocks/banner';
import { Clients1 } from 'components/blocks/clients';
import { Services5 } from 'components/blocks/services';
import { Testimonial3 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const Demo4: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper mb-1">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero4 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-18">
            {/* ========== services section ========== */}
            <Services5 />

            <hr className="my-14 my-md-17" />

            {/* ========== about us section ========== */}
            <About4 />
          </div>
        </section>

        {/* ========== video banner section ========== */}
        <Banner3 />

        <section className="wrapper bg-light position-relative">
          <div className="container py-14 py-md-16">
            {/* ========== facts section ========== */}
            <Facts2 />

            {/* ========== team section ========== */}
            <Team4 />

            <hr className="mt-15 mt-md-18 mb-14 mb-md-17" />

            {/* ========== testimonial section ========== */}
            <Testimonial3 />

            {/* ========== clients section ========== */}
            <div className="px-lg-5 mb-16 mb-md-22">
              <Clients1 />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer2 />
    </Fragment>
  );
};

export default Demo4;
