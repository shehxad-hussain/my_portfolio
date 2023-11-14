import { FC } from 'react';
import CountUp from 'react-countup';

// ====================================================
type CounterProps = {
  title: string;
  number: number;
  titleColor?: string;
};
// ====================================================

const Counter1: FC<CounterProps> = ({ title, number, titleColor = '' }) => {
  return (
    <div className="col-md-4">
      <h3 className={`counter counter-lg ${titleColor}`}>
        <CountUp end={number} suffix="+" />
      </h3>

      <p>{title}</p>
    </div>
  );
};

export default Counter1;
