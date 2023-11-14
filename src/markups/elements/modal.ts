const cookieMarkup = `<button
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
            <button className="btn btn-primary rounded-pill" data-bs-dismiss="modal" aria-label="Close">
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const subscriptionMarkup = `<button
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
`;

const signinMarkup = `import Signin from 'components/blocks/navbar/partials/Signin';
  
<button
  className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
  data-bs-toggle="modal"
  data-bs-target="#modal-signin"
>
  Sign In
</button>

<Signin />
`;

const signupMarkup = `import Signup from 'components/blocks/navbar/partials/Signup';
  
<button
  className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
  data-bs-toggle="modal"
  data-bs-target="#modal-signup"
>
  Sign Up
</button>

<Signup />
`;

export { cookieMarkup, subscriptionMarkup, signinMarkup, signupMarkup };
