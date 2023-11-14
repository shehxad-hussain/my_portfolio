import { FC } from 'react';
import { Counter3 } from 'components/reuseable/counter';
// -------- data -------- //
import { factList } from 'data/demo-12';

const Facts8: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 pt-md-17 pb-md-20">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
          <div className="col-lg-4 text-center text-lg-start">
            <h3 className="display-4 mb-3 pe-xl-15">We are proud of our works</h3>
            <p className="lead fs-lg mb-0 pe-xxl-10">We bring solutions to make life easier for our customers.</p>
          </div>

          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {factList.map(({ id, number, title, Icon }) => (
                <Counter3 title={title} number={number} Icon={<Icon />} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts8;
