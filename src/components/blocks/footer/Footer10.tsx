import { FC } from 'react';
import Link from 'types/link';
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- data -------- //
import { helps, learnMore } from 'data/footer';

const Footer10: FC = () => {
  // common links section
  const widget = (list: Link[], title: string) => {
    return (
      <div className="widget">
        <h4 className="widget-title text-white mb-3">{title}</h4>
        <ul className="list-unstyled text-reset mb-0">
          {list.map(({ url, title, id }) => (
            <li key={id}>
              <NextLink href={url} title={title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-dark text-inverse">
      <div className="container pt-20 pt-lg-21 pb-7">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="h2 mb-3 text-white">Join the Community</h3>
              <p className="lead mb-5">
                Lets make something great together. We are trusted by over 5000+ clients. Join them by using our
                services and grow your business.
              </p>
              <NextLink title="Join Us" href="#" className="btn btn-white rounded-pill" />
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">{widget(helps, 'Need Help?')}</div>

          <div className="col-md-4 col-lg-2">{widget(learnMore, 'Learn More')}</div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
              <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
              <a href="mailto:first.last@email.com">info@email.com</a>
              <br /> 00 (123) 456 78 90
            </div>
          </div>
        </div>

        <hr className="mt-13 mt-md-15 mb-7" />

        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2022 Sandbox. All rights reserved.</p>
          <SocialLinks className="nav social social-white text-md-end" />
        </div>
      </div>
    </footer>
  );
};

export default Footer10;
