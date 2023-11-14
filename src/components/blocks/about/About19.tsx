import { FC, Fragment } from 'react';
import { Tiles11 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList2, aboutList3 } from 'data/about';

const About19: FC = () => {
  return (
    <Fragment>
      <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
        <div className="col-lg-6">
          <Tiles11 />
        </div>

        <div className="col-lg-6">
          <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Who Are We?</h2>
          <h3 className="display-4 mb-4">Company that believes in the power of creative strategy.</h3>
          <p className="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
            bibendum nulla sed.
          </p>

          <ListColumn rowClass="gx-xl-8" list={aboutList2} />
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-18">
        {aboutList3.map(({ id, title, description }) => (
          <div className="col-lg-4" key={id}>
            <div className="d-flex flex-row">
              <div>
                <div className="icon btn btn-circle pe-none btn-soft-primary me-4">
                  <span className="number fs-18">{id}</span>
                </div>
              </div>

              <div>
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default About19;
