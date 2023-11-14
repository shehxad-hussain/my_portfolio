import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Topbar from 'components/elements/Topbar';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { Hero10 } from 'components/blocks/hero';
import { Facts7 } from 'components/blocks/facts';
import { About11 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Contact5 } from 'components/blocks/contact';
import { Clients1 } from 'components/blocks/clients';
import { Tiles8, Tiles9 } from 'components/elements/tiles';
import { Services13, Services6 } from 'components/blocks/services';
import { TestimonialCard4 } from 'components/reuseable/testimonial-cards';

const Demo10: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== topbar ========== */}
      <Topbar bgColor="bg-navy" />

      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />} />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero10 />

        {/* ========== services section ========== */}
        <Services13 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            <Services6
              rowClassNames="mb-14 mb-md-17"
              colOne={<Tiles8 hiddenShape />}
              title="We make spending stress free so you have the perfect control."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />

            <Services6
              colOne={<Tiles9 hiddenShape />}
              title="We bring solutions to manage your finance the way works best."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />
          </div>
        </section>

        {/* ========== fact section ========== */}
        <Facts7 />

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== testimonial section ========== */}
            <TestimonialCard4 className="mt-n18 mt-md-n23 mb-14 mb-md-18" />

            {/* ========== about section ========== */}
            <About11 />

            {/* ========== contact section ========== */}
            <Contact5 />

            {/* ========== clients section ========== */}
            <div className="px-lg-5">
              <Clients1 />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo10;
