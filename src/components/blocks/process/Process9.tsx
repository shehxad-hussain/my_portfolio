import { FC } from 'react';
// -------- custom component -------- //
import { Banner4 } from '../banner';
import { ServiceCard3 } from 'components/reuseable/service-cards';
// -------- custom hooks -------- //
import useLightBox from 'hooks/useLightBox';
// -------- data -------- //
import { processList8 } from 'data/process';

const Process9: FC = () => {
  // lighbox hook called
  useLightBox();

  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-19">
      <div className="col-md-8 col-lg-6 position-relative">
        <Banner4 imageName="about8" />
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-15 text-uppercase text-muted mb-3">How It Works?</h2>
        <h3 className="display-4 mb-7">Here are the 3 working steps on success.</h3>

        {processList8.map(({ Icon, id, iconColor, ...item }) => (
          <ServiceCard3 key={id} {...item} Icon={<Icon className={`icon-svg-md text-${iconColor} me-5`} />} />
        ))}
      </div>
    </div>
  );
};

export default Process9;
