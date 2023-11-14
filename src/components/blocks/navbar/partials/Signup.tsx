import { FC } from 'react';
import RegisterForm from 'components/elements/forms/RegisterForm';

const Signup: FC = () => {
  return (
    <div role="dialog" tabIndex={-1} aria-modal="true" id="modal-signup" className="modal fade">
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-center">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            <h2 className="mb-3 text-start">Sign up to Sandbox</h2>
            <p className="lead mb-6 text-start">Registration takes less than a minute.</p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
