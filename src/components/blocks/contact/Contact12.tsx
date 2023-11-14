import { FC } from 'react';

const Contact12: FC = () => {
  return (
    <section id="pricing">
      <div
        className="wrapper image-wrapper bg-image bg-overlay"
        style={{ backgroundImage: 'url(/img/photos/bg36.jpg)' }}
      >
        <div className="container py-15 py-md-17">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="card border-0 bg-white-900">
                <div className="card-body py-lg-13 px-lg-16">
                  <h2 className="display-5 mb-3 text-center">Request Photography Pricing</h2>
                  <p className="lead fs-lg text-center mb-10">
                    For more information please get in touch using the form below:
                  </p>
                  <form className="contact-form needs-validation" method="post" noValidate>
                    <div className="messages"></div>
                    <div className="row gx-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            required
                            type="text"
                            name="name"
                            id="form_name"
                            placeholder="Name"
                            className="form-control bg-white-700 border-0"
                          />
                          <label htmlFor="form_name">Name *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter your name.</div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            required
                            type="email"
                            name="email"
                            id="form_email"
                            placeholder="jane.doe@example.com"
                            className="form-control bg-white-700 border-0"
                          />
                          <label htmlFor="form_email">Email *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please provide a valid email address.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <textarea
                            required
                            name="message"
                            id="form_message"
                            placeholder="Your message"
                            className="form-control bg-white-700 border-0"
                            style={{ height: 150 }}
                          />
                          <label htmlFor="form_message">Message *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter your messsage.</div>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <input type="submit" className="btn btn-primary rounded-pill btn-send" value="Send message" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact12;
