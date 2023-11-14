import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import SwiperCarousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import ThumbsCarousel from 'components/reuseable/ThumbsCarousel';
// -------- markups -------- //
import { simpleMarkup, cardMarkup, textMarkup, imageMarkup, thumbnailMarkup } from 'markups/elements/carousel';
// -------- data -------- //
const quickAccess = [
  { title: 'Simple Carousel', url: 'snippet-1' },
  { title: 'Card Carousel', url: 'snippet-2' },
  { title: 'Text Slider', url: 'snippet-3' },
  { title: 'Image Slider', url: 'snippet-4' },
  { title: 'Thumbnail Slider', url: 'snippet-5' }
];

const Carousel: FC = () => {
  return (
    <DocLayout
      pageTitle="Carousel"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-2"
      description={
        <>
          Here you can find simple carousel examples and usage instructions. For further carousel documentation please
          visit{' '}
          <a href="https://swiperjs.com/react" target="_blank" className="hover more" rel="noreferrer">
            Swiper docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Simple Carousel</h2>
        <div className="card">
          <div className="card-body">
            <SwiperCarousel breakpoints={carouselBreakpoints}>
              {['p1', 'p2', 'p3', 'p4', 'p5'].map((item) => (
                <figure className="overlay overlay-1 hover-scale rounded mb-0" key={item}>
                  <a href="#">
                    <img src={`/img/photos/${item}.jpg`} srcSet={`/img/photos/${item}@2x.jpg 2x`} alt="" />
                    <span className="bg" />
                  </a>

                  <figcaption>
                    <h5 className="from-top mb-0">Read More</h5>
                  </figcaption>
                </figure>
              ))}
            </SwiperCarousel>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{simpleMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Card Carousel</h2>
        <div className="card">
          <div className="card-body">
            <SwiperCarousel
              grabCursor
              spaceBetween={0}
              slidesPerView={2}
              navigation={false}
              className="dots-closer blog grid-view"
              breakpoints={{ 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
            >
              {[1, 2, 3, 4].map((item) => (
                <div className="item-inner" key={item}>
                  <article>
                    <div className="card">
                      <div className="card-body">
                        <p>
                          Duis mollis est non commodo luctu, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                          Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
                          Praesent commodo cursus magna vel scelerisque nisl consectetur et.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </SwiperCarousel>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{cardMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Text Slider</h2>

        <div className="card">
          <div className="card-body">
            <SwiperCarousel className="dots-closer text-center" navigation={false} grabCursor slidesPerView={1}>
              {[1, 2, 3].map((item) => (
                <p key={item}>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula
                  ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
                  mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.
                </p>
              ))}
            </SwiperCarousel>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{textMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-3">Image Slider</h2>

        <p className="lead mb-3">
          Use any available <code className="code">.m-*</code>, <code className="code">.p-*</code>,{' '}
          <code className="code">.bg-*</code> and <code className="code">.text-*</code> helper class to style and place
          the captions. You can change their placement with the help of flex classes as well.
        </p>
        <p className="lead">
          Use{' '}
          <a href="https://animate.style" className="external" target="_blank" rel="noreferrer">
            animate.css
          </a>{' '}
          animation and utility classes to add animations and delays to captions.
        </p>
        <p className="lead mb-8">
          For hero slider (slider with fixed height and background cover images) with captions example check out{' '}
          <a href="/demo-15" className="external" target="_blank">
            Demo 15
          </a>
        </p>

        <div className="card">
          <div className="card-body">
            <SwiperCarousel
              autoHeight
              spaceBetween={5}
              slidesPerView={1}
              className="dots-over"
              slideClassName="bg-overlay bg-overlay-400 rounded"
            >
              <div>
                <img src="/img/photos/tb1.jpg" alt="" />
                <div className="caption-wrapper p-12">
                  <div className="caption bg-white rounded px-4 py-3 mt-auto animate__animated animate__slideInDown animate__delay-1s">
                    <h5 className="mb-0">Vivamus sagittis lacus augue</h5>
                  </div>
                </div>
              </div>

              <div>
                <img src="/img/photos/is2.jpg" alt="" />
                <div className="caption-wrapper p-12">
                  <div className="caption bg-white rounded px-4 py-3 mx-auto mt-auto animate__animated animate__slideInDown animate__delay-1s">
                    <h5 className="mb-0">Vivamus sagittis lacus augue</h5>
                  </div>
                </div>
              </div>

              <img src="/img/photos/is3.jpg" className="rounded" alt="" />
            </SwiperCarousel>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{imageMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper py-16">
        <h2 className="mb-5">Thumbnail Slider</h2>

        <div className="card">
          <div className="card-body">
            <ThumbsCarousel />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-5">
              View example's code
            </a>
          </div>

          <div id="collapse-5" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{thumbnailMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Carousel;
