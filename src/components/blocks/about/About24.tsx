import { FC } from 'react';
import CountUp from 'react-countup';
import { ProcessList2 } from 'components/reuseable/process-list';
// -------- data -------- //
import { skill2 } from 'data/skill';
import { factList10 } from 'data/facts';
import { processList } from 'data/demo-12';

const list = [
  'Aenean eu leo quam pellentesque.',
  'Nullam quis risus eget urna mollis.',
  'Donec id elit non mi porta gravida.',
  'Fusce dapibus tellus ac commodo.',
  'Cras justo odio dapibus ac facilisis in.'
];

const About24: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
        <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="img-mask mask-1">
              <img src="/img/photos/about29.jpg" srcSet="/img/photos/about29@2x.jpg 2x" alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="display-5 mb-5">
              Hi, I'm Julia, a documentary wedding and couples photographer currently working from and based in London.
            </h2>
            <p className="mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio. Sed
              posuere consectetur est at lobortis facilisis in.
            </p>

            <div className="row counter-wrapper gy-6">
              {factList10.map(({ id, title, value, suffix }) => (
                <div className="col-md-4" key={id}>
                  <h3 className="counter">
                    <CountUp end={value} suffix={suffix} />
                  </h3>
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row gx-md-8 gx-xl-12 gy-6 mt-8">
          <div className="col-lg-4">
            <h3>My Skills</h3>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna vel consectetur purus sit
              amet fermentum.
            </p>

            <ul className="progress-list">
              {skill2.map(({ id, title, value }) => (
                <li key={id}>
                  <p>{title}</p>
                  <div className="progressbar line primary" data-value={value} />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h3>Why Choose Me?</h3>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras mattis consectetur
              purus amet fermentum.
            </p>

            <ul className="icon-list bullet-bg bullet-soft-primary">
              {list.map((item) => (
                <li key={item}>
                  <i className="uil uil-check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h3>My Process</h3>

            {processList.map((item) => (
              <ProcessList2
                {...item}
                key={item.no}
                className="icon btn btn-circle btn-soft-primary pe-none mt-1 me-5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About24;
