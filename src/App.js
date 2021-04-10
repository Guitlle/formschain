import React from 'react';
import Editor from './Editor';
import Home from './Home';
import {SessionView} from './ArweaveSession'
import './App.css'
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Typography,
  IconButton,
  Box
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircle from '@material-ui/icons/AccountCircle'


const BarButton = withStyles({
  root: {
    color: 'inherit',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  }
})(Button);

class App extends React.Component {
  state = {
  }

  render () {
    return (
      <Box style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        width: '100%',
      }}>
        <HashRouter>
          <Route path="/session">
            <SessionView showSession={true} />
          </Route>

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
                        color: 'white'
                      }}>
                    <Link className="AppBarLink" to='/'>Formschain</Link>
                  </Typography>
                  <Link className="AppBarLink" to='/new'><BarButton >New Form</BarButton></Link>
                  <Link to="/session">
                    <IconButton
                        aria-label="account of current user"
                        color="inherit"
                      >
                        <AccountCircle />
                    </IconButton>
                  </Link>
                </Toolbar>
              </Container>
            </AppBar>

            <Container className="MainContainer" maxWidth="md">
                <Route path="/new" exact>
                  <Editor />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
            </Container>
          </div>
          <Box className="Footer" justifyContent="flex-end" style={{
              background: '#110b67',
              marginTop: '50px',
              color: 'white'
            }}>
            <Container maxWidth="md">
              <center>
                Formschain
                <a href="https://github.com/Guitlle/formschain">
                  <IconButton
                    color="inherit"
                  >
                    <GitHubIcon />
                  </IconButton>
                </a>
              </center>
            </Container>
          </Box>
        </HashRouter>
      </Box>
    );
  }
}

export default App;
