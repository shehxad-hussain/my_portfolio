import Link from 'next/link';
import { FC, ReactElement } from 'react';

// ==============================================================
type NextLinkProps = {
  href: string;
  className?: string;
  title: string | ReactElement;
};
// ==============================================================

const NextLink: FC<NextLinkProps> = (props) => {
  const { href, className, title } = props;

  return (
    <Link href={href}>
      <a className={className}>{title}</a>
    </Link>
  );
};

export default NextLink;
