import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemons } from './redux/actions/index';
import { getTypes } from './redux/actions/index';
import { getFavorites } from './redux/actions/index';
import './App.css';
import Nav from './components/Nav.jsx';
import Pokedex from './components/Pokedex.jsx';
import PokeDetail from './components/PokeDetail.jsx';
import Favorites from './components/Favorites.jsx';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
    dispatch(getFavorites());
  }, [dispatch])

  return (
    <div className="App">
      <Route path='/' component={Nav} />
      <Route exact path='/pokedex' component={Pokedex} />
      <Route exact path='/pokedex/detail/:id' component={PokeDetail} />
      <Route exact path='/pokedex/favorites' component={Favorites} />
    </div>
  );
}

export default App;
