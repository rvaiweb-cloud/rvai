import "./Hero.css";

export default function Hero({ onStart }) {
  return (
    <section className="hero">

      {/* TOP TEXT (SLIGHTLY ABOVE CENTER) */}
      <div className="hero-text">
        <h1>Design Websites with AI</h1>
        <p>
          Describe your idea and RvaI generates a complete, modern UI instantly.
        </p>
      </div>

      {/* CENTER BUTTON (ABSOLUTE CENTER) */}
      <button className="start-ai-btn" onClick={onStart}>
        Start with AI
      </button>

      {/* FEATURE BOXES (BELOW BUTTON, SAME SCREEN) */}
      <div className="hero-features">
        <div className="feature-card">
          <h3>Fast & Easy</h3>
          <p>Generate UI layouts instantly using AI.</p>
        </div>

        <div className="feature-card">
          <h3>User Friendly</h3>
          <p>Simple prompts, clean results.</p>
        </div>

        <div className="feature-card">
          <h3>Secure Access</h3>
          <p>Safe and reliable platform.</p>
        </div>
      </div>

    </section>
  );
}
