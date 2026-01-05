import { useState } from "react";
import "./LoginModal.css";

export default function LoginModal({ open, onClose, onSuccess }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!open && !showSuccess) return null;

  const handleLogin = () => {
    if (!password) return;

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onSuccess();
    }, 1800);
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google OAuth
    window.location.href = "https://accounts.google.com";
  };

  return (
    <>
      {/* LOGIN MODAL */}
      {open && (
        <div className="modal-overlay">
          <div className="login-modal-box">
            <h2>Welcome Back</h2>
            <p>Login to continue with RvaI</p>

            {/* EMAIL / PHONE */}
            <input
              type="text"
              placeholder="Email or Phone"
              required
              className="login-input"
            />

            {/* PASSWORD */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="login-input"
                value={password}
                onFocus={() => setShowRules(true)}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value.length > 0) setShowRules(true);
                }}
                onBlur={() => {
                  if (password.length === 0) setShowRules(false);
                }}
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* PASSWORD RULES (CONDITIONAL) */}
            {showRules && (
              <div className="password-rules">
                Password must contain:
                <ul>
                  <li>Uppercase & lowercase letters</li>
                  <li>At least one number</li>
                  <li>One special character</li>
                </ul>
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button className="login-primary-btn" onClick={handleLogin}>
              Login
            </button>

            <div className="divider">OR</div>

            {/* GOOGLE LOGIN */}
            <button className="google-btn" onClick={handleGoogleLogin}>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              Continue with Google
            </button>

            {/* CANCEL */}
            <button className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="success-box">
            <div className="checkmark">✔</div>
            <h3>Login Successful</h3>
            <p>Redirecting...</p>
          </div>
        </div>
      )}
    </>
  );
}
