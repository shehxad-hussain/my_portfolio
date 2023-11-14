import { FC } from 'react';
import Link from 'next/link';

// ========================================================================
type JobPostCard2Props = {
  link: string;
  time: string;
  title: string;
  avatar: string;
  location: string;
  avatarColor: string;
};
// ========================================================================

const JobPostCard2: FC<JobPostCard2Props> = (props) => {
  const { time, location, title, avatarColor, avatar, link } = props;

  return (
    <Link href={link}>
      <a className="card mb-4 lift">
        <div className="card-body p-5">
          <span className="row justify-content-between align-items-center">
            <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
              <span className={`avatar ${avatarColor} text-white w-9 h-9 fs-17 me-3`}>{avatar}</span> {title}
            </span>

            <span className="col-5 col-md-3 text-body d-flex align-items-center">
              <i className="uil uil-clock me-1" /> {time}
            </span>

            <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
              <i className="uil uil-location-arrow me-1" /> {location}
            </span>

            <span className="d-none d-lg-block col-1 text-center text-body">
              <i className="uil uil-angle-right-b" />
            </span>
          </span>
        </div>
      </a>
    </Link>
  );
};

export default JobPostCard2;
