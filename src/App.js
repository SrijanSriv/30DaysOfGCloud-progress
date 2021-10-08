import { Route,Switch } from 'react-router-dom';
import Webpage from './pages/Webpage';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/progress" component={Webpage} exact/>
      <Route path="/" component={Login}/>
    </Switch>
    </div>
  );
}

export default App;
