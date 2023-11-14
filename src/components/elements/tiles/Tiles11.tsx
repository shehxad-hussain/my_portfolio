import { FC } from 'react';

const Tiles11: FC = () => {
  return (
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <figure className="rounded">
          <img src="/img/photos/g12.jpg" srcSet="/img/photos/g12@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-md-6 align-self-end">
        <figure className="rounded">
          <img src="/img/photos/g13.jpg" srcSet="/img/photos/g13@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-12">
        <figure className="rounded mx-md-5">
          <img src="/img/photos/g11.jpg" srcSet="/img/photos/g11@2x.jpg 2x" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Tiles11;
