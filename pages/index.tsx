import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Hero16  from 'components/blocks/hero/Hero16';
import Navbar  from 'components/blocks/navbar/Navbar';
import Contact10  from 'components/blocks/contact/Contact10';
import Services18 from 'components/blocks/services/Services18';
import Portfolio9 from 'components/blocks/portfolio/Portfolio9';
import PageProgress from 'components/common/PageProgress';

const Demo16: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero16 />

        {/* ========== what i do section ========== */}
        <Services18 />

        {/* ========== latest projects section ========== */}
        <Portfolio9 />

        {/* ========== contact and footer section ========== */}
        <Contact10 />
      </main>
    </Fragment>
  );
};

export default Demo16;

