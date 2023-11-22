import { FC, ReactElement, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

// ==================================================================
interface CarouselProps extends SwiperProps {
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  slideClassName?: string;
  children: ReactElement[];
  slidesPerView?: number | 'auto';
}
// ==================================================================

const Carousel: FC<CarouselProps> = (props) => {
  const {
    children,
    slideClassName,
    spaceBetween = 30,
    slidesPerView = 3,
    pagination = true,
    navigation = true,
    ...others
  } = props;

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Pagination, Navigation, Autoplay]}
      navigation={navigation ? { prevEl, nextEl } : false}
      pagination={pagination ? { clickable: true } : false}
      {...others}
    >
      {children.map((slide, i) => (
        <SwiperSlide className={slideClassName} key={i}>
          {slide}
        </SwiperSlide>
      ))}

      {/* custom navigation */}
      {navigation && (
        <div className="swiper-navigation">
          <div
            role="button"
            ref={(node) => setPrevEl(node)}
            className="swiper-button swiper-button-prev swiper-button-disabled"
          />
          <div role="button" ref={(node) => setNextEl(node)} className="swiper-button swiper-button-next" />
        </div>
      )}
    </Swiper>
  );
};

export default Carousel;
