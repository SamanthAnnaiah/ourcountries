import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CountryProvider } from "./CountryProvider.jsx";

createRoot(document.getElementById("root")).render(
  <CountryProvider>
    <App />
  </CountryProvider>
);
