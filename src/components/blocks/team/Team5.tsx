import { FC } from 'react';
import { TeamCard3 } from 'components/reuseable/team-cards';
// -------- data -------- //
import { teams } from 'data/demo-8';

const Team5: FC = () => {
  return (
    <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-16 mb-md-19">
      {teams.map((item) => (
        <div className="col-md-6 col-lg-3" key={item.id}>
          <TeamCard3 {...item} />
        </div>
      ))}
    </div>
  );
};

export default Team5;
