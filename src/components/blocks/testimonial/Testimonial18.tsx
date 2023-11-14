import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { testimonialList6 } from 'data/testimonial-list';

const Testimonial18: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay text-white"
      style={{ backgroundImage: 'url(/img/photos/bg32.jpg)' }}
    >
      <div className="container py-14 py-md-17 text-center">
        <i className="icn-flower text-white fs-30 opacity-50" />
        <div className="row mt-3">
          <div className="col-xl-9 col-xxl-8 mx-auto">
            <Carousel navigation={false} slidesPerView={1} className="dots-light dots-closer">
              {testimonialList6.map(({ id, name, review }) => (
                <blockquote className="border-0 fs-24 mb-0" key={id}>
                  <p>“{review}”</p>
                  <div className="blockquote-details justify-content-center">
                    <div className="info p-0">
                      <h6 className="mb-0 text-white">{name}</h6>
                    </div>
                  </div>
                </blockquote>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial18;
