import { FC, ReactElement } from 'react';

// ==============================================================
type IconLinkProps = { href: string; icon: ReactElement };
// ==============================================================

const IconLink: FC<IconLinkProps> = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

export default IconLink;
