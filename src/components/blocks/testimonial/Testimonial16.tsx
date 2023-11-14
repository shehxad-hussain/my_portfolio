import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- data-------- //
import { testimonialList5 } from 'data/testimonial-list';

const Testimonial16: FC = () => {
  return (
    <div className="card shadow-lg mt-n21 mt-md-n23">
      <div className="row gx-0">
        <div
          className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
          style={{ backgroundImage: 'url(/img/photos/tm2.jpg)' }}
        />

        <div className="col-lg-6">
          <div className="p-10 p-md-11 px-lg-13 py-lg-14">
            <Carousel slidesPerView={1} navigation={false} className="dots-closer">
              {testimonialList5.map(({ id }) => (
                <div className="text-center" key={id}>
                  <span className="ratings five mt-4 mb-3" />
                  <blockquote className="border-0 fs-lg text-center">
                    <p>
                      “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
                      felis euismod semper. Cras justo odio.”
                    </p>
                    <div className="blockquote-details justify-content-center text-center">
                      <div className="info ps-0">
                        <h5 className="mb-1">Cory Zamora</h5>
                        <p className="mb-0">Marketing Specialist</p>
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
  );
};

export default Testimonial16;
