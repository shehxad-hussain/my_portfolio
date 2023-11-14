import { FC } from 'react';
import Email from 'icons/lineal/Email';
import SocialLinks from 'components/reuseable/SocialLinks';

const Contact10: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="card bg-soft-primary mb-8">
          <div className="card-body p-12">
            <div className="row gx-md-8 gx-xl-12 gy-10">
              <div className="col-lg-6">
                <Email />
                <h2 className="display-4 mb-3 pe-lg-10">If you like what you see, let's work together.</h2>
                <p className="lead pe-lg-12 mb-0">
                  I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me
                  from this contact form and I will get back to you shortly.
                </p>
              </div>

              <div className="col-lg-6">
                <form className="contact-form needs-validation">
                  <div className="messages"></div>
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="text"
                          name="name"
                          id="frm_name"
                          placeholder="Jane"
                          className="form-control border-0"
                          data-error="First Name is required."
                        />

                        <label htmlFor="frm_name">Name *</label>
                        <div className="invalid-feedback">Please enter your name.</div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="email"
                          name="email"
                          id="frm_email"
                          className="form-control border-0"
                          placeholder="jane.doe@example.com"
                          data-error="Valid email is required."
                        />

                        <label htmlFor="frm_email">Email *</label>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide a valid email address.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea
                          required
                          name="message"
                          id="frm_message"
                          placeholder="Your message"
                          className="form-control border-0"
                          style={{ height: 150 }}
                        />

                        <label htmlFor="frm_message">Message *</label>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please enter your messsage.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <input
                        type="submit"
                        value="Send message"
                        className="btn btn-outline-primary rounded-pill btn-send mb-3"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2022 Sandbox. All rights reserved.</p>
          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div>
      </div>
    </section>
  );
};

export default Contact10;
