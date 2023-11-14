import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- markups -------- //
import { imageMarkup, videoMarkup } from 'markups/elements/lightbox';

// -------- data -------- //
const quickAccess = [
  { title: 'Instructions', url: 'snippet-1' },
  { title: 'Image & Caption', url: 'snippet-2' },
  { title: 'Video', url: 'snippet-3' }
];

const Lightbox: FC = () => {
  // added lightbox functionality
  useLightBox();

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
        <h2 className="mb-5">Instructions</h2>
        <div className="card">
          <div className="card-body">
            <p>
              Call the <code className="code">useLightBox()</code> hook on the top of component to enable lightbox
              functionality.
            </p>

            <p>
              Use <code className="code">data-glightbox</code> attribute to enable lightbox functionality on your image
              and video links.
            </p>
            <p className="mb-0">
              To group images together, use <code className="code">data-gallery="group-name"</code> attribute. This will
              enable navigation between images that have the same attribute value.
            </p>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Image & Caption</h2>
        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-1 hover-scale rounded">
                  <a href="/img/photos/p6@2x.jpg" data-glightbox data-gallery="gallery-image">
                    <img src="/img/photos/p6.jpg" srcSet="/img/photos/p6@2x.jpg 2x" alt="" />
                    <span className="bg" />
                  </a>
                  <figcaption>
                    <h5 className="from-top mb-0">Image</h5>
                  </figcaption>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-1 hover-scale rounded">
                  <a
                    href="/img/photos/p3@2x.jpg"
                    data-gallery="gallery-image"
                    data-glightbox="title: Title; description: This is the image description"
                  >
                    <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                    <span className="bg" />
                  </a>
                  <figcaption>
                    <h5 className="from-top mb-0">Simple Caption</h5>
                  </figcaption>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-1 hover-scale rounded">
                  <a
                    href="/img/photos/p2@2x.jpg"
                    data-gallery="gallery-image"
                    data-glightbox="title: Title; description: .caption-1"
                  >
                    <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                    <span className="bg" />
                  </a>
                  <figcaption>
                    <h5 className="from-top mb-0">Advanced Caption</h5>
                  </figcaption>
                </figure>
                <div className="glightbox-desc caption-1">
                  <p className="mb-0">This div will be used as the image description. HTML is supported.</p>
                </div>
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
                <CodeHighlight language="jsx">{imageMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-5">Video</h2>
        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-1 hover-scale rounded">
                  <a href="https://vimeo.com/90355541" data-glightbox data-gallery="gallery-video">
                    <img src="/img/photos/p4.jpg" srcSet="/img/photos/p4@2x.jpg 2x" alt="" />
                    <span className="bg" />
                  </a>
                  <figcaption>
                    <h5 className="from-top mb-0">Vimeo</h5>
                  </figcaption>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-1 hover-scale rounded">
                  <a href="https://www.youtube.com/watch?v=26TbMXXOe0I" data-glightbox data-gallery="gallery-video">
                    <img src="/img/photos/p5.jpg" srcSet="/img/photos/p5@2x.jpg 2x" alt="" />
                    <span className="bg" />
                  </a>
                  <figcaption>
                    <h5 className="from-top mb-0">YouTube</h5>
                  </figcaption>
                </figure>
              </div>

              <div className="item col-md-6 col-lg-4">
                <figure className="overlay overlay-1 hover-scale rounded">
                  <a
                    href="/media/movie.mp4"
                    data-glightbox
                    data-gallery="gallery-video"
                    data-poster="/img/photos/movie.jpg"
                  >
                    <img src="/img/photos/p6.jpg" srcSet="/img/photos/p6@2x.jpg 2x" alt="" />
                    <span className="bg" />
                  </a>
                  <figcaption>
                    <h5 className="from-top mb-0">HTML5</h5>
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
                <CodeHighlight language="jsx">{videoMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Lightbox;
