import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';

const About7: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-15 mb-md-18">
      <div className="col-lg-7 order-lg-2">
        <figure>
          <img className="w-auto" src="/img/illustrations/i17.png" srcSet="/img/illustrations/i17@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mt-xxl-8 mb-3">Why Choose Us?</h3>
        <p className="lead fs-lg lh-sm mb-6">
          Find out everything you need to know about creating a business process model.
        </p>

        <AccordionList />
      </div>
    </div>
  );
};

export default About7;
