import { FC } from 'react';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList1 } from 'data/about';

const About8: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-15 mb-md-18 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img className="w-auto" src="/img/illustrations/i9.png" srcSet="/img/illustrations/i9@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-3">Have Perfect Control</h3>
        <p className="lead fs-lg lh-sm">We are focused on establishing long-term relationships with customers.</p>
        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </p>

        <ListColumn list={aboutList1} />
      </div>
    </div>
  );
};

export default About8;
