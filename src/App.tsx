import { Menu } from '@mui/icons-material';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import { FC } from 'react';

const App: FC = () => {
  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge='start' color='inherit'>
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default App;
