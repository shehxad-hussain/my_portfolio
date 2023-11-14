import { FC } from 'react';
import { TestimonialCard6 } from 'components/reuseable/testimonial-cards';
// -------- data -------- //
import { testimonialList4 } from 'data/testimonial-list';

const Testimonial14: FC = () => {
  return (
    <div className="grid mb-18">
      <div className="row isotope gy-6 mt-n18">
        {testimonialList4.map((item) => (
          <div className="item col-md-6 col-xl-3" key={item.id}>
            <TestimonialCard6 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial14;
