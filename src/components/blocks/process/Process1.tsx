import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { ProcessList1 } from 'components/reuseable/process-list';
// -------- data -------- //
import { processList1 } from 'data/process';

const Process1: FC = () => {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
      <div className="col-lg-6 order-lg-2">
        {processList1.map((item) => {
          return <ProcessList1 shadow {...item} key={item.no} />;
        })}
      </div>

      <div className="col-lg-6">
        <h2 className="fs-16 text-uppercase text-muted mb-3">Our Strategy</h2>
        <h3 className="display-4 mb-5">Here are 3 working steps to organize our business projects.</h3>

        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna
          mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.
        </p>

        <p className="mb-6">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean
          lacinia bibendum nulla sed consectetur.
        </p>

        <NextLink href="#" title="Learn More" className="btn btn-primary rounded-pill mb-0" />
      </div>
    </div>
  );
};

export default Process1;
