import { FC } from 'react';
import { Counter2 } from 'components/reuseable/counter';
// -------- data -------- //
import { factList2 } from 'data/facts';

const Facts3: FC = () => {
  return (
    <div className="row">
      <div className="col-xl-10 mx-auto">
        <div
          style={{ backgroundImage: 'url(/img/photos/bg3.jpg)' }}
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top"
        >
          <div className="card-body p-9 p-xl-10">
            <div className="row align-items-center counter-wrapper gy-4 text-center">
              {factList2.map((item) => (
                <Counter2 key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts3;
