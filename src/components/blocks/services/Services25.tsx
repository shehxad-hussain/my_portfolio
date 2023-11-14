import { FC, Fragment } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { serviceList13 } from 'data/service';

const Services25: FC = () => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 mx-auto">
          <h2 className="fs-16 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 className="display-4 mb-10 px-xxl-10">
            The full service we are offering is specifically designed to meet your needs.
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-11 mx-auto">
          <div className="row gx-lg-8 gx-xl-12 gy-11 text-center d-flex align-items-end">
            {serviceList13.map(({ id, description, icon, linkUrl, title, color }) => (
              <div className="col-sm-8 col-md-6 col-lg-4 mx-auto" key={id}>
                <div className="px-md-3 px-lg-0 px-xl-3">
                  <div className={`icon btn btn-block btn-lg btn-soft-${color} pe-none mb-5`}>
                    <i className={`uil ${icon}`} />
                  </div>
                  <h3 className="fs-22">{title}</h3>
                  <p className="mb-2">{description}</p>
                  <NextLink title="Learn More" href={linkUrl} className={`more hover link-${color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services25;
