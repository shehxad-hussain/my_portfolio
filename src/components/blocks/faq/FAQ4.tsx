import { FC } from 'react';
import { Counter2 } from 'components/reuseable/counter';
// -------- data -------- //
import { facts } from 'data/demo-11';

const FAQ4: FC = () => {
  return (
    <div className="row mt-md-n50p mb-14 mb-md-7">
      <div className="col-xl-10 mx-auto">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400"
          style={{ backgroundImage: 'url(/img/photos/bg2.jpg)' }}
        >
          <div className="card-body p-9 p-xl-11">
            <div className="row align-items-center counter-wrapper gy-8 text-center text-white">
              {facts.map((item) => (
                <Counter2 key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ4;
