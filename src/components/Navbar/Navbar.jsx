import "./Navbar.css";

export default function Navbar({ onLogin }) {
  return (
    <header className="navbar">
      {/* LEFT LOGO */}
      <div className="nav-left">
        <div className="logo-circle">
          <span className="logo-rv">RV</span>
          <span className="logo-ai">AI</span>
        </div>
      </div>

      {/* CENTER NAV (ALL ITEMS) */}
      <nav className="nav-center">
        <a href="#">Home</a>
        <a href="#">Pricing</a>
        <button className="login-btn" onClick={onLogin}>
          Login
        </button>
      </nav>
    </header>
  );
}
