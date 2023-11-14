import { FC, FormEvent, Fragment, useState } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(email, password);
  };

  return (
    <Fragment>
      <h2 className="mb-3 text-start">Welcome Back</h2>
      <p className="lead mb-6 text-start">Fill your email and password to sign in.</p>

      <form onSubmit={handleSubmit} className="text-start mb-3">
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

        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Sign In
        </button>
      </form>

      <p className="mb-1">
        <NextLink title="Forgot Password?" href="/register" className="hover" />
      </p>

      <p className="mb-0">
        Don&apos;t have an account? <NextLink title="Sign up" href="/register" className="hover" />
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

export default LoginForm;
