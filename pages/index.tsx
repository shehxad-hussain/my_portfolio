import { Fragment } from 'react';
import type { NextPage } from 'next';
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';

const demos = [
  {
    id: 'I',
    link: '/demo-1',
    color: 'yellow',
    images: ['d1-1', 'd1-2'],
    features: ['SEO, Marketing', 'Colorful design', 'Illustrations', 'Pricing table']
  },
  {
    id: 'II',
    color: 'blue',
    link: '/demo-2',
    images: ['d2-1', 'd2-2'],
    features: ['Business, Marketing', 'Serif headings', 'Solid colors', 'Video lightbox']
  },
  {
    id: 'III',
    color: 'aqua',
    link: '/demo-3',
    images: ['d3-1', 'd3-2'],
    features: ['Service, Marketing', 'Angled sections', 'Soft colors', 'Animations']
  },
  {
    id: 'IV',
    link: '/demo-4',
    color: 'violet',
    images: ['d4-1', 'd4-2'],
    features: ['Corporate, Startup', 'Serif headings', 'Tiled images', 'Video lightbox']
  },
  {
    id: 'V',
    color: 'blue',
    link: '/demo-5',
    images: ['d5-1', 'd5-2'],
    features: ['SaaS, Software', 'Tiled images', 'Animations', 'Pricing table']
  },
  {
    id: 'VI',
    color: 'aqua',
    link: '/demo-6',
    images: ['d6-1', 'd6-2'],
    features: ['Landing, Product', 'SVG icons', 'Animations', 'Soft colors']
  },
  {
    id: 'VII',
    link: '/demo-7',
    color: 'purple',
    images: ['d7-1', 'd7-2'],
    features: ['Agency, Startup', 'Illustrations', 'Soft colors', 'Project display']
  },
  {
    id: 'VIII',
    color: 'aqua',
    link: '/demo-8',
    images: ['d8-1', 'd8-2'],
    features: ['Corporate, Business', 'Animated header', 'SVG icons', 'Soft colors']
  },
  {
    id: 'IX',
    color: 'blue',
    link: '/demo-9',
    images: ['d9-1', 'd9-2'],
    features: ['SaaS, Software', 'SVG icons', 'Serif headings', 'Testimonials']
  },
  {
    id: 'X',
    color: 'orange',
    link: '/demo-10',
    images: ['d10-1', 'd10-2'],
    features: ['Business, Marketing', 'Animations', 'Simple testimonials', 'Tiled images']
  },
  {
    id: 'XI',
    color: 'purple',
    link: '/demo-11',
    images: ['d11-1', 'd11-2'],
    features: ['Marketing, Service', 'Animated header', 'Tiled images', 'Soft colors']
  },
  {
    id: 'XII',
    color: 'orange',
    link: '/demo-12',
    images: ['d12-1', 'd12-2'],
    features: ['Agency, Studio', 'SVG icons', 'Masonry portfolio', 'Soft colors']
  },
  {
    id: 'XIII',
    color: 'purple',
    link: '/demo-13',
    images: ['d13-1', 'd13-2'],
    features: ['Agency, Startup', 'Animations', 'Parallax testimonials', 'Angled sections']
  },
  {
    id: 'XIV',
    color: 'violet',
    link: '/demo-14',
    images: ['d14-1', 'd14-2'],
    features: ['Startup, Creative', 'Image section', 'Background shapes', 'Detailed footer']
  },
  {
    id: 'XV',
    color: 'blue',
    link: '/demo-15',
    images: ['d15-1', 'd15-2'],
    features: ['Business, Service', 'Video lightbox', 'Background shapes', 'Newsletter']
  },
  {
    id: 'XVI',
    color: 'pink',
    link: '/demo-16',
    images: ['d16-1', 'd16-2'],
    features: ['Personal, Portfolio', 'Shape mask', 'Detailed portfolio', 'Contact form']
  },
  {
    id: 'XVII',
    color: 'navy',
    link: '/demo-17',
    images: ['d17-1', 'd17-2'],
    features: ['Business, Corporate', 'Soft colors', 'Animated header', 'Content in box']
  },
  {
    id: 'XVIII',
    color: 'navy',
    link: '/demo-18',
    images: ['d18-1', 'd18-2'],
    features: ['Network, Marketing', 'SVG icons', '3D illustrations', 'Gradient image']
  },
  {
    id: 'XIX',
    color: 'fuchsia',
    link: '/demo-19',
    images: ['d19-1', 'd19-2'],
    features: ['Agency, Startup', 'Gradient image', 'SVG icons', 'Colorful design']
  },
  {
    id: 'XX',
    color: 'fuchsia',
    link: '/demo-20',
    images: ['d20-1', 'd20-2'],
    features: ['Agency, Startup', 'Framed layout', 'Illustrations', 'Video background']
  },
  {
    id: 'XXI',
    color: 'sky',
    link: '/demo-21',
    images: ['d21-1', 'd21-2'],
    features: ['Studio, Startup', 'Illustrations', 'Wave dividers', 'Colorful design']
  },
  {
    id: 'XXII',
    color: 'purple',
    link: '/demo-22',
    images: ['d22-1', 'd22-2'],
    features: ['Business, Marketing', 'Pricing table', '3D illustrations', 'Wave dividers']
  },
  {
    id: 'XXIII',
    color: 'leaf',
    link: '/demo-23',
    images: ['d23-1', 'd23-2'],
    features: ['Photography, Wedding', 'Fullscreen slider', 'Image backgrouds', 'Pastel colors']
  },
  {
    id: 'XXVI',
    color: 'yellow',
    link: '/demo-24',
    images: ['d24-1', 'd24-2'],
    features: ['Photography, Food', 'Masonry portfolio', 'Image backgrouds', 'Contact form']
  },
  {
    id: 'XXV',
    color: 'pink',
    link: '/demo-25',
    images: ['d25-1', 'd25-2'],
    features: ['Blog, Travel', 'Sidebar', 'Extended footer', 'Blog carousel']
  }
];

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo-purple"
          button={
            <a
              href="https://1.envato.market/Ea4VxK"
              className="btn btn-primary rounded-pill"
              target="_blank"
              rel="noreferrer"
            >
              Purchase Now
            </a>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <section className="wrapper bg-gradient-primary">
          <div className="container pt-10 pt-md-14">
            <div className="row gx-2 gy-10 align-items-center">
              <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
                <h1 className="display-1 mb-5 mx-md-10 mx-lg-0" style={slideInDownAnimate('600ms')}>
                  Create a powerful but effortless website for <br />
                  <span className="typer text-primary text-nowrap">
                    <Typewriter
                      options={{
                        loop: true,
                        autoStart: true,
                        strings: ['your business.', 'your portfolio.', 'your startup.', 'digital marketing.']
                      }}
                    />
                  </span>
                </h1>

                <p className="lead fs-23 mb-7" style={slideInDownAnimate('900ms')}>
                  Build Performant & SEO freindly website in minutes with Sandbox React.
                </p>

                <div
                  className="d-flex justify-content-center justify-content-lg-start mb-4"
                  style={slideInDownAnimate('1200ms')}
                >
                  <a className="btn btn-lg btn-primary rounded-pill me-2 scroll" href="#demos">
                    Check Demos
                  </a>
                </div>
              </div>

              <div className="col-lg-6 ms-auto position-relative">
                <div className="row g-4">
                  <div className="col-4 d-flex flex-column ms-auto">
                    <div className="ms-auto mt-6" style={fadeInAnimate('900ms')}>
                      <img
                        className="img-fluid rounded shadow-lg"
                        src="/img/demos/vc1.jpg"
                        srcSet="/img/demos/vc1@2x.jpg 2x"
                        alt=""
                      />
                    </div>

                    <div className="ms-auto mt-4" style={fadeInAnimate('1200ms')}>
                      <img
                        className="img-fluid rounded shadow-lg"
                        src="/img/demos/vc2.jpg"
                        srcSet="/img/demos/vc2@2x.jpg 2x"
                        alt=""
                      />
                    </div>

                    <div className="ms-auto mt-4" style={fadeInAnimate('1500ms')}>
                      <img
                        className="img-fluid rounded shadow-lg"
                        src="/img/demos/vc3.jpg"
                        srcSet="/img/demos/vc3@2x.jpg 2x"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-4">
                    <div style={fadeInAnimate('0ms')}>
                      <img
                        className="w-100 img-fluid rounded shadow-lg"
                        src="/img/demos/vc4.jpg"
                        srcSet="/img/demos/vc4@2x.jpg 2x"
                        alt=""
                      />
                    </div>

                    <div style={fadeInAnimate('300ms')}>
                      <img
                        className="w-100 img-fluid rounded shadow-lg mt-4"
                        src="/img/demos/vc5.jpg"
                        srcSet="/img/demos/vc5@2x.jpg 2x"
                        alt=""
                      />
                    </div>

                    <div style={fadeInAnimate('600ms')}>
                      <img
                        className="w-100 img-fluid rounded shadow-lg mt-4"
                        src="/img/demos/vc6.jpg"
                        srcSet="/img/demos/vc6@2x.jpg 2x"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-4 d-flex flex-column">
                    <div className="mt-8" style={fadeInAnimate('900ms')}>
                      <img
                        className="img-fluid rounded shadow-lg"
                        src="/img/demos/vc7.jpg"
                        srcSet="/img/demos/vc7@2x.jpg 2x"
                        alt=""
                      />
                    </div>

                    <div className="mt-4 mb-10" style={fadeInAnimate('1200ms')}>
                      <img
                        className="img-fluid rounded shadow-lg"
                        src="/img/demos/vc8.jpg"
                        srcSet="/img/demos/vc8@2x.jpg 2x"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light" id="demos">
          <div className="container py-14 py-md-18 pb-md-19">
            <div className="row mb-10">
              <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                <div className="counter-wrapper">
                  <h3 className="fs-70 mb-3 text-primary text-center counter">
                    <CountUp end={25} />
                  </h3>
                </div>
                <h2 className="display-3 mb-3 text-center mb-0">Functional, impressive and rich demos to start with</h2>
              </div>
            </div>

            <div className="demos-wrapper">
              {demos.map(({ id, images, features, color, link }) => (
                <div className="demo mb-10" key={id}>
                  <div className={`card bg-soft-${color}`}>
                    <div className="card-body px-4 px-md-8 ps-xl-12 py-0 overflow-hidden">
                      <div className="row gx-md-8 gx-xl-12 d-flex align-items-center">
                        <div className="col-lg-7">
                          <div className="row gx-4 gx-md-7">
                            <div className="col-6">
                              <figure className="itooltip itooltip-yellow mt-9" title="Click to see the demo">
                                <a href={link} target="_blank" rel="noreferrer">
                                  <img
                                    alt=""
                                    className="shadow-lg rounded-top"
                                    src={`/img/demos/${images[0]}.jpg`}
                                    srcSet={`/img/demos/${images[0]}@2x.jpg 2x`}
                                  />
                                </a>
                              </figure>
                            </div>

                            <div className="col-6">
                              <figure className="itooltip itooltip-yellow" title="Click to see the demo">
                                <a href={link} target="_blank" rel="noreferrer">
                                  <img
                                    alt=""
                                    className="shadow-lg rounded-bottom"
                                    src={`/img/demos/${images[1]}.jpg`}
                                    srcSet={`/img/demos/${images[1]}@2x.jpg 2x`}
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block py-3">
                          <h2 className="post-title fs-30 mb-4">Demo Layout {id}</h2>
                          <ul className={`icon-list bullet-${color} row ms-0 gy-2`}>
                            {features.map((item) => (
                              <li className="col-md-6" key={item}>
                                <i className="uil uil-check" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className={`btn btn-sm btn-${color} rounded-pill mt-1`}
                          >
                            See Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="divider text-soft-primary mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path
                  fill="currentColor"
                  d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                />
              </svg>
            </div>
          </div>
        </section>

        <section className="wrapper bg-gradient-primary">
          <div className="container pt-7 pt-md-10 pb-14 pb-md-17">
            <div className="row mb-8 text-center">
              <div className="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
                <img src="/img/demos/icon.png" srcSet="/img/demos/icon@2x.png 2x" alt="" />
                <h2 className="display-3 mt-3 mb-3 mb-0 px-lg-10 px-xl-0">
                  Save your time and money by choosing Sandbox for your website.
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8 col-xxl-7 mx-auto">
                <div className="row align-items-center counter-wrapper gy-6 text-center">
                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={250} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">UI elements</p>
                  </div>

                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={130} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">Pre-made blocks</p>
                  </div>

                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={100} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">Neatly coded pages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pb-11 pb-md-14">
            <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center mb-14 mb-md-16">
              <div className="col-lg-6 position-relative">
                <div
                  className="shape rounded bg-soft-primary rellax d-block"
                  style={{
                    zIndex: 0,
                    top: '50%',
                    left: '50%',
                    width: '50%',
                    height: '60%',
                    transform: 'translate(-50%,-50%)'
                  }}
                />

                <div className="row gx-md-5 gy-5 position-relative">
                  <div className="col-6">
                    <img
                      alt=""
                      src="/img/demos/fe1.jpg"
                      srcSet="/img/demos/fe1@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg mb-5"
                    />
                    <img
                      alt=""
                      src="/img/demos/fe2.jpg"
                      srcSet="/img/demos/fe2@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    />
                  </div>

                  <div className="col-6">
                    <img
                      alt=""
                      src="/img/demos/fe3.jpg"
                      srcSet="/img/demos/fe3@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg my-5"
                    />
                    <img
                      alt=""
                      src="/img/demos/fe4.jpg"
                      srcSet="/img/demos/fe4@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-5 col-xxl-4 offset-xl-1">
                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-images" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Modern Portfolio Layouts</h4>
                    <p className="mb-0">
                      Build and manage an eye-catching and impressive portfolio fast and without effort.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-calendar-alt" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Useful Blog Layouts</h4>
                    <p className="mb-0">
                      Create an attractive and stunning journal to tell the world your wonderful stories.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-star" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Cool Features & Elements</h4>
                    <p className="mb-0">
                      Sandbox includes amazing features and elements to create rich and attractive pages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center mb-16 mb-md-22">
              <div className="col-lg-6 offset-xl-1 position-relative order-lg-2">
                <div
                  className="shape rounded bg-soft-primary rellax d-block"
                  style={{
                    zIndex: 0,
                    top: '50%',
                    left: '50%',
                    width: '50%',
                    height: '60%',
                    transform: 'translate(-50%,-50%)'
                  }}
                />

                <div className="row gx-md-5 gy-5 position-relative">
                  <div className="col-5">
                    <img
                      alt=""
                      src="/img/demos/fe5.jpg"
                      srcSet="/img/demos/fe5@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                    />
                    <img
                      alt=""
                      src="/img/demos/fe6.jpg"
                      srcSet="/img/demos/fe6@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    />
                  </div>

                  <div className="col-7">
                    <img
                      alt=""
                      src="/img/demos/fe7.jpg"
                      srcSet="/img/demos/fe7@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg mb-5"
                    />
                    <img
                      alt=""
                      src="/img/demos/fe8.jpg"
                      srcSet="/img/demos/fe8@2x.jpg 2x"
                      className="img-fluid rounded shadow-lg d-flex col-11"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-5 col-xxl-4 offset-xxl-1">
                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-web-grid-alt" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">13 Headers & 5 Footers</h4>
                    <p className="mb-0">
                      Choose from various gorgeous header and footer styles to serve you best for your needs.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-7">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-palette" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Color & Font Options</h4>
                    <p className="mb-0">
                      You can either use the included color and fonts or easily add your own choices.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4">
                      <i className="uil uil-tablet" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">Fully Responsive Layout</h4>
                    <p className="mb-0">
                      Sandbox adapts to different screen sizes therefore it is compatible with any device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="divider text-soft-primary mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path
                  fill="currentColor"
                  d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                />
              </svg>
            </div>
          </div>
        </section>

        <section className="wrapper bg-gradient-primary">
          <div className="container pb-14 pb-md-16">
            <div className="row gx-0 mb-14 mb-md-16">
              <div className="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n23">
                <img
                  alt=""
                  src="/img/demos/de1.jpg"
                  srcSet="/img/demos/de1@2x.jpg 2x"
                  className="img-fluid mx-auto rounded shadow-lg"
                />
                <img
                  alt=""
                  src="/img/demos/de2.jpg"
                  srcSet="/img/demos/de2@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ top: '25%', right: '-12%', maxWidth: '30%', height: 'auto' }}
                />
                <img
                  alt=""
                  src="/img/demos/de3.jpg"
                  srcSet="/img/demos/de3@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ top: '15%', left: '-15%', maxWidth: '30%', height: 'auto' }}
                />
                <img
                  alt=""
                  src="/img/demos/de4.jpg"
                  srcSet="/img/demos/de4@2x.jpg 2x"
                  className="position-absolute rounded shadow-lg"
                  style={{ bottom: '15%', left: '-13%', maxWidth: '30%', height: 'auto' }}
                />
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 gx-md-8 gy-10 text-center justify-content-center">
              <div className="col">
                <img className="mb-4" src="/img/svg/next.js-circle.svg" alt="" />
                <h4>
                  Built with Next.js <br /> & React
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi1.png" srcSet="/img/demos/fi1@2x.png 2x" alt="" />
                <h4>
                  Bootstrap 5 <br /> & Sass
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/svg/typescript.svg" alt="" />
                <h4>
                  Typescript <br /> Clean & Organized
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi11.png" srcSet="/img/demos/fi11@2x.png 2x" alt="" />
                <h4>
                  Server side <br /> Rendered
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi2.png" srcSet="/img/demos/fi2@2x.png 2x" alt="" />
                <h4>
                  SEO-friendly <br /> Coding
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi4.png" srcSet="/img/demos/fi4@2x.png 2x" alt="" />
                <h4>
                  Retina-ready <br /> Graphics
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi5.png" srcSet="/img/demos/fi5@2x.png 2x" alt="" />
                <h4>
                  One-page <br /> Layout Option
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi6.png" srcSet="/img/demos/fi6@2x.png 2x" alt="" />
                <h4>
                  Isotope <br /> Filterable Gallery
                </h4>
              </div>

              {/* <div className="col">
                <img className="mb-4" src="/img/demos/fi7.png" srcSet="/img/demos/fi7@2x.png 2x" alt="" />
                <h4>
                  Mailchimp <br /> Compatible{' '}
                </h4>
              </div> */}

              <div className="col">
                <img className="mb-4" src="/img/demos/fi8.png" srcSet="/img/demos/fi8@2x.png 2x" alt="" />
                <h4>
                  Contact Form <br /> w/o Page Refresh
                </h4>
              </div>

              {/* <div className="col">
                <img className="mb-4" src="/img/demos/fi9.png" srcSet="/img/demos/fi9@2x.png 2x" alt="" />
                <h4>
                  Animations <br /> on Page Scroll
                </h4>
              </div> */}

              <div className="col">
                <img className="mb-4" src="/img/demos/fi10.png" srcSet="/img/demos/fi10@2x.png 2x" alt="" />
                <h4>
                  Top-Notch Support <br /> & Free Updates
                </h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <section className="wrapper bg-gradient-reverse-primary">
        <div className="container pt-xl-10 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto">
              <img src="/img/demos/icon.png" srcSet="/img/demos/icon@2x.png 2x" alt="" />
              <h2 className="display-3 mt-3 mb-3 px-lg-8">
                Think unique and be creative. Make a difference with Sandbox.
              </h2>
              <p className="lead fs-lg mb-6">
                Everything you need to create your next unique and professional website, including impressive and
                ready-made blocks and pages.
              </p>
              <a
                href="https://1.envato.market/Ea4VxK"
                target="_blank"
                className="btn btn-lg btn-primary rounded-pill mb-10"
                rel="noreferrer"
              >
                Buy Sandbox
              </a>
            </div>
          </div>

          <img className="img-fluid" src="/img/demos/f1.png" srcSet="/img/demos/f1@2x.png 2x" alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
