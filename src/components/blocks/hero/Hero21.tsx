import { FC } from 'react';
import useReplaceMe from 'hooks/useReplaceMe';
// -------- data -------- //
import { clientList } from 'data/client';

const Hero21: FC = () => {
  // enable the text rotator animation
  useReplaceMe();

  return (
    <section className="wrapper bg-light">
      <div className="container pt-10 pt-md-14 pb-14 pb-md-16 text-center">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-xl-0 mb-14 align-items-center">
          <div className="col-lg-7 order-lg-2">
            <figure>
              <img
                alt="demo"
                className="img-auto"
                src="/img/illustrations/i21.png"
                srcSet="/img/illustrations/i21@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
            <h1 className="display-1 fs-54 mb-5 mx-md-n5 mx-lg-0 mt-7">
              A digital agency <br className="d-md-none" />
              specializing on <br className="d-md-none" />
              <span className="rotator-fade text-primary">mobile design,web design,3D animation</span>
            </h1>

            <p className="lead fs-lg mb-7">
              We are an award winning design agency that strongly believes in the power of creative ideas.
            </p>

            <span>
              <a className="btn btn-lg btn-primary rounded-pill me-2">Get Started</a>
            </span>
          </div>
        </div>

        <p className="text-center mb-8">Trusted by over 2K+ clients across the world</p>
        <div className="row row-cols-4 row-cols-md-4 row-cols-lg-7 row-cols-xl-7 gy-10 mb-2 d-flex align-items-center justify-content-center">
          {clientList.map((item) => (
            <div className="col" key={item}>
              <img className="img-fluid px-md-3 px-lg-0 px-xl-2 px-xxl-5" src={item} alt="client" />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-soft-primary mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero21;
