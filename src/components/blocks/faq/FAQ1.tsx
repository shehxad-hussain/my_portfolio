import { FC, Fragment } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import { accordionList1 } from 'data/faq';

const FAQ1: FC = () => {
  return (
    <Fragment>
      <h2 className="fs-15 text-uppercase text-muted mb-3 text-center">FAQ</h2>
      <h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">
        If you don't see an answer to your question, you can send us an email from our contact form.
      </h3>

      <div className="accordion-wrapper" id="accordion">
        <div className="row">
          {accordionList1.map((items, i) => {
            return (
              <div className="col-md-6" key={i}>
                {items.map((item) => (
                  <Accordion key={item.no} {...item} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default FAQ1;
