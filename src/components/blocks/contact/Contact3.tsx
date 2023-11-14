import { FC } from 'react';
import { Tiles3 } from 'components/elements/tiles';
import NextLink from 'components/reuseable/links/NextLink';

const Contact3: FC = () => {
  return (
    <div className="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
      <div className="col-lg-7 position-relative">
        <div className="shape bg-dot primary rellax w-18 h-18" style={{ top: 0, left: '-1.4rem', zIndex: 0 }} />

        <Tiles3 />
      </div>

      <div className="col-lg-5">
        <h2 className="display-4 mb-3">Let’s Talk</h2>
        <p className="lead fs-lg">
          Lets make something great together. We are <span className="underline">trusted by</span> over 5000+ clients.
          Join them by using our services and grow your business.
        </p>

        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis
          interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
          sit amet risus.
        </p>

        <NextLink title="Join Us" href="#" className="btn btn-primary rounded-pill mt-2" />
      </div>
    </div>
  );
};

export default Contact3;
