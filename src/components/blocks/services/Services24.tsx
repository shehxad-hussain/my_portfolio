import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { serviceList12 } from 'data/service';

const Services24: FC = () => {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container pt-12 pt-lg-8 pb-14 pb-md-17">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
            <h3 className="display-3 mb-10 px-xxl-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end">
          {serviceList12.map(({ id, image, title, description }) => (
            <div className="col-lg-4" key={id}>
              <div className="px-md-15 px-lg-3">
                <figure className="mb-6">
                  <img className="img-fluid" src={image['1x']} srcSet={image['2x']} alt="" />
                </figure>
                <h3>{title}</h3>
                <p className="mb-2">{description}</p>
                <NextLink title="Learn More" href="#" className="more hover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services24;
