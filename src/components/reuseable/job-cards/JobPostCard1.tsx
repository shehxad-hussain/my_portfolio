import { FC } from 'react';

// ========================================================================
type JobPostCard1Props = {
  time: string;
  title: string;
  company: string;
  location: string;
  badgeColor: string;
  avatarColor: string;
};
// ========================================================================

const JobPostCard1: FC<JobPostCard1Props> = (props) => {
  const { time, title, location, company, avatarColor, badgeColor } = props;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card shadow-lg lift h-100">
        <div className="card-body p-5 d-flex flex-row">
          <div>
            <span className={`avatar ${avatarColor} text-white w-11 h-11 fs-20 me-4`}>{company}</span>
          </div>

          <div>
            <span className={`badge ${badgeColor} rounded py-1 mb-2`}>{time}</span>
            <h4 className="mb-1">{title}</h4>
            <p className="mb-0 text-body">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostCard1;
