import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import {
  darkMarkup,
  paleMarkup,
  softMarkup,
  videoMarkup,
  colorMarkup,
  patternMarkup,
  gradientMarkup,
  imageBackgroundMarkup
} from 'markups/elements/background';
// -------- data -------- //
const quickAccess = [
  { title: 'Image', url: 'snippet-0' },
  { title: 'Dark', url: 'snippet-1' },
  { title: 'Gradient', url: 'snippet-2' },
  { title: 'Color', url: 'snippet-3' },
  { title: 'Soft', url: 'snippet-4' },
  { title: 'Pale', url: 'snippet-5' },
  { title: 'Pattern', url: 'snippet-6' },
  { title: 'Video', url: 'snippet-7' }
];

const Background: FC = () => {
  return (
    <DocLayout
      pageTitle="Background"
      quickAccssLinks={quickAccess}
      description="Use our custom background styles to add image, color, pattern or video backgrounds to your sections."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-0" className="wrapper pt-16">
        <h2 className="mb-5">Image Background</h2>
        <div className="card">
          <div className="card-body">
            <section
              className="wrapper image-wrapper bg-image bg-overlay text-white"
              style={{ backgroundImage: 'url(/img/photos/bg1.jpg)' }}
            >
              <div className="container py-14 py-md-16">
                <h2 className="display-5 mb-0 text-center text-white">Content goes here</h2>
              </div>
            </section>

            <p className="mt-6">
              <code className="code">.image-wrapper</code> class enables{' '}
              <code className="code">background-attachment: fixed;</code> to disable image from scrolling with the page;
              along with <code className="code">background-size: cover;</code> which scales the image as large as
              possible to fill the container. You can use the following classes along with{' '}
              <code className="code">.image-wrapper</code> to change these behaviors:
            </p>
            <ul className="list-unstyled mb-6">
              <li>
                <code className="code bg-pale-primary">.bg-auto</code> Disables fixed background, changes{' '}
                <mark className="doc">background-size</mark> to <mark className="doc">auto</mark>.
              </li>
              <li>
                <code className="code bg-pale-primary">.bg-full</code> Disables fixed background, changes{' '}
                <mark className="doc">background-size</mark> to <mark className="doc">100%</mark>.
              </li>
              <li>
                <code className="code bg-pale-primary">.bg-cover</code> Disables fixed background, but keeps{' '}
                <mark className="doc">background-size</mark> as <mark className="doc">cover</mark>.
              </li>
            </ul>
            <p>
              To add overlay on the background images use <code className="code">.bg-overlay</code> class:
            </p>
            <ul className="list-unstyled mb-0">
              <li>
                <code className="code bg-pale-primary">.bg-overlay</code> Adds 50% overlay.{' '}
              </li>
              <li>
                <code className="code bg-pale-primary">.bg-overlay.bg-overlay-300</code> Adds 30% overlay.
              </li>
              <li>
                <code className="code bg-pale-primary">.bg-overlay.bg-overlay-400</code> Adds 40% overlay.
              </li>
            </ul>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-0">
              View example's code
            </a>
          </div>

          <div id="collapse-0" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{imageBackgroundMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Dark Background</h2>
        <div className="card">
          <div className="card-body">
            <section className="wrapper bg-dark text-white">
              <div className="container py-14 py-md-16">
                <h2 className="display-5 mb-0 text-center text-white">Content goes here</h2>
              </div>
            </section>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{darkMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-3">Gradient Background</h2>
        <p className="lead">Available options:</p>
        <p className="lead">
          <code className="code">.gradient-1</code>, <code className="code">.gradient-2</code>,{' '}
          <code className="code">.gradient-3</code>, <code className="code">.gradient-4</code>,{' '}
          <code className="code">.gradient-5</code>, <code className="code">.gradient-6</code>,{' '}
          <code className="code">.gradient-7</code>,{' '}
        </p>
        <p className="lead mb-8">
          <code className="code">bg-gradient-primary</code>, <code className="code">bg-gradient-aqua</code>,{' '}
          <code className="code">bg-gradient-green</code>, <code className="code">bg-gradient-leaf</code>,{' '}
          <code className="code">bg-gradient-navy</code>, <code className="code">bg-gradient-orange</code>,{' '}
          <code className="code">bg-gradient-pink</code>, <code className="code">bg-gradient-purple</code>,{' '}
          <code className="code">bg-gradient-red</code>, <code className="code">bg-gradient-violet</code>,{' '}
          <code className="code">bg-gradient-yellow</code>, <code className="code">bg-gradient-fuchsia</code>,{' '}
          <code className="code">bg-gradient-sky</code>, <code className="code">bg-gradient-grape</code>,{' '}
          <code className="code">bg-gradient-reverse-primary</code>,{' '}
          <code className="code">bg-gradient-reverse-aqua</code>,{' '}
          <code className="code">bg-gradient-reverse-green</code>,{' '}
          <code className="code">bg-gradient-reverse-leaf</code>, <code className="code">bg-gradient-reverse-navy</code>
          , <code className="code">bg-gradient-reverse-orange</code>,{' '}
          <code className="code">bg-gradient-reverse-pink</code>,{' '}
          <code className="code">bg-gradient-reverse-purple</code>,{' '}
          <code className="code">bg-gradient-reverse-red</code>,{' '}
          <code className="code">bg-gradient-reverse-violet</code>,{' '}
          <code className="code">bg-gradient-reverse-yellow</code>,{' '}
          <code className="code">bg-gradient-reverse-fuchsia</code>,{' '}
          <code className="code">bg-gradient-reverse-sky</code>, <code className="code">bg-gradient-reverse-grape</code>
          .
        </p>
        <div className="card">
          <div className="card-body">
            <section className="wrapper gradient-3 text-white mb-5">
              <div className="container py-14 py-md-16">
                <h2 className="display-5 mb-0 text-center text-white">Content goes here</h2>
              </div>
            </section>

            <section className="wrapper bg-gradient-primary mb-5">
              <div className="container py-14 py-md-16">
                <h2 className="display-5 mb-0 text-center">Content goes here</h2>
              </div>
            </section>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{gradientMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Color Background</h2>
        <p className="lead">Available options:</p>
        <p className="lead mb-8">
          <code className="code">bg-white</code>, <code className="code">bg-primary</code>,{' '}
          <code className="code">bg-aqua</code>, <code className="code">bg-green</code>,{' '}
          <code className="code">bg-leaf</code>, <code className="code">bg-navy</code>,{' '}
          <code className="code">bg-orange</code>, <code className="code">bg-pink</code>,{' '}
          <code className="code">bg-purple</code>, <code className="code">bg-red</code>,{' '}
          <code className="code">bg-violet</code>, <code className="code">bg-yellow</code>,{' '}
          <code className="code">bg-fuchsia</code>, <code className="code">bg-sky</code>,{' '}
          <code className="code">bg-grape</code>.
        </p>
        <div className="card">
          <div className="card-body">
            <section className="wrapper bg-primary text-white">
              <div className="container py-14 py-md-16">
                <h2 className="display-5 mb-0 text-center text-white">Content goes here</h2>
              </div>
            </section>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{colorMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-3">Soft Background</h2>
        <p className="lead">Available options:</p>
        <p className="lead mb-8">
          <code className="code">bg-soft-primary</code>, <code className="code">bg-soft-aqua</code>,{' '}
          <code className="code">bg-soft-green</code>, <code className="code">bg-soft-leaf</code>,{' '}
          <code className="code">bg-soft-navy</code>, <code className="code">bg-soft-orange</code>,{' '}
          <code className="code">bg-soft-pink</code>, <code className="code">bg-soft-purple</code>,{' '}
          <code className="code">bg-soft-red</code>, <code className="code">bg-soft-violet</code>,{' '}
          <code className="code">bg-soft-yellow</code>, <code className="code">bg-soft-fuchsia</code>,{' '}
          <code className="code">bg-soft-sky</code>, <code className="code">bg-soft-grape</code>.
        </p>
        <div className="card">
          <div className="card-body">
            <section className="wrapper bg-soft-primary">
              <div className="container py-14 py-md-16">
                <h2 className="display-5 mb-0 text-center">Content goes here</h2>
              </div>
            </section>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{softMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 6 ========== */}
      <section id="snippet-5" className="wrapper pt-16">
        <h2 className="mb-3">Pale Background</h2>
        <p className="lead">Available options:</p>
        <p className="lead mb-8">
          <code className="code">bg-pale-primary</code>, <code className="code">bg-pale-aqua</code>,{' '}
          <code className="code">bg-pale-green</code>, <code className="code">bg-pale-leaf</code>,{' '}
          <code className="code">bg-pale-navy</code>, <code className="code">bg-pale-orange</code>,{' '}
          <code className="code">bg-pale-pink</code>, <code className="code">bg-pale-purple</code>,{' '}
          <code className="code">bg-pale-red</code>, <code className="code">bg-pale-violet</code>,{' '}
          <code className="code">bg-pale-yellow</code>, <code className="code">bg-pale-fuchsia</code>,{' '}
          <code className="code">bg-pale-sky</code>, <code className="code">bg-pale-grape</code>.
        </p>
        <div className="card">
          <div className="card-body">
            <section className="wrapper bg-pale-primary">
              <div className="container py-14 py-md-16">
                <h2 className="display-5 mb-0 text-center">Content goes here</h2>
              </div>
            </section>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-5">
              View example's code
            </a>
          </div>

          <div id="collapse-5" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{paleMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 7 ========== */}
      <section id="snippet-6" className="wrapper pt-16">
        <h2 className="mb-5">Pattern Background</h2>
        <div className="card">
          <div className="card-body">
            <section
              className="wrapper pattern-wrapper bg-image text-white"
              style={{ backgroundImage: 'url(/img/pattern.png)' }}
            >
              <div className="container py-14 py-md-16">
                <h2 className="display-5 mb-0 text-center text-white">Content goes here</h2>
              </div>
            </section>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-6">
              View example's code
            </a>
          </div>

          <div id="collapse-6" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{patternMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 8 ========== */}
      <section id="snippet-7" className="wrapper py-16">
        <h2 className="mb-5">Video Background</h2>
        <div className="card">
          <div className="card-body">
            <section className="video-wrapper bg-overlay ratio ratio-16x9">
              <video poster="/img/photos/movie.jpg" src="/media/movie.mp4" loop muted autoPlay playsInline />
              <div className="video-content">
                <div className="container text-center">
                  <h2 className="display-5 mb-0 text-white text-center">Content goes here</h2>
                </div>
              </div>
            </section>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-7">
              View example's code
            </a>
          </div>

          <div id="collapse-7" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{videoMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Background;
