import { StateProviders } from "./StateContext";
const Providers = ({ children }) => {
  return <StateProviders>{children}</StateProviders>;
};
export default Providers;
