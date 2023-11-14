import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import NextLink from 'components/reuseable/links/NextLink';
import RegisterForm from 'components/elements/forms/RegisterForm';
// -------- data -------- //
const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Sign Up', url: '#' }
];

const Register: NextPage = () => {
  return (
    <Fragment>
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
        {/* ========== title section ========== */}
        <section className="wrapper bg-dark text-white">
          <div className="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 text-white mb-3">Sign Up</h1>
                <Breadcrumb className="text-white" data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        {/* ========== register form section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col mt-n19">
                <div className="card shadow-lg">
                  <div className="row gx-0 text-center">
                    <div
                      className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
                      style={{ backgroundImage: 'url(/img/photos/tm3.jpg)' }}
                    />

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-13">
                        <h2 className="mb-3 text-start">Sign up to Sandbox</h2>
                        <p className="lead mb-6 text-start">Registration takes less than a minute.</p>
                        <RegisterForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Register;
