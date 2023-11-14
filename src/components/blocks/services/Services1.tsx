import { FC } from 'react';
import { ServiceCard1 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList1 } from 'data/service';

const Services1: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-14 pt-md-16">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase text-muted mb-3">What We Do?</h2>
            <h3 className="display-4 mb-10 px-xl-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="shape rounded-circle bg-soft-blue rellax w-16 h-16"
            style={{ zIndex: 0, right: '-2.2rem', bottom: '-0.5rem' }}
          />

          <div
            className="shape bg-dot primary rellax w-16 h-17"
            style={{ zIndex: 0, top: '-0.5rem', left: '-2.2rem' }}
          />

          <div className="row gx-md-5 gy-5 text-center">
            {serviceList1.map((item) => (
              <ServiceCard1
                key={item.id}
                Icon={item.icon}
                title={item.title}
                linkUrl={item.link}
                linkType={item.linkType}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
