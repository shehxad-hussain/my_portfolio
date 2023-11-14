import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const Contact2: FC = () => {
  return (
    <div className="row gx-0">
      <div
        className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
        style={{ backgroundImage: 'url(/img/photos/tm1.jpg)' }}
      />

      <div className="col-lg-6">
        <div className="p-10 p-md-11 p-lg-13">
          <h2 className="display-4 mb-3">Let’s Talk</h2>

          <p className="lead fs-lg">
            Lets make something great together. We are trusted by over 5000+ clients. Join them by using our services
            and grow your business.
          </p>

          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis
            interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus.
          </p>

          <NextLink title="Join Us" href="#" className="btn btn-primary rounded-pill mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Contact2;
