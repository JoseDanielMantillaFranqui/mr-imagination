import { createRoot } from "react-dom/client";
import App from "./src/App";
import ImaginationProvider from "./src/hooks/useImaginationContext";

const root = createRoot(document.querySelector('#app'))

root.render(
  <ImaginationProvider>
    <App />
  </ImaginationProvider> 
)