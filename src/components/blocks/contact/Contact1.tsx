import { FC } from 'react';
import FigureImage from 'components/reuseable/FigureImage';

const Contact1: FC = () => {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
      <div className="col-md-8 col-lg-6 position-relative">
        <div className="shape bg-dot primary rellax w-17 h-21" style={{ top: '-2rem', left: '-1.9rem' }} />
        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
        />

        <figure className="rounded">
          <img src="/img/photos/about14.jpg" srcSet="/img/photos/about14@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Get In Touch</h2>
        <h2 className="display-4 mb-8">Convinced yet? Let's make something great together.</h2>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-location-pin-alt" />
            </div>
          </div>

          <div>
            <h5 className="mb-1">Address</h5>
            <address>
              Moonshine St. 14/05 Light City, <br className="d-none d-md-block" />
              London, United Kingdom
            </address>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-phone-volume" />
            </div>
          </div>
          <div>
            <h5 className="mb-1">Phone</h5>
            <p>00 (123) 456 78 90</p>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-envelope" />
            </div>
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
  );
};

export default Contact1;
