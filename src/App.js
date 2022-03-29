import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Container, Toolbar, IconButton } from '@material-ui/core';


function App() {
  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge='start' color='inherit' area-label='menu'>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </Container>

    </AppBar>
  )
}

export default App;
