import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { TestimonialCard1 } from 'components/reuseable/testimonial-cards';
// -------- data -------- //
import { testimonialList1 } from 'data/testimonial-list';

const Testimonial1: FC = () => {
  return (
    <section className="wrapper bg-gradient-reverse-primary">
      <div className="container py-14 py-md-18">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <div className="row gx-md-5 gy-5">
              {testimonialList1.map((item, i) => (
                <div className={`col-md-6 ${item.columnClasses}`} key={i}>
                  <TestimonialCard1 {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3 mt-lg-n6">Our Community</h2>
            <h3 className="display-4 mb-5">Don't take our word for it. See what customers are saying about us.</h3>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Vestibulum
              id ligula porta felis euismod.
            </p>
            <NextLink href="#" title="All Testimonials" className="btn btn-primary rounded-pill mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;
