import { FC } from 'react';
import useProgressbar from 'hooks/useProgressbar';
// -------- data -------- //
const list = [
  { id: 1, percent: 100, title: 'Marketing', color: 'blue' },
  { id: 2, percent: 80, title: 'Strategy', color: 'yellow' },
  { id: 3, percent: 85, title: 'Development', color: 'orange' },
  { id: 4, percent: 90, title: 'Data Analysis', color: 'green' }
];

const ProgressList: FC = () => {
  // used for the animated line
  useProgressbar();

  return (
    <ul className="progress-list mt-3">
      {list.map(({ color, id, percent, title }) => (
        <li key={id}>
          <p>{title}</p>
          <div className={`progressbar line ${color}`} data-value={percent} />
        </li>
      ))}
    </ul>
  );
};

export default ProgressList;
