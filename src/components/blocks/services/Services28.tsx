import { FC, Fragment } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import data from 'data/demo-26';

const Services27: FC = () => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
          <h2 className="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
          <h3 className="display-4 mb-9">
            The full service we are offering is specifically designed to meet your business needs.
          </h3>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 mb-15 mb-md-17 text-center">
        {data.serviceList.map(({ id, Icon, title, description, url }) => (
          <div className="col-md-6 col-lg-3" key={id}>
            <div className="px-md-3 px-lg-0 px-xl-3">
              <Icon />
              <h4>{title}</h4>
              <p className="mb-2">{description}</p>
              <NextLink title="Learn More" href={url} className="more hover" />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Services27;
