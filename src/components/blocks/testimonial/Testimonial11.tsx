import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { testimonialList } from 'data/demo-11';

const Testimonial11: FC = () => {
  return (
    <div className="row mt-md-n50p text-white text-center">
      <div className="col-xl-10 mx-auto mb-14 mb-lg-n6">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400"
          style={{ backgroundImage: 'url(/img/photos/bg2.jpg)' }}
        >
          <div className="card-body p-9 p-xl-12">
            <div className="row gx-0">
              <div className="col-xxl-9 mx-auto">
                <Carousel navigation={false} slidesPerView={1} className="dots-light dots-closer">
                  {testimonialList.map((item) => (
                    <div key={item.id}>
                      <span className="ratings five mb-3" />
                      <blockquote className="border-0 fs-lg mb-2">
                        <p>“{item.review}”</p>
                        <div className="blockquote-details justify-content-center text-center">
                          <div className="info ps-0">
                            <h5 className="mb-1 text-white">{item.name}</h5>
                            <p className="mb-0">{item.designation}</p>
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
    </div>
  );
};

export default Testimonial11;
