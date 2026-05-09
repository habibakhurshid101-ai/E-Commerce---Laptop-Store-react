import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login successful!');
    navigate('/dashboard');
  };

  return (
    <div className="page-centered">
      <div className="auth-wrap">
        <div>
          <h2>Welcome Back 👋</h2>
          <p>Sign in to your LapElite account</p>
        </div>

        <div className="form-container">
          <form id="loginForm" onSubmit={handleLogin}>
            <div>
              <label htmlFor="loginEmail">Email Address</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                id="loginPassword"
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>

            <div className="auth-row">
              <label>
                <input type="checkbox" id="rememberMe" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <div className="form-action">
              <button type="submit" className="lg-button">
                Sign In →
              </button>
            </div>
          </form>

          <div className="divider"></div>

          <div className="auth-footer">
            <p>
              Don't have an account?
              <a href="#" onClick={() => navigate('/signup')}>
                {' '}
                Create one →
              </a>
            </p>
          </div>

          <div className="social-logins">
            <button className="border-button">
              <span>🔍</span> Continue with Google
            </button>
            <button className="border-button">
              <span>🍎</span> Continue with Apple
            </button>
          </div>
        </div>

        <p className="auth-legal">
          By signing in you agree to our <a href="#">Terms of Use</a> and{' '}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
