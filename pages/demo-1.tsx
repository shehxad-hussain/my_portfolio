import { Fragment } from 'react';
import type { NextPage } from 'next';
// -------- custom component -------- //
import { Team1 } from 'components/blocks/team';
import { Hero1 } from 'components/blocks/hero';
import { About1 } from 'components/blocks/about';
import { Footer1 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import { Pricing1 } from 'components/blocks/pricing';
import { Clients1 } from 'components/blocks/clients';
import { Process1 } from 'components/blocks/process';
import { Contact4 } from 'components/blocks/contact';
import { CTA1 } from 'components/blocks/call-to-action';
import { Testimonial1 } from 'components/blocks/testimonial';
import { Services1, Services2 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress';

const Demo1: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar info language />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero1 />

        {/* ========== what we do section ========== */}
        <Services1 />

        {/* ========== call to action section ========== */}
        <CTA1 />

        {/* ========== our strategy and why choose us section ========== */}
        <section className="wrapper bg-light angled upper-start lower-start">
          <div className="container py-14 pt-md-17 pb-md-15">
            <Process1 />
            <About1 />
          </div>
        </section>

        {/* ========== our team section ========== */}
        <Team1 />

        {/* ========== our solution section ========== */}
        <Services2 />

        {/* ========== testimonial section ========== */}
        <Testimonial1 />

        {/* ========== pricing, contact and clients section ========== */}
        <section className="wrapper bg-light angled upper-end lower-end">
          <div className="container py-14 pt-md-14 pb-md-18">
            <Pricing1 dottedShape />
            <Contact4 />
            <div className="px-lg-5">
              <Clients1 />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer1 />
    </Fragment>
  );
};

export default Demo1;
