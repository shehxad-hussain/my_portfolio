import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { portfolioList1 } from 'data/portfolio';

const Portfolio1: FC = () => {
  return (
    <div className="container-fluid px-md-6">
      <Carousel
        grabCursor
        className="blog grid-view mb-15 mb-md-17"
        breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
      >
        {portfolioList1.map((item) => (
          <figure className="rounded" key={item}>
            <Image width={900} height={650} src={item} alt="project" />
          </figure>
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio1;
