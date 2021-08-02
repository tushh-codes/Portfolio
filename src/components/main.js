import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/Portfolio' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route path='/resume' component={Resume} />
      <Route path='/projects' component={Projects} />
    </Switch>
  );
};

export default Main;
