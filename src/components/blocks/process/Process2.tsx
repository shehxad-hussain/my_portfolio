import { FC } from 'react';
import { ProcessList2 } from 'components/reuseable/process-list';
// -------- data -------- //
import { processList3 } from 'data/process';

const Process2: FC = () => {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
      <div className="col-md-8 col-lg-6 position-relative">
        <div
          className="shape bg-line red rounded-circle rellax w-18 h-18"
          style={{ top: '-2.2rem', left: '-2.4rem' }}
        />

        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
        />

        <figure className="rounded">
          <img src="/img/photos/about9.jpg" srcSet="/img/photos/about9@2x.jpg 2x" alt="how-work" />
        </figure>
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="display-4 mb-3">How It Works?</h2>
        <p className="lead fs-lg mb-6">So here are three working steps why our valued customers choose us.</p>

        {processList3.map((item) => (
          <ProcessList2 {...item} key={item.no} className="icon btn btn-circle btn-primary pe-none me-5" />
        ))}
      </div>
    </div>
  );
};

export default Process2;
