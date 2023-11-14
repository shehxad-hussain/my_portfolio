import { FC } from 'react';
import animation from 'utils/animation';
import { Counter2 } from 'components/reuseable/counter';
// -------- data -------- //
import { factList6 } from 'data/facts';

const Facts9: FC = () => {
  return (
    <div className="row" style={animation({ name: 'slideInUp', delay: '100ms' })}>
      <div className="col-12 mt-n20">
        <figure className="rounded">
          <img src="/img/photos/about5.jpg" srcSet="/img/photos/about5@2x.jpg 2x" alt="" />
        </figure>

        <div className="col-xl-10 mx-auto">
          <div
            style={{ backgroundImage: 'url(/img/photos/bg2.jpg)' }}
            className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top"
          >
            <div className="card-body p-9 p-xl-10">
              <div className="row align-items-center counter-wrapper gy-4 text-center">
                {factList6.map(({ id, ...item }) => (
                  <Counter2 key={id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts9;
