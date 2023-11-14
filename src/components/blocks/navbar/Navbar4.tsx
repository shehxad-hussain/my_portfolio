import { FC, Fragment, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- partial header component -------- //
import Info from './partials/Info';
import Search from './partials/Search';
import Navigations from './partials/Navigations';
import OnePageDemoLinks from './partials/OnePageDemoLinks';

// ===================================================================
type Navbar4Props = { navClassName?: string; onePageDemo?: boolean };
// ===================================================================

const Navbar4: FC<Navbar4Props> = ({ navClassName, onePageDemo }) => {
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically added navbar classname
  const fixedClassName = `navbar navbar-expand-lg extended extended-alt navbar-light navbar-bg-light navbar-clone fixed`;

  return (
    <Fragment>
      <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container flex-lg-column">
          <div className="topbar d-flex flex-row justify-content-lg-center align-items-center">
            <div className="navbar-brand">
              <NextLink
                href="/"
                title={<img alt="logo" src="/img/logo-dark.png" srcSet="/img/logo-dark@2x.png 2x" />}
              />
            </div>
          </div>

          <div className="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center justify-content-between">
            {/* ============= left side content ============= */}
            <div className="navbar-other w-100 d-none d-lg-block">
              <SocialLinks className="nav social social-muted" />
            </div>

            <div
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
              data-bs-scroll="true"
              id="offcanvas-nav"
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
                {onePageDemo ? <OnePageDemoLinks /> : <Navigations />}

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

            {/* ============= right side content ============= */}
            <div className="navbar-other w-100 d-flex">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                {/* ============= info button ============= */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                    <i className="uil uil-info-circle" />
                  </a>
                </li>
                {/* ============= search icon button ============= */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                    <i className="uil uil-search" />
                  </a>
                </li>

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
        </div>
      </nav>

      {/* ============= info sidebar ============= */}
      <Info />

      {/* ============= show search box ============= */}
      <Search />
    </Fragment>
  );
};

// set deafult Props
Navbar4.defaultProps = { navClassName: 'navbar navbar-expand-lg extended extended-alt navbar-light navbar-bg-light' };

export default Navbar4;
