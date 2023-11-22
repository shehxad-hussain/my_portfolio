import dayjs from 'dayjs';
import { FC } from 'react';
import NextLink from './links/NextLink';
import ratingGenerate from 'utils/ratings';
import FigureImage from 'components/reuseable/FigureImage';

// ===================================================================
type ReviewCardProps = {
  createdAt: Date | string;
  actions: { like: number; dislike: number };
  user: { id: string | number; name: string; image: string };
  review: { body: string; rating: number; title: string | null };
};
// ===================================================================

const ReviewCard: FC<ReviewCardProps> = (props) => {
  const { createdAt, actions, user, review } = props;

  return (
    <li className="comment">
      <div className="comment-header d-md-flex align-items-center">
        <FigureImage width={120} height={120} src={user.image} className="user-avatar rounded-circle overflow-hidden" />

        <div>
          <h6 className="comment-author">
            <NextLink title={user.name} href="#" className="link-dark" />
          </h6>

          <ul className="post-meta">
            <li>
              <i className="uil uil-calendar-alt" />
              {dayjs(createdAt).format('DD MMM YYYY')}
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mt-5 mb-2">
        <span className={`ratings ${ratingGenerate(review.rating)}`} />
        <h6 className="mb-0">{review.title}</h6>
      </div>

      <p>{review.body}</p>

      <div className="d-flex flex-row align-items-center pb-3">
        <p className="text-muted fs-15 mb-0 me-5">Was this review helpful?</p>

        <div>
          <NextLink
            href="#"
            className="link-dark me-3"
            title={
              <>
                <i className="uil uil-thumbs-up" /> {actions.like}
              </>
            }
          />

          <NextLink
            href="#"
            className="link-dark"
            title={
              <>
                <i className="uil uil-thumbs-down" /> {actions.dislike}
              </>
            }
          />
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
