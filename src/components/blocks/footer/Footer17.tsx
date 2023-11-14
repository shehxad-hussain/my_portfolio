import { FC } from 'react';
// -------- custom component -------- //
import IconBox from 'components/reuseable/IconBox';
import SocialLinks from 'components/reuseable/SocialLinks';

const Footer17: FC = () => {
  return (
    <footer className="bg-white">
      <div className="container pt-8 pt-md-10 pb-7">
        <div className="row gx-lg-0 gy-6">
          <div className="col-lg-4">
            <div className="widget">
              <img className="mb-4" src="/img/logo-dark.png" srcSet="/img/logo-dark@2x.png 2x" alt="" />
              <p className="lead mb-0">
                We are trusted by over 5000+ clients. Join them by using our services and grow your business.
              </p>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-2">
            <div className="widget">
              <div className="d-flex flex-row">
                <IconBox icon="uil-phone-volume" className="icon text-primary fs-28 me-4 mt-n1" />

                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p className="mb-0">
                    00 (123) 456 78 90 <br />
                    00 (987) 654 32 10
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <div className="d-flex flex-row">
                <IconBox icon="uil-location-pin-alt" className="icon text-primary fs-28 me-4 mt-n1" />
                <div className="align-self-start justify-content-start">
                  <h5 className="mb-1">Address</h5>
                  <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-13 mt-md-14 mb-7" />

        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2022 Sandbox. All rights reserved.</p>
          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div>
      </div>
    </footer>
  );
};

export default Footer17;
