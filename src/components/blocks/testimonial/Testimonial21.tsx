import { FC } from 'react';

const Testimonial21: FC = () => {
  return (
    <div className="row position-relative mb-15 mb-md-17">
      <figure
        className="rounded position-absolute d-none d-lg-block"
        style={{ top: '50%', right: 0, width: '45%', height: 'auto', zIndex: 2, transform: 'translateY(-50%)' }}
      >
        <img src="/img/photos/tei1.jpg" srcSet="/img/photos/tei1@2x.jpg 2x" alt="" />
      </figure>

      <div className="col-lg-9 text-center">
        <div className="card bg-gray">
          <div className="card-body p-md-10 py-xxl-16">
            <div className="row gx-0">
              <div className="col-lg-8 ps-xl-10">
                <span className="ratings five fs-20 mb-3" />

                <blockquote className="border-0 fs-lg mb-0">
                  <p>
                    “Donec id elit non mi porta gravida at eget metus. Vivamus mollis est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Duis mollis porta est non commodo luctus.”
                  </p>

                  <div className="blockquote-details justify-content-center text-center">
                    <div className="info p-0">
                      <h4 className="ls-sm mb-1">Coriss Ambady</h4>
                      <p className="mb-0">Financial Analyst</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial21;
