import { FC } from 'react';
import CountUp from 'react-countup';

// ===================================================
type Counter2Props = { amount: number; title: string };
// ===================================================

const Counter2: FC<Counter2Props> = ({ amount, title }) => {
  return (
    <div className="col-6 col-lg-3">
      <h3 className="counter counter-lg text-white">
        <CountUp end={amount} />
      </h3>
      <p>{title}</p>
    </div>
  );
};

export default Counter2;
