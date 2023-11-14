import dayjs from 'dayjs';
import { FC } from 'react';
// -------- custom component -------- //
import FigureImage from '../reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
const comments = [
  {
    id: 1,
    createdAt: '14 Jan 2022',
    user: { name: 'Connor Gibson', image: '/img/avatars/u1.jpg', link: '#' },
    comment: `Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo
    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis
    integer posuere erat ante.`,
    reply: null
  },
  {
    id: 2,
    createdAt: '21 Feb 2022',
    user: { name: 'Nikolas Brooten', image: '/img/avatars/u2.jpg', link: '#' },
    comment: `Quisque tristique tincidunt metus non aliquam. Quisque ac risus sit amet quam sollicitudin vestibulum vitae malesuada libero. Mauris magna elit, suscipit non ornare et, blandit a tellus. Pellentesque dignissim ornare faucibus mollis.`,
    reply: [
      {
        id: 3,
        createdAt: '22 Feb 2022',
        user: { name: 'Pearce Frye', image: '/img/avatars/u3.jpg', link: '#' },
        comment: `Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis.`,
        reply: [
          {
            id: 4,
            createdAt: '4 Apr 2022',
            user: { name: 'Nikolas Brooten', image: '/img/avatars/u2.jpg', link: '#' },
            comment: `Nullam id dolor id nibh ultricies vehicula ut id. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia aenean bibendum nulla consectetur.`,
            reply: null
          }
        ]
      }
    ]
  },
  {
    id: 5,
    createdAt: '3 May 2022',
    user: { name: 'Lou Bloxham', image: '/img/avatars/u4.jpg', link: '#' },
    comment: `Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    reply: null
  }
];

// ========================================================================
type Comment = {
  comment: string;
  id: string | number;
  reply: Comment[] | null;
  createdAt: Date | string;
  user: { name: string; image: string; link: string };
};
// ========================================================================

const BlogCommentList: FC = () => {
  // Dynamically render all comments for a single blog post.
  const renderLevels = (items: Comment[]) => {
    return items.map(({ id, createdAt, user, reply, comment }) => {
      return (
        <li className="comment" key={id}>
          <div className="comment-header d-md-flex align-items-center">
            <div className="d-flex align-items-center">
              <FigureImage
                width={120}
                height={120}
                src={user.image}
                className="user-avatar rounded-circle overflow-hidden"
              />

              <div>
                <h6 className="comment-author">
                  <NextLink title={user.name} href={user.link} className="link-dark" />
                </h6>

                <ul className="post-meta">
                  <li>
                    <i className="uil uil-calendar-alt" /> {dayjs(createdAt).format('DD MMM YYYY')}
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-3 mt-md-0 ms-auto">
              <button className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0">
                <i className="uil uil-comments" /> Reply
              </button>
            </div>
          </div>

          <p>{comment}</p>

          {/* nested reply comments */}
          {reply && Array.isArray(reply) && <ul className="children">{renderLevels(reply)}</ul>}
        </li>
      );
    });
  };

  return (
    <ol className="commentlist" id="singlecomments">
      {renderLevels(comments)}
    </ol>
  );
};

export default BlogCommentList;
