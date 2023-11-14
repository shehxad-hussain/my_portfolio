import { FC } from 'react';
import Pricing2 from './Pricing2';

const Pricing4: FC = () => {
  return (
    <div>
      <div className="wrapper bg-soft-primary">
        <div className="container pt-14 pb-18 pt-md-17 pb-md-22 text-center">
          <div className="row">
            <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
              <h3 className="display-4 mb-15 mb-md-6 px-lg-10">
                We offer great prices, premium products and quality service for your business.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* pricing list section */}
      <div className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <Pricing2 />
        </div>
      </div>
    </div>
  );
};

export default Pricing4;
