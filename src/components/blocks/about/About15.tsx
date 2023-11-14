import { FC } from 'react';
import ListColumn from 'components/reuseable/ListColumn';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { aboutList1 } from 'data/about';

const About15: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
      <div className="col-lg-6 order-lg-2 position-relative">
        <div
          className="shape rounded-circle bg-line leaf rellax w-18 h-18"
          style={{ bottom: '-2.5rem', right: '-1.5rem' }}
        />

        <figure className="rounded">
          <img src="/img/photos/about19.jpg" srcSet="/img/photos/about19@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-6">
        <h3 className="display-6 mb-4">Why Choose Us?</h3>
        <p className="mb-5">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius.
        </p>

        <ListColumn list={aboutList1} bulletColor="primary" />

        <NextLink title="More Details" href="#" className="btn btn-soft-primary rounded-pill mt-6 mb-0" />
      </div>
    </div>
  );
};

export default About15;
