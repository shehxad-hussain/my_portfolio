import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';
// -------- data -------- //
const images = ['/img/photos/pp2.jpg', '/img/photos/pp3.jpg', '/img/photos/pp4.jpg', '/img/photos/pp5.jpg'];

const ProjectDetails: NextPage = () => {
  // used for image lightbox
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink title="Identity" href="#" className="hover" />
                  </div>

                  <h1 className="display-1 mb-3">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    Integer posuere erat a ante venenatis dapibus posuere. Maecenas faucibus mollis interdum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n21">
                  <FigureImage width={2400} height={1640} src="/img/photos/pp1.jpg" className="rounded mb-8 mb-md-12" />

                  <ProjectDetailsContent title="About the Project" />

                  <div className="row mt-5 gx-md-6 gy-6">
                    {images.map((item) => (
                      <div className="item col-md-6" key={item}>
                        <figure className="hover-scale rounded cursor-dark">
                          <a href={item} data-glightbox data-gallery="project-1">
                            <Image layout="responsive" width={960} height={640} src={item} alt="demo" />
                          </a>
                        </figure>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-8 mt-md-12">
                    <div className="col-md-10 offset-md-1 text-justify">
                      <h2 className="mb-4">Quam Mollis Bibendum</h2>
                      <p>
                        Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non
                        metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                        bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.
                        Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet
                        fermentum.
                      </p>

                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat
                        porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Maecenas
                        sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum
                        etiam porta.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ========== navigation section ========== */}
        <ProjectDetailsNavigation />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;
