import { BrowserRouter } from "react-router-dom";

const Providers: React.FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
