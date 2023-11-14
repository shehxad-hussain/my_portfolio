import { FC } from 'react';
// -------- data -------- //
import { processList7 } from 'data/process';

const Process8: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img className="w-auto" src="/img/illustrations/i3.png" srcSet="/img/illustrations/i3@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-15 text-uppercase text-line text-primary mb-3">How It Works?</h2>
        <h3 className="display-5 mb-7 pe-xxl-5">Everything you need on creating a business process.</h3>

        {processList7.map(({ id, title, description, Icon }, i) => {
          const lastItem = i === processList7.length - 1;

          return (
            <div className={`d-flex flex-row ${lastItem ? 'mb-0' : 'mb-4'}`} key={id}>
              <div>
                <Icon />
              </div>

              <div>
                <h4 className="mb-1">{title}</h4>
                <p className="mb-1">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process8;
