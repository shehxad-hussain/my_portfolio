import { FC } from 'react';
import data from 'data/demo-26';

const About26: FC = () => {
  return (
    <div className="row gx-3 gy-10 mb-14 mb-md-16 align-items-center">
      <div className="col-lg-6">
        <figure>
          <img className="w-auto" src="/img/illustrations/3d8.png" srcSet="/img/illustrations/3d8@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5 ms-auto">
        <h2 className="fs-16 text-uppercase text-grape mb-3">Why Choose Us?</h2>
        <h3 className="display-4 mb-8">So here a few reasons why our valued customers choose us.</h3>

        <div className="row gy-6">
          {data.abouts.map(({ id, Icon, title, description }) => (
            <div className="col-md-6" key={id}>
              <div className="d-flex flex-row">
                <Icon className="icon-svg-xs text-grape me-4" />
                <div>
                  <h4 className="mb-1">{title}</h4>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About26;
