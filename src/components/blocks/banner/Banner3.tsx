import { FC } from 'react';
import useLightBox from 'hooks/useLightBox';

const Banner3: FC = () => {
  // used for light box popup
  useLightBox();

  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay"
      style={{ backgroundImage: 'url(/img/photos/bg1.jpg)' }}
    >
      <div className="container py-18 text-center">
        <div className="row">
          <div className="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
            <a href="/media/movie.mp4" data-glightbox className="btn btn-circle btn-white btn-play ripple mx-auto mb-5">
              <i className="icn-caret-right" />
            </a>
            <h2 className="display-4 px-lg-10 px-xl-13 px-xxl-10 mb-10 text-white">
              Find out everything you need to know about creating a business process model.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
