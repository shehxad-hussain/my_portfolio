import { FC } from 'react';

const Facts13: FC = () => {
  return (
    <section className="wrapper bg-gray">
      <div className="container py-15 py-md-17 pb-md-19">
        <div className="row align-items-center gy-8 mb-13">
          <div className="col-lg-7 text-center text-lg-start">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Save Time and Money</h2>
            <h3 className="display-3 mb-0 pe-xl-10 pe-xxl-15">
              Save your time and money by choosing our <span className="underline-3 style-2 yellow">professional</span>{' '}
              team.
            </h3>
          </div>

          <div className="col-lg-5">
            <div className="row gy-6 text-center">
              <div className="col-md-6">
                <div className="progressbar semi-circle fuchsia" data-value="95" />
                <h4 className="mb-0">Customer Satisfaction</h4>
              </div>

              <div className="col-md-6">
                <div className="progressbar semi-circle orange" data-value="80" />
                <h4 className="mb-0">Increased Revenue</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts13;
