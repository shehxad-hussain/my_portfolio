import { FC, useEffect, useState } from 'react';

const NewsletterModal: FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      id="modal-02"
      tabIndex={-1}
      role={show ? 'dialog' : undefined}
      aria-modal="true"
      className={`modal fade modal-popup ${show ? 'show' : ''}`}
      style={show ? { display: 'block', paddingLeft: 0 } : { display: 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content text-center">
          <div className="modal-body">
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShow(false)} />

            <div className="row">
              <div className="col-md-10 offset-md-1">
                <figure className="mb-6">
                  <img src="/img/illustrations/i7.png" srcSet="/img/illustrations/i7@2x.png 2x" alt="" />
                </figure>
              </div>
            </div>

            <h3>Join the mailing list and get %10 off</h3>

            <p className="mb-6">
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
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
                          <label htmlFor="mce-EMAIL">Email Address</label>
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
  );
};

export default NewsletterModal;
