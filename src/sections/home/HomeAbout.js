import { Link as RouterLink } from 'react-router-dom';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(24, 0),
// }));

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

// ----------------------------------------------------------------------

export default function HomeAbout() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Container sx={{ position: 'relative' }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="image shape"
          src="https://minimal-assets-api.vercel.app/assets/images/home/theme-color/grid.png"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            width: 800,
            height: 800,
            opacity: 0.88,
            my: 'auto',
            position: 'absolute',
            display: { xs: 'none', md: 'block' },
          }}
        />
        <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
          <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>    
            <MotionInView variants={varFade().inUp}>
                <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                  About
                </Typography>
              </MotionInView>
              <MotionInView variants={varFade().inUp}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  5,555  <br />
                  Hangry Hippo NFTs
                </Typography>
                <Typography sx={{ color: 'common.white'}}>
                  United together on the Ethereum blockchain.<br /><br />
                  A community inspired by the new generation of entrepreneurs and world travelers choosing to pursue a path of success through crypto and NFTs. <br /><br />
                  {/* Entering this community grants you access to the $1,000,000 community fund, where you will join a family of visionaries, investors and leaders in the metaverse.  */}
                </Typography>
              </MotionInView>
          </Grid>
          <Grid item xs={12} md={7}>
            <ContentStyle>
              <MotionInView threshold={0.5} variants={varFade().inDown}>
                <Image
                  disabledEffect
                  alt="dark mode"
                  src="webfiles/about.png"
                  sx={{opacity: 0.65}}
                />
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
