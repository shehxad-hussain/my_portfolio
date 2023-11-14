import { FC } from 'react';
import IconBox from 'components/reuseable/IconBox';

const Contact6: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img className="w-auto" src="/img/illustrations/i5.png" srcSet="/img/illustrations/i5@2x.png 2x" alt="" />
            </figure>
          </div>

          <div className="col-lg-5">
            <h3 className="display-4 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-4 mt-n1" icon="uil-location-pin-alt" />
              </div>

              <div>
                <h5 className="mb-1">Address</h5>
                <address>Moonshine St. 14/05 Light City, London</address>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-4 mt-n1" icon="uil-phone-volume" />
              </div>

              <div>
                <h5 className="mb-1">Phone</h5>
                <p>00 (123) 456 78 90</p>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-4 mt-n1" icon="uil-envelope" />
              </div>

              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0">
                  <a href="mailto:sandbox@email.com" className="link-body">
                    sandbox@email.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact6;
