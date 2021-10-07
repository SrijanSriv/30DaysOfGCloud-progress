import { Route,Switch } from 'react-router-dom';
import Webpage from './Webpage';
import Login from './Login'

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
