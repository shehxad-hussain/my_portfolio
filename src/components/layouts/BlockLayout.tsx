import { FC, Fragment, ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

// ====================================================
type Links = { title: string; url: string }[];

type BlockLayoutProps = {
  children: ReactNode;
  headingColClass?: string;
  title: string | ReactElement;
};
// ====================================================

const filters = [
  { id: 1, title: 'About', url: '/docs/blocks/about' },
  { id: 2, title: 'Blog', url: '/docs/blocks/blog' },
  { id: 3, title: 'Call to Action', url: '/docs/blocks/call-to-action' },
  { id: 4, title: 'Clients', url: '/docs/blocks/clients' },
  { id: 5, title: 'Contact', url: '/docs/blocks/contact' },
  { id: 6, title: 'Facts', url: '/docs/blocks/facts' },
  { id: 7, title: 'FAQ', url: '/docs/blocks/faq' },
  { id: 8, title: 'Features', url: '/docs/blocks/features' },
  { id: 9, title: 'Footer', url: '/docs/blocks/footer' },
  { id: 10, title: 'Hero', url: '/docs/blocks/hero' },
  // { id: 11, title: 'Misc', url: '/docs/blocks/misc' },
  { id: 12, title: 'Navbar', url: '/docs/blocks/navbar' },
  { id: 13, title: 'Portfolio', url: '/docs/blocks/portfolio' },
  { id: 14, title: 'Pricing', url: '/docs/blocks/pricing' },
  { id: 15, title: 'Process', url: '/docs/blocks/process' },
  { id: 16, title: 'Team', url: '/docs/blocks/team' },
  { id: 17, title: 'Testimonials', url: '/docs/blocks/testimonials' }
];

const BlockLayout: FC<BlockLayoutProps> = ({ title, children }) => {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <PageProgress />

      <div className="content-wrapper">
        {/* ========== header ========== */}
        <header className="wrapper bg-soft-primary">
          <Navbar
            language
            button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
          />
        </header>

        {/* ========== page heading ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3">Blocks - {title}</h1>
                <p className="lead px-xxl-10">
                  Copy any custom block snippet below and paste it on your page to build your website easily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== filter navs ========== */}
        <section className="wrapper bg-light wrapper-border">
          <div className="container py-11">
            <h2 className="h5">Filter Blocks:</h2>
            <ul className="list-inline mb-0">
              {filters.map(({ id, title, url }) => (
                <li className="list-inline-item me-1 mb-2" key={id}>
                  <NextLink
                    href={url}
                    title={title}
                    className={`btn btn-soft-ash btn-sm rounded ${pathname === url ? 'text-primary pe-none' : ''}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========== main content ========== */}
        {children}
      </div>

      {/* ========== footer banner ========== */}
      <section className="wrapper bg-dark text-white">
        <div className="container pt-14 pt-md-16 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto">
              <h2 className="display-3 text-white mt-3 mb-3 px-lg-8">
                Think unique and be creative. Make a difference with Sandbox.
              </h2>

              <p className="lead fs-lg mb-6">
                Everything you need to create your next unique and professional website, including impressive and
                ready-made blocks and pages.
              </p>

              <a href="#" target="_blank" className="btn btn-lg btn-white rounded-pill mb-10" rel="noreferrer">
                Buy Sandbox
              </a>
            </div>
          </div>

          <img className="img-fluid" src="/img/demos/f1.png" srcSet="/img/demos/f1@2x.png 2x" alt="demo" />
        </div>
      </section>
    </Fragment>
  );
};

export default BlockLayout;
