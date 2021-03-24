import NatMain from './UltraNation/NatMain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
 
  return (
    <Router>
          <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/natmain">Ultra Nation</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
    <Route path="/natmain">
            <NatMain />
          </Route>
    
          </Switch>
    </Router>
  );
}

export default App;
