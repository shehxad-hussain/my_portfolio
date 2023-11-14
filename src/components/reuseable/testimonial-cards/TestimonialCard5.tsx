import { FC } from 'react';

// =================================================
type TestimonialCard5Props = {
  name: string;
  review: string;
  designation: string;
  borderBottom?: boolean;
};
// =================================================

const TestimonialCard5: FC<TestimonialCard5Props> = (props) => {
  const { name, review, designation, borderBottom } = props;
  const className = `card shadow-lg ${borderBottom ? 'card-border-bottom border-soft-primary' : ''}`;

  return (
    <div className={className}>
      <div className="card-body">
        <span className="ratings five mb-3" />
        <blockquote className="icon mb-0">
          <p>“{review}”</p>
          <div className="blockquote-details">
            <div className="info ps-0">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-0">{designation}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard5;
