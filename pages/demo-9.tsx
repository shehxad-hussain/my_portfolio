import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { FAQ2 } from 'components/blocks/faq';
import { Hero9 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Clients3 } from 'components/blocks/clients';
import { Pricing6 } from 'components/blocks/pricing';
import { Process9 } from 'components/blocks/process';
import { Services12 } from 'components/blocks/services';
import { Testimonial10 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const Demo9: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#modal-signin"
              className="btn btn-sm btn-primary rounded-pill"
            >
              Sign In
            </a>
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero9 />

        <section className="wrapper bg-light">
          <div className="container py-14 pt-md-17 pb-md-25">
            {/* ========== clients section ========== */}
            <Clients3 />

            {/* ========== why choose section ========== */}
            <Services12 />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        <Testimonial10 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== how it works section ========== */}
            <Process9 />

            {/* ========== pricing section ========== */}
            <Pricing6 />
          </div>
        </section>

        {/* ========== faq section ========== */}
        <FAQ2 titleColor="muted" />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo9;
