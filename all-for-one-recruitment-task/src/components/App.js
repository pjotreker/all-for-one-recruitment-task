import './App.css';
import Router from './Router';
import Header from './Header';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
