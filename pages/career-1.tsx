import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hook -------- //
import useIsotope from 'hooks/useIsotope';
// -------- custom component -------- //
import { FAQ2 } from 'components/blocks/faq';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { JobPostCard1 } from 'components/reuseable/job-cards';
import { ServiceCard3 } from 'components/reuseable/service-cards';
import { TestimonialCard3 } from 'components/reuseable/testimonial-cards';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import data from 'data/career-page-1';

const Career: NextPage = () => {
  // used for masonry layout design
  useIsotope();

  return (
    <Fragment>
      <PageProgress />
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-18 pb-md-20 pt-md-14 pb-lg-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto mb-11">
                <h1 className="fs-15 text-uppercase text-primary mb-3">Join Our Team</h1>
                <h3 className="display-1">We bring solutions to make life easier for our customers.</h3>
              </div>
            </div>
          </div>
        </section>

        {/* ========== features section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-23 pb-md-25">
            <div className="row mb-14">
              <div className="col-12 mt-n18 mt-md-n20 mt-lg-n21 position-relative">
                <div className="shape bg-dot red rellax w-16 h-18" style={{ top: '1rem', left: '-3.2rem' }} />
                <div className="shape pale-primary w-19 h-19 rellax" style={{ bottom: '2rem', right: '-3rem' }}>
                  <svg
                    viewBox="0 0 500 549.53"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-inject icon-svg w-100 h-100"
                  >
                    <path
                      className="svg-fill"
                      d="M250 549.39c-15.51 0-30.05-3.46-40.94-9.75l-168-97C18.5 429.63.14 397.82.14 371.75v-194c0-26.07 18.36-57.88 40.94-70.91l168-97C220 3.6 234.49.14 250 .14s30.05 3.46 40.94 9.75l168 97c22.58 13 40.94 44.84 40.94 70.91v194c0 26.07-18.36 57.88-40.94 70.91l-168 97c-10.89 6.22-25.43 9.68-40.94 9.68z"
                    />
                  </svg>
                </div>

                <figure className="rounded">
                  <img src="/img/photos/about18.jpg" srcSet="/img/photos/about18@2x.jpg 2x" alt="" />
                </figure>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-8">
              {data.facilities.map(({ Icon, id, ...item }) => (
                <div className="col-md-6 col-lg-4" key={id}>
                  <ServiceCard3 {...item} Icon={<Icon className="icon-svg-sm solid-mono text-primary me-4" />} />
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <NextLink title="Join Our Team" href="#" className="btn btn-primary rounded-pill" />
            </div>
          </div>
        </section>

        {/* ========== team section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container py-14 py-md-17">
            <div className="row mt-md-n25 position-relative">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
                <h1 className="fs-15 text-uppercase text-primary mb-3">Happy Team</h1>
                <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">
                  Dont take our word for it. See what our team members say about us.
                </h3>
              </div>
            </div>

            <div className="grid">
              <div className="row isotope gy-6">
                {data.testimonialList.map((item) => (
                  <div className="item col-md-6 col-xl-4" key={item.id}>
                    <TestimonialCard3 {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== job position section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row text-center">
              <div className="col-xl-10 mx-auto">
                <h1 className="fs-15 text-uppercase text-primary mb-3">Job Positions</h1>
                <h3 className="display-4 mb-10 px-xxl-15">
                  We’re always searching for amazing people to join our team. Take a look at our current openings.
                </h3>
              </div>
            </div>

            <div className="row gy-6">
              {data.jobList.map((item) => (
                <JobPostCard1 {...item} key={item.id} />
              ))}
            </div>

            <div className="row mt-11">
              <div className="col-lg-6 col-xl-5 mx-auto text-center">
                <h2 className="display-6 mb-3">Can&apos;t find the right position?</h2>
                <p className="lead mb-5 px-md-16 px-lg-3">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur.
                </p>

                <NextLink title="Get in Touch" href="#" className="btn btn-primary rounded-pill" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== faq section ========== */}
        <FAQ2 titleColor="primary" />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Career;
