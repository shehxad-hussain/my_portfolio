import { FC } from 'react';

const Testimonial9: FC = () => {
  return (
    <div className="card bg-soft-primary rounded-4 mb-14 mb-md-18">
      <div className="card-body p-md-10 py-xxl-16 position-relative">
        <div
          className="position-absolute d-none d-lg-block"
          style={{ bottom: 0, left: '10%', width: '28%', zIndex: 2 }}
        >
          <figure>
            <img src="/img/photos/co2.png" srcSet="/img/photos/co2@2x.png 2x" alt="" />
          </figure>
        </div>

        <div className="row gx-md-0 gx-xl-12 text-center">
          <div className="col-lg-7 offset-lg-5 col-xl-6">
            <span className="ratings five mb-3" />

            <blockquote className="border-0 fs-lg mb-0">
              <p>
                “Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit
                amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
                purus sit amet fermentum. Aenean lacinia bibendum nulla sed”
              </p>

              <div className="blockquote-details justify-content-center text-center">
                <div className="info p-0">
                  <h5 className="mb-1">Coriss Ambady</h5>
                  <div className="meta mb-0">Financial Analyst</div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial9;
