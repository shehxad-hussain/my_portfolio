import { FC } from 'react';
import { ProcessList2 } from 'components/reuseable/process-list';
// -------- data -------- //
import { processList } from 'data/demo-12';

const Process10: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img className="w-auto" src="/img/illustrations/i8.png" srcSet="/img/illustrations/i8@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-7">Our three process steps on creating awesome projects.</h3>
        {processList.map((item) => (
          <ProcessList2 {...item} key={item.no} className="icon btn btn-circle btn-soft-primary pe-none me-5" />
        ))}
      </div>
    </div>
  );
};

export default Process10;
