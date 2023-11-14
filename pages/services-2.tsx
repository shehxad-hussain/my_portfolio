import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { About5 } from 'components/blocks/about';
import { Facts4 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Pricing2 } from 'components/blocks/pricing';
import { Process4 } from 'components/blocks/process';
import { Services9 } from 'components/blocks/services';
import ListColumn from 'components/reuseable/ListColumn';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';

const ServicesTwo: NextPage = () => {
  const list = [
    ['Aenean quam ornare. Curabitur blandit.', 'Nullam quis risus eget urna mollis ornare.'],
    ['Etiam porta euismod malesuada mollis.', 'Vivamus sagittis lacus vel augue rutrum.']
  ];

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white"
          style={{ backgroundImage: 'url(/img/photos/bg1.jpg)' }}
        >
          <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h1 className="display-1 text-white mb-3">Our Services</h1>
                <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                  We are a creative company that focuses on establishing long-term relationships with customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== what we do section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-14 pb-12 pt-md-16 pb-md-14">
            <Services9 />
          </div>
        </section>

        {/* ========== our process section ========== */}
        <Process4 />

        {/* ========== about section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center">
              <About5 />
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7 order-lg-2">
                <figure>
                  <img
                    alt=""
                    className="w-auto"
                    src="/img/illustrations/i7.png"
                    srcSet="/img/illustrations/i7@2x.png 2x"
                  />
                </figure>
              </div>

              <div className="col-lg-5">
                <h3 className="display-4 mb-5">
                  We make your spending stress-free for you to have the perfect control.
                </h3>

                <p className="mb-6">
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </p>

                <ListColumn list={list} />
              </div>
            </div>
          </div>
        </section>

        {/* ========== pricing title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-14 pb-18 pt-md-16 pb-md-22 text-center">
            <div className="row">
              <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
                <h2 className="fs-15 text-uppercase text-muted mb-3">Our Pricing</h2>
                <h3 className="display-4 mb-15 mb-md-6 px-lg-10">
                  We offer great prices, premium products and quality service for your business.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ========== pricing section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <Pricing2 />
          </div>
        </section>

        {/* ========== facts section ========== */}
        <Facts4 />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ServicesTwo;
