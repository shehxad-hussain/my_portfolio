import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Blog6 } from 'components/blocks/blog';
import { Hero25 } from 'components/blocks/hero';
import { About26 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer16 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const Demo25: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" social />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        <section className="wrapper bg-gray">
          <div className="container pt-10 pb-14 pb-md-16">
            {/* ========== hero section ========== */}
            <Hero25 />

            {/* ========== about me section ========== */}
            <About26 />

            {/* ========== blog conent and sidebar section ========== */}
            <Blog6 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer16 />
    </Fragment>
  );
};

export default Demo25;
