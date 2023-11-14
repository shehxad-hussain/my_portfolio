import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import { TestimonialCard2 } from 'components/reuseable/testimonial-cards';
// -------- data -------- //
import { testimonialList2 } from 'data/testimonial-list';

const Testimonial5: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-16 pb-14 pb-md-0">
        <div className="row gx-lg-8 gx-xl-0 align-items-center">
          <div className="col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-self-end">
            <div
              className="shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block"
              style={{ top: '7rem', left: '1rem' }}
            />

            <figure>
              <img src="/img/photos/co1.png" srcSet="/img/photos/co1@2x.png 2x" alt="" />
            </figure>
          </div>

          <div className="col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
            <Carousel grabCursor slidesPerView={1} navigation={false} className="dots-start">
              {testimonialList2.map((item, i) => (
                <TestimonialCard2
                  {...item}
                  key={i}
                  blockClassName="icon fs-lg"
                  blockDetailsClassName="blockquote-details"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial5;
