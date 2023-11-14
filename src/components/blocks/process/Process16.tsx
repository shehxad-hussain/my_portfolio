import { FC } from 'react';
import CountUp from 'react-countup';

const Process16: FC = () => {
  return (
    <div className="row gx-3 gy-10 gy-lg-0 mb-15 mb-md-17 align-items-center">
      <div className="col-lg-5 mx-auto order-lg-2">
        <figure>
          <img className="w-auto" src="/img/illustrations/3d5.png" srcSet="/img/illustrations/3d5@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5 me-auto">
        <h2 className="fs-16 text-uppercase text-grape mb-3">Our Solutions</h2>
        <h3 className="display-4 mb-5 pe-xxl-5">Just sit & relax while we take care of your business needs.</h3>
        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget risus varius blandit sit
          amet non magna. Praesent commodo cursus magna.
        </p>

        <div className="row align-items-center counter-wrapper gy-6">
          <div className="col-md-6">
            <h3 className="counter counter-lg mb-1">
              <CountUp end={99} suffix="%" />
            </h3>
            <h6 className="fs-17 mb-1">Customer Satisfaction</h6>
            <span className="ratings five" />
          </div>

          <div className="col-md-6">
            <h3 className="counter counter-lg mb-1">
              <CountUp end={4} suffix="x" />
            </h3>
            <h6 className="fs-17 mb-1">New Visitors</h6>
            <span className="ratings five" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process16;
