import { FC, Fragment } from 'react';

// ======================================================
type Banner4Props = {
  imageName?: string;
  hideShape?: boolean;
  btnColor?: 'white' | 'primary';
};
// ======================================================

const Banner4: FC<Banner4Props> = ({ hideShape, imageName = 'about12', btnColor = 'primary' }) => {
  return (
    <Fragment>
      <a
        data-glightbox
        href="/media/movie.mp4"
        className={`btn btn-circle btn-${btnColor} btn-play ripple mx-auto mb-5 position-absolute`}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 3 }}
      >
        <i className="icn-caret-right" />
      </a>

      {!hideShape && (
        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
        />
      )}

      <figure className="rounded">
        <img src={`/img/photos/${imageName}.jpg`} srcSet={`/img/photos/${imageName}@2x.jpg 2x`} alt={imageName} />
      </figure>
    </Fragment>
  );
};

export default Banner4;
