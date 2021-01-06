import { Switch, Route } from 'react-router-dom'

// Components imports
import Home from "./components/Home"
// HOC which wraps around other components
import Layout from "./components/common/Layout"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"
import Event from "./components/Event"
<<<<<<< HEAD
import MyEvent from "./components/Saved Event/MyEvent"
=======
import Calendar from "./components/Calendar"
import SearchEvent from "./components/SearchEvent"
import SearchEventId from "./components/SearchEventId"
>>>>>>> 6061fa5a7618c22aaf08148b95d31a9b61d6703a

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
        {/* <Route exact path="/search" component={SearchEvent} /> */}
        <Route exact path="/events/:id" component={Event} />
        <Route exact path="/profile/myevents/addevent" component={Event} />
        <Route exact path="/profile/myevents/:id" component={Event} />
<<<<<<< HEAD
        <Route exact path="/event/comments" component={MyEvent} />
=======
        <Route exact path="/profile/myevents/" component={Calendar} />
        <Route exact path="/events/comment" component={Event} />
>>>>>>> 6061fa5a7618c22aaf08148b95d31a9b61d6703a
        <Route exact path="/profile/newcomment" component={Event} />
        <Route exact path="/events/comment/:id" component={Event} />
        <Route exact path="/events/updatedcomment/:id" component={Event} />
      </Switch>
    </Layout>
  );
};

export default App;





    




