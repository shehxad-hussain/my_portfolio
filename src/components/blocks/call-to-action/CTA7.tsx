import { FC } from 'react';

const CTA7: FC = () => {
  return (
    <div className="container-card">
      <div
        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mb-14"
        style={{ backgroundImage: 'url(/img/photos/bg22.png)' }}
      >
        <div className="card-body py-14 px-0">
          <div className="container">
            <div className="row text-center">
              <div className="col-xl-11 col-xxl-9 mx-auto">
                <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Join Our Community</h2>
                <h3 className="display-4 mb-7 px-lg-17">
                  We are trusted by over 5000+ clients. Join them now and grow your business.
                </h3>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <span>
                <a className="btn btn-lg btn-gradient gradient-1 rounded">Get Started</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA7;
