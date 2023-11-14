import { FC, Fragment } from 'react';
import data from 'data/demo-27';

const About28: FC = () => {
  // reusable list item
  const item = (title: string) => (
    <li>
      <i className="uil uil-check" />
      <span>{title}</span>
    </li>
  );

  return (
    <Fragment>
      <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
        <div className="col-lg-6">
          <div className="row gx-md-5 gy-5">
            <div className="col-md-6">
              <figure className="rounded">
                <img src="/img/photos/g14.jpg" srcSet="/img/photos/g14@2x.jpg 2x" alt="" />
              </figure>
            </div>

            <div className="col-md-6 align-self-end">
              <figure className="rounded">
                <img src="/img/photos/g15.jpg" srcSet="/img/photos/g15@2x.jpg 2x" alt="" />
              </figure>
            </div>

            <div className="col-12">
              <figure className="rounded mx-md-5">
                <img src="/img/photos/g16.jpg" srcSet="/img/photos/g16@2x.jpg 2x" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="fs-15 text-uppercase text-muted mb-3">Who Are We?</h2>
          <h3 className="display-3 ls-sm mb-5">Company that believes in the power of creative strategy.</h3>
          <p className="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
            bibendum nulla sed.
          </p>

          <div className="row gy-3 gx-xl-8">
            <div className="col-xl-6">
              <ul className="icon-list bullet-primary mb-0">
                {item('Aenean eu leo quam ornare curabitur blandit tempus.')}
                {item('Nullam quis risus eget urna mollis ornare donec elit.')}
              </ul>
            </div>

            <div className="col-xl-6">
              <ul className="icon-list bullet-primary mb-0">
                {item('Etiam porta sem malesuada magna mollis euismod.')}
                {item('Fermentum massa vivamus faucibus amet euismod.')}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-15 mb-md-18">
        {data.abouts.map(({ Icon, id, title, description, color }) => (
          <div className="col-lg-4" key={id}>
            <div className="d-flex flex-row">
              <div>
                <Icon className={`icon-svg-md text-${color} me-5`} />
              </div>

              <div>
                <h4 className="fs-20 ls-sm">{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default About28;
