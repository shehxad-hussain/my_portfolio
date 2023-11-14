import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const CTA2: FC = () => {
  return (
    <section
      style={{ backgroundImage: 'url(/img/map.png)' }}
      className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map"
    >
      <div className="container pt-0 pb-14 pt-md-18 pb-md-18">
        <div className="row">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
            <h3 className="display-4 mb-8 px-lg-12">
              We are trusted by over 5000+ clients. Join them now and grow your business.
            </h3>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <NextLink href="#" title="Get Started" className="btn btn-primary rounded mx-1" />
          <NextLink href="#" title="Free Trial" className="btn btn-green rounded mx-1" />
        </div>
      </div>
    </section>
  );
};

export default CTA2;
