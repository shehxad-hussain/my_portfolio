import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';

const About3: FC = () => {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
      <div className="col-md-8 col-lg-6 offset-lg-1 order-lg-2 position-relative">
        <div
          className="shape rounded-circle bg-line primary rellax w-18 h-18"
          style={{ top: '-2rem', right: '-1.9rem' }}
        />

        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', left: '-1.5rem', bottom: '-1.8rem' }}
        />

        <figure className="rounded">
          <img src="/img/photos/about9.jpg" srcSet="/img/photos/about9@2x.jpg 2x" alt="about" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Why Choose Us?</h2>
        <h3 className="display-4 mb-7">A few reasons why our valued customers choose us.</h3>
        <AccordionList />
      </div>
    </div>
  );
};

export default About3;
