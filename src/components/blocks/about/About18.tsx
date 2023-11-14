import { FC } from 'react';
import CountUp from 'react-countup';
import CloudGroup from 'icons/solid-duo/CloudGroup';

const About18: FC = () => {
  return (
    <div className="row gx-md-8 gy-10 align-items-center">
      <div className="col-lg-6 offset-lg-1 order-lg-2 position-relative">
        <figure className="rounded">
          <img className="img-fluid" src="/img/photos/about27.jpg" srcSet="/img/photos/about27@2x.jpg 2x" alt="" />
        </figure>

        <div className="card shadow-lg position-absolute d-none d-md-block" style={{ top: '15%', left: '-7%' }}>
          <div className="card-body py-4 px-5">
            <div className="d-flex flex-row align-items-center">
              <div>
                <CloudGroup />
              </div>
              <div>
                <h3 className="fs-25 counter mb-0 text-nowrap">
                  <CountUp end={25000} suffix="+" />
                </h3>
                <p className="fs-16 lh-sm mb-0 text-nowrap">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card shadow-lg position-absolute text-center d-none d-md-block"
          style={{ bottom: '10%', left: '-10%' }}
        >
          <div className="card-body p-6">
            <div className="progressbar semi-circle fuchsia mb-3" data-value="80" />
            <h4 className="mb-0">Time Saved</h4>
          </div>
        </div>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">What Makes Us Different?</h2>
        <h3 className="display-4 mb-4 me-lg-n5">We make spending stress free so you have the perfect control.</h3>
        <p className="mb-6">
          Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus. Integer posuere erat a
          ante venenatis dapibus posuere velit.
        </p>
        <ul className="icon-list bullet-bg bullet-soft-primary">
          <li>
            <i className="uil uil-check" />
            Aenean eu leo quam. Pellentesque ornare.
          </li>
          <li>
            <i className="uil uil-check" />
            Nullam quis risus eget urna mollis ornare.
          </li>
          <li>
            <i className="uil uil-check" />
            Donec id elit non mi porta gravida at eget.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About18;
