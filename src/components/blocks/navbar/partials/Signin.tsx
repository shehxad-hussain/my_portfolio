import { FC } from 'react';
import LoginForm from 'components/elements/forms/LoginForm';

const Signin: FC = () => {
  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      id="modal-signin"
      className="modal fade"
      style={{ display: 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-center">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
