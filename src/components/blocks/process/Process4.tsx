import { FC } from 'react';
import Plyr from 'plyr-react';
import animation from 'utils/animation';
// -------- data -------- //
import { processList5 } from 'data/process';

const Process4: FC = () => {
  return (
    <div className="wrapper bg-soft-primary">
      <div className="container py-14 pt-md-16 pt-lg-0 pb-md-16">
        <div className="row text-center" style={animation({ name: 'slideInUp', delay: '0ms' })}>
          <div className="col-lg-10 mx-auto">
            <div className="mt-lg-n20 mt-xl-n22 position-relative">
              <div className="shape bg-dot red rellax w-16 h-18" style={{ zIndex: 0, top: '1rem', left: '-3.9rem' }} />
              <div
                className="shape rounded-circle bg-line primary rellax w-18 h-18"
                style={{ zIndex: 0, bottom: '2rem', right: '-3rem' }}
              />

              <Plyr
                options={{ loadSprite: true, clickToPlay: true }}
                source={{ type: 'video', sources: [{ src: '/media/movie.mp4' }] }}
              />
            </div>
          </div>
        </div>

        <div className="row text-center mt-12">
          <div className="col-lg-9 mx-auto">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Our Process</h2>
            <h3 className="display-4 mb-0 text-center px-xl-10 px-xxl-15">
              Find out everything you need to know about creating a business process model
            </h3>

            <div className="row gx-lg-8 gx-xl-12 process-wrapper text-center mt-9">
              {processList5.map(({ title, subtitle, Icon, color }) => (
                <div key={title} className="col-md-4">
                  {<Icon className={`icon-svg-md text-${color} mb-3`} />}
                  <h4 className="mb-1">{title}</h4>
                  <p>{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process4;
