import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const Contact13: FC = () => {
  return (
    <div className="row gx-3 gy-10 gy-lg-0 align-items-center">
      <div className="col-lg-6">
        <figure>
          <img className="w-auto" src="/img/illustrations/3d3.png" srcSet="/img/illustrations/3d3@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5 ms-auto">
        <h2 className="fs-16 text-uppercase text-primary mb-3">Let’s Talk</h2>
        <h3 className="display-4 mb-3">Let's make something great together. We are trusted by over 5000+ clients.</h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis
          interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
          sit amet risus.
        </p>
        <NextLink title="Join Us" href="#" className="btn btn-primary rounded mt-2" />
      </div>
    </div>
  );
};

export default Contact13;
