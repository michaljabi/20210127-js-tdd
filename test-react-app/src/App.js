import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import PeopleExplorer from './components/people/PeopleExplorer'
import ProductList from './components/products/ProductList'
import UserProfile from './components/user/UserProfile'

function App() {
  return (
    <div>
      <header className="jumbotron text-center bg-dark text-light">
        <h1> "Testing React" </h1>
        <p>  </p>
      </header>
      <main className="container">
        <nav className="navbar justify-content-start mb-1">
          <NavLink className="nav-item mr-3" to="/people">
            Star Wars People
          </NavLink>
          <NavLink className="nav-item mr-3" to="/products">
            Products
          </NavLink>
          <NavLink className="nav-item mr-3" to="/user-profile">
            User profile
          </NavLink>
          <NavLink className="nav-item" to="/none-existing-link">
            Wrong one !
          </NavLink>
        </nav>
        <hr />
        <Switch>
          <Redirect from="/" to="/people" exact />
          <Route path="/people" component={PeopleExplorer} />
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/user-profile" component={UserProfile} />
          <Route path="**">
            <h2>For-0-For - site does not exist<span role="img" aria-label="scare face">😱</span> </h2>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
