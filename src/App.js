import { Switch, Route } from 'react-router-dom'

// Components imports
// HOC which wraps around other components
import Layout from "./components/common/Layout"
import Login from "./components/Landing/Login"
import SignUp from "./components/Landing/SignUp"
import Profile from "./components/BurgerStack/Profile(BurgerStack)/Profile"
import Home from "./components/BurgerStack/Ingredients/Home"

// CSS imports
import "./css/App.css";

const App = () => {

  return (
    <Layout>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/profile" component={Profile} />

        <Route exact path="/events/:id" component={Event} />
        <Route exact path="/profile/myevents/addevent" component={Event} />
        <Route exact path="/profile/myevents/:id" component={Event} />
        <Route exact path="/events/comment" component={Event} />
        <Route exact path="/profile/newcomment" component={Event} />
        <Route exact path="/events/comment/:id" component={Event} />
        <Route exact path="/events/updatedcomment/:id" component={Event} />
      </Switch>
    </Layout>
  );
};

export default App;





    




