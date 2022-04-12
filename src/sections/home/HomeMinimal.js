// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, IconButton, Button } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_design.svg',
    title: '5,555',
    description:
      'NFTs',
  },
  {
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_code.svg',
    title: '555',
    description: '20:1',
  },
  {
    icon: '/logo/logo_single.svg',
    title: '55',
    description: '1:1',
  },
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 300,
    minHeight: 300,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.background.paper,
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: 0, backgroundColor: theme.palette.background.paper, },
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: 0,
        backgroundColor: theme.palette.background.paper,
        // boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            // mb: { xs: 10, md: 25 },
          }}
        >
          <MotionInView variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              GET YOURS
            </Typography>
          </MotionInView>
          <MotionInView variants={varFade().inDown} sx={{ mb: 5}}>
            <Typography variant="h3">Mint Your Hippo</Typography>
          </MotionInView>
          {/* <MotionInView variants={varFade().inDown}>
            <Typography
              sx={{
                mb: 5,
                color: isLight ? 'text.secondary' : 'common.white',
              }}
            >
              Each piece of artwork is exclusively unique and detailed with 3D elements.
            </Typography>
          </MotionInView> */}
        </Box>

        {/* <Box
          sx={{
            // display: 'grid',
            gap: { xs: 5, lg: 5 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          <MotionInView variants={varFade().inUp}>
            <CardStyle>
              <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>Price</Typography>
              <Typography variant="h4" paragraph>
                0.02 ETH
              </Typography>
              <div>
                <Box
                  sx={{
                    py: 0.5,
                    px: 0.75,
                    border: 1,
                    width: '50%',
                    lineHeight: 0,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    borderColor: 'grey.50032',
                    justifyContent: 'center'
                  }}
                >
                  <IconButton size="small" color="inherit">
                    <Iconify icon={'eva:minus-fill'} width={14} height={14} />
                  </IconButton>

                  <Typography variant="body2" component="span" sx={{ width: 40, textAlign: 'center' }}>
                    0
                  </Typography>

                  <IconButton size="small" color="inherit">
                    <Iconify icon={'eva:plus-fill'} width={14} height={14} />
                  </IconButton>
                </Box>
              </div>
              <Button sx={{mt: 5, backgroundColor: 'white', color: 'black'}} variant="contained">MINT</Button>
            </CardStyle>
          </MotionInView>
        </Box> */}
      </Container>
    </RootStyle>
  );
}

function Incrementer({ available, quantity, onIncrementQuantity, onDecrementQuantity }) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey.50032',
      }}
    >
      <IconButton size="small" color="inherit" disabled={quantity <= 1} onClick={onDecrementQuantity}>
        <Iconify icon={'eva:minus-fill'} width={14} height={14} />
      </IconButton>

      <Typography variant="body2" component="span" sx={{ width: 40, textAlign: 'center' }}>
        {quantity}
      </Typography>

      <IconButton size="small" color="inherit" disabled={quantity >= available} onClick={onIncrementQuantity}>
        <Iconify icon={'eva:plus-fill'} width={14} height={14} />
      </IconButton>
    </Box>
  );
}