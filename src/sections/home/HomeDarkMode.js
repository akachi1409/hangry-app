// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(28, 0),
//   backgroundColor: theme.palette.grey[900],
// }));
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  return (
    <RootStyle>
      <Container sx={{ position: 'relative', mb: 35 }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="image shape"
          src="https://minimal-assets-api.vercel.app/assets/images/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            width: 720,
            height: 720,
            opacity: 0.48,
            my: 'auto',
            position: 'absolute',
            display: { xs: 'none', md: 'none' },
          }}
        />

        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              <MotionInView variants={varFade().inUp}>
                {/* <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                  Easy switch between styles.
                </Typography> */}
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography variant="h3" sx={{ mb: 3, color: 'common.white' }}>
                  $1,000,000 Community Fund
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white', mb: 5 }}>
                  We, the Hangry Hippo team, are contributing $1,000,000 into the community fund. The way these funds will be spent is all up to you — the community. 
                </Typography>
                <Typography sx={{ color: 'common.white', mb: 5 }}>
                  Based on your desires, we’ll fund your start-ups, business ventures, invest in the metaverse, throw live events…the choice is in your hands. The community decides how to evolve, with the verifiable community fund wallet in view at all times. 
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            <MotionInView threshold={0.5} variants={varFade().inDown} sx={{ top: 0, right: 0, position: 'absolute' }}>
              <Image
                disabledEffect
                alt="light mode"
                src="webfiles/1mb.png"
              />
            </MotionInView>

            <MotionInView threshold={0.5} variants={varFade().inDown} sx={{ top: 0, right: 0, position: 'absolute' }}>
              <Image
                disabledEffect
                alt="dark mode"
                src="webfiles/1ma.png"
              />
            </MotionInView>

            <MotionInView threshold={0.5} variants={varFade().inDown} sx={{ top: 0, right: 0, position: 'absolute' }}>
              <Image
                disabledEffect
                alt="dark mode"
                src="webfiles/1mc.png"
              />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
