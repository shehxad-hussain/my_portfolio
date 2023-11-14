import { FC } from 'react';
import Link from 'next/link';
// -------- custom component -------- //
import SocialLinks from 'components/reuseable/SocialLinks';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { categories, tags } from 'data/footer';

const Footer16: FC = () => {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <h4 className="widget-title text-white mb-3">Popular Posts</h4>

            <ul className="image-list">
              <li>
                <Link href="#">
                  <a>
                    <figure className="rounded">
                      <img src="/img/photos/a4.jpg" alt="" />
                    </figure>
                  </a>
                </Link>

                <div className="post-content">
                  <h6 className="mb-2">
                    <NextLink title="Magna Mollis Ultricies" className="link-dark" href="#" />
                  </h6>

                  <ul className="post-meta">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>26 Mar 2022</span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mt-5">
                <Link href="#">
                  <a>
                    <figure className="rounded">
                      <img src="/img/photos/a5.jpg" alt="" />
                    </figure>
                  </a>
                </Link>

                <div className="post-content">
                  <h6 className="mb-2">
                    <NextLink title="Ornare Nullam Risus" className="link-dark" href="#" />
                  </h6>

                  <ul className="post-meta">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>16 Feb 2022</span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mt-5">
                <Link href="#">
                  <a>
                    <figure className="rounded">
                      <img src="/img/photos/a6.jpg" alt="" />
                    </figure>
                  </a>
                </Link>

                <div className="post-content">
                  <h6 className="mb-2">
                    <NextLink title="Euismod Nullam Fusce" className="link-dark" href="#" />
                  </h6>

                  <ul className="post-meta">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>8 Jan 2022</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Tags</h4>
              <ul className="list-unstyled tag-list">
                {tags.map(({ id, title, url }) => (
                  <li key={id}>
                    <NextLink title={title} href={url} className="btn btn-soft-ash text-white btn-sm rounded-pill" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="widget">
              <h4 className="widget-title text-white mb-3">Categories</h4>
              <ul className="unordered-list text-reset bullet-white ">
                {categories.map(({ id, post, title, url }) => (
                  <li key={id}>
                    <NextLink title={`${title} (${post})`} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">Moonshine St. 14/05 Light City, London, United Kingdom</address>
              <a href="mailto:#">info@email.com</a>
              <br /> 00 (123) 456 78 90
            </div>

            <div className="widget">
              <h4 className="widget-title text-white mb-3">Elsewhere</h4>
              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled text-reset mb-0">
                <li>
                  <Link href="#">About Us</Link>
                </li>

                <li>
                  <Link href="#">Our Story</Link>
                </li>

                <li>
                  <Link href="#">Projects</Link>
                </li>
              </ul>
            </div>

            <div className="widget">
              <h4 className="widget-title text-white mb-3">Need Help?</h4>
              <ul className="list-unstyled text-reset mb-0">
                <li>
                  <Link href="#">Support</Link>
                </li>
                <li>
                  <Link href="#">Get Started</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 mb-0 text-center">© 2022 Sandbox. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer16;
