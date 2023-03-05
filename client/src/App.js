import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import CreateRecipes from './containers/cretedRecipes/CreateRecipes';
import DetailRecipe from './containers/detailRecipe/DetailRecipe';
import Home from './containers/home/Home';
import LandingPage from './containers/landingPage/LandingPage';
import Nav from './containers/nav/Nav';


function App() {

  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname === '/' ? undefined : <Nav />}
      <Routes>
        <Route path='/' element = { <LandingPage /> } />
        <Route path='/home' element = { <Home /> } />
        <Route path='/create' element = { <CreateRecipes /> } />
        <Route path='/recipe/:id' element = { <DetailRecipe /> } />
      </Routes>
    </div>
  );
}

export default App;
