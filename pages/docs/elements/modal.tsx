import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import Signin from 'components/blocks/navbar/partials/Signin';
import Signup from 'components/blocks/navbar/partials/Signup';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { cookieMarkup, subscriptionMarkup, signinMarkup, signupMarkup } from 'markups/elements/modal';
// -------- data -------- //
const quickAccess = [
  { title: 'Cookie', url: 'snippet-1' },
  { title: 'Subscription', url: 'snippet-2' },
  { title: 'Sign In', url: 'snippet-3' },
  { title: 'Sign Up', url: 'snippet-4' }
];

const Modal: FC = () => {
  return (
    <DocLayout
      pageTitle="Modal"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-10"
      headingColClass="col-md-9 col-lg-7 col-xl-7 mx-auto"
      description={
        <>
          Use Bootstrap’s modal plugin with our custom styles to add dialogs to your site for notifications or
          completely custom content.{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/components/modal/"
            target="_blank"
            rel="noreferrer"
            className="hover more"
          >
            Bootstrap docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Cookie</h2>
        <div className="card">
          <div className="card-body">
            <button
              data-bs-toggle="modal"
              data-bs-target="#modal-01"
              className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
            >
              Cookie
            </button>
            <div className="modal fade modal-bottom-center" id="modal-01" tabIndex={-1}>
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-body p-6">
                    <div className="row">
                      <div className="col-md-12 col-lg-8 mb-4 mb-lg-0 my-auto align-items-center">
                        <h4 className="mb-2">Cookie Policy</h4>
                        <p className="mb-0">
                          We use cookies to personalize content to make our site easier for you to use.
                        </p>
                      </div>

                      <div className="col-md-5 col-lg-4 text-lg-end my-auto">
                        <a href="#" className="btn btn-primary rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                          I Understand
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{cookieMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Subscription</h2>
        <div className="card">
          <div className="card-body">
            <button
              data-bs-toggle="modal"
              data-bs-target="#modal-02"
              className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
            >
              Subscription
            </button>

            <div className="modal fade" id="modal-02" tabIndex={-1}>
              <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content text-center">
                  <div className="modal-body">
                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />

                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <figure className="mb-6">
                          <img src="/img/illustrations/i7.png" srcSet="/img/illustrations/i7@2x.png 2x" alt="" />
                        </figure>
                      </div>
                    </div>

                    <h3>Join the mailing list and get %10 off</h3>

                    <p className="mb-6">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor
                      fringilla.
                    </p>

                    <div className="newsletter-wrapper">
                      <div className="row">
                        <div className="col-md-10 offset-md-1">
                          <div id="mc_embed_signup">
                            <form
                              action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                              method="post"
                              id="mc-embedded-subscribe-form"
                              name="mc-embedded-subscribe-form"
                              className="validate"
                              target="_blank"
                            >
                              <div id="mc_embed_signup_scroll">
                                <div className="mc-field-group input-group form-floating">
                                  <input
                                    type="email"
                                    name="EMAIL"
                                    className="required email form-control"
                                    placeholder="Email Address"
                                    id="mce-EMAIL"
                                  />
                                  <label htmlFor="mce-EMAIL" className="text-start">
                                    Email Address
                                  </label>
                                  <input
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="btn btn-primary"
                                  />
                                </div>
                                <div id="mce-responses" className="clear">
                                  <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                                  <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                                </div>

                                <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
                                  <input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex={-1} />
                                </div>

                                <div className="clear" />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{subscriptionMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Sign In</h2>
        <div className="card">
          <div className="card-body">
            <button
              className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
              data-bs-toggle="modal"
              data-bs-target="#modal-signin"
            >
              Sign In
            </button>

            <Signin />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{signinMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-5">Sign Up</h2>
        <div className="card">
          <div className="card-body">
            <button
              className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
              data-bs-toggle="modal"
              data-bs-target="#modal-signup"
            >
              Sign Up
            </button>

            <Signup />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{signupMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Modal;
