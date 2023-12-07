
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LogInSignUp from './components/LogInSignUp';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInSignUp />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
