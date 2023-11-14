import { FC } from 'react';
import animation from 'utils/animation';

const Tiles6: FC = () => {
  return (
    <div className="row gx-0 mb-16 mb-mb-20">
      <div className="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n20">
        <img
          alt="hero"
          src="/img/photos/sa1.jpg"
          srcSet="/img/photos/sa1@2x.jpg 2x"
          className="img-fluid mx-auto rounded shadow-lg"
          style={animation({ name: 'slideInUp', delay: '1500ms' })}
        />

        <img
          alt="demo"
          src="/img/photos/sa2.jpg"
          className="position-absolute rounded shadow-lg"
          style={{
            top: '20%',
            right: '-10%',
            maxWidth: '30%',
            height: 'auto',
            ...animation({ name: 'slideInRight', delay: '1800ms' })
          }}
        />

        <img
          alt="demo"
          src="/img/photos/sa3.jpg"
          className="position-absolute rounded shadow-lg"
          style={{
            top: '10%',
            left: '-10%',
            maxWidth: '30%',
            height: 'auto',
            ...animation({ name: 'slideInLeft', delay: '2100ms' })
          }}
        />

        <img
          alt="demo"
          src="/img/photos/sa4.jpg"
          className="position-absolute rounded shadow-lg"
          style={{
            left: '-13%',
            bottom: '10%',
            height: 'auto',
            maxWidth: '30%',
            ...animation({ name: 'slideInLeft', delay: '2400ms' })
          }}
        />
      </div>
    </div>
  );
};

export default Tiles6;
