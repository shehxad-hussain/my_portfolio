import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import { FAQ1 } from 'components/blocks/faq';
import { Hero6 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer4 } from 'components/blocks/footer';
import { Banner1 } from 'components/blocks/banner';
import { Process5 } from 'components/blocks/process';
import { Services7 } from 'components/blocks/services';
import { Testimonial4 } from 'components/blocks/testimonial';

import Alert from 'components/common/Alert';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const Demo6: NextPage = () => {
  // used for lightbox modal
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== alert section ========== */}
      <Alert />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={<NextLink title="Free Trial" href="#" className="btn btn-sm btn-primary rounded" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero6 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== features section ========== */}
            <Services7 />
            {/* ========== how it work section ========== */}
            <Process5 />
          </div>
        </section>

        <section className="wrapper bg-soft-primary">
          <div className="container py-14 pt-md-16 pt-lg-0 pb-md-16">
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <div className="mt-lg-n20 mt-xl-n22 mb-14 mb-md-16 position-relative">
                  <a
                    data-glightbox
                    href="/media/movie.mp4"
                    className="btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 3 }}
                  >
                    <i className="icn-caret-right" />
                  </a>

                  <figure className="rounded shadow">
                    <img src="/img/photos/v1.jpg" srcSet="/img/photos/v1@2x.jpg 2x" alt="" />
                  </figure>
                </div>

                {/* ========== faq section ========== */}
                <FAQ1 />
              </div>
            </div>
          </div>
        </section>

        {/* ========== happy customers section ========== */}
        <Testimonial4 />

        {/* ========== banner section ========== */}
        <Banner1 />
      </main>

      {/* ========== footer section ========== */}
      <Footer4 />
    </Fragment>
  );
};

export default Demo6;
