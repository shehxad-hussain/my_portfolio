import { FC } from 'react';
import Image from 'next/image';
import IconLink from '../links/IconLink';

// ==========================================================
type TeamCard2Props = {
  name: string;
  image: string;
  twitterUrl: string;
  designation: string;
  description: string;
  facebookUrl: string;
  dribbbleUrl: string;
};
// ==========================================================

const TeamCard2: FC<TeamCard2Props> = (props) => {
  const { name, description, designation, image, facebookUrl, twitterUrl, dribbbleUrl } = props;

  return (
    <div className="text-center">
      <div className="rounded-circle w-20 mx-auto mb-4 overflow-hidden">
        <Image width={500} height={500} alt="Team Member" layout="responsive" src={image} />
      </div>

      <h4 className="mb-1">{name}</h4>
      <div className="meta mb-2">{designation}</div>
      <p className="mb-2">{description}</p>

      <nav className="nav social justify-content-center text-center mb-0">
        <IconLink href={twitterUrl} icon={<i className="uil uil-twitter" />} />
        <IconLink href={facebookUrl} icon={<i className="uil uil-facebook-f" />} />
        <IconLink href={dribbbleUrl} icon={<i className="uil uil-dribbble" />} />
      </nav>
    </div>
  );
};

export default TeamCard2;
