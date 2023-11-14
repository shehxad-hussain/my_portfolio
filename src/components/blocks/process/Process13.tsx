import { FC } from 'react';
import Plyr from 'plyr-react';
import Hex from 'icons/Hex';
// -------- data -------- //
import { processList10 } from 'data/process';

const Process13: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-15 py-md-17">
        <div className="row text-center">
          <div className="col-lg-10 mx-auto position-relative">
            <div className="position-relative">
              <div className="shape pale-pink rellax w-18 h-18" style={{ top: '1rem', left: '-4.2rem' }}>
                <Hex />
              </div>

              <div className="shape pale-primary rellax w-18 h-18" style={{ bottom: '2rem', right: '-3.5rem' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  className="svg-inject icon-svg w-100 h-100"
                >
                  <g data-name="Layer 2">
                    <path
                      className="svg-fill"
                      d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                      data-name="Layer 1"
                    />
                  </g>
                </svg>
              </div>

              <Plyr
                options={{ loadSprite: true, clickToPlay: true }}
                source={{ type: 'video', sources: [{ src: '/media/movie.mp4' }] }}
              />
            </div>
          </div>
        </div>

        <div className="row text-center mt-12">
          <div className="col-lg-10 mx-auto">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Our Working Process</h2>
            <h3 className="display-3 text-center px-xl-10 px-xxl-15 mb-10">
              Find out everything you need to know about creating a business process model
            </h3>
            <div className="row gx-lg-8 gx-xl-12 process-wrapper arrow text-center">
              {processList10.map(({ id, title, description, Icon }) => (
                <div className="col-md-4" key={id}>
                  <Icon className="icon-svg-sm solid-duo text-purple-pink mb-4" />
                  <h3 className="fs-22">{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process13;
