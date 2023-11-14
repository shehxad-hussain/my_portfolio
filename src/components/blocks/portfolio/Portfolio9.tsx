import { FC } from 'react';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';

const Portfolio9: FC = () => {
  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 pt-md-18 pb-md-16">
        <div className="row align-items-center mb-10">
          <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
            <h2 className="display-4 mb-3">Latest Projects</h2>
            <p className="lead fs-20 mb-0">Check out some of my latest projects with creative ideas.</p>
          </div>

          <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
            <NextLink title="See All Projects" href="#" className="btn btn-outline-primary rounded-pill mb-0" />
          </div>
        </div>

        <div className="card bg-soft-violet mb-10">
          <div className="card-body p-12 pb-0">
            <div className="row">
              <div className="col-lg-4 pb-12 align-self-center">
                <div className="post-category mb-3 text-violet">Web Design</div>
                <h3 className="h1 post-title mb-3">Snowlake Theme</h3>
                <p>
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta
                  felis euismod semper. Fusce dapibus tellus cursus.
                </p>
                <NextLink title="See Project" href="#" className="more hover link-violet" />
              </div>

              <div className="col-lg-7 offset-lg-1 align-self-end">
                <figure>
                  <img className="img-fluid" src="/img/photos/f1.png" srcSet="/img/photos/f1@2x.png 2x" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-soft-blue mb-10">
          <div className="card-body p-12">
            <div className="row gy-10 align-items-center">
              <div className="col-lg-4 order-lg-2 offset-lg-1">
                <div className="post-category mb-3 text-blue">Mobile Design</div>
                <h3 className="h1 post-title mb-3">Budget App</h3>
                <p>
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta
                  felis euismod semper. Fusce dapibus tellus cursus.
                </p>
                <NextLink title="See Project" href="#" className="more hover link-blue" />
              </div>

              <div className="col-lg-7">
                <figure>
                  <img className="img-fluid" src="/img/photos/f2.png" srcSet="/img/photos/f2@2x.png 2x" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-md-8 gx-xl-10">
          <div className="col-lg-6">
            <div className="card bg-soft-leaf mb-10">
              <div className="card-body p-12 pb-0">
                <div className="post-category mb-3 text-leaf">Web Design</div>
                <h3 className="h1 post-title mb-3">Missio Theme</h3>
                <p>
                  Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id
                  ligula felis.
                </p>
                <NextLink title="See Project" href="#" className="more hover link-leaf mb-8" />
              </div>

              <img className="card-img-bottom" src="/img/photos/f3.png" srcSet="/img/photos/f3@2x.png 2x" alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card bg-soft-pink">
              <div className="card-body p-12 pb-0">
                <div className="post-category mb-3 text-pink">Mobile Design</div>
                <h3 className="h1 post-title mb-3">Storage App</h3>
                <p>
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta
                  felis euismod semper.
                </p>
                <NextLink title="See Project" href="#" className="more hover link-pink mb-8" />
              </div>

              <img className="card-img-bottom" src="/img/photos/f4.png" srcSet="/img/photos/f4@2x.png 2x" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio9;
