import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hook -------- //
import useProgressbar from 'hooks/useProgressbar';
// -------- custom component -------- //
import { FAQ3 } from 'components/blocks/faq';
import { Hero8 } from 'components/blocks/hero';
import { Team5 } from 'components/blocks/team';
import { Facts2 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer7 } from 'components/blocks/footer';
import { Pricing5 } from 'components/blocks/pricing';
import { Clients2 } from 'components/blocks/clients';
import { Services11 } from 'components/blocks/services';
import { About10, About9 } from 'components/blocks/about';
import { Testimonial9 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const Demo8: NextPage = () => {
  // used for the animated line
  useProgressbar();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-light pt-1">
        <Navbar
          search
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
        <section className="wrapper bg-light">
          <div className="container">
            {/* ========== hero section ========== */}
            <Hero8 />

            {/* ========== clients section ========== */}
            <Clients2 />

            {/* ========== what are we section ========== */}
            <About9 />

            {/* ========== what we do section ========== */}
            <Services11 />

            {/* ========== testimonial section ========== */}
            <Testimonial9 />

            {/* ========== facts section ========== */}
            <Facts2
              subtitle={
                <Fragment>
                  Just sit back and relax while we <span className="underline">take care</span> of your business needs.
                </Fragment>
              }
            />

            {/* ========== team section ========== */}
            <Team5 />

            {/* ========== awesomeness section ========== */}
            <About10 />

            {/* ========== pricing section ========== */}
            <Pricing5 />

            {/* ========== faq section ========== */}
            <FAQ3 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer7 />
    </Fragment>
  );
};

export default Demo8;
