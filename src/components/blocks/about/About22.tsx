import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';

const About22: FC = () => {
  return (
    <section className="wrapper bg-gradient-reverse-primary">
      <div className="container pb-14 pb-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img
                alt=""
                className="img-auto"
                src="/img/illustrations/i22.png"
                srcSet="/img/illustrations/i22@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-15 text-uppercase text-primary mb-3">Why Choose Us?</h2>
            <h3 className="display-3 mb-7">We bring solutions to make life easier.</h3>
            <AccordionList />
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-light mx-n2">
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

export default About22;
