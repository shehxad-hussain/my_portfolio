import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';

const About23: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10">
      <div className="col-lg-7 order-lg-2">
        <figure>
          <img
            alt="choose-us"
            className="w-auto"
            src="/img/illustrations/i12.png"
            srcSet="/img/illustrations/i12@2x.png 2x"
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="fs-16 text-uppercase text-muted mt-xxl-8 mb-3">Why Choose Us?</h3>
        <h3 className="display-4 mb-6">We bring solutions to make life easier for our clients.</h3>
        <AccordionList />
      </div>
    </div>
  );
};

export default About23;
