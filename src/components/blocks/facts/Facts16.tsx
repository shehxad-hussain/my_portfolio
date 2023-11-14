import { FC } from 'react';
// -------- data -------- //
import { factList9 } from 'data/facts';

const Facts16: FC = () => {
  return (
    <section className="section-frame overflow-hidden">
      <div className="wrapper bg-soft-primary" style={{ borderRadius: '1rem' }}>
        <div className="container py-17">
          <div className="row text-center">
            <div className="col-xl-11 col-xxl-10 mx-auto">
              <h2 className="fs-16 text-uppercase text-muted mb-3">Company Facts</h2>
              <h3 className="display-4 mb-10 px-lg-20 px-xl-20">
                Save your time and money by choosing our professional team.
              </h3>
              <div className="row gy-6 text-center">
                {factList9.map(({ id, value, title, description, color }) => (
                  <div className="col-md-6 col-lg-3" key={id}>
                    <div className={`progressbar semi-circle ${color}`} data-value={value} />
                    <h4>{title}</h4>
                    <p className="mb-0">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts16;
