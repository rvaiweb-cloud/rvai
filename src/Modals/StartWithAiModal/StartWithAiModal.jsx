import "./StartWithAiModal.css";

export default function StartWithAiModal({ open, onClose, onLogin }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Login Required</h2>
        <p>Login to continue the chat with AI.</p>

        <div className="modal-actions">
          <button className="login-btn" onClick={onLogin}>
            Login
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
