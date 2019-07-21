import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/login/Login'
import Menu from './components/menuManagement/Menu'
import Order from './components/orderManagement/Order'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/menu" component={Menu} />
          <Route path="/orders" component={Order} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
