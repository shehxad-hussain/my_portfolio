import { FC } from 'react';
import Plyr from 'plyr-react';
import Image from 'next/image';
// -------- custom components -------- //
import Pagination from 'components/reuseable/Pagination';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import { BlogCard2, BlogCard3 } from 'components/reuseable/blog-cards';
// -------- data -------- //
import { blogList4 } from 'data/blog';

const Blog6: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 mt-17">
      <div className="col-lg-8">
        <div className="blog classic-view">
          <BlogCard2
            link="#"
            category="Restaurants"
            title="Fringilla Ligula Pharetra Amet"
            description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur."
            cardTop={
              <figure className="card-img-top overlay overlay-1 hover-scale">
                <a className="link-dark" href="#">
                  <Image width={960} height={600} src="/img/photos/tb9.jpg" alt="blog" layout="responsive" />
                  <span className="bg" />
                </a>

                <figcaption>
                  <h5 className="from-top mb-0">Read More</h5>
                </figcaption>
              </figure>
            }
          />

          <BlogCard2
            link="#"
            category="Nature"
            title="Consectetur Bibendum Sollicitudin Vulputate"
            description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur."
            cardTop={
              <div className="card-img-top">
                <Plyr
                  options={{ loadSprite: true, clickToPlay: true }}
                  source={{ type: 'video', sources: [{ src: 'hxeITyt_XfU', provider: 'youtube' }] }}
                />
              </div>
            }
          />
        </div>

        <div className="blog grid grid-view">
          <div className="row isotope gx-md-8 gy-8 mb-8">
            {blogList4.map((item) => (
              <BlogCard3 {...item} key={item.id} />
            ))}
          </div>
        </div>

        <Pagination className="justify-content-start" altStyle />
      </div>

      <aside className="col-lg-4 sidebar mt-8 mt-lg-0">
        <BlogSidebar thumbnail="/img/photos/f1.jpg" />
      </aside>
    </div>
  );
};

export default Blog6;
