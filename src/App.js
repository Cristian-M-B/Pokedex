import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemons, getTypes, getFavorites } from './redux/actions/index';
import Landing from './components/Landing.jsx';
import Pokedex from './components/Pokedex.jsx';
import PokeDetail from './components/PokeDetail.jsx';
import Favorites from './components/Favorites.jsx';
import './App.css';


export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
    dispatch(getFavorites());
  }, [dispatch])

  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route exact path='/pokedex' component={Pokedex} />
      <Route exact path='/pokedex/detail/:id' component={PokeDetail} />
      <Route exact path='/pokedex/favorites' component={Favorites} />
    </div>
  );
}
