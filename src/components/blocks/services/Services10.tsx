import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { ServiceCard5 } from 'components/reuseable/service-cards';

const Services10: FC = () => {
  return (
    <div className="row gx-lg-0 gy-10 mb-15 mb-md-18 align-items-center">
      <div className="col-lg-6">
        <div className="row g-6 text-center">
          <div className="col-md-6">
            <div className="row">
              <div className="col-lg-12">
                <figure className="rounded mb-6">
                  <img src="/img/photos/se1.jpg" srcSet="/img/photos/se1@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col-lg-12">
                <ServiceCard5
                  url="#"
                  icon="uil-monitor"
                  title="Web Design"
                  description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-lg-12 order-md-2">
                <figure className="rounded mb-6 mb-md-0">
                  <img src="/img/photos/se2.jpg" srcSet="/img/photos/se2@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col-lg-12">
                <ServiceCard5
                  url="#"
                  title="Mobile Design"
                  icon="uil-mobile-android"
                  className="card shadow-lg mb-md-6 mt-lg-6"
                  description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-5 offset-lg-1">
        <h2 className="display-4 mb-3">What We Do?</h2>

        <p className="lead fs-lg lh-sm">
          The full service we are offering is specifically designed to meet your business needs.
        </p>

        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo.
          Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula.
        </p>

        <NextLink title="More Details" href="#" className="btn btn-primary rounded-pill mt-3" />
      </div>
    </div>
  );
};

export default Services10;
