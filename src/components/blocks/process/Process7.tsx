import { FC, Fragment } from 'react';
import List from 'icons/lineal/List';
import NextLink from 'components/reuseable/links/NextLink';
import { ProcessList1 } from 'components/reuseable/process-list';
// -------- data -------- //
import { processList1 } from 'data/process';

const Process7: FC = () => {
  return (
    <Fragment>
      <div className="row mb-5">
        <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
          <List />
          <h2 className="display-4 mb-4 px-lg-14">Here are 3 working steps to organize our business projects.</h2>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-6 order-lg-2">
          {processList1.map((item) => (
            <ProcessList1 {...item} key={item.no} />
          ))}
        </div>

        <div className="col-lg-6">
          <h2 className="display-6 mb-3">How It Works?</h2>
          <p className="lead fs-lg pe-lg-5">
            Find out everything you need to know and more about how we create our business process models.
          </p>

          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada
            magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
            mollis ornare.
          </p>

          <p className="mb-6">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.
            Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Vestibulum id ligula
            porta felis.
          </p>

          <NextLink title="Learn More" href="#" className="btn btn-primary rounded-pill mb-0" />
        </div>
      </div>
    </Fragment>
  );
};

export default Process7;
