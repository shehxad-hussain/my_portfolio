import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import { BlogCard1 } from 'components/reuseable/blog-cards';
// -------- carousel breakpoint obj -------- //
import carouselBreakpoints from 'utils/carouselBreakpoints';
// -------- data -------- //
import { blogList1 } from 'data/blog';

const Blog1: FC = () => {
  return (
    <section className="wrapper bg-light angled upper-end">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7">
            <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Case Studies</h2>
            <h3 className="display-4 mb-9">
              Check out some of our awesome projects with creative ideas and great design.
            </h3>
          </div>
        </div>

        <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
          {blogList1.map((item) => (
            <BlogCard1 key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Blog1;
