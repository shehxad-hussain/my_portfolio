import { FC } from 'react';
import Link from 'next/link';
import NextLink from 'components/reuseable/links/NextLink';

const Services27: FC = () => {
  return (
    <section id="services">
      <div className="wrapper bg-gray">
        <div className="container py-15 py-md-17">
          <div className="row gx-lg-0 gy-10 align-items-center">
            <div className="col-lg-6">
              <div className="row g-6 text-center">
                <div className="col-md-6">
                  <Card title="Products" image="/img/photos/fs4.jpg" className="mb-6" />
                  <Card title="Recipes" image="/img/photos/fs6.jpg" />
                </div>

                <div className="col-md-6">
                  <Card title="Restaurants" image="/img/photos/fs5.jpg" className="mt-md-6 mb-6" />
                  <Card title="Still Life" image="/img/photos/fs7.jpg" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <h2 className="display-5 mb-3">My Services</h2>
              <p className="lead fs-lg">
                I would like to give you a unique photography experience, capture your products with excellent
                composition and lighting skills.
              </p>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare
                vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat
                ligula mollis metus auctor fringilla.
              </p>

              <NextLink title="More Details" href="#" className="btn btn-primary rounded-pill mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ------------------------------------------------------------------------------------------
type CardProps = { image: string; title: string; className?: string };

const Card: FC<CardProps> = ({ image, title, className = '' }) => (
  <div className={`card shadow-lg ${className}`}>
    <figure className="card-img-top overlay overlay-1">
      <Link href="#">
        <a>
          <img className="img-fluid" src={image} alt="" />
          <span className="bg" />
        </a>
      </Link>

      <figcaption>
        <h5 className="from-top mb-0">View Gallery</h5>
      </figcaption>
    </figure>

    <div className="card-body p-4">
      <h3 className="h4 mb-0">{title}</h3>
    </div>
  </div>
);

export default Services27;
