import { FC } from 'react';
import { Banner4 } from '../banner';
import { ServiceCard3 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { aboutList4 } from 'data/about';

const About21: FC = () => {
  return (
    <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-15 mb-md-17">
      <div className="col-lg-6 position-relative">
        <Banner4 hideShape btnColor="white" />
      </div>

      <div className="col-lg-6">
        <h2 className="fs-16 text-uppercase text-muted mb-3">What Makes Us Different?</h2>
        <h3 className="display-3 mb-8">We make spending stress free so you have the perfect control.</h3>
        <div className="row gy-6">
          {aboutList4.map(({ id, Icon, ...item }) => (
            <div className="col-md-6" key={id}>
              <ServiceCard3 {...item} Icon={<Icon className="icon-svg-xs solid-duo text-purple-pink me-4" />} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About21;
