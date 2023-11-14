import { FC } from 'react';
import Puzzle from 'icons/lineal/Puzzle';

const CTA5: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16 text-center">
        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
            <Puzzle />

            <h2 className="display-4 mb-3">Join Our Community</h2>
            <p className="lead fs-lg mb-6 px-xl-10 px-xxl-15">
              We are trusted by over 5000+ clients. Join them by using our services and grow your business.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-4 mx-auto">
            <div className="newsletter-wrapper">
              <div id="mc_embed_signup2">
                <form
                  action=""
                  method="post"
                  target="_blank"
                  className="validate"
                  id="mc-embedded-subscribe-form2"
                  name="mc-embedded-subscribe-form"
                >
                  <div id="mc_embed_signup_scroll2">
                    <div className="mc-field-group input-group form-floating">
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL2"
                        autoComplete="off"
                        placeholder="Email Address"
                        className="required email form-control"
                      />
                      <label htmlFor="mce-EMAIL2" className="text-start">
                        Email Address
                      </label>

                      <input
                        type="submit"
                        value="Join"
                        name="subscribe"
                        id="mc-embedded-subscribe2"
                        className="btn btn-primary"
                      />
                    </div>

                    <div id="mce-responses2" className="clear">
                      <div className="response" id="mce-error-response2" style={{ display: 'none' }} />
                      <div className="response" id="mce-success-response2" style={{ display: 'none' }} />
                    </div>

                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
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
    </section>
  );
};

export default CTA5;
