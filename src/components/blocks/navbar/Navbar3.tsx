import Link from 'next/link';
import LinkType from 'types/link';
import { FC, Fragment, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- data -------- //
import { blogsNavigation, demos, pages, projectsNavigation } from 'data/navigation';

// ===================================================================
type Navbar3Props = {
  logoAlt: string;
  stickyBox?: boolean;
  navClassName?: string;
};
// ===================================================================

const Navbar3: FC<Navbar3Props> = ({ navClassName, logoAlt, stickyBox }) => {
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically added navbar classname
  const fixedClassName = `navbar navbar-expand-lg center-logo transparent position-absolute navbar-light navbar-clone fixed`;

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  const logos = (
    <>
      <img className="logo-dark" src={`/img/${logoAlt}.png`} srcSet={`/img/${logoAlt}@2x.png 2x`} alt={logoAlt} />
      <img className="logo-light" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt="logo-light" />
    </>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container justify-content-between align-items-center">
          <div className="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
            <div className="navbar-brand">
              <NextLink href="/" title={logos} />
            </div>

            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item d-lg-none">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-nav"
                    className="hamburger offcanvas-nav-btn"
                  >
                    <span />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
            <div
              id="offcanvas-nav"
              data-bs-scroll="true"
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
            >
              <div className="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15">
                <NextLink href="/" className="transition-none d-none d-lg-flex" title={logos} />
                <h3 className="text-white fs-30 mb-0 d-lg-none">Sandbox</h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-bs-dismiss="offcanvas"
                  className="btn-close btn-close-white d-lg-none"
                />
              </div>

              <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                <div className="navbar-nav ms-lg-auto">
                  {/* ===================== demos nav item ===================== */}
                  <li className="nav-item dropdown dropdown-mega">
                    <DropdownToggleLink title="Demos" className="nav-link dropdown-toggle" />

                    <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                      <li className="mega-menu-content mega-menu-scroll">
                        <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                          {demos.map(({ id, title, url, thumnail }) => (
                            <li className="col" key={id}>
                              <Link href={url}>
                                <a className="dropdown-item">
                                  <img
                                    alt={title}
                                    src={`/img/demos/${thumnail}.jpg`}
                                    srcSet={`/img/demos/${thumnail}@2x.jpg 2x`}
                                    className="rounded lift d-none d-lg-block"
                                  />

                                  <span className="d-lg-none">{title}</span>
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>

                        <span className="d-none d-lg-flex">
                          <i className="uil uil-direction" />
                          <strong>Scroll to view more</strong>
                        </span>
                      </li>
                    </ul>
                  </li>

                  {/*  ===================== pages nav item  ===================== */}
                  <li className="nav-item dropdown">
                    <DropdownToggleLink title="Pages" className="nav-link dropdown-toggle" />

                    <ul className="dropdown-menu">
                      {pages.map(({ id, title, children }) => {
                        return (
                          <li className="dropdown dropdown-submenu dropend" key={id}>
                            <DropdownToggleLink title={title} />
                            <ul className="dropdown-menu">{renderLinks(children)}</ul>
                          </li>
                        );
                      })}

                      <ListItemLink href="/pricing" title="Pricing" linkClassName="dropdown-item" />
                    </ul>
                  </li>

                  {/* ===================== projects nav item  ===================== */}
                  <li className="nav-item dropdown">
                    <DropdownToggleLink title="Projects" className="nav-link dropdown-toggle" />

                    <div className="dropdown-menu dropdown-lg">
                      <div className="dropdown-lg-content">
                        {projectsNavigation.map(({ title, children }, i) => (
                          <div key={title + i}>
                            <h6 className="dropdown-header">{title}</h6>
                            <ul className="list-unstyled">{renderLinks(children)}</ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                </div>
              </div>

              <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                <div className="navbar-nav me-lg-auto">
                  {/* ===================== blog nav item ===================== */}
                  <li className="nav-item dropdown">
                    <DropdownToggleLink title="Blog" className="nav-link dropdown-toggle" />

                    <ul className="dropdown-menu">
                      {blogsNavigation.map(({ id, url, title, children }) => {
                        if (!url && children) {
                          return (
                            <li className="dropdown dropdown-submenu dropend" key={id}>
                              <DropdownToggleLink title="Blog Posts" />
                              <ul className="dropdown-menu">{renderLinks(children)}</ul>
                            </li>
                          );
                        }
                        return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
                      })}
                    </ul>
                  </li>

                  {/* ===================== block item ===================== */}
                  <li className="nav-item dropdown">
                    <DropdownToggleLink title="Blocks" className="nav-link dropdown-toggle" />

                    <ul className="dropdown-menu">
                      {blogsNavigation.map(({ id, url, title, children }) => {
                        if (!url && children) {
                          return (
                            <li className="dropdown dropdown-submenu dropend" key={id}>
                              <DropdownToggleLink title="Blog Posts" />
                              <ul className="dropdown-menu">{renderLinks(children)}</ul>
                            </li>
                          );
                        }
                        return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
                      })}
                    </ul>
                  </li>

                  {/* ===================== block item ===================== */}
                  <li className="nav-item dropdown">
                    <DropdownToggleLink title="Documentation" className="nav-link dropdown-toggle" />

                    <ul className="dropdown-menu">
                      {blogsNavigation.map(({ id, url, title, children }) => {
                        if (!url && children) {
                          return (
                            <li className="dropdown dropdown-submenu dropend" key={id}>
                              <DropdownToggleLink title="Blog Posts" />
                              <ul className="dropdown-menu">{renderLinks(children)}</ul>
                            </li>
                          );
                        }
                        return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
                      })}
                    </ul>
                  </li>
                </div>
              </div>

              {/* ============= show contact info in the small device sidebar ============= */}
              <div className="offcanvas-body d-lg-none order-4 mt-auto">
                <div className="offcanvas-footer">
                  <div>
                    <NextLink title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
                    <br />
                    <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
                    <br />
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

// set deafult Props
Navbar3.defaultProps = {
  stickyBox: true,
  navClassName: 'navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark'
};

export default Navbar3;
