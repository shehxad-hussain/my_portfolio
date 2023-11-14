import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

// ==========================================================
interface DropdownToggleLinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  title: string;
}
// ==========================================================

const DropdownToggleLink: FC<DropdownToggleLinkProps> = (props) => {
  const { title, ...others } = props;
  return (
    <a href="#" data-bs-toggle="dropdown" className="dropdown-item dropdown-toggle" {...others}>
      {title}
    </a>
  );
};

export default DropdownToggleLink;
