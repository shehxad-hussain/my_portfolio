import { FC } from 'react';
import Image from 'next/image';
import IconLink from '../links/IconLink';

// ==========================================================
type TeamCard1Props = {
  name: string;
  image: string;
  shadow?: boolean;
  twitterUrl: string;
  designation: string;
  description: string;
  facebookUrl: string;
  dribbbleUrl: string;
};
// ==========================================================

const TeamCard1: FC<TeamCard1Props> = (props) => {
  const { name, description, designation, image, facebookUrl, twitterUrl, dribbbleUrl, shadow = false } = props;

  return (
    <div className={`card ${shadow ? 'shadow-lg' : ''}`}>
      <div className="card-body">
        <div className="rounded-circle w-15 mb-4 overflow-hidden">
          <Image width={300} height={300} alt="Team Member" layout="responsive" src={image} />
        </div>

        <h4 className="mb-1">{name}</h4>
        <div className="meta mb-2">{designation}</div>
        <p className="mb-2">{description}</p>

        <nav className="nav social mb-0">
          <IconLink href={twitterUrl} icon={<i className="uil uil-twitter" />} />
          <IconLink href={facebookUrl} icon={<i className="uil uil-facebook-f" />} />
          <IconLink href={dribbbleUrl} icon={<i className="uil uil-dribbble" />} />
        </nav>
      </div>
    </div>
  );
};

export default TeamCard1;
