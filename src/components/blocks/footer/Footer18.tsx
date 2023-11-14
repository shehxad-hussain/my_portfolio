import { FC } from 'react';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- data -------- //
import footerNav from 'data/footer';

const Footer18: FC = () => {
  return (
    <footer className="bg-gray">
      <div className="container py-13 py-md-15">
        <div className="d-lg-flex flex-row align-items-lg-center">
          <h3 className="display-3 ls-sm mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25">
            Join our community by using our services and grow your business.
          </h3>

          <NextLink title="Try It For Free" href="#" className="btn btn-lg btn-primary rounded mb-0 text-nowrap" />
        </div>

        <hr className="mt-11 mb-12" />
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img className="mb-4" src="/img/logo-dark.png" srcSet="/img/logo-dark@2x.png 2x" alt="" />

              <p className="mb-4">
                © 2022 Sandbox. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>

              <SocialLinks className="nav social social-muted" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title ls-sm mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">Moonshine St. 14/05 Light City, London, United Kingdom</address>
              <a href="mailto:#" className="link-body">
                info@email.com
              </a>
              <br /> 00 (123) 456 78 90
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title ls-sm mb-3">Learn More</h4>
              <ul className="list-unstyled text-reset mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-lg-3">
            <div className="widget">
              <h4 className="widget-title ls-sm mb-3">Our Newsletter</h4>
              <p className="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
              <div className="newsletter-wrapper">
                <div id="mc_embed_signup2">
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    className="validate "
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div className="mc-field-group input-group form-floating">
                        <input
                          type="email"
                          name="EMAIL"
                          id="mce-EMAIL2"
                          placeholder="Email Address"
                          className="required email form-control"
                        />
                        <label htmlFor="mce-EMAIL2">Email Address</label>

                        <input
                          type="submit"
                          value="Join"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-primary"
                        />
                      </div>

                      {/* <div id="mce-responses2" class="clear">
                    <div class="response" id="mce-error-response2" style="display:none"></div>
                    <div class="response" id="mce-success-response2" style="display:none"></div>
                  </div> 

                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value=""></div>
                  <div class="clear"></div> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer18;
