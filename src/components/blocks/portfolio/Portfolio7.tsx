import { FC } from 'react';
import Link from 'next/link';

const Portfolio7: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row align-items-center mb-7">
          <div className="col-md-8 col-lg-8 col-xl-7 col-xxl-6 pe-lg-17">
            <h2 className="display-4 mb-3">Recent Projects</h2>
            <p className="lead fs-lg">
              We love to turn ideas into <span className="underline">beautiful things</span>.
            </p>
          </div>
        </div>

        <div className="projects-tiles">
          <div className="project grid grid-view">
            <div className="row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope">
              <div className="col-md-5">
                <div className="item">
                  <Link href="#">
                    <a>
                      <figure className="lift rounded mb-6">
                        <img src="/img/photos/rp1.jpg" srcSet="/img/photos/rp1@2x.jpg 2x" alt="demo" />
                      </figure>
                    </a>
                  </Link>

                  <div className="post-category mb-3 text-purple">Stationary</div>
                  <h3 className="post-title">Ipsum Ultricies Cursus</h3>
                </div>

                <div className="item mt-12 mt-md-12">
                  <Link href="#">
                    <a>
                      <figure className="lift rounded mb-6">
                        <img src="/img/photos/rp3.jpg" srcSet="/img/photos/rp3@2x.jpg 2x" alt="demo" />
                      </figure>
                    </a>
                  </Link>

                  <div className="post-category mb-3 text-red">Notebook</div>
                  <h3 className="post-title">Magna Tristique Inceptos</h3>
                </div>
              </div>

              <div className="item col-md-7 mt-md-17">
                <Link href="#">
                  <a>
                    <figure className="lift rounded mb-6">
                      <img src="/img/photos/rp2.jpg" srcSet="/img/photos/rp2@2x.jpg 2x" alt="" />
                    </figure>
                  </a>
                </Link>

                <div className="post-category mb-3 text-orange">Invitation</div>
                <h3 className="post-title">Mollis Ipsum Mattis</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio7;
