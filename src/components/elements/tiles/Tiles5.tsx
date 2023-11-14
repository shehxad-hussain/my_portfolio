import { FC, Fragment } from 'react';

const Tiles5: FC = () => {
  const images = ['about2', 'about3'];

  return (
    <Fragment>
      <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: '3rem', left: '5.5rem' }} />

      <div className="overlap-grid overlap-grid-2">
        {images.map((item, i) => (
          <div className="item" key={item + i}>
            <figure className="rounded shadow">
              <img src={`/img/photos/${item}.jpg`} srcSet={`/img/photos/${item}@2x.jpg 2x`} alt={item} />
            </figure>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Tiles5;
