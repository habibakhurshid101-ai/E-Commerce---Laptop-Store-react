import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account created successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="page-centered">
      <div className="auth-wrap">
        <div>
          <h2>Create Your Account ✨</h2>
          <p>Join 80,000+ satisfied LapElite customers</p>
        </div>

        <div className="form-container">
          <form id="signupForm" onSubmit={handleSignup}>
            <div>
              <label htmlFor="signupName">Full Name</label>
              <input
                type="text"
                id="signupName"
                placeholder="Ahmed Khan"
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="signupEmail">Email Address</label>
              <input
                type="email"
                id="signupEmail"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="signupPhone">Phone Number</label>
              <input
                type="tel"
                id="signupPhone"
                placeholder="+92 300 0000000"
                autoComplete="tel"
              />
            </div>

            <div>
              <label htmlFor="signupPassword">Password</label>
              <input
                type="password"
                id="signupPassword"
                placeholder="Min. 6 characters"
                required
                autoComplete="new-password"
              />
            </div>

            <div>
              <label htmlFor="signupConfirm">Confirm Password</label>
              <input
                type="password"
                id="signupConfirm"
                placeholder="Re-enter password"
                required
                autoComplete="new-password"
              />
            </div>

            <div className="terms-row">
              <input type="checkbox" id="termsCheck" required />
              <label htmlFor="termsCheck">
                I agree to the <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            <div className="form-action">
              <button type="submit" className="lg-button">
                Create Account →
              </button>
            </div>
          </form>

          <div className="divider"></div>

          <div className="auth-footer">
            <p>
              Already have an account?
              <a href="#" onClick={() => navigate('/login')}>
                {' '}
                Sign in →
              </a>
            </p>
          </div>

          <div className="social-logins">
            <button className="border-button">
              <span>🔍</span> Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
