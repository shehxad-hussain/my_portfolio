import { FC, SetStateAction } from 'react';

// ==================================================
type SwitchProps = {
  value: boolean;
  onChange: (value: SetStateAction<boolean>) => void;
};
// ==================================================

const Switch: FC<SwitchProps> = ({ value, onChange }) => {
  return (
    <div className="form-check form-switch">
      <input
        role="switch"
        type="checkbox"
        checked={value}
        className="form-check-input"
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
};

export default Switch;
