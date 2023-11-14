import { FC } from 'react';

const images = [
  {
    id: 1,
    className: 'col-md-4 offset-md-2 align-self-end',
    image: { '1x': '/img/photos/g1.jpg', '2x': '/img/photos/g1@2x.jpg 2x' }
  },
  {
    id: 2,
    className: 'col-md-6 align-self-end',
    image: { '1x': '/img/photos/g2.jpg', '2x': '/img/photos/g2@2x.jpg 2x' }
  },
  {
    id: 3,
    className: 'col-md-6 offset-md-1',
    image: { '1x': '/img/photos/g3.jpg', '2x': '/img/photos/g3@2x.jpg 2x' }
  },
  {
    id: 4,
    className: 'col-md-4 align-self-start',
    image: { '1x': '/img/photos/g4.jpg', '2x': '/img/photos/g4@2x.jpg 2x' }
  }
];

const Tiles4: FC = () => {
  return (
    <div className="row gx-md-5 gy-5">
      {images.map(({ id, className, image }) => (
        <div className={className} key={id}>
          <figure className="rounded">
            <img src={image['1x']} srcSet={image['2x']} alt="" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Tiles4;
