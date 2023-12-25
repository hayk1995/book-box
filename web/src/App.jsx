import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
