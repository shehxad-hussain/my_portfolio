import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';

const About1: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img
            alt="choose us"
            className="w-auto"
            src="/img/illustrations/i6.png"
            srcSet="/img/illustrations/i6@2x.png 2x"
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-muted mb-3">Why Choose Us?</h2>
        <h3 className="display-4 mb-7">We bring solutions to make life easier for our clients.</h3>

        <AccordionList />
      </div>
    </div>
  );
};

export default About1;
