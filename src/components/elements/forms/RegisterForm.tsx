import { FormEvent, Fragment, useState, FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const RegisterForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="text-start mb-3">
        <div className="form-floating mb-4">
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="email"
            value={email}
            id="loginEmail"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="loginEmail">Email</label>
        </div>

        <div className="form-floating password-field mb-4">
          <input
            value={password}
            id="loginPassword"
            placeholder="Password"
            className="form-control"
            type={visiblePassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <i className={`uil  ${visiblePassword ? 'uil-eye-slash' : 'uil-eye'}`} />
          </span>

          <label htmlFor="loginPassword">Password</label>
        </div>

        <div className="form-floating password-field mb-4">
          <input
            id="password-confirm"
            value={confirmPassword}
            className="form-control"
            placeholder="Confirm Password"
            type={visiblePassword ? 'text' : 'password'}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <i className={`uil  ${visiblePassword ? 'uil-eye-slash' : 'uil-eye'}`} />
          </span>

          <label htmlFor="password-confirm">Confirm Password</label>
        </div>

        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Sign Up
        </button>
      </form>

      <p className="mb-0">
        Already have an account? <NextLink title="Sign in" href="/login" className="hover" />
      </p>

      <div className="divider-icon my-4">or</div>
      <nav className="nav social justify-content-center text-center">
        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-google">
          <i className="uil uil-google" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-facebook-f">
          <i className="uil uil-facebook-f" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-twitter">
          <i className="uil uil-twitter" />
        </a>
      </nav>
    </Fragment>
  );
};

export default RegisterForm;
