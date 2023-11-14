import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel';
import ShareButton from 'components/common/ShareButton';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import BlogCommentList from 'components/common/BlogCommentList';
import { BlogCard1 } from 'components/reuseable/blog-cards';
// -------- data -------- //
const tags = [
  { id: 1, title: 'Still Life', url: '#' },
  { id: 2, title: 'Urban', url: '#' },
  { id: 3, title: 'Nature', url: '#' }
];

const images = [
  { id: 1, url: '/img/photos/b8.jpg', full: '/img/photos/b8-full.jpg' },
  { id: 2, url: '/img/photos/b9.jpg', full: '/img/photos/b9-full.jpg' },
  { id: 3, url: '/img/photos/b10.jpg', full: '/img/photos/b10-full.jpg' },
  { id: 4, url: '/img/photos/b11.jpg', full: '/img/photos/b11-full.jpg' }
];

const blogs = [
  {
    id: 1,
    link: '#',
    category: 'Coding',
    date: '14 Apr 2022',
    image: '/img/photos/b4.jpg',
    title: 'Ligula tristique quis risus',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 2,
    link: '#',
    date: '14 Apr 2022',
    category: 'Workspace',
    image: '/img/photos/b5.jpg',
    title: 'Nullam id dolor elit id nibh',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 3,
    link: '#',
    date: '14 Apr 2022',
    category: 'Meeting',
    image: '/img/photos/b6.jpg',
    title: 'Ultricies fusce porta elit',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 4,
    link: '#',
    date: '14 Apr 2022',
    category: 'Business Tips',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  }
];

const BlogDetailsTemplate: FC = () => {
  // used for image lightbox
  useLightBox();

  return (
    <div className="card">
      <FigureImage width={960} height={600} src="/img/photos/b1.jpg" className="card-img-top" />

      <div className="card-body">
        <div className="classic-view">
          <article className="post">
            <div className="post-content mb-5">
              <h2 className="h1 mb-4">Cras mattis consectetur purus fermentum</h2>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
                purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus
                porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget
                porta ac consectetur vestibulum.
              </p>

              <p>
                Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis
                suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit
                aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi.
                Duis non arcu vel lectus urna mollis ornare vel eu leo.
              </p>

              <div className="row g-6 mt-3 mb-10">
                {images.map(({ id, url, full }) => (
                  <div key={id} className="col-md-6">
                    <figure className="hover-scale rounded cursor-dark">
                      <a href={full} data-glightbox data-gallery="post">
                        <Image layout="responsive" width={460} height={307} src={url} alt="demo" />
                      </a>
                    </figure>
                  </div>
                ))}
              </div>

              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra
                augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nullam quis
                risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Praesent commodo
                cursus magna.
              </p>

              <blockquote className="fs-lg my-8">
                <p>
                  Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec elit purus.
                </p>
                <footer className="blockquote-footer">Very important person</footer>
              </blockquote>

              <h3 className="h2 mb-4">Sit Vulputate Bibendum Purus</h3>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet
                fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula
                porta felis euismod semper.
              </p>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                risus. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Nulla
                vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
              </p>
            </div>

            <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
              <div>
                <ul className="list-unstyled tag-list mb-0">
                  {tags.map(({ id, title, url }) => (
                    <li key={id}>
                      <NextLink href={url} title={title} className="btn btn-soft-ash btn-sm rounded-pill mb-0" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-0 mb-md-2">
                <ShareButton btnSize="btn-sm" />
              </div>
            </div>
          </article>
        </div>

        <hr />

        <div className="author-info d-md-flex align-items-center mb-3">
          <div className="d-flex align-items-center">
            <FigureImage
              width={120}
              height={120}
              src="/img/avatars/u5.jpg"
              className="user-avatar rounded-circle overflow-hidden"
            />

            <div>
              <h6>
                <NextLink title="Nikolas Brooten" href="#" className="link-dark" />
              </h6>
              <span className="post-meta fs-15">Sales Manager</span>
            </div>
          </div>

          <div className="mt-3 mt-md-0 ms-auto">
            <Link href="#">
              <a className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0">
                <i className="uil uil-file-alt" /> All Posts
              </a>
            </Link>
          </div>
        </div>

        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus mollis interdum.
        </p>

        <SocialLinks className="nav social" />

        <hr />

        <h3 className="mb-6">You Might Also Like</h3>
        <Carousel
          grabCursor
          slidesPerView={2}
          navigation={false}
          breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
        >
          {blogs.map(({ id, ...item }) => (
            <BlogCard1 key={id} {...item} />
          ))}
        </Carousel>

        <hr />

        <div id="comments">
          <h3 className="mb-6">5 Comments</h3>
          <BlogCommentList />
        </div>

        <hr />

        <form className="comment-form">
          <div className="form-floating mb-4">
            <input type="text" className="form-control" placeholder="Name*" id="c-name" />
            <label htmlFor="c-name">Name *</label>
          </div>

          <div className="form-floating mb-4">
            <input type="email" className="form-control" placeholder="Email*" id="c-email" />
            <label htmlFor="c-email">Email*</label>
          </div>

          <div className="form-floating mb-4">
            <input type="text" className="form-control" placeholder="Website" id="c-web" />
            <label htmlFor="c-web">Website</label>
          </div>

          <div className="form-floating mb-4">
            <textarea name="textarea" placeholder="Comment" className="form-control" style={{ height: 150 }} />
            <label>Comment *</label>
          </div>

          <button type="submit" className="btn btn-primary rounded-pill mb-0">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetailsTemplate;
