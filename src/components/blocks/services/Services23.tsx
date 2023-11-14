import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const Services23: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-15 py-md-17">
        <div className="row text-center mb-10">
          <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-muted mb-3">What We Do?</h2>
            <h3 className="display-3 px-xl-10 mb-0">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div>

        <div className="row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center">
          <div className="col-lg-6">
            <figure className="rounded mb-0">
              <img
                alt=""
                className="img-fluid"
                src="/img/illustrations/ui4.png"
                srcSet="/img/illustrations/ui4@2x.png 2x"
              />
            </figure>
          </div>

          <ColumnTwo title="Web Design" className="ms-auto" />
        </div>

        <div className="row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center">
          <div className="col-lg-6 order-lg-2 ms-auto">
            <figure className="rounded mb-0">
              <img
                alt=""
                className="img-fluid"
                src="/img/illustrations/ui1.png"
                srcSet="/img/illustrations/ui1@2x.png 2x"
              />
            </figure>
          </div>

          <ColumnTwo title="Mobile Development" />
        </div>

        <div className="row gx-lg-0 gy-10 align-items-center">
          <div className="col-lg-6">
            <figure className="rounded mb-0">
              <img
                alt=""
                className="img-fluid"
                src="/img/illustrations/ui5.png"
                srcSet="/img/illustrations/ui5@2x.png 2x"
              />
            </figure>
          </div>

          <ColumnTwo title="SEO Optimization" className="ms-auto" />
        </div>
      </div>
    </section>
  );
};

type ColumnTwoProps = { title: string; className?: string };
const ColumnTwo = ({ title, className = '' }: ColumnTwoProps) => {
  // list data
  const list = [
    'Aenean quam ornare curabitur blandit.',
    'Nullam quis risus eget urna mollis ornare leo.',
    'Etiam porta euismod mollis natoque ornare.'
  ];

  return (
    <div className={`col-lg-5 ${className}`}>
      <h3 className="fs-28 mb-3">{title}</h3>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
        ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.
      </p>

      <ul className="icon-list bullet-bg bullet-soft-primary">
        {list.map((item) => (
          <li key={item}>
            <i className="uil uil-check" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <NextLink title="More Details" href="#" className="btn btn-soft-primary rounded-pill mt-2 mb-0" />
    </div>
  );
};

export default Services23;
