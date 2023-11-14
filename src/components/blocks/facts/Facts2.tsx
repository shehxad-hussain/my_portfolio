import { FC, ReactElement } from 'react';
import { Counter3 } from 'components/reuseable/counter';
// -------- data -------- //
import { factList1 } from 'data/facts';

// ===========================================================================
type Facts2Props = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
};
// ===========================================================================

const Facts2: FC<Facts2Props> = ({
  title = 'We are proud of our creative team',
  subtitle = 'Just sit back and relax while we take care of your business needs.'
}) => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
      <div className="col-lg-4">
        <h3 className="display-4 mb-3 pe-xl-10">{title}</h3>
        <p className="lead fs-lg mb-0 pe-xxl-10">{subtitle}</p>
      </div>

      <div className="col-lg-8 mt-lg-2">
        <div className="row align-items-center counter-wrapper gy-6 text-center">
          {factList1.map(({ id, number, title, Icon }) => (
            <Counter3 title={title} number={number} Icon={<Icon />} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts2;
