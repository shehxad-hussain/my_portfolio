import { FC } from 'react';

// =========================================================
type TopbarProps = { bgColor?: string; textColor?: string };
// =========================================================

const Topbar: FC<TopbarProps> = ({ bgColor = 'bg-primary', textColor = 'text-white' }) => {
  return (
    <div className={`${bgColor} ${textColor} fw-bold fs-15 mb-2`}>
      <div className="container py-2 d-md-flex flex-md-row">
        <div className="d-flex flex-row align-items-center">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-location-pin-alt"></i>
          </div>

          <address className="mb-0">Moonshine St. 14/05 Light City</address>
        </div>

        <div className="d-flex flex-row align-items-center me-6 ms-auto">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-phone-volume"></i>
          </div>

          <p className="mb-0">00 (123) 456 78 90</p>
        </div>

        <div className="d-flex flex-row align-items-center">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-message"></i>
          </div>

          <p className="mb-0">
            <a href="mailto:sandbox@email.com" className="link-white hover">
              sandbox@email.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
