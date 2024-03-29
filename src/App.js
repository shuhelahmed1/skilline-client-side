import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AllIntegrations from './components/AllIntegrations/AllIntegrations';
import Assessment from './components/Assessment/Assessment';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MoreFeatures from './components/MoreFeatures/MoreFeatures';

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
        <Route path='/assessment'>
        <Assessment></Assessment>
        </Route>
        <Route path='/morefeatures'>
        <MoreFeatures></MoreFeatures>
        </Route>
        <Route path='/integrations'>
        <AllIntegrations></AllIntegrations>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
