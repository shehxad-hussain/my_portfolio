const simpleMarkup = `// reusable carousel component
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';

<Carousel breakpoints={carouselBreakpoints}>
  <figure className="overlay overlay-1 hover-scale rounded mb-0">
    <a href="#">
      <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
      <span className="bg" />
    </a>

    <figcaption>
      <h5 className="from-top mb-0">Read More</h5>
    </figcaption>
  </figure>
  
  <figure className="overlay overlay-1 hover-scale rounded mb-0">
    <a href="#">
      <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
      <span className="bg" />
    </a>

    <figcaption>
      <h5 className="from-top mb-0">Read More</h5>
    </figcaption>
  </figure>
</Carousel>
`;

const cardMarkup = `// reusable carousel component
import Carousel from 'components/reuseable/Carousel';

<Carousel
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
              Duis mollis est non commodo luctu, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna vel scelerisque nisl consectetur et.
            </p>
          </div>
        </div>
      </article>
    </div>
  ))}
</Carousel>
`;

const textMarkup = `// reusable carousel component
import Carousel from 'components/reuseable/Carousel';

<Carousel className="dots-closer text-center" navigation={false} grabCursor slidesPerView={1}>
  {[1, 2, 3].map((item) => (
    <p key={item}>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
    </p>
  ))}
</Carousel>
`;

const imageMarkup = `// reusable carousel component
import Carousel from 'components/reuseable/Carousel';

<Carousel
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
</Carousel>
`;

const thumbnailMarkup = `import ThumbsCarousel from 'components/reuseable/ThumbsCarousel';
  
// this is static component. This is used for product details page
<ThumbsCarousel />
`;

export { simpleMarkup, cardMarkup, textMarkup, imageMarkup, thumbnailMarkup };
