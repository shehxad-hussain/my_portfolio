import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero5 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer6 } from 'components/blocks/footer';
import { Pricing4 } from 'components/blocks/pricing';
import { Clients1 } from 'components/blocks/clients';
import { Process4 } from 'components/blocks/process';
import { Services6 } from 'components/blocks/services';
import { CTA2 } from 'components/blocks/call-to-action';
import { Testimonial7 } from 'components/blocks/testimonial';
import { Tiles6, Tiles7, Tiles8, Tiles9 } from 'components/elements/tiles';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const Demo5: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo"
          button={
            <div className="d-flex align-items-center gap-3">
              <a className="nav-link" data-bs-toggle="modal" data-bs-target="#modal-signin">
                Sign In
              </a>
              <button className="btn btn-sm btn-primary rounded" data-bs-toggle="modal" data-bs-target="#modal-signup">
                Sign Up
              </button>
            </div>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero5 />

        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16 mb-lg-21 mb-xl-23">
            <Tiles6 />

            {/* ========== service-1 section ========== */}
            <Services6
              bulletColor="red"
              colOne={<Tiles7 />}
              rowClassNames="mb-14 mb-md-18"
              title="We have considered our solutions to support every stage of growth."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />

            {/* ========== service-2 section ========== */}
            <Services6
              colOne={<Tiles8 />}
              bulletColor="green"
              rowClassNames="mb-14 mb-md-18"
              title="We make spending stress free so you have the perfect control."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />

            {/* ========== service-3 section ========== */}
            <Services6
              colOne={<Tiles9 />}
              bulletColor="yellow"
              title="We bring solutions to manage your finance the way works best."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />
          </div>
        </section>

        {/* ========== our process section ========== */}
        <Process4 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== testimonial section ========== */}
            <Testimonial7 />

            {/* ========== clients section ========== */}
            <div className="px-lg-5">
              <Clients1 />
            </div>
          </div>
        </section>

        {/* ========== pricing section ========== */}
        <Pricing4 />

        {/* ========== call to action section ========== */}
        <CTA2 />
      </main>

      {/* ========== footer section ========== */}
      <Footer6 />
    </Fragment>
  );
};

export default Demo5;
