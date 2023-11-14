import NextLink from 'components/reuseable/links/NextLink';
import { FC } from 'react';

const Hero26: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pt-lg-12 pt-xl-12 pt-xxl-10 pb-lg-10 pb-xl-10 pb-xxl-0">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">
          <div className="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900">
            <h1 className="display-1 mb-4 me-xl-5 mt-lg-n10">
              Grow Your Business with <br className="d-none d-md-block d-lg-none" />
              <span className="text-primary">Our Marketing Solutions</span>
            </h1>

            <p className="lead fs-24 lh-sm mb-7 pe-xxl-15">
              We help our clients to increase their website <br className="d-none d-md-block d-lg-none" /> traffic,
              rankings and visibility in search results.
            </p>

            <div className="d-inline-flex me-2">
              <NextLink href="#" title="Try it for Free" className="btn btn-lg btn-grape rounded" />
            </div>

            <div className="d-inline-flex">
              <NextLink href="#" title="Explore Now" className="btn btn-lg btn-outline-grape rounded" />
            </div>
          </div>

          <div className="col-10 col-md-7 mx-auto col-lg-6 col-xl-5 ms-xl-5">
            <img
              className="img-fluid mb-n12 mb-md-n14 mb-lg-n19"
              src="/img/illustrations/3d11.png"
              srcSet="/img/illustrations/3d11@2x.png 2x"
              data-cue="fadeIn"
              data-delay="300"
              alt=""
            />
          </div>
        </div>
      </div>

      <figure>
        <img src="/img/photos/clouds.png" alt="" />
      </figure>
    </section>
  );
};

export default Hero26;
