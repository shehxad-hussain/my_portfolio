import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NextLink from '../links/NextLink';

// ======================================================
type BlogCard1Props = {
  date: string;
  image: string;
  title: string;
  category: string;
};
// ======================================================

const BlogCard1: FC<BlogCard1Props> = ({ date, image, title, category }) => {
  return (
    <article>
      <figure className="overlay overlay-1 hover-scale rounded mb-6">
        <Link href="#">
          <a>
            <Image width={560} height={350} src={image} alt={title} layout="responsive" />
            <span className="bg" />
          </a>
        </Link>

        <figcaption>
          <h5 className="from-top mb-0">Read More</h5>
        </figcaption>
      </figure>

      <div className="post-header">
        <h2 className="post-title h3 mb-3">
          <NextLink title="Ligula tristique quis risus" className="link-dark" href="#" />
        </h2>
      </div>

      <div className="post-footer">
        <ul className="post-meta">
          <li className="post-date">
            <i className="uil uil-calendar-alt" />
            <span>{date}</span>
          </li>

          <li className="post-comments">
            <NextLink
              href="#"
              className="link-dark"
              title={
                <>
                  <i className="uil uil-file-alt fs-15" />
                  {category}
                </>
              }
            />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default BlogCard1;
