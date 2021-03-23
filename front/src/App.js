import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Sidebar from "./components/layout/Sidebar"
import Main from './components/pages/Main'

function App() {
  return (
    <Router>
      <div className="App bg-indigo-450">
        <div className="font-mont lg: flex">
          <Sidebar />
          <Switch>
              <Route path="/main" component={Main} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
