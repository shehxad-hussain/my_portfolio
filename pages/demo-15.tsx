import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Team3 } from 'components/blocks/team';
import { Hero15 } from 'components/blocks/hero';
import { About6 } from 'components/blocks/about';
import { Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer9 } from 'components/blocks/footer';
import { Process7 } from 'components/blocks/process';
import { Contact7 } from 'components/blocks/contact';
import { CTA5 } from 'components/blocks/call-to-action';
import { Testimonial5 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const Demo15: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          info
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero sections ========== */}
        <Hero15 />

        <section className="wrapper bg-light angled lower-end">
          <div className="container py-14 py-md-16">
            {/* ========== about section ========== */}
            <About6 />

            {/* ========== process section ========== */}
            <Process7 />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        <Testimonial5 />

        {/* ========== team section ========== */}
        <Team3 />

        {/* ========== facts section ========== */}
        <Facts5 />

        {/* ========== contact section ========== */}
        <Contact7 />

        {/* ========== call to action section ========== */}
        <CTA5 />
      </main>

      {/* ========== footer section ========== */}
      <Footer9 />
    </Fragment>
  );
};

export default Demo15;
