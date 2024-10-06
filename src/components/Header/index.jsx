import { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  // Breakpoints pour mobile, tablette, et grand écran
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Pour les petits écrans, en dessous de 'sm' (640px)
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Pour les tablettes entre 'sm' (640px) et 'md' (960px)
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // Pour les écrans de taille moyenne et supérieure (au-dessus de 960px)
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('md','lg')); // Grands écrans (plus de 1280px)
  const isXLargeDesktop = useMediaQuery(theme.breakpoints.up('xl')); // Très grands écrans (plus de 1600px)

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Détermine la marge pour l'icône du menu hamburger en fonction de la taille de l'écran
  let iconButtonMarginLeft;
  if (isMobile) {
    iconButtonMarginLeft = '13rem'; // Sur mobile
  } else if (isTablet) {
    iconButtonMarginLeft = '38rem'; // Sur tablette
  } else if (isDesktop) {
    iconButtonMarginLeft = '50rem'; // Sur grand écran
  } 

  // Détermine la marge pour la balise <ul> en fonction de la taille de l'écran
  let ulMarginLeft;
  if (isDesktop) {
    ulMarginLeft = '35rem'; 
  } else if (isLargeDesktop) {
    ulMarginLeft = '90rem'; // Sur écran large
  } else if (isXLargeDesktop) {
    ulMarginLeft = '70rem'; // Sur très grand écran
  }

  return (
    <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo">
        <Link to="/">
          <img src="/path/to/logo.png" alt="2K Thermique" style={{ maxWidth: '150px' }} />
        </Link>
      </div>

      <nav>
        {isMobile || isTablet ? (  // Si on est sur mobile ou tablette, on affiche le bouton de menu hamburger
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              style={{ marginLeft: iconButtonMarginLeft }}  // S'assure que le bouton est à droite avec une marge dynamique
            >
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemText primary="Accueil" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                  <ListItemText primary="À propos" />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                  <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button component={Link} to="/legal">
                  <ListItemText primary="Mentions légales" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (  // Si on est sur grand écran, on affiche les liens de navigation directement
          <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around', marginLeft: ulMarginLeft }}>
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link></li>
            <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>À propos</Link></li>
            <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            <li><Link to="/legal" style={{ color: 'white', textDecoration: 'none' }}>Mentions légales</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;