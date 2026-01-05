import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import StartWithAiModal from "../../Modals/StartWithAiModal/StartWithAiModal";
import LoginModal from "../../Modals/LoginModal/LoginModal";

export default function Landing({ onLoginSuccess }) {
  const [showStartModal, setShowStartModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <Navbar />

      <Hero onStart={() => setShowStartModal(true)} />

      <StartWithAiModal
        open={showStartModal}
        onClose={() => setShowStartModal(false)}
        onLogin={() => {
          setShowStartModal(false);
          setShowLoginModal(true);
        }}
      />

      <LoginModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          setShowLoginModal(false);
          onLoginSuccess(); // 🔥 THIS TRIGGERS STEP 3
        }}
      />
    </>
  );
}
