import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import { FC, Fragment, ReactElement } from 'react';

// ========================================================
type InfoProps = {
  title?: string;
  phone?: string;
  description?: string;
  address?: string | ReactElement;
};
// ========================================================

const Info: FC<InfoProps> = (props) => {
  const { title, description, address, phone } = props;

  const otherPages = [
    { title: 'Our Story', url: '#' },
    { title: 'Terms of Use', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Contact Us', url: '#' }
  ];

  return (
    <div className="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true">
      <div className="offcanvas-header">
        <h3 className="text-white fs-30 mb-0">{title}</h3>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>

      <div className="offcanvas-body pb-6">
        <div className="widget mb-8">
          <p>{description}</p>
        </div>

        <div className="widget mb-8">
          <h4 className="widget-title text-white mb-3">Contact Info</h4>
          <address>{address}</address>
          <NextLink
            title="info@email.com"
            className="link-inverse"
            href="mailto:first.last@email.com"
          />
          <br />
          <NextLink href="tel:0123456789" title={phone!} />
        </div>

        <div className="widget mb-8">
          <h4 className="widget-title text-white mb-3">Learn More</h4>
          <ul className="list-unstyled">
            {otherPages.map((item) => (
              <li key={item.title}>
                <NextLink href="#" title={item.title} />
              </li>
            ))}
          </ul>
        </div>

        <div className="widget">
          <h4 className="widget-title text-white mb-3">Follow Us</h4>
          <SocialLinks className="nav social social-white" />
        </div>
      </div>
    </div>
  );
};

// set default props
Info.defaultProps = {
  title: 'Sandbox',
  phone: '00 (123) 456 78 90',
  description: `Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.`,
  address: (
    <Fragment>
      Moonshine St. 14/05 <br /> Light City, London
    </Fragment>
  )
};

export default Info;
