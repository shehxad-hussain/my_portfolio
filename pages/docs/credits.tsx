import { NextPage } from 'next';
import DocLayout from 'components/layouts/DocLayout';
// -------- data -------- //
const quickAccess = [
  { title: 'JS', url: 'snippet-1' },
  { title: 'Images', url: 'snippet-2' },
  { title: 'Icons', url: 'snippet-3' },
  { title: 'Illustrations', url: 'snippet-4' },
  { title: 'Fonts', url: 'snippet-5' }
];

const Credits: NextPage = () => {
  return (
    <DocLayout
      pageTitle="Credits"
      quickAccssLinks={quickAccess}
      description="List of source links of JS, images, icons and illustrations used in Sandbox."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">JS</h2>
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead className="text-navy">
                <tr>
                  <th scope="col" className="col-3">
                    Plugin Name
                  </th>
                  <th scope="col">Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://getbootstrap.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bootstrap
                    </a>
                  </td>
                  <td>The most popular HTML, CSS, and JS library in the world.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://github.com/prjct-samwest/scrollCue"
                      target="_blank"
                      rel="noreferrer"
                    >
                      scrollCue.js
                    </a>
                  </td>
                  <td>Show elements by scrolling.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://swiperjs.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Swiper
                    </a>
                  </td>
                  <td>The most modern mobile touch slider.</td>
                </tr>

                {/* <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://dixonandmoe.com/rellax/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      rellax.js
                    </a>
                  </td>
                  <td>A buttery smooth, super lightweight, vanilla javascript parallax library.</td>
                </tr> */}

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://github.com/Ins-V/iTooltip"
                      target="_blank"
                      rel="noreferrer"
                    >
                      iTooltip
                    </a>
                  </td>
                  <td>Transform native tooltip’s into customizable overlays.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://github.com/chintan9/plyr-react"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Plyr React
                    </a>
                  </td>
                  <td>A simple, accessible and customisable media player.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://biati-digital.github.io/glightbox/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GLightbox
                    </a>
                  </td>
                  <td>A touchable pure Javascript lightbox with mobile and video support.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://isotope.metafizzy.co"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Isotope
                    </a>
                  </td>
                  <td>Filter & sort magical layouts.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://react-countup.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      React CountUp
                    </a>
                  </td>
                  <td>Count up to a targeted number when the number becomes visible.</td>
                </tr>

                {/* <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="http://imakewebthings.com/waypoints/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Waypoints
                    </a>
                  </td>
                  <td>The easiest way to trigger a function when you scroll to an element.</td>
                </tr> */}

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://kimmobrunfeldt.github.io/progressbar.js"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Progressbar.js
                    </a>
                  </td>
                  <td>Responsive and slick progress bars with animated SVG paths.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://clipboardjs.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      clipboard.js
                    </a>
                  </td>
                  <td>A modern approach to copy text to clipboard.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://www.npmjs.com/package/react-syntax-highlighter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      React Syntax Highlighter
                    </a>
                  </td>
                  <td>Lightweight, extensible syntax highlighter.</td>
                </tr>

                {/* <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://github.com/iconfu/svg-inject"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SVGInject
                    </a>
                  </td>
                  <td>Replaces an img element with an inline SVG.</td>
                </tr> */}

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://github.com/tameemsafi/typewriterjs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TypewriterJS v2
                    </a>
                  </td>
                  <td>The typing effect with a pure HTML interface.</td>
                </tr>

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://github.com/fisshy/react-scroll"
                      target="_blank"
                      rel="noreferrer"
                    >
                      React Scroll
                    </a>
                  </td>
                  <td>Smooth Scroll behavior polyfill.</td>
                </tr>

                {/* <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://adrianklimek.github.io/replaceme/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ReplaceMe.js
                    </a>
                  </td>
                  <td>Lightweight text rotator written in vanilla JS.</td>
                </tr> */}

                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://day.js.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Day.js
                    </a>
                  </td>
                  <td>Format the date and times</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Images</h2>
        <div className="card">
          <div className="card-body">
            <h3>Pexels</h3>
            <p className="mb-5">
              To reach the collection of all images/videos from Pexels used in Sandbox, click{' '}
              <a
                href="https://www.pexels.com/collections/sandbox-gbw1t9c/"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="row gy-6 mb-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.pexels.com/photo/man-in-blue-collared-top-using-imac-indoors-3182782/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/pex1.jpg" srcSet="/img/docs/pex1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.pexels.com/photo/photo-of-people-using-laptop-s-3182759/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/pex2.jpg" srcSet="/img/docs/pex2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.pexels.com/photo/group-of-people-sitting-indoors-3184314/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/pex3.jpg" srcSet="/img/docs/pex3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>

            <hr className="mt-11 mb-10" />
            <h3>Rawpixel</h3>
            <p className="mb-5">
              To reach the collection of all images from Rawpixel used in Sandbox, click{' '}
              <a
                href="https://www.rawpixel.com/community-board/1391692/sandbox?sort=last_added&mode=shop&page=1"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="row gy-6 mb-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.rawpixel.com/image/56901/premium-photo-image-african-descent-analysing-analysis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/raw1.jpg" srcSet="/img/docs/raw1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.rawpixel.com/image/56894/premium-photo-image-african-descent-analysis-brainstorming"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/raw2.jpg" srcSet="/img/docs/raw2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.rawpixel.com/image/56966/premium-photo-image-african-descent-analysing-analysis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/raw3.jpg" srcSet="/img/docs/raw3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>

            <hr className="mt-11 mb-10" />
            <h3>Unsplash</h3>
            <p className="mb-5">
              To reach the collection of all images from Unsplash used in Sandbox, click{' '}
              <a
                href="https://unsplash.com/collections/vn4OtMorwCA/sandbox"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="row gy-6 mb-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="https://unsplash.com/photos/DMl5gG0yWWY" target="_blank" rel="noreferrer">
                    <img src="/img/docs/un1.jpg" srcSet="/img/docs/un1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="https://unsplash.com/photos/Ecnx13MEPK0" target="_blank" rel="noreferrer">
                    <img src="/img/docs/un2.jpg" srcSet="/img/docs/un2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="https://unsplash.com/photos/_-E_2D-wgjg" target="_blank" rel="noreferrer">
                    <img src="/img/docs/un3.jpg" srcSet="/img/docs/un3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>

            <hr className="mt-11 mb-10" />
            <h3>Freepik</h3>
            <p className="mb-5">
              To reach the Freepik collection first make sure you are logged into Freepik, then click{' '}
              <a
                href="https://www.freepik.com/user/collections/sandbox/2260699"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="row gy-6 mb-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.freepik.com/free-photo/community-young-people-posing-together_6981911.htm#&position=0&from_view=collections"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/fre1.jpg" srcSet="/img/docs/fre1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.freepik.com/free-photo/group-positive-young-people-working-together_6981914.htm#&position=3&from_view=collections"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/fre2.jpg" srcSet="/img/docs/fre2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.freepik.com/free-photo/community-young-people-happy-together_6981806.htm#&position=7&from_view=collections"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/fre3.jpg" srcSet="/img/docs/fre3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>

            <hr className="mt-11 mb-10" />
            <h3 className="mb-5">Pixeden</h3>
            <div className="row gy-6 mb-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/square-psd-invitation-card-paper-wrap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/pix1.jpg" srcSet="/img/docs/pix1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/square-psd-invitation-card-paper-wrap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/pix2.jpg" srcSet="/img/docs/pix2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-paper-bag-mockup-set"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/pix3.jpg" srcSet="/img/docs/pix3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>

            <p className="mb-0">
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-macarons-box-packaging-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                se3.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/product-psd-stationery-mockup-set"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                se4.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-paper-bag-mockup-set"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd1.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/elegant-psd-invitation-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd2.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/basic-mailing-stationery-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd3.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/small-psd-square-box-mockup-set"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd4.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-polaroid-photos-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd5.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/hardcover-psd-book-mockup-scene"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd6.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-stationery-office-pack-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pp1.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/simple-stationery-branding-vol3"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pp7.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/mini-envelope-psd-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pp8.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/stationery-branding-mock-up-vol-5-1"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pp9.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-web-elements/abstract-ui-project-scene-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                se1.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-web-elements/abstract-ui-project-scene-mockup-2"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                se2.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/square-psd-invitation-card-paper-wrap"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                rp1.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/stationery-psd-pocket-notebook-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                rp2.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-notebook-mockup-set"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                rp3.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-clipboard-stationery-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd7.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-magazine-mockup-vol8"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd8.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/square-psd-cardboard-box-mockup-2"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd9.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/basic-stationery-branding-vol-5"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd10.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-cardboard-packaging-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd11.jpg
              </a>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-shopping-bag-mockup"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                pd12.jpg
              </a>
            </p>
            <hr className="mt-11 mb-10" />
            <h3 className="mb-5">Icons8</h3>
            <div className="row gy-6 mb-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://icons8.com/photos/photo/minute-on-the-lips-lifetime-on-the-hips--5aba7cf88b65880001a035b9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/ico1.jpg" srcSet="/img/docs/ico1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://icons8.com/photos/photo/some-eggs-brown-bread-and-butter--59d8d7cb0b7a6a03ae47271d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/ico2.jpg" srcSet="/img/docs/ico2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d388b65880001a035ce"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/ico3.jpg" srcSet="/img/docs/ico3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>

            <p className="mb-0">
              <a
                href="https://icons8.com/photos/photo/ceramic-vases-home-collection--5b0bc6ec8b658800012318f1"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs1.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/still-life-with-yellow-dried-flowers-and-a-lemon--5b0bc6f18b658800012318f3"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs2.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/tender-gifts-for-a-tender-person--5b0bc7328b6588000123190d"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs3.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/when-your-tea-is-made-with-love--5aba7d3a8b65880001a035cf"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs4.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d458b65880001a035d1"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs5.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d388b65880001a035ce"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs6.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/fruit-jelly-strip-getting-out-of-toothpaste-tube--5aba7cfc8b65880001a035ba"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs7.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/minute-on-the-lips-lifetime-on-the-hips--5aba7cf88b65880001a035b9"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs8.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/bright-idea--5aba7a4a8b65880001a035ad"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs9.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/some-eggs-brown-bread-and-butter--59d8d7cb0b7a6a03ae47271d"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs10.jpg
              </a>
              <a
                href="https://icons8.com/photos/photo/flavorful-burst-of-color-and-taste--59d8d4b00b7a6a03ae47265d"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs11.jpg
              </a>
              <a
                href="https://iconos8.es/photos/photo/lets-cook-mushrooms-in-a-sour-cream-sauce--59d8d4830b7a6a03ae472653"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                cs12.jpg
              </a>
            </p>
            <hr className="mt-11 mb-10" />
            <h3 className="mb-5">Mockups</h3>
            <div className="row gy-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://creativemarket.com/RgraphicsDesign/34011-Web-Themes-Mock-ups"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/mo1.jpg" srcSet="/img/docs/mo1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="https://unblast.com/free-flying-iphone-mockup-psd/" target="_blank" rel="noreferrer">
                    <img src="/img/docs/mo2.jpg" srcSet="/img/docs/mo2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.free-mockup.com/downloads/mobile-app-screens-mockup/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/mo3.jpg" srcSet="/img/docs/mo3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-iphone-12-mockup-set"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/mo4.jpg" srcSet="/img/docs/mo4@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="https://www.ls.graphics/free/three-iphone-clay-mockups" target="_blank" rel="noreferrer">
                    <img src="/img/docs/mo5.jpg" srcSet="/img/docs/mo5@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="https://www.freemockupworld.com/iphone-x-clay-mockup-psd/" target="_blank" rel="noreferrer">
                    <img src="/img/docs/mo6.jpg" srcSet="/img/docs/mo6@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="https://www.freemockupworld.com/iphone-on-bike-mockup/" target="_blank" rel="noreferrer">
                    <img src="/img/docs/mo7.jpg" srcSet="/img/docs/mo7@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>

            <hr className="mt-11 mb-10" />
            <h3 className="mb-5">UI Graphics</h3>
            <div className="row gy-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a
                    href="https://freebiesui.com/figma-freebies/figma-app-designs/medical-app-design/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/docs/oth.jpg" srcSet="/img/docs/oth@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="https://craftwork.design/downloads/dashboards-ui-kit/" target="_blank" rel="noreferrer">
                    <img src="/img/docs/oth2.jpg" srcSet="/img/docs/oth2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Icons</h2>
        <p className="lead mb-8">
          To reach the collections of icons used in Sandbox, go to pages{' '}
          <a href="../docs/styleguide/icons-svg.html" className="internal">
            SVG Icons
          </a>{' '}
          and{' '}
          <a href="../docs/styleguide/icons-font.html" className="internal">
            Font Icons
          </a>
        </p>
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead className="text-navy">
                <tr>
                  <th scope="col" className="col-3">
                    Source Name
                  </th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0 text-nowrap"
                      href="https://iconscout.com/unicons/explore/line"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Font Icons
                    </a>
                  </td>
                  <td>Web’s new favorite icon library, Unicons.</td>
                </tr>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0 text-nowrap"
                      href="https://www.flaticon.com/authors/monochrome/yellow"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SVG Lineal
                    </a>
                  </td>
                  <td>Monochrome icons from Freepik.</td>
                </tr>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0 text-nowrap"
                      href="https://www.flaticon.com/authors/pixel-perfect/tritone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SVG Solid
                    </a>
                  </td>
                  <td>Tritone icons from Freepik.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-3">Illustrations</h2>
        <p className="lead mb-8">
          To reach the collections of illustrations used in Sandbox, click{' '}
          <a href="#" className="internal">
            here
          </a>
        </p>

        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead className="text-navy">
                <tr>
                  <th scope="col" className="col-3">
                    Source Name
                  </th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://www.freepik.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Freepik
                    </a>
                  </td>
                  <td>Graphic resources for everyone.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper py-16">
        <h2 className="mb-5">Fonts</h2>
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead className="text-navy">
                <tr>
                  <th scope="col" className="col-3">
                    Source Name
                  </th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://fonts.google.com/specimen/Manrope"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Manrope
                    </a>
                  </td>
                  <td>Open-source modern font family, designed by Mikhail Sharanda.</td>
                </tr>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://github.com/wonderunit/font-thicccboi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Thicccboi
                    </a>
                  </td>
                  <td>A free and open source font by Wonder Unit.</td>
                </tr>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://fonts.google.com/specimen/DM+Serif+Display"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DM Serif
                    </a>
                  </td>
                  <td>A high-contrast transitional face, designed by Frank Grießhammer.</td>
                </tr>
                <tr>
                  <td>
                    <a
                      className="external bg-pale-primary my-0"
                      href="https://github.com/coreyhu/Urbanist"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Urbanist
                    </a>
                  </td>
                  <td>A low-contrast, geometric sans-serif inspired by Modernist typography.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Credits;
