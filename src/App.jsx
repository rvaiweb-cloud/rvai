import { useState } from "react";
import Landing from "./pages/Landing/Landing";
import AiIntake from "./pages/AiIntake/AiIntake";

function App() {
  const [screen, setScreen] = useState("landing");

  return (
    <>
      {screen === "landing" && (
        <Landing onLoginSuccess={() => setScreen("intake")} />
      )}

      {screen === "intake" && <AiIntake />}
    </>
  );
}

export default App;
