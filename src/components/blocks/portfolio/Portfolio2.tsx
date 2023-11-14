import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { carouselImages } from 'data/demo-7';

const Portfolio2: FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="container pb-9 pb-md-14">
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
            <h3 className="display-4 mb-8">Our Recent Projects</h3>
          </div>
        </div>

        <div className="swiper-container grid-view nav-bottom nav-color mb-14">
          <Carousel
            grabCursor
            slidesPerView={2}
            pagination={false}
            className="overflow-visible"
            breakpoints={{ 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
          >
            {carouselImages.map(({ id, url, image }) => (
              <figure className="rounded" key={id}>
                <Image width={1100} height={770} layout="responsive" src={image} alt="" />
                <NextLink title={<i className="uil uil-link" />} className="item-link" href={url} />
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
