import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Contact2 } from 'components/blocks/contact';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';
import NextLink from 'components/reuseable/links/NextLink';

const ContactThree: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-dark text-white">
          <div className="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 text-white mb-3">Get in Touch</h1>
                <p className="lead px-xl-10 px-xxl-10">
                  Have any questions? Reach out to us from our contact form and we will get back to you shortly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light">
          <div className="container pb-14 pb-md-160">
            {/* ========== newsletter section ========== */}
            <div className="row">
              <div className="col mt-n19 mb-16">
                <div className="card shadow-lg">
                  <Contact2 />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-10 mx-auto">
                <div className="row gy-10 gx-lg-8 gx-xl-12">
                  {/* ========== contact form section ========== */}
                  <div className="col-lg-8">
                    <ContactForm />
                  </div>

                  {/* ========== contact info section ========== */}
                  <div className="col-lg-4">
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-location-pin-alt" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">Address</h5>
                        <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
                      </div>
                    </div>

                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-phone-volume" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">Phone</h5>
                        <p>
                          00 (123) 456 78 90 <br />
                          00 (987) 654 32 10
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-envelope" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">E-mail</h5>
                        <p className="mb-0">
                          <a href="mailto:sandbox@email.com" className="link-body">
                            sandbox@email.com
                          </a>
                        </p>
                        <p>
                          <a href="mailto:help@sandbox.com" className="link-body">
                            help@sandbox.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== map section ========== */}
        <section className="wrapper bg-light">
          <div className="map">
            <iframe
              width="100%"
              height={500}
              allowFullScreen
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
            />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ContactThree;
