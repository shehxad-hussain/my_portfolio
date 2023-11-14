import { FC, Fragment } from 'react';
import { ServiceCard2 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList3 } from 'data/service';

const Services4: FC = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="fs-16 text-uppercase text-line text-primary mb-3">What We Do?</h2>
          <h3 className="display-4 mb-9">The service we offer is specifically designed to meet your needs.</h3>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 mb-14 mb-md-18">
        {serviceList3.map((item) => (
          <ServiceCard2
            {...item}
            key={item.id}
            iconBoxClassNames="icon btn btn-block btn-lg btn-soft-primary pe-none mb-6"
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Services4;
