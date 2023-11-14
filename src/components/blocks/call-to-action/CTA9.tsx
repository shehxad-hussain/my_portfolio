import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const CTA9: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay text-white"
      style={{ backgroundImage: 'url(/img/photos/bg33.jpg)' }}
    >
      <div className="container py-14 py-md-17 text-center">
        <div className="row">
          <div className="col-xl-10 col-xxl-8 mx-auto text-center">
            <i className="icn-flower text-white fs-30 opacity-50" />
            <h2 className="display-4 text-white mt-2 mb-7">
              I'm here to capture your moments. Looking for a caring, fun, passionate photographer?
            </h2>
            <NextLink title="Contact Me" href="#" className="btn btn-white rounded-pill mb-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA9;
