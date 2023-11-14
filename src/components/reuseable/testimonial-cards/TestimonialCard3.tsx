import { FC } from 'react';
import Image from 'next/image';

// =================================================
type TestimonialCard3Props = {
  name: string;
  image: string;
  review: string;
  shadow?: boolean;
  designation: string;
  hideRating?: boolean;
};
// =================================================

const TestimonialCard3: FC<TestimonialCard3Props> = (props) => {
  const { name, image, review, designation, hideRating, shadow } = props;

  return (
    <div className={`card ${shadow ? 'shadow-lg' : ''}`}>
      <div className="card-body">
        {!hideRating && <span className="ratings five mb-3" />}

        <blockquote className="icon mb-0">
          <p>“{review}”</p>

          <div className="blockquote-details">
            <figure className="rounded-circle w-12 overflow-hidden">
              <Image width={100} height={100} src={image} layout="responsive" alt="team" />
            </figure>

            <div className="info">
              <h5 className="mb-0">{name}</h5>
              <p className="mb-0">{designation}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard3;
