import { FC } from 'react';
import { TestimonialCard3 } from 'components/reuseable/testimonial-cards';
// -------- custom hook -------- //
import useIsotope from 'hooks/useIsotope';
// -------- data -------- //
import { testimonialList } from 'data/demo-7';

const Testimonial17: FC = () => {
  // used for masonry grid layout
  useIsotope();

  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container pt-12 pt-lg-8 pb-14 pb-md-17">
        <div className="row text-center">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Happy Customers</h2>
            <h3 className="display-3 mb-10 px-xxl-10">
              Don't take our word for it. See what customers are saying about us.
            </h3>
          </div>
        </div>

        <div className="grid">
          <div className="row isotope gy-6">
            {testimonialList.map((item) => (
              <div className="item col-md-6 col-xl-4" key={item.id}>
                <TestimonialCard3 {...item} shadow />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial17;
