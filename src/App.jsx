import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Info from './components/Info';


function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <Switch>

          <Route exact path = "/home">
            <h1>Welcome</h1>
          </Route>

          <Route exact path = "/:num">
            <Info/>
          </Route>

          <Route exact path = "/:num/:textcolor/:bgcolor">
            <Info/>
          </Route>

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
