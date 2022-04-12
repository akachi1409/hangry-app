// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Stack, Container, Typography, InputAdornment } from '@mui/material';
// hooks
import useCountdown from '../hooks/useCountdown';
// components
import Page from '../components/Page';
import InputStyle from '../components/InputStyle';
import SocialsButton from '../components/SocialsButton';
// assets
import { ComingSoonIllustration } from '../assets';
import Iconify from '../components/Iconify';
import { MotionInView, varFade } from '../components/animate';
import LogoLarge from '../components/LogoLarge';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const CountdownStyle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(0, 2.5),
  },
}));

// ----------------------------------------------------------------------

export default function ComingSoon() {
  const countdown = useCountdown(new Date('07/07/2022 21:30'));

  return (
    <Page title="Coming Soon" sx={{ height: 1 }}>
      <RootStyle>
        <Container>
          <Box display="flex" sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <LogoLarge />
            <Typography variant="h4" sx={{mt: 3}} paragraph>
              Coming Soon
            </Typography>
            <MotionInView variants={varFade().inDown}>
              <Button
                color="inherit"
                size="large"
                variant="outlined"
                target="_blank"
                rel="noopener"
                href="https://discord.gg/2W7eum2Qfn"
                endIcon={<Iconify icon={'akar-icons:discord-fill'} />}
                sx={{mt: 2, width: 300}}
              >
                Discord
              </Button>
            </MotionInView>
            <MotionInView variants={varFade().inDown}>
              <Button
                color="inherit"
                size="large"
                variant="outlined"
                target="_blank"
                rel="noopener"
                href="https://twitter.com/hangryhipponft"
                endIcon={<Iconify icon={'akar-icons:twitter-fill'} />}
                sx={{mt: 2, width: 300}}
              >
                Twitter
              </Button>
            </MotionInView>
            <MotionInView variants={varFade().inDown}>
              <Button
                color="inherit"
                size="large"
                variant="outlined"
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/hangryhipponft/"
                endIcon={<Iconify icon={'akar-icons:instagram-fill'} />}
                sx={{mt: 2, width: 300}}
              >
                Instagram
              </Button>
            </MotionInView>
            {/* <Stack alignItems="center">
              <SocialsButton size="large" initialColor />
            </Stack> */}
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
