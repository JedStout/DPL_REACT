import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Footer from './Footer';
import Flash from './Flash';
import Home from './Home';
import Beers from './Beers';
import Breweries from './Breweries';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Beers' component={Beers} />
          <Route exact path='/Breweries' component={Breweries} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Segment>
    );
  } 
}

const styles = {
  background: {
    backgroundImage: `../images/bg.png` ,
  },
}

export default App;
