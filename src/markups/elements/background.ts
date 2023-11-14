const imageBackgroundMarkup = `<section
  className="wrapper image-wrapper bg-image bg-overlay text-white"
  style={{ backgroundImage: 'url(/img/photos/bg1.jpg)' }}
></section>

<section
  className="wrapper image-wrapper bg-image bg-full bg-overlay text-white"
  style={{ backgroundImage: 'url(/img/photos/bg1.jpg)' }}
></section>
`;

const gradientMarkup = `<section className="wrapper gradient-3 text-white"></section>
<section className="wrapper bg-gradient-primary text-white"></section>
<section className="wrapper bg-gradient-reverse-primary text-white"></section>
`;

const patternMarkup = `<section
  className="wrapper pattern-wrapper bg-image text-white"
  style={{ backgroundImage: 'url(/img/pattern.png)' }}
></section
`;

const videoMarkup = `<section className="video-wrapper bg-overlay ratio ratio-16x9">
  <video poster="/img/photos/movie.jpg" src="/media/movie.mp4" loop muted autoPlay playsInline />
  <div className="video-content">
    <div className="container text-center">
      <h2 className="display-5 mb-0 text-white text-center">Content goes here</h2>
    </div>
  </div>
</section>
`;

const darkMarkup = `<section className="wrapper bg-dark text-white"></section>`;
const colorMarkup = `<section className="wrapper bg-primary text-white"></section>`;
const softMarkup = `<section className="wrapper bg-soft-primary"></section>`;
const paleMarkup = `<section className="wrapper bg-pale-primary"></section>`;

export {
  imageBackgroundMarkup,
  gradientMarkup,
  paleMarkup,
  patternMarkup,
  videoMarkup,
  darkMarkup,
  colorMarkup,
  softMarkup
};
