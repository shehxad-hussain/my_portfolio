import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Blog2 } from 'components/blocks/blog';
import { Team6 } from 'components/blocks/team';
import { Hero11 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { FAQ4, FAQ5 } from 'components/blocks/faq';
import { Footer1 } from 'components/blocks/footer';
import { Pricing2 } from 'components/blocks/pricing';
import { About12, About13 } from 'components/blocks/about';
import { Testimonial11 } from 'components/blocks/testimonial';
import { Services14, Services15 } from 'components/blocks/services';
import NextLink from 'components/reuseable/links/NextLink';
import PageProgress from 'components/common/PageProgress';

const Demo11: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo-light"
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          button={<NextLink href="#" title="Free Trial" className="btn btn-sm btn-white rounded-pill" />}
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero11 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== what we do section ========== */}
            <Services14 />

            {/* ========== why choose us section ========== */}
            <About12 />

            {/* ========== our solution section ========== */}
            <Services15 />
          </div>
        </section>

        <section className="wrapper bg-gray">
          <div className="container py-14 pt-md-0 pb-md-16">
            {/* ========== faq section ========== */}
            <FAQ4 />

            {/* ========== case study section ========== */}
            <Blog2 />
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== who are we section ========== */}
            <About13 />

            {/* ========== our team section ========== */}
            <Team6 />
          </div>
        </section>

        <section className="wrapper bg-gray">
          <div className="container py-14 pt-md-0 pb-md-17">
            {/* ========== testimonial section ========== */}
            <Testimonial11 />

            {/* ========== title section ========== */}
            <div className="row text-center">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2 className="fs-15 text-uppercase text-primary mb-3">Our Pricing</h2>
                <h3 className="display-4 mb-10 px-xl-10">
                  We offer great prices, premium products and quality service for your business.
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-11 mx-auto">
                {/* ========== pricing section ========== */}
                <Pricing2 className="mb-10 mb-md-14" />

                {/* ========== faq section ========== */}
                <FAQ5 />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer1 />
    </Fragment>
  );
};

export default Demo11;
