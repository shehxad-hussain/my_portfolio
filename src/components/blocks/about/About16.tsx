import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';

const About16: FC = () => {
  return (
    <div className="row gy-10 gx-lg-8 gx-xl-12 mb-14 mb-md-16 align-items-center">
      <div className="col-md-8 col-lg-6">
        <figure className="rounded">
          <img src="/img/photos/about25.jpg" srcSet="/img/photos/about25@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-6">
        <h2 className="fs-15 text-uppercase text-muted mb-3">Why Choose Us?</h2>
        <h3 className="display-4 mb-7">We bring solutions to make life easier for our clients.</h3>
        <AccordionList />
      </div>
    </div>
  );
};

export default About16;
