import { createContext, ReactNode} from 'react';
import BackendService from '../services/BackendService';

interface ProviderProps {
  children: ReactNode;
}
export type Services = {[key: string]: any}

const services: Services = {
  backendService: new BackendService('challengeApiKey'),
};
const AppContext = createContext({} as Services);
const { Provider } = AppContext;

const AppProvider = ({ children }: ProviderProps) => {
  return <Provider value={{ services }}>{children}</Provider>;
};
export { AppContext, AppProvider }