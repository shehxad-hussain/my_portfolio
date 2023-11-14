import { FC, Fragment } from 'react';
import IconBox from 'components/reuseable/IconBox';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { serviceList9 } from 'data/service';

const Services19: FC = () => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 className="display-4 mb-9">The service we offer is specifically designed to meet your needs.</h3>
        </div>
      </div>

      <div className="row gx-md-8 gx-xl-12 gy-8 mb-14 mb-md-16 text-center">
        {serviceList9.map(({ id, description, icon, linkUrl, title, color }) => (
          <div className="col-md-4" key={id}>
            <IconBox className={`icon btn btn-block btn-lg btn-soft-${color} pe-none mb-5`} icon={icon} />
            <h4>{title}</h4>
            <p className="mb-3">{description}</p>
            <NextLink title="Learn More" href={linkUrl} className={`more hover link-${color}`} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Services19;
