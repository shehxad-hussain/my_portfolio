import { FC, Fragment } from 'react';
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import { BlogCard1 } from 'components/reuseable/blog-cards';
// -------- data -------- //
import { blogList2 } from 'data/blog';

const Blog3: FC = () => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
          <h2 className="fs-15 text-uppercase text-muted mb-3">Case Studies</h2>
          <h3 className="display-4 mb-9">
            Check out some of our awesome projects with creative ideas and great design.
          </h3>
        </div>
      </div>

      <Carousel navigation={false} breakpoints={carouselBreakpoints}>
        {blogList2.map((item) => (
          <BlogCard1 key={item.id} {...item} />
        ))}
      </Carousel>
    </Fragment>
  );
};

export default Blog3;
