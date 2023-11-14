import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
import { FC, Fragment, ReactElement, ReactNode } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import useClipboard from 'hooks/useClipboard';
// -------- data -------- //
const navigations = [
  {
    title: 'Usage',
    id: 'collapse-usage',
    children: [
      { title: 'Get Started', url: '/docs' },
      // { title: 'Forms', url: '#' },
      { title: 'FAQ', url: '/docs/faq' },
      { title: 'Changelog', url: '/docs/changelog' },
      { title: 'Credits', url: '/docs/credits' }
    ]
  },
  {
    title: 'Styleguide',
    id: 'collapse-style',
    children: [
      { title: 'Theme', url: '/docs/styleguide/theme' },
      { title: 'Colors', url: '/docs/styleguide/colors' },
      { title: 'Fonts', url: '/docs/styleguide/fonts' },
      { title: 'SVG Icons', url: '/docs/styleguide/svg-icons' },
      { title: 'Font Icons', url: '/docs/styleguide/font-icons' },
      { title: 'Illustrations', url: '/docs/styleguide/illustrations' },
      { title: 'Backgrounds', url: '/docs/styleguide/backgrounds' },
      { title: 'Misc', url: '/docs/styleguide/misc' }
    ]
  },
  {
    title: 'Elements',
    id: 'collapse-elements',
    children: [
      { title: 'Accordion', url: '/docs/elements/accordions' },
      { title: 'Alerts', url: '/docs/elements/alerts' },
      { title: 'Animations', url: '/docs/elements/animations' },
      { title: 'Avatars', url: '/docs/elements/avatars' },
      { title: 'Background', url: '/docs/elements/background' },
      { title: 'Badges', url: '/docs/elements/badges' },
      { title: 'Buttons', url: '/docs/elements/buttons' },
      { title: 'Card', url: '/docs/elements/card' },
      { title: 'Carousel', url: '/docs/elements/carousel' },
      { title: 'Dividers', url: '/docs/elements/dividers' },
      { title: 'Form Elements', url: '/docs/elements/form-elements' },
      { title: 'Image Hover', url: '/docs/elements/image-hover' },
      { title: 'Image Mask', url: '/docs/elements/image-mask' },
      { title: 'Lightbox', url: '/docs/elements/lightbox' },
      { title: 'Media Player', url: '/docs/elements/media-player' },
      { title: 'Modal', url: '/docs/elements/modal' },
      { title: 'Pagination', url: '/docs/elements/pagination' },
      { title: 'Progressbar', url: '/docs/elements/progressbar' },
      { title: 'Shadows', url: '/docs/elements/shadows' },
      { title: 'Shapes', url: '/docs/elements/shapes' },
      { title: 'Tables', url: '/docs/elements/tables' },
      { title: 'Tabs', url: '/docs/elements/tabs' },
      { title: 'Text Animations', url: '/docs/elements/text-animation' },
      { title: 'Text Highlight', url: '/docs/elements/text-highlight' },
      { title: 'Tiles', url: '/docs/elements/tiles' },
      // { title: 'Tooltips & Popovers', url: '/docs/elements/tooltips-popovers' },
      { title: 'Typography', url: '/docs/elements/typography' }
    ]
  },
  {
    title: 'Others',
    id: 'collapse-others',
    children: [
      { title: 'Blog Cards', url: '/docs/others/blog-card' },
      { title: 'Counters', url: '/docs/others/counter' },
      { title: 'Job Cards', url: '/docs/others/job-card' },
      { title: 'Product Cards', url: '/docs/others/product-card' },
      { title: 'Project Cards', url: '/docs/others/project-card' },
      { title: 'Service Cards', url: '/docs/others/service-card' },
      { title: 'Team Cards', url: '/docs/others/team-card' },
      { title: 'Testimonial Cards', url: '/docs/others/testimonial-card' }
    ]
  }
];

// ====================================================
type Links = { title: string; url: string }[];

type DocLayoutProps = {
  children: ReactNode;
  quickAccssLinks?: Links;
  headingColClass?: string;
  descriptionClass?: string;
  pageTitle: string | ReactElement;
  description: string | ReactElement;
};
// ====================================================

const DocLayout: FC<DocLayoutProps> = ({
  pageTitle,
  children,
  description,
  quickAccssLinks,
  descriptionClass = 'lead px-xxl-10',
  headingColClass = 'col-md-9 col-lg-7 col-xl-6 mx-auto'
}) => {
  // used for copy button
  useClipboard();
  const { pathname } = useRouter();

  // render the links
  const renderLinks = (data: Links) => {
    return data.map((item) => (
      <li key={item.title}>
        <NextLink title={item.title} href={item.url} className={pathname === item.url ? 'active' : ''} />
      </li>
    ));
  };

  return (
    <Fragment>
      <PageProgress />

      <div className="content-wrapper">
        {/* ========== header ========== */}
        <header className="wrapper bg-soft-primary">
          <Navbar
            language
            button={<NextLink title="Contact" href="/contact-1" className="btn btn-sm btn-primary rounded-pill" />}
          />
        </header>

        {/* ========== page heading ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className={headingColClass}>
                <h1 className="display-1 mb-3">{pageTitle}</h1>
                <p className={descriptionClass}>{description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== main content ========== */}
        <div className="container">
          <div className="row">
            <aside className="col-xl-2 sidebar doc-sidebar mt-md-0 py-16 d-none d-xl-block">
              {navigations.map(({ id, title, children }) => (
                <div className="widget pb-3" key={id}>
                  <h6 className="widget-title fs-17 mb-2">{title}</h6>
                  <nav id={id}>
                    <ul className="list-unstyled fs-sm lh-sm text-reset">{renderLinks(children)}</ul>
                  </nav>
                </div>
              ))}
            </aside>

            <div className="col-xl-8 order-xl-2">{children}</div>

            {quickAccssLinks && (
              <aside className="col-xl-2 order-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block">
                <div className="widget">
                  <h6 className="widget-title fs-17 mb-2 ps-xl-5">On this page</h6>
                  <nav className="ps-xl-5" id="sidebar-nav">
                    <ul className="list-unstyled fs-sm lh-sm text-reset">
                      {quickAccssLinks.map((item, i) => (
                        <li key={i}>
                          <ScrollLink smooth spy activeClass="active" to={item.url} className="nav-link scroll">
                            {item.title}
                          </ScrollLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>
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

export default DocLayout;
