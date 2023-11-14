import { FC } from 'react';
import { Counter1 } from 'components/reuseable/counter';
// -------- data -------- //
import { factList5 } from 'data/facts';

const Facts11: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11 align-items-end">
      <div className="col-lg-4">
        <h2 className="fs-15 text-uppercase text-muted mb-3">Company Facts</h2>
        <h3 className="display-4 mb-0">We are proud of our works</h3>
      </div>

      <div className="col-lg-8 mt-lg-2">
        <div className="row align-items-center counter-wrapper gy-6 text-center">
          {factList5.map(({ id, title, amount }) => (
            <Counter1 key={id} number={amount} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts11;
