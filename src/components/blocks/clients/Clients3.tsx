import { FC, Fragment } from 'react';
import Clients1 from './Clients1';

const Clients3: FC = () => {
  return (
    <Fragment>
      <h2 className="fs-15 text-uppercase text-muted text-center mb-8">Trusted by Over 5000 Clients</h2>
      <div className="px-lg-5 mb-14 mb-md-19">
        <Clients1 />
      </div>
    </Fragment>
  );
};

export default Clients3;
