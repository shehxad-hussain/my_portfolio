import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
import NextLink from 'components/reuseable/links/NextLink';

const Hero15: FC = () => {
  // use video popup
  useLightBox();

  return (
    <div className="wrapper bg-dark">
      <Carousel
        slidesPerView={1}
        className="swiper-hero dots-over"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
      >
        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/bg7.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                  We bring solutions to make life easier.
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                  We are a creative company that focuses on long term relationships with customers.
                </p>

                <div className="animate__animated animate__slideInUp animate__delay-3s">
                  <NextLink title="Read More" href="#" className="btn btn-lg btn-outline-white rounded-pill" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/bg8.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                  We are trusted by over a million customers.
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                  Here a few reasons why our customers choose us.
                </p>

                <div className="animate__animated animate__slideInUp animate__delay-3s">
                  <a
                    data-glightbox
                    href="/media/movie.mp4"
                    className="btn btn-circle btn-white btn-play ripple mx-auto mb-5"
                  >
                    <i className="icn-caret-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/bg9.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                  Just sit and relax.
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                  We make sure your spending is stress free so that you can have the perfect control.
                </p>

                <div className="animate__animated animate__slideInUp animate__delay-3s">
                  <NextLink title="Contact Us" href="#" className="btn btn-lg btn-outline-white rounded-pill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero15;
