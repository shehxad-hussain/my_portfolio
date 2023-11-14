import { FC } from 'react';

const CTA3: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-auto no-overlay bg-image text-center mb-14 mb-md-16 bg-map"
      style={{ backgroundImage: 'url(/img/map.png)' }}
    >
      <div className="container py-md-18">
        <div className="row">
          <div className="col-lg-6 col-xl-5 mx-auto">
            <h2 className="display-4 mb-3 text-center">Join Our Community</h2>
            <p className="lead mb-5 px-md-16 px-lg-3">
              We are trusted by over 5000+ clients. Join them by using our services and grow your business.
            </p>
            <a href="#" className="btn btn-primary rounded-pill">
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA3;
