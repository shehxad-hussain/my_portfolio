import { FC } from 'react';
import { Counter1 } from 'components/reuseable/counter';

const Facts1: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 pt-md-17 pb-md-21">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 align-items-end">
          <div className="col-lg-4">
            <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Company Facts</h2>
            <h3 className="display-4 mb-0 pe-xxl-15">We are proud of our works</h3>
          </div>

          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              <Counter1 title="Completed Projects" number={1000} />
              <Counter1 title="Happy Clients" number={500} />
              <Counter1 title="Awards Won" number={150} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts1;
