import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { JobPostCard2 } from 'components/reuseable/job-cards';
import { ServiceCard3 } from 'components/reuseable/service-cards';
import Select from 'components/reuseable/Select';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import data from 'data/career-page-2';

const CareerTwo: NextPage = () => {
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
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary position-relative">
          <div className="container pt-10 pb-17 pt-md-14 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto mb-5">
                <h2 className="fs-15 text-uppercase text-muted mb-3">Join Our Team</h2>
                <h3 className="display-1 mb-6">Join our team to help shape the future of development.</h3>
                <NextLink title="Explore Positions" href="#" className="btn btn-lg btn-primary rounded-pill" />
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="divider text-light mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
                <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
              </svg>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pb-15 pb-md-17">
            {/* ========== service section ========== */}
            <div className="row gx-md-5 gy-5 mt-n18 mt-md-n19">
              {data.facilities.map(({ id, title, description, Icon }) => (
                <div className="col-md-6 col-xl-3" key={id}>
                  <div className="card lift">
                    <div className="card-body">
                      <Icon className="icon-svg-sm solid-mono text-primary mb-3" />
                      <h4>{title}</h4>
                      <p className="mb-0">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ========== about us section ========== */}
            <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mt-12">
              <div className="col-lg-6">
                <div className="row gx-md-5 gy-5">
                  <div className="col-12">
                    <figure className="rounded mx-md-5">
                      <img src="/img/photos/g8.jpg" srcSet="/img/photos/g8@2x.jpg 2x" alt="" />
                    </figure>
                  </div>

                  <div className="col-md-6">
                    <figure className="rounded">
                      <img src="/img/photos/g9.jpg" srcSet="/img/photos/g9@2x.jpg 2x" alt="" />
                    </figure>
                  </div>

                  <div className="col-md-6">
                    <figure className="rounded">
                      <img src="/img/photos/g10.jpg" srcSet="/img/photos/g10@2x.jpg 2x" alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <h2 className="fs-16 text-uppercase text-muted mb-3 mt-md-n5">What Makes Us Different?</h2>
                <h3 className="display-3 mb-5">We bring solutions to make life easier for our customers.</h3>
                <p className="mb-6">
                  Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada
                  magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed.
                </p>

                <div className="row gy-8">
                  {data.services.map(({ id, Icon, ...item }) => (
                    <div className="col-md-6" key={id}>
                      <ServiceCard3 Icon={<Icon />} {...item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="my-14 my-md-17" />

            {/* ========== job position section ========== */}
            <div className="row text-center">
              <div className="col-xl-10 mx-auto">
                <h2 className="fs-15 text-uppercase text-muted mb-3">Job Positions</h2>
                <h3 className="display-4 mb-10 px-xxl-15">
                  We’re always searching for amazing people to join our team. Take a look at our current openings.
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-10 mx-auto">
                <form className="filter-form mb-10">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <Select options={data.positionOptions} />
                    </div>

                    <div className="col-md-4 mb-3">
                      <Select options={data.typeOptions} />
                    </div>

                    <div className="col-md-4 mb-3">
                      <Select options={data.locationOptions} />
                    </div>
                  </div>
                </form>

                <div className="job-list mb-10">
                  <h3 className="mb-4">Design</h3>

                  {data.designJobList.map((item) => (
                    <JobPostCard2 {...item} key={item.id} />
                  ))}
                </div>

                <div className="job-list">
                  <h3 className="mb-4">Development</h3>

                  {data.developmentJobList.map((item) => (
                    <JobPostCard2 {...item} key={item.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== contact section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
                <h2 className="fs-15 text-uppercase text-muted mb-3">Can't find the right position?</h2>
                <h3 className="display-4 mb-7 px-lg-5 px-xl-0 px-xxl-5">
                  We are a community with 5000+ team members. Join and build the future with us.
                </h3>
                <NextLink title="Contact Us" href="#" className="btn btn-lg btn-primary rounded-pill" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default CareerTwo;
