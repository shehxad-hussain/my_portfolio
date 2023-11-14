import { FC, Fragment } from 'react';
import { ProcessList2 } from 'components/reuseable/process-list';
// -------- data -------- //
import { processList } from 'data/demo-12';

const Process11: FC = () => {
  return (
    <Fragment>
      <div className="row mb-8 text-center">
        <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
          <h2 className="fs-16 text-uppercase text-primary mb-3">Company Strategy</h2>
          <h3 className="display-4">Just sit and relax while we take care of your business needs.</h3>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
        <div className="col-lg-6 position-relative">
          <div className="shape bg-dot leaf rellax w-17 h-18" style={{ bottom: '-2rem', left: '-0.7rem' }} />

          <figure className="rounded">
            <img src="/img/photos/about20.jpg" srcSet="/img/photos/about20@2x.jpg 2x" alt="" />
          </figure>
        </div>

        <div className="col-lg-6 col-xxl-5">
          <h3 className="display-6 mb-7">Our Working Process</h3>
          {processList.map((item) => (
            <ProcessList2 {...item} key={item.no} className="icon btn btn-circle btn-soft-primary pe-none me-5" />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Process11;
