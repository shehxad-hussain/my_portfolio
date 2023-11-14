import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

// ============================================================
interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
  errorMsg?: string;
}
// ============================================================

const Input: FC<InputProps> = ({ label, errorMsg, id, ...props }) => {
  return (
    <div className="form-floating">
      <input required id={id} className="form-control" {...props} />

      <label htmlFor={id} className="form-label">
        {label}
      </label>

      {errorMsg && <div className="invalid-feedback">{errorMsg || 'Valid first name is required.'}</div>}
    </div>
  );
};

export default Input;
