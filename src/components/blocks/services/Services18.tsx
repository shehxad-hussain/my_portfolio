import { FC } from 'react';
// -------- hook -------- //
import useProgressbar from 'hooks/useProgressbar';
// -------- data -------- //
import { skill1 } from 'data/skill';
import { serviceList8 } from 'data/service';

const Services18: FC = () => {
  // used for the animated line
  useProgressbar();

  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 py-md-18">
        <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10">
          <div className="col-lg-6 order-lg-2">
            <ul className="progress-list">
              {skill1.map(({ id, title, percent, color }) => (
                <li key={id}>
                  <p>{title}</p>
                  <div className={`progressbar line soft-${color}`} data-value={percent} />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <h2 className="display-4 mb-3">What I Do?</h2>
            <p className="lead fs-20 mb-5">
              Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis
              risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
              magna, vel scelerisque nisl.
            </p>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-6 text-center">
          {serviceList8.map(({ id, Icon, title, description }) => (
            <div className="col-md-6 col-lg-3" key={id}>
              <Icon className="icon-svg-md text-violet mb-3" />
              <h4>{title}</h4>
              <p className="mb-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services18;
