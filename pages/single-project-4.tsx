import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import { Footer8 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';
// -------- data -------- //
const gallery1 = [
  {
    id: 1,
    width: 1290,
    height: 675,
    className: 'col-md-12',
    url: '/img/photos/pp24.jpg',
    fullUrl: '/img/photos/pp24@2x.jpg'
  },
  {
    id: 2,
    width: 630,
    height: 460,
    className: 'col-md-6',
    url: '/img/photos/pp25.jpg',
    fullUrl: '/img/photos/pp25@2x.jpg'
  },
  {
    id: 3,
    width: 630,
    height: 460,
    className: 'col-md-6',
    url: '/img/photos/pp26.jpg',
    fullUrl: '/img/photos/pp26@2x.jpg'
  }
];

const gallery2 = [
  {
    id: 1,
    width: 1290,
    height: 830,
    className: 'col-md-12',
    url: '/img/photos/pp27.jpg',
    fullUrl: '/img/photos/pp27@2x.jpg'
  },
  {
    id: 2,
    width: 1290,
    height: 830,
    className: 'col-md-12',
    url: '/img/photos/pp28.jpg',
    fullUrl: '/img/photos/pp28@2x.jpg'
  },
  {
    id: 3,
    width: 410,
    height: 555,
    className: 'col-md-4',
    url: '/img/photos/pp29.jpg',
    fullUrl: '/img/photos/pp29@2x.jpg'
  },
  {
    id: 4,
    width: 850,
    height: 555,
    className: 'col-md-8',
    url: '/img/photos/pp30.jpg',
    fullUrl: '/img/photos/pp30@2x.jpg'
  }
];

const ProjectDetails: NextPage = () => {
  // used for image lightbox
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-gray">
        <Navbar
          language
          navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        <section
          className="wrapper image-wrapper bg-image bg-cover bg-height"
          style={{ backgroundImage: 'url(/img/photos/pp23.jpg)' }}
        />

        <section className="wrapper bg-light wrapper-border">
          <div className="container py-14 py-md-16">
            {/* ========== details section ========== */}
            <ProjectDetailsContent
              title="Memphis Brand Design"
              titleClass="display-4 mb-4"
              contentRowClass="row gx-0 mb-12"
            />

            {/* ========== gallery section ========== */}

            <div className="row gy-6 mb-12">
              {gallery1.map(({ width, height, id, url, className, fullUrl }) => (
                <div className={className} key={id}>
                  <figure className="hover-scale rounded cursor-dark">
                    <a href={fullUrl} data-glightbox data-gallery="project-4">
                      <Image layout="responsive" width={width} height={height} src={url} alt="demo" />
                    </a>
                  </figure>
                </div>
              ))}
            </div>

            <div className="row mb-12">
              <div className="col-lg-10 mx-auto">
                <h2 className="display-6 mb-4">About the Project</h2>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante
                  venenatis. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum.
                </p>
                <p className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Aenean eu leo
                  quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at
                  lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                </p>
              </div>
            </div>

            {/* ========== gallery section ========== */}
            <div className="row gy-6">
              {gallery2.map(({ width, height, id, url, className, fullUrl }) => (
                <div className={className} key={id}>
                  <figure className="hover-scale rounded cursor-dark">
                    <a href={fullUrl} data-glightbox data-gallery="project-4">
                      <Image layout="responsive" width={width} height={height} src={url} alt="demo" />
                    </a>
                  </figure>
                </div>
              ))}
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
