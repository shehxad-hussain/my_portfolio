import { FC } from 'react';
import data from 'data/demo-27';

const Process17: FC = () => {
  return (
    <section className="wrapper bg-gray position-relative min-vh-60 d-lg-flex align-items-center">
      <div
        className="col-lg-6 position-lg-absolute top-0 start-0 image-wrapper bg-image bg-cover h-100"
        style={{ backgroundImage: 'url(/img/photos/bg38.jpg)' }}
      >
        <div className="divider text-gray divider-v-end d-none d-lg-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 1200">
            <g />
            <g>
              <g>
                <polygon fill="currentColor" points="48 0 0 0 48 1200 54 1200 54 0 48 0" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-6 ms-auto">
            <div className="pt-13 pb-15 pb-md-17 py-lg-16 ps-lg-15 pe-xxl-16">
              <h2 className="fs-15 text-uppercase text-muted mb-3">How It Works?</h2>
              <h3 className="display-3 ls-sm mb-7">Here are the 3 working steps on success.</h3>

              {data.processList.map(({ id, Icon, title, description }) => (
                <div className="d-flex flex-row mb-5" key={id}>
                  <div>
                    <Icon className="icon-svg-md text-blue me-5 mt-1" />
                  </div>
                  <div>
                    <h4 className="fs-20 ls-sm">{title}</h4>
                    <p className="mb-0">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process17;
