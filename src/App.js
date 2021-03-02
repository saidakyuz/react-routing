import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Navbar/>
      {/* When we use Switch component as a wrapper it displays the first matched path. 
       When we use only div as a wrapper it displays all matches paths.
       But we can avoid form that using 'exact' property of Router.*/}
      <Switch>
        <Route exact path='/'>
          <Home
            header='Welcome to Mexico City'
            img='https://latamlist.com/wp-content/uploads/2020/01/mexico-city-travel.adapt_.1900.1-1.jpg'
          />
        </Route>
        <Route path='/about'>
          <About header='Wanna know more about us?' />
        </Route>
        <Route path='/contact'>
          <Contact header='Drop a line' />
        </Route>
        <Route path='*'>
          <NotFound
            header='404 Not Found!'
            img='https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif'
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
