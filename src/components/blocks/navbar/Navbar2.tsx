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
// -------- partial header component -------- //
import Info from './partials/Info';
import Language from './partials/Language';
// -------- data -------- //
import {
  demos,
  pages,
  blogsNavigation,
  blocksNavigation,
  projectsNavigation,
  documentionNavigation
} from 'data/navigation';

// ===================================================================
type Navbar2Props = { navClassName?: string };
// ===================================================================

const Navbar2: FC<Navbar2Props> = ({ navClassName }) => {
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically added navbar classname
  const fixedClassName = `navbar navbar-expand-lg extended navbar-light navbar-bg-light caret-none navbar-clone fixed navbar-stick`;

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  return (
    <Fragment>
      <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container flex-lg-column">
          <div className="topbar d-flex flex-row w-100 justify-content-between align-items-center">
            <div className="navbar-brand">
              <NextLink
                href="/"
                title={<img alt="logo" src="/img/logo-dark.png" srcSet="/img/logo-dark@2x.png 2x" />}
              />
            </div>

            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                    <i className="uil uil-info-circle" />
                  </a>
                </li>

                <Language />

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

          <div className="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center">
            <div
              id="offcanvas-nav"
              data-bs-scroll="true"
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
            >
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-bs-dismiss="offcanvas"
                  className="btn-close btn-close-white"
                />
              </div>

              <div className="offcanvas-body d-flex flex-column h-100">
                <ul className="navbar-nav">
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

                  {/* ===================== blocks nav item ===================== */}
                  <li className="nav-item dropdown dropdown-mega">
                    <DropdownToggleLink title="Blocks" className="nav-link dropdown-toggle" />
                    <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                      <li className="mega-menu-content">
                        <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                          {blocksNavigation.map(({ id, thumnail, title, url }) => (
                            <li className="col" key={id}>
                              <Link href={url}>
                                <a className="dropdown-item">
                                  <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                                    <img className="rounded-0" src={thumnail} alt="" />
                                  </div>

                                  <span>{title}</span>
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* ===================== documentation nav item ===================== */}
                  <li className="nav-item dropdown dropdown-mega">
                    <DropdownToggleLink title="Documentation" className="nav-link dropdown-toggle" />
                    <ul className="dropdown-menu mega-menu">
                      <li className="mega-menu-content">
                        <div className="row gx-0 gx-lg-3">
                          <div className="col-lg-4">
                            <h6 className="dropdown-header">Usage</h6>
                            <ul className="list-unstyled cc-2 pb-lg-1">{renderLinks(documentionNavigation.usage)}</ul>

                            <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
                            <ul className="list-unstyled cc-2">{renderLinks(documentionNavigation.styleguide)}</ul>
                          </div>

                          <div className="col-lg-8">
                            <h6 className="dropdown-header">Elements</h6>
                            <ul className="list-unstyled cc-3">{renderLinks(documentionNavigation.elements)}</ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>

                {/* ============= show contact info in the small device sidebar ============= */}
                <div className="offcanvas-footer d-lg-none">
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

            {/* ============= right side header content ============= */}
            <div className="navbar-other ms-auto w-100 d-none d-lg-block">
              <SocialLinks className="nav social social-muted justify-content-end text-end" />
            </div>
          </div>
        </div>
      </nav>

      {/* ============= info sidebar ============= */}
      <Info />
    </Fragment>
  );
};

// set deafult Props
Navbar2.defaultProps = { navClassName: 'navbar navbar-expand-lg extended navbar-light navbar-bg-light caret-none' };

export default Navbar2;
