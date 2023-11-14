import { FC, Fragment } from 'react';
import NextLink from './links/NextLink';

// =============================================================
type CollapseProps = {
  id: string;
  total: number;
  title: string;
  expanded: boolean;
  items: { title: string; url: string }[];
};
// =============================================================

const Collapse: FC<CollapseProps> = (props) => {
  const { id, total, title, expanded, items } = props;

  return (
    <Fragment>
      <a
        href="#"
        aria-expanded={expanded}
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        className="align-items-center rounded link-body"
      >
        {title} <span className="fs-sm text-muted ms-1">({total})</span>
      </a>

      <div className={`collapse mt-1 ${expanded ? 'show' : ''}`} id={id}>
        <ul className="btn-toggle-nav list-unstyled ps-2">
          {items.map(({ title, url }, id) => (
            <li key={id}>
              <NextLink title={title} href={url} className="link-body" />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Collapse;
