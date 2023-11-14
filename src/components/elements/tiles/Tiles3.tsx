import { FC } from 'react';
import CountUp from 'react-countup';

const Tiles3: FC = () => {
  return (
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <figure className="rounded mt-md-10 position-relative">
          <img src="/img/photos/g5.jpg" srcSet="/img/photos/g5@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-12 order-md-2">
            <figure className="rounded">
              <img src="/img/photos/g6.jpg" srcSet="/img/photos/g6@2x.jpg 2x" alt="" />
            </figure>
          </div>

          <div className="col-md-10">
            <div className="card bg-pale-primary text-center">
              <div className="card-body py-11 counter-wrapper">
                <h3 className="counter text-nowrap">
                  <CountUp end={5000} suffix="+" />
                </h3>

                <p className="mb-0">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles3;
