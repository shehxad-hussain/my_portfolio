import { FC } from 'react';
import CountUp from 'react-countup';
// -------- data -------- //
import { countList } from 'data/demo-7';

const Facts6: FC = () => {
  return (
    <div className="row gx-lg-0 gy-10 align-items-center mb-15 mb-lg-18">
      <div className="col-lg-6 order-lg-2 offset-lg-1">
        <div className="row gx-md-5 gy-5 align-items-center counter-wrapper">
          {countList.map(({ id, icon, title, amount, color }) => (
            <div className="col-md-6" key={id}>
              <div className="card shadow-lg">
                <div className="card-body">
                  <div className="d-flex d-lg-block d-xl-flex flex-row">
                    <div>
                      <div className={`icon btn btn-circle btn-lg ${color} pe-none mx-auto me-4 mb-lg-3 mb-xl-0`}>
                        <i className={`uil ${icon}`} />
                      </div>
                    </div>

                    <div>
                      <h3 className="counter mb-1">
                        <CountUp end={amount} />
                      </h3>
                      <p className="mb-0">{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-5">
        <h2 className="display-4 mb-3">Join Our Community</h2>
        <p className="lead fs-lg lh-sm">
          We have considered our business solutions to support you on every stage of your growth.
        </p>
        <p className="mb-0">
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </div>
    </div>
  );
};

export default Facts6;
