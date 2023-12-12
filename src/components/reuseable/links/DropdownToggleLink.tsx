import { FC } from 'react';
import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface DropdownToggleLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  title: string;
  href: string;
}

const DropdownToggleLink: FC<DropdownToggleLinkProps> = ({ title, href, ...others }) => {
  return (
    <Link href={href} >
      <a className="dropdown-item dropdown-toggle" {...others}>
        {title}
      </a>
    </Link>
  );
};

export default DropdownToggleLink;
