import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import { BlogCard5 } from 'components/reuseable/blog-cards';
// -------- data -------- //
import { blogList5 } from 'data/blog';

const Hero25: FC = () => {
  return (
    <Carousel
      navigation={false}
      slidesPerView={2}
      className="blog grid-view mb-11"
      breakpoints={{ 0: { slidesPerView: 1 }, 992: { slidesPerView: 2 } }}
    >
      {blogList5.map((item) => (
        <BlogCard5 key={item.id} {...item} />
      ))}
    </Carousel>
  );
};

export default Hero25;
