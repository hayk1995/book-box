import { BrowserRouter } from "react-router-dom";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <Dashboard/>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
