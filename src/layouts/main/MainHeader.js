import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import Iconify from '../../components/Iconify';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import SocialsButton from './../../components/SocialsButton';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader({accounts, setAccounts}) {
  
  // const isConnected = Boolean(accounts[0]);
  
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />

          {/* <Label color="primary" sx={{ ml: 1 }}>
            test
          </Label>  */}
          <Box sx={{ flexGrow: 1 }} />

          {/* {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}
          <SocialsButton/>
          <Button
            color="inherit"
            size="medium"
            variant="outlined"
            target="_blank"
            rel="noopener"
            sx={{ml:1, fontSize: 12}}
            href="https://www.721.so/mint?config=%7B%22contractAddress%22%3A%220x64Bd0afbd86Ac88f276960B5df1C80b1cb9726Fc%22%2C%22description%22%3A%22Use%20MetaMask%20browser%20on%20mobile%20if%20errors%20occur%22%2C%22coverAsset%22%3A%7B%22type%22%3A%22image%22%2C%22url%22%3A%22https%3A%2F%2Fipfs.io%2Fipfs%2Fbafybeid3ihrovovwnhetg2ofxt7fcdkowozp3fkgfhetyti74cwqqbukee%2Fpreview.png%22%2C%22size%22%3A%7B%22width%22%3A%22300%22%2C%22height%22%3A%22300%22%7D%7D%2C%22dataSources%22%3A%7B%22totalSupply%22%3A%7B%22name%22%3A%22MAX_MULTIMINT%22%7D%2C%22MAX_SUPPLY%22%3A%7B%22name%22%3A%22MAX_MULTIMINT%22%7D%7D%2C%22creatorAddress%22%3A%220x487427e8821982aeb1fe202952954a3bd0f14641%22%2C%22chainId%22%3A%220x1%22%2C%22schemaVersion%22%3A%221.0.0%22%7D"
            // endIcon={<Iconify icon={'akar-icons:discord-fill'} />}
          >
            CONNECT
          </Button>

          {/* {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
