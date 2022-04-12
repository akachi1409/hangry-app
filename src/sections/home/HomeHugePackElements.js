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
  backgroundColor: theme.palette.background.neutral,
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

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 20,
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
  },
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-60%', translateY: 50, opacity: 1 },
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 0.8 },
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '60%', translateY: -50, opacity: 0.6 },
};

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFade().inUp}>
                <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                  The Collection
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Tech-powered Rarity, <br />
                  High-end Artworks
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white',
                  }}
                >
                  Each piece of artwork is exclusively unique and detailed with 3D elements.
                </Typography>
              </MotionInView>

              {/* <MotionInView variants={varFade().inUp}>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  component={RouterLink}
                  to={PATH_PAGE.components}
                >
                  View in rarity.tools
                </Button>
              </MotionInView> */}
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8} dir="ltr">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center',
              }}
            >
              {[...Array(3)].map((_, index) => (
                <ScreenStyle
                  key={index}
                  threshold={0.72}
                  variants={{
                    ...(index === 0 && screenLeftAnimate),
                    ...(index === 1 && screenCenterAnimate),
                    ...(index === 2 && screenRightAnimate),
                  }}
                  transition={{ duration: 0.72, ease: 'easeOut' }}
                  sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                      isLight ? theme.palette.grey[600] : theme.palette.common.black,
                      0.48
                    )}`,
                    ...(index === 0 && {
                      zIndex: 3,
                      position: 'absolute',
                    }),
                    ...(index === 1 && { zIndex: 2 }),
                    ...(index === 2 && {
                      zIndex: 1,
                      position: 'absolute',
                      boxShadow: 'none',
                    }),
                  }}
                >
                  <Image
                    disabledEffect
                    // alt={`screen ${index + 1}`}
                    // src={`https://minimal-assets-api.vercel.app/assets/images/home/screen_${
                    //   isLight ? 'light' : 'dark'
                    // }_${index + 1}.png`}
                    src={`webfiles/col${index + 1}.png`}
                  />
                </ScreenStyle>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
