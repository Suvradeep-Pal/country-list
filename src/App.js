import CountryRouter from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CountryRouter />
    </BrowserRouter>
  );
}

export default App;
