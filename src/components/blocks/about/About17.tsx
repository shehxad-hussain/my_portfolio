import { FC } from 'react';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList1 } from 'data/about';

const About17: FC = () => {
  return (
    <div className="row gx-3 gy-10 mb-15 mb-md-18 align-items-center">
      <div className="col-lg-5 offset-lg-1">
        <figure>
          <img className="w-auto" src="/img/illustrations/3d2.png" srcSet="/img/illustrations/3d2@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5 offset-lg-1">
        <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Have Perfect Control</h2>
        <h3 className="display-4 mb-4">We bring solutions to make life easier for our customers.</h3>
        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue rutrum.
        </p>

        <ListColumn list={aboutList1} />
      </div>
    </div>
  );
};

export default About17;
