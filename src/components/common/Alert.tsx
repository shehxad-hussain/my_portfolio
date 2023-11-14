import { FC } from 'react';
import NextLink from '../reuseable/links/NextLink';

const Alert: FC = () => {
  return (
    <div className="alert bg-primary text-white alert-dismissible fade show rounded-0 mb-0 text-lg-center" role="alert">
      <div className="container">
        <div className="alert-inner p-0">
          <span className="badge badge-lg bg-white text-primary text-uppercase rounded me-2">Update</span> New version
          of our product is finally <NextLink title="here" href="#" className="alert-link link-white hover" />!
        </div>
      </div>

      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
    </div>
  );
};

export default Alert;
