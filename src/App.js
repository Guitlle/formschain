import React from 'react';
import Editor from './Editor';
import './App.css'
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle'

const BarButton = withStyles({
  root: {
    color: 'inherit',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  }
})(Button);

class App extends React.Component {

  render () {
    return (
      <HashRouter>
        <div className="App"
          style={{
            flexGrow: 1,
          }}>
          <AppBar position="static">
            <Container maxWidth="md" >
              <Toolbar>

                <Typography variant="h6"
                    style={{
                      flexGrow: 1,
                    }}>
                  <Link className="AppBarLink" to='/'>Formschain</Link>
                </Typography>
                <Link className="AppBarLink" to='/new'><BarButton >New Form</BarButton></Link>
                <IconButton
                  aria-label="account of current user"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

              </Toolbar>
            </Container>
          </AppBar>

          <Container className="MainContainer" maxWidth="md">
            <Switch>
              <Route path="/new">
                <Editor />
              </Route>
              <Route path="/">
                <div class="hero">
                  <h1>Forms on the blockchain</h1>
                  <p>
                    Make surveys on the permaweb, share them and receive responses.
                  </p>
                </div>
              </Route>
            </Switch>
          </Container>
        </div>
      </HashRouter>
    );
  }
}

export default App;
