import { FC } from 'react';
import NextLink from '../links/NextLink';

// ==================================================================================
type ServiceCardProps = {
  url: string;
  icon: string;
  title: string;
  className?: string;
  description: string;
};
// ==================================================================================

const ServiceCard5: FC<ServiceCardProps> = (props) => {
  const { icon, title, description, url, className = 'card shadow-lg mb-md-6 mt-lg-6' } = props;

  return (
    <div className={className}>
      <div className="card-body">
        <div className="icon btn btn-circle btn-lg btn-soft-purple pe-none mb-3">
          <i className={`uil ${icon}`} />
        </div>

        <h4>{title}</h4>
        <p className="mb-2">{description}</p>
        <NextLink title="Learn More" href={url} className="more hover link-purple" />
      </div>
    </div>
  );
};

export default ServiceCard5;
