import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./css/app.css";
import { App } from "./App.jsx";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// const app = document.getElementById("app");
// const root = ReactDOM.createRoot(app);
// root.render(<App />);∏