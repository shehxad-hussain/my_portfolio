import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import data from 'data/demo-26';

const Testimonial20: FC = () => {
  return (
    <div className="card bg-soft-primary mb-15 mb-md-17">
      <div className="card-body py-14 px-lg-0">
        <div className="row text-center">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Happy Customers</h2>
            <h3 className="display-4 mb-10 px-xxl-10">
              Don't take our word for it. See what customers are saying about us.
            </h3>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 align-items-center">
          <div className="col-lg-5 ms-auto col-xl-4 d-none d-lg-flex">
            <div className="img-mask mask-3">
              <img src="/img/photos/about31.jpg" srcSet="/img/photos/about31@2x.jpg 2x" alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-xl-6 col-xxl-5 me-auto">
            <div className="swiper-container">
              <Carousel spaceBetween={0} navigation={false} slidesPerView={1} className="dots-start">
                {data.testimonialList.map(({ id, name, designation, review }) => (
                  <div key={id} className="mb-8">
                    <span className="ratings five mb-3" />
                    <blockquote className="border-0 fs-lg mb-0">
                      <p>“{review}”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">{name}</h5>
                          <p className="mb-0">{designation}</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial20;
