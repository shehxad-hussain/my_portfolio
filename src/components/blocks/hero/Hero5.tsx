import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero5: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-15 pt-md-14 pb-md-20 text-center">
        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto mb-13">
            <h1 className="display-1 mb-4" style={slideInDownAnimate('0ms')}>
              Staying on top of your bills never been this easy
            </h1>

            <p className="lead fs-lg px-xl-12 px-xxl-6 mb-7" style={slideInDownAnimate('300ms')}>
              Easily achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.
            </p>

            <div className="d-flex justify-content-center" style={slideInDownAnimate('600ms')}>
              <span style={slideInDownAnimate('900ms')}>
                <NextLink href="#" title="Get Started" className="btn btn-primary rounded mx-1" />
              </span>

              <span style={slideInDownAnimate('1200ms')}>
                <NextLink href="#" title="Free Trial" className="btn btn-green rounded mx-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
