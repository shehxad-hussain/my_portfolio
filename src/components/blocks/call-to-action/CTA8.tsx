import { FC } from 'react';

const CTA8: FC = () => {
  return (
    <div className="container">
      <div
        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14"
        style={{ backgroundImage: 'url(/img/photos/bg16.png)' }}
      >
        <div className="card-body p-10 p-xl-12">
          <div className="row text-center">
            <div className="col-xl-11 col-xxl-9 mx-auto">
              <h2 className="fs-16 text-uppercase text-white mb-3">Join Our Community</h2>
              <h3 className="display-3 mb-8 px-lg-8 text-white">
                We are <span className="underline-3 style-2 yellow">trusted</span> by over 5000+ clients. Join them now
                and grow your business.
              </h3>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <span>
              <a className="btn btn-white rounded">Get Started</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA8;
