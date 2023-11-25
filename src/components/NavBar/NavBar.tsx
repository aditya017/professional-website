import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import { To, useNavigate } from 'react-router';

interface navProps {
  noResume?: boolean;
  noHome?: boolean;
  linkClr?: boolean;
}

const NavBar = ({ noResume, noHome, linkClr }: navProps) => {
  const navigate = useNavigate();

  const navigateToRouteProvided = (path: To) => {
    navigate(path);
  };

  /* const redirectToInstagram = () => {
    const url = '';
    window.open(url, '_blank');
  };*/

  return (
    <AppBar
      position='static'
      style={{
        background: `${linkClr ? 'black' : 'transparent'}`,
        boxShadow: 'none',
      }}
    >
      <Grid container>
        <Grid item xs={3} md={6}>
          {noHome ? null : (
            <Toolbar disableGutters sx={{ paddingTop: 0.5 }}>
              <Button
                sx={{
                  my: 2,
                  ml: 2,
                  color: 'white',
                  display: 'block',
                }}
                onClick={() => navigateToRouteProvided('/')}
              >
                Home
              </Button>
              {/*<DevicesIcon
              onClick={() => navigateToRouteProvided('/')}
              sx={{ mr: 1, ml: 1, cursor: 'pointer' }}
            />
            <TerrainIcon
              onClick={redirectToInstagram}
              sx={{ mr: 1, ml: 2, cursor: 'pointer' }}
            />*/}
            </Toolbar>
          )}
        </Grid>
        <Grid item xs={9} md={6}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'flex' },
              float: 'right',
              mr: 4,
            }}
          >
            {noResume ? null : (
              <Button
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
                onClick={() => navigateToRouteProvided('/resume')}
              >
                Resume
              </Button>
            )}
            <Button
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
              }}
              onClick={() => navigateToRouteProvided('/contactUs')}
            >
              Contact
            </Button>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
