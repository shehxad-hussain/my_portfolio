import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import { BlogCard1 } from 'components/reuseable/blog-cards';
// -------- data -------- //
import { blogList2 } from 'data/blog';

const Blog7: FC = () => {
  return (
    <section className="wrapper bg-white">
      <div className="container py-15 py-md-17">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-7 col-xxl-6 mx-auto">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Case Studies</h2>
            <h3 className="display-3 ls-sm mb-10">Our awesome projects with creative ideas and great design.</h3>
          </div>
        </div>

        <Carousel navigation={false} breakpoints={carouselBreakpoints}>
          {blogList2.map((item) => (
            <BlogCard1 key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Blog7;
