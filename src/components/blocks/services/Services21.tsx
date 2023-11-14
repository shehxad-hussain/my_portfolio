import { FC } from 'react';
import { ServiceCard1 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList11 } from 'data/service';

const Services21: FC = () => {
  return (
    <div className="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17">
      {serviceList11.map(({ id, Icon, ...item }) => (
        <ServiceCard1 {...item} key={id} linkUrl="#" Icon={Icon} />
      ))}
    </div>
  );
};

export default Services21;
