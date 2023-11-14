import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import NextLink from 'components/reuseable/links/NextLink';
import LoginForm from 'components/elements/forms/LoginForm';
// -------- data -------- //
const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Sign In', url: '#' }
];

const Login: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          stickyBox={false}
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-light-600 text-white"
          style={{ backgroundImage: 'url(/img/photos/bg18.png)' }}
        >
          <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3">Sign In</h1>
                <Breadcrumb data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        {/* ========== login section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
                <div className="card">
                  <div className="card-body p-11 text-center">
                    <LoginForm />
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

export default Login;
