import { FC } from 'react';
import Link from 'next/link';

const Portfolio6: FC = () => {
  return (
    <div className="projects-tiles">
      <div className="project grid grid-view">
        <div className="row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope">
          <div className="col-md-6">
            <div className="item mt-md-7 mt-lg-15">
              <div className="project-details d-flex justify-content-center align-self-end flex-column ps-0 pb-0">
                <div className="post-header">
                  <h2 className="display-4 mb-4 pe-xxl-15">Check out some of our recent projects below.</h2>
                  <p className="lead fs-lg mb-0">We love to turn ideas into beautiful things.</p>
                </div>
              </div>
            </div>

            <div className="item mt-12">
              <Link href="#">
                <a>
                  <figure className="lift rounded mb-6">
                    <img src="/img/photos/rp2.jpg" srcSet="/img/photos/rp2@2x.jpg 2x" alt="demo" />
                  </figure>
                </a>
              </Link>

              <div className="post-category text-line mb-3 text-leaf">Invitation</div>
              <h2 className="post-title h3">Mollis Ipsum Mattis</h2>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item">
              <Link href="#">
                <a>
                  <figure className="lift rounded mb-6">
                    <img src="/img/photos/rp1.jpg" srcSet="/img/photos/rp1@2x.jpg 2x" alt="" />
                  </figure>
                </a>
              </Link>

              <div className="post-category text-line mb-3 text-violet">Stationary</div>
              <h2 className="post-title h3">Ipsum Ultricies Cursus</h2>
            </div>

            <div className="item mt-12">
              <Link href="#">
                <a>
                  <figure className="lift rounded mb-6">
                    <img src="/img/photos/rp3.jpg" srcSet="/img/photos/rp3@2x.jpg 2x" alt="" />
                  </figure>
                </a>
              </Link>

              <div className="post-category text-line mb-3 text-purple">Notebook</div>
              <h2 className="post-title h3">Magna Tristique Inceptos</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio6;
