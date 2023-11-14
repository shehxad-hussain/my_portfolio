import { FC } from 'react';
// -------- data -------- //
import { processList6 } from 'data/process';

const Process5: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-10 mb-lg-19 mb-xl-22 align-items-center">
      <div className="col-lg-6">
        <figure>
          <img alt="how it work" src="/img/photos/device.png" srcSet="/img/photos/device@2x.png 2x" />
        </figure>
      </div>

      <div className="col-lg-6">
        <h2 className="fs-15 text-uppercase text-muted mb-3">How It Works</h2>
        <h3 className="display-4 mb-5">Download the app, create your profile and voilà, you're all set!</h3>
        <p className="mb-8">
          Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero. Etiam porta sem
          malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo.
        </p>

        <div className="row gy-6 gx-xxl-8 process-wrapper">
          {processList6.map(({ id, title, description, Icon, color }) => (
            <div className="col-md-4" key={id}>
              {<Icon className={`icon-svg-sm text-${color} mb-3`} />}
              <h4 className="mb-1">{title}</h4>
              <p className="mb-0">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process5;
