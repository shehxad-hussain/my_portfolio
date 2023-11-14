import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';

const Hero19: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300"
      style={{ backgroundImage: 'url(/img/photos/bg16.png)' }}
    >
      <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
            <h1 className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0" style={slideInDownAnimate('0ms')}>
              We bring solutions to make life <span className="underline-3 style-2 yellow">easier</span>
            </h1>

            <p className="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10" style={slideInDownAnimate('300ms')}>
              We are a creative company that focuses on long term relationships with customers.
            </p>

            <div style={slideInDownAnimate('600ms')}>
              <button className="btn btn-white rounded mb-10 mb-xxl-5">Read More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero19;
