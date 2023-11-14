import { FC } from 'react';
import { zoomInAnimate } from 'utils/animation';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';

const Hero13: FC = () => {
  // use video popup
  useLightBox();

  return (
    <section
      style={{ backgroundImage: 'url(/img/photos/bg2.jpg)' }}
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
    >
      <div className="container pt-17 pb-19 pt-md-19 pb-md-20 text-center">
        <div className="row mb-11">
          <div className="col-md-9 col-lg-7 col-xxl-6 mx-auto">
            <h2 className="h6 text-uppercase ls-xl text-white mb-5" style={zoomInAnimate('0ms')}>
              Hello! This is Sandbox
            </h2>

            <h3 className="display-1 text-white mb-7" style={zoomInAnimate('500ms')}>
              We bring rapid solutions for your business
            </h3>

            <a
              data-glightbox
              href="/media/movie.mp4"
              className="btn btn-circle btn-white btn-play ripple mx-auto mb-5"
              style={zoomInAnimate('1000ms')}
            >
              <i className="icn-caret-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero13;
