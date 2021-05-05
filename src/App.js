
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import { Route,  BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './Container/HomePage/HomePage'
import CheckOut from './Container/CheckOut/CheckOut'

function App() {
  return (
    <BrowserRouter>
 
    <div className="App">
      <header>
        <Topbar/>
      </header>
     <main>
     <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CheckOut} />
          
          </Switch>
     </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
