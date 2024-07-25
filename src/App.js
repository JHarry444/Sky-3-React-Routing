import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* Add a route for /details/:id that renders the details component */}
      </Routes>

    </Router>
  );
}

export default App;