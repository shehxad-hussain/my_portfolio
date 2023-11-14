import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import { accordions } from 'data/demo-8';

const FAQ3: FC = () => {
  return (
    <div className="card bg-soft-primary rounded-4">
      <div className="card-body p-md-10 p-xl-11">
        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6">
            <h3 className="display-4 mb-4">Frequently Asked Questions</h3>
            <p className="lead fs-lg mb-0">
              If you don't see an answer to your question, you can send us an email from our contact form.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="accordion accordion-wrapper" id="accordionExample">
              {accordions.map((item) => (
                <Accordion type="plain" key={item.no} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ3;
