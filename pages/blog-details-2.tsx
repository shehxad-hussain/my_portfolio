import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import NextLink from 'components/reuseable/links/NextLink';
import BlogDetailsTemplate from 'components/common/BlogDetailsTemplate';

const BlogDetailsTwo: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-white rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white"
          style={{ backgroundImage: 'url(/img/photos/bg5.jpg)' }}
        >
          <div className="container pt-18 pb-15 pt-md-20 pb-md-19 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line text-white">
                    <NextLink title="Teamwork" href="#" className="text-reset" />
                  </div>

                  <h1 className="display-1 mb-4 text-white">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                  <ul className="post-meta text-white">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>5 Jul 2022</span>
                    </li>

                    <li className="post-author">
                      <i className="uil uil-user" />
                      <NextLink href="#" className="text-reset" title={<span>By Sandbox</span>} />
                    </li>

                    <li className="post-comments">
                      <i className="uil uil-comment" />
                      <NextLink
                        href="#"
                        className="text-reset"
                        title={
                          <Fragment>
                            3 <span>Comments</span>
                          </Fragment>
                        }
                      />
                    </li>

                    <li className="post-likes">
                      <i className="uil uil-heart-alt" />
                      <NextLink
                        href="#"
                        className="text-reset"
                        title={
                          <Fragment>
                            3 <span>Likes</span>
                          </Fragment>
                        }
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12">
              {/* ========== details section ========== */}
              <div className="col-lg-8">
                <div className="blog single">
                  <BlogDetailsTemplate />
                </div>
              </div>

              {/* ========== sidebar section ========== */}
              <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                <BlogSidebar />
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default BlogDetailsTwo;
