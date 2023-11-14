import { FC, Fragment } from 'react';
import ProgressList from 'components/common/ProgressList';

const About5: FC = () => {
  return (
    <Fragment>
      <div className="col-lg-7">
        <figure>
          <img className="w-auto" src="/img/illustrations/i8.png" srcSet="/img/illustrations/i8@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-6 pe-xxl-6">We bring rapid solutions to make the life of our customers easier.</h3>
        <ProgressList />
      </div>
    </Fragment>
  );
};

export default About5;
