import React from 'react'
import {Container} from 'react-bootstrap'
import {Switch,Route} from 'react-router-dom'
import PageHome from './pages/home'
import PageLogin from './pages/login'

function App() {
  return (
      <Container>
        <Switch>
          <Route path="/" component={PageHome} exact></Route>
          <Route path="/login" component={PageLogin}></Route> 
        </Switch>
      </Container>
  );
}

export default App;
