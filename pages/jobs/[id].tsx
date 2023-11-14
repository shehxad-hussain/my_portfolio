import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import ListColumn from 'components/reuseable/ListColumn';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { JobPostCard1 } from 'components/reuseable/job-cards';
// -------- data -------- //
import data from 'data/job-details-page';

const JobDetails: NextPage = () => {
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
        {/* ========== page section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <h1 className="display-1 mb-5">Multimedia Artist &amp; Animator</h1>
                  <ul className="post-meta fs-17 mb-5">
                    {data.jobMeta.map(({ id, title, icon }) => (
                      <li key={id}>
                        <i className={`uil ${icon}`} /> {title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== job description section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <h2 className="h1 mb-3">Job Description</h2>
                      <p>
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                        justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras
                        mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                        Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                        dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.
                      </p>
                      <p>
                        Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis
                        felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non
                        dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet
                        vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.
                      </p>

                      <h3 className="h2 mb-3 mt-9">Responsibilities</h3>
                      <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo
                        odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et.
                      </p>

                      <ListColumn rowClass="gx-xl-8" list={data.responsiblities} />

                      <h3 className="h2 mb-3 mt-9">Requirements</h3>
                      <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo
                        odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et.
                      </p>

                      <ListColumn rowClass="gx-xl-8 mb-10" list={data.requirements} />

                      <a href="mailto:apply@email.com" className="btn btn-primary rounded-pill">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== more job section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container py-14 py-md-16">
            <div className="row align-items-center mb-6">
              <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
                <h2 className="display-6 mb-0">More Job Openings</h2>
              </div>

              <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                <NextLink title="Explore Positions" href="#" className="btn btn-primary rounded-pill mb-0" />
              </div>
            </div>

            <div className="row gy-6">
              {data.jobList.map((item) => (
                <JobPostCard1 key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default JobDetails;
