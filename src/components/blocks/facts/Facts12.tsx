import { FC } from 'react';
import CountUp from 'react-countup';
import TargetTwo from 'icons/solid-duo/TargetTwo';
import BarChartTwo from 'icons/solid-duo/BarChartTwo';
import EmployeesTwo from 'icons/solid-duo/EmployeesTwo';

const Facts12: FC = () => {
  return (
    <div className="container-card">
      <div
        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 pb-15"
        style={{ backgroundImage: 'url(/img/photos/bg22.png)' }}
      >
        <div className="card-body py-14 px-0">
          <div className="container">
            <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
              <div className="col-lg-4 text-center text-lg-start">
                <h3 className="display-4 mb-3 pe-xxl-15">We are proud of our works</h3>
                <p className="lead fs-lg mb-0 pe-xxl-10">We bring solutions to make life easier for our customers.</p>
              </div>

              <div className="col-lg-8 mt-lg-2">
                <div className="row align-items-center counter-wrapper gy-6 text-center">
                  <div className="col-md-4">
                    <TargetTwo />
                    <h3 className="counter">
                      <CountUp end={1000} suffix="+" />
                    </h3>
                    <p className="mb-0">Completed Projects</p>
                  </div>

                  <div className="col-md-4">
                    <BarChartTwo />
                    <h3 className="counter">
                      <CountUp end={4} suffix="x" />
                    </h3>
                    <p className="mb-0">Revenue Growth</p>
                  </div>

                  <div className="col-md-4">
                    <EmployeesTwo />
                    <h3 className="counter">
                      <CountUp end={99.7} suffix="%" />
                    </h3>
                    <p className="mb-0">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts12;
