import { FC, ReactElement } from 'react';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { serviceList5 } from 'data/service';

// ============================================================
type Services6Props = {
  title: string;
  description: string;
  colOne: ReactElement;
  bulletColor?: string;
  rowClassNames?: string;
  colTwoClassNames?: string;
};
// ============================================================

const Services6: FC<Services6Props> = (props) => {
  const { colOne, title, description, colTwoClassNames = '', rowClassNames = '', bulletColor = 'primary' } = props;

  return (
    <div className={'row gx-lg-8 gx-xl-12 gy-10 align-items-center ' + rowClassNames}>
      {colOne}

      <div className={'col-lg-6 ' + colTwoClassNames}>
        <h3 className="display-4 mb-5">{title}</h3>
        <p className="mb-5">{description}</p>

        <ListColumn list={serviceList5} bulletColor={bulletColor} />
      </div>
    </div>
  );
};

export default Services6;
