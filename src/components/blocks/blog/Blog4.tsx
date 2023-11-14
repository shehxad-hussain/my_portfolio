import { FC, Fragment } from 'react';
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import { BlogCard1 } from 'components/reuseable/blog-cards';
// -------- data -------- //
import { blogList2 } from 'data/blog';

const Blog4: FC = () => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Case Studies</h2>
          <h3 className="display-4 mb-9 me-lg-n5">
            Check out some of our awesome projects with creative ideas and great design.
          </h3>
        </div>
      </div>

      <Carousel navigation={false} className="blog grid-view mb-17 mb-md-20" breakpoints={carouselBreakpoints}>
        {blogList2.map((item) => (
          <BlogCard1 key={item.id} {...item} />
        ))}
      </Carousel>
    </Fragment>
  );
};

export default Blog4;
