import { FC } from 'react';
import Link from 'next/link';
import LinkType from 'types/link';
// -------- custom component -------- //
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- data -------- //
import { blogsNavigation, demos, pages, projectsNavigation } from 'data/navigation';

const Navigations: FC = () => {
  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  return (
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
    </ul>
  );
};

export default Navigations;
