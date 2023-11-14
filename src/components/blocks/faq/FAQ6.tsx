import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { accordionList3 } from 'data/faq';

const FAQ6: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-6 pb-14 pb-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6 mb-0">
            <h2 className="fs-16 text-uppercase text-primary mb-4">FAQ</h2>
            <h3 className="display-3 mb-4">
              If you don't see an answer to your question, you can send us an email from our contact form.
            </h3>
            <p className="mb-6">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam
              quis risus eget urna mollis ornare.
            </p>
            <NextLink title="All FAQ" href="#" className="btn btn-primary rounded-pill" />
          </div>

          <div className="col-lg-6">
            <div className="accordion-wrapper" id="accordion">
              {accordionList3.map((item) => (
                <Accordion type="shadow-lg" key={item.no} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-navy mx-n2">
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

export default FAQ6;
