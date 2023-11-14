import { FC } from 'react';
import { Counter1 } from 'components/reuseable/counter';
// -------- data -------- //
import { factList5 } from 'data/facts';

const Facts10: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 pt-md-17 pb-md-19">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 align-items-center">
          <div className="col-lg-4 text-center text-lg-start">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Company Facts</h2>
            <h3 className="display-4 mb-3 pe-xxl-15">We are proud of our projects</h3>
          </div>

          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {factList5.map(({ id, title, amount }) => (
                <Counter1 title={title} number={amount} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts10;
