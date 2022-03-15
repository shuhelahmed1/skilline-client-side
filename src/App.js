import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/hello'>
        <Hello></Hello>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
