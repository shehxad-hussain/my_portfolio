import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import BlogTemplate from 'components/common/BlogTemplate';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import NextLink from 'components/reuseable/links/NextLink';

const BlogThree: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-gray">
        <Navbar search button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-gray">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3">Business News</h1>
                <p className="lead px-lg-5 px-xxl-8">
                  Welcome to our journal. Here you can find the latest company news and business articles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12">
              {/* ========== sidebar section ========== */}
              <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                <BlogSidebar />
              </aside>

              {/* ========== blog details section ========== */}
              <div className="col-lg-8">
                <BlogTemplate />
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

export default BlogThree;
