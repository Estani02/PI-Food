import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateRecipes from './containers/cretedRecipes/CreateRecipes';
import Home from './containers/home/Home';
import LandingPage from './containers/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = { <LandingPage /> } />
        <Route path='/home' element = { <Home /> } />
        <Route path='/create' element = { <CreateRecipes /> } />
      </Routes>
    </div>
  );
}

export default App;
