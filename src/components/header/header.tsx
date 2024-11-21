import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Branding from './branding';
import MobileNavigation from './mobile/mobile-navigation';
import MobileBranding from './mobile/mobile-branding';
import Navigation from './navigation';
import Settings from './settings';
import { useReactiveVar } from '@apollo/client';
import { authenticatedVars } from '../../constants/authenticated';
import { Page } from '../../interfaces/page.interface';

const pages: Page [] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' }
];

const unauthenticatedPages: Page [] = [
  { title: 'Login', path: '/login' },
  { title: 'Signup', path: '/signup' }
];

const Header = () => {

  const authenticated = useReactiveVar(authenticatedVars);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Branding />
          <MobileNavigation pages={authenticated ? pages : unauthenticatedPages} />
          <MobileBranding />
          <Navigation pages={authenticated ? pages : unauthenticatedPages} />
          { authenticated && <Settings /> }       
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
