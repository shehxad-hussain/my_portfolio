import { FC } from 'react';
import { zoomInAnimate } from 'utils/animation';

const Hero22: FC = () => {
  return (
    <section className="section-frame br-fix overflow-hidden">
      <div
        className="wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500"
        style={{ backgroundImage: 'url(/img/photos/bg26.jpg)' }}
      >
        <div className="container pt-18 pt-lg-21 pb-17 pb-lg-19 text-center">
          <div className="row">
            <div className="col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
              <h2 className="h6 text-uppercase ls-xl text-white mb-5" style={zoomInAnimate('500ms')}>
                Hello! We are Sandbox
              </h2>

              <h3 className="display-1 fs-54 text-white mb-7" style={zoomInAnimate('1000ms')}>
                Grow your business with our marketing solutions
              </h3>

              <a
                data-glightbox
                href="/media/movie.mp4"
                className="btn btn-circle btn-white btn-play ripple mx-auto"
                style={zoomInAnimate('1500ms')}
              >
                <i className="icn-caret-right" />
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="divider text-white mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
              <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero22;
