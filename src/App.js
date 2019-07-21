import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/login/Login'
import Menu from './components/menuManagement/Menu'
import DinerHalls from './components/orderManagement/DinerHalls'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/menu" component={Menu} />
          <Route path="/orders" component={DinerHalls} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
