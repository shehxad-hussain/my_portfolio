import dayjs from 'dayjs';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// -------- custom components -------- //
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
import carouselBreakpoints from 'utils/carouselBreakpoints';
// -------- data -------- //
import { blogList3 } from 'data/blog';

const Blog5: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="overflow-hidden">
        <div className="container py-14 py-md-16">
          <div className="row">
            <div className="col-xl-7 col-xxl-6 mx-auto text-center">
              <i className="icn-flower text-leaf fs-30 opacity-25"></i>
              <h2 className="display-5 text-center mt-2 mb-10">
                Here are the latest posts from my blog that grabbed the most attention.
              </h2>
            </div>
          </div>

          <div className="swiper-container nav-bottom nav-color mb-14 swiper-container-3">
            <Carousel pagination={false} className="overflow-visible pb-2" breakpoints={carouselBreakpoints}>
              {blogList3.map((item) => (
                <article key={item.id}>
                  <div className="card shadow-lg">
                    <figure className="card-img-top overlay overlay-1">
                      <Link href="#">
                        <a>
                          <img src={item.image['1x']} srcSet={item.image['2x']} alt="" />
                          <span className="bg" />
                        </a>
                      </Link>

                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>

                    <div className="card-body p-6">
                      <div className="post-header">
                        <div className="post-category">
                          <NextLink title={item.category} href="#" className="hover" />
                        </div>

                        <h2 className="post-title h3 mt-1 mb-3">
                          <NextLink title={item.title} href={item.link} className="link-dark" />
                        </h2>
                      </div>

                      <div className="post-footer">
                        <ul className="post-meta d-flex mb-0">
                          <li className="post-date">
                            <i className="uil uil-calendar-alt" />
                            <span>{dayjs(item.createdAt).format('DD MMM YYYY')}</span>
                          </li>

                          <li className="post-comments">
                            <Link href="#">
                              <a>
                                <i className="uil uil-comment" />
                                {item.comments}
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog5;
