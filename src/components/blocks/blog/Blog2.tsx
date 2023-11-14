import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import { BlogCard4 } from 'components/reuseable/blog-cards';
// -------- data -------- //
import { blogList } from 'data/demo-11';

const Blog2: FC = () => {
  return (
    <div>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-15 text-uppercase text-primary mb-3">Case Studies</h2>
          <h3 className="display-4 mb-6">
            Check out some of our awesome projects with creative ideas and great design.
          </h3>
        </div>
      </div>

      <div className="position-relative">
        <div className="shape bg-dot primary rellax w-17 h-20" style={{ top: 0, left: '-1.7rem' }} />
        <Carousel
          navigation={false}
          spaceBetween={0}
          className="dots-closer blog grid-view mb-6"
          breakpoints={{ 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
        >
          {blogList.map((item) => (
            <div className="item-inner" key={item.id}>
              <BlogCard4 {...item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Blog2;
