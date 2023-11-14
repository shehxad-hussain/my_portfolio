import { FC } from 'react';

const Tiles1: FC = () => {
  return (
    <div className="row gx-md-5 gy-5 align-items-center">
      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-10 offset-md-2">
            <figure className="rounded">
              <img src="/img/photos/ab1.jpg" srcSet="/img/photos/ab1@2x.jpg 2x" alt="" />
            </figure>
          </div>

          <div className="col-md-12">
            <figure className="rounded">
              <img src="/img/photos/ab2.jpg" srcSet="/img/photos/ab2@2x.jpg 2x" alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <figure className="rounded">
          <img src="/img/photos/ab3.jpg" srcSet="/img/photos/ab3@2x.jpg 2x" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Tiles1;
