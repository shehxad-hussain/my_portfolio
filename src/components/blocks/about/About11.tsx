import { FC, Fragment } from 'react';
import { Tiles10 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList3, aboutList1 } from 'data/about';

const About11: FC = () => {
  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-12 align-items-center">
        <div className="col-lg-6 order-lg-2">
          <Tiles10 />
        </div>

        <div className="col-lg-6">
          <h2 className="display-4 mb-3">Who Are We?</h2>
          <p className="lead fs-lg">
            We are a digital and branding company that believes in the power of creative strategy and along with great
            design.
          </p>
          <p className="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et.
          </p>

          <ListColumn rowClass="gx-xl-8" list={aboutList1} />
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

export default About11;
