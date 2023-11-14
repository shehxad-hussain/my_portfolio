import { FC } from 'react';

const CTA6: FC = () => {
  return (
    <div
      className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map"
      style={{ backgroundImage: 'url(/img/map.png)' }}
    >
      <div className="container py-md-16 py-lg-18">
        <div className="row">
          <div className="col-xl-11 col-xxl-9 mx-auto">
            <h3 className="display-4 mb-8 px-lg-8">
              We are trusted by over 5000+ clients. Join them now and grow your business.
            </h3>
          </div>

          <div className="d-flex justify-content-center">
            <span>
              <a className="btn btn-primary rounded-pill">Get Started</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA6;
