import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import FigureImage from 'components/reuseable/FigureImage';
// -------- data -------- //
import { testimonialList3 } from 'data/testimonial-list';

const Testimonial13: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
      style={{ backgroundImage: 'url(/img/photos/bg2.jpg)' }}
    >
      <div className="container py-14 py-md-17">
        <h2 className="display-4 mb-5 text-white text-center">Happy Customers</h2>
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <Carousel slidesPerView={1} navigation={false} className="dots-light dots-closer text-center" grabCursor>
              {testimonialList3.map(({ name, image, designation, review, id }) => (
                <blockquote className="border-0 fs-lg mb-0" key={id}>
                  <p>“{review}”</p>
                  <div className="blockquote-details justify-content-center">
                    <FigureImage width={100} height={100} className="rounded-circle w-12 overflow-hidden" src={image} />
                    <div className="info">
                      <h6 className="mb-1 text-white">{name}</h6>
                      <p className="mb-0">{designation}</p>
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

export default Testimonial13;
