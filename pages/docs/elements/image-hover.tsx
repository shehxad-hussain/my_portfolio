import { FC } from 'react';
import Link from 'next/link';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- custom hook -------- //
import useTooltip from 'hooks/useTooltip';
// -------- markups -------- //
import { tooltipMarkup, overlayMarkup, simpleMarkup, cursorMarkup } from 'markups/elements/image-hover';

// -------- data -------- //
const quickAccess = [
  { title: 'Tooltip', url: 'snippet-1' },
  { title: 'Overlay', url: 'snippet-2' },
  { title: 'Simple', url: 'snippet-3' },
  { title: 'Cursor', url: 'snippet-4' }
];

const ImageHover: FC = () => {
  // added tooltip library
  useTooltip();

  return (
    <DocLayout
      pageTitle="Image Hover"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-12"
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom hover styles to add hover state to your images and elements."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Tooltip</h2>

        <p>
          When you use tooltip hover then you need call the <mark className="code">useTooltip()</mark> custom hook
        </p>
        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="itooltip hover-scale rounded" title="Some Title Quam Sit Ornare">
                  <a href="#">
                    <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="itooltip hover-scale rounded" title="Some Title Quam Sit Ornare">
                  <a href="#">
                    <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="itooltip hover-scale rounded" title="Some Title Quam Sit Ornare">
                  <a href="#">
                    <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{tooltipMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Overlay</h2>
        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-1 hover-scale rounded">
                  <Link href="#">
                    <a>
                      <img src="/img/photos/p4.jpg" srcSet="/img/photos/p4@2x.jpg 2x" alt="" />
                      <span className="bg" />
                    </a>
                  </Link>

                  <figcaption>
                    <h5 className="from-top mb-0">Some Title</h5>
                  </figcaption>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-2 hover-scale color rounded">
                  <Link href="#">
                    <a>
                      <img src="/img/photos/p5.jpg" srcSet="/img/photos/p5@2x.jpg 2x" alt="" />
                      <span className="bg" />
                    </a>
                  </Link>

                  <figcaption>
                    <h5 className="from-top mb-1">Some Title</h5>
                    <p className="from-bottom">Some Description</p>
                  </figcaption>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-3 overlay-gradient-2 hover-scale rounded">
                  <Link href="#">
                    <a>
                      <img src="/img/photos/p6.jpg" srcSet="/img/photos/p6@2x.jpg 2x" alt="" />
                      <span className="bg" />
                    </a>
                  </Link>
                  <figcaption>
                    <h5 className="from-left mb-1">Some Title</h5>
                    <p className="from-left mb-0">Some Description</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{overlayMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Simple</h2>
        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="lift rounded">
                  <a href="#">
                    <img src="/img/photos/p6.jpg" srcSet="/img/photos/p6@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="hover-scale rounded">
                  <a href="#">
                    <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{simpleMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-5">Cursor</h2>
        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="hover-scale cursor-dark rounded">
                  <a href="#">
                    <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="hover-scale cursor-light rounded">
                  <a href="#">
                    <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="hover-scale cursor-primary rounded">
                  <a href="#">
                    <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{cursorMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default ImageHover;
