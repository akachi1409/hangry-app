import { useEffect, useState } from "react";
import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {ethers, BigNumber} from 'ethers';
import hangryHippoNFT from './HangryHippoNFT.json';
import { useDispatch, useSelector } from "react-redux";
// @mui 
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import { MotionContainer, varFade } from '../../components/animate';
// import SocialsButton from 'src/components/SocialsButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import MainHeader from '../../layouts/main/MainHeader';
import { useWeb3Context } from "../../walletconnect";
import { DEFAULD_NETWORK } from "../../walletconnect/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const hangryHippoNFTAddress = "0x64Bd0afbd86Ac88f276960B5df1C80b1cb9726Fc";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[900],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: '100%',
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'center',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  marginTop: 0,
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {

  // const isConnected = Boolean(accounts[0])
  const { connect, disconnect, connected, web3, providerChainID, checkWrongNetwork } = useWeb3Context();
  const dispatch = useDispatch();
  const [accounts, setAccounts] = useState([])
  const [mintAmount, setMintAmount] = useState(1)
  const [isConnected, setConnected] = useState(connected);
  let clickFunc: any = connect;

  if (isConnected) {
    clickFunc = disconnect;
  }

  if (isConnected && providerChainID !== DEFAULD_NETWORK) {
    clickFunc = () => {
        checkWrongNetwork();
    };
  }

  useEffect(() => {
      setConnected(connected);
  }, [web3, connected]);

  async function connectAccount() {
    if (window.ethereum) {  
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      })
      setAccounts(accounts)
    }
  }

  async function handleMint() {
    if (window.ethereum) {  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        hangryHippoNFTAddress,
        hangryHippoNFT,
        signer
      );

      try {
        const response = await contract.mint(mintAmount, {
          value: ethers.utils.parseEther((0.04 * mintAmount).toString())
        });
        console.log('response: ', response)
      } catch (err) {
        console.log('error: ', err)
        notify("err" + err.data.message);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 20) return;
    setMintAmount(mintAmount + 1);
  }

  const notify = (msg) => toast(msg)
  return (
    <MotionContainer>
      <MainHeader />
      <ToastContainer />
      <RootStyle>
        <HeroOverlayStyle
          alt="overlay"
          src="/webfiles/background.jpg"
          variants={varFade().in}
        />
        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ color: 'common.white' }}>
                The long awaited Hangry Hippo NFT
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography variant="h6" sx={{ color: 'common.white' }}>
                WADING UNDER THE WATER. READY TO BITE.
              </Typography>

            </m.div>
            { isConnected ? (
                  <m.div variants={varFade().inRight}>
                     <m.div variants={varFade().inRight}>
                    <Button
                      color="inherit"
                      size="large"
                      variant="outlined"
                      target="_blank"
                      rel="noopener"
                      onClick={handleMint}
                      // endIcon={<Iconify icon={'akar-icons:discord-fill'} />}
                    >
                      MINT
                    </Button>
                    </m.div>
                    <ButtonGroup sx={{mt: 3}} color="inherit">
                      <Button variant="contained" onClick={handleDecrement}>-</Button>
                      <Button>{mintAmount}</Button>
                      <Button variant="contained" onClick={handleIncrement}>+</Button>
                    </ButtonGroup>
                  </m.div>
              ) : (
                <m.div variants={varFade().inRight}>
                     <m.div variants={varFade().inRight}>
                    <Button
                      color="inherit"
                      size="large"
                      variant="outlined"
                      target="_blank"
                      rel="noopener"
                      onClick={clickFunc}
                      // endIcon={<Iconify icon={'akar-icons:discord-fill'} />}
                    >
                      Connect Wallet
                    </Button>
                    </m.div>
                    {/* <ButtonGroup color="inherit">
                      <Button variant="contained" onClick={handleDecrement}>-</Button>
                      <Button>{mintAmount}</Button>
                      <Button variant="contained" onClick={handleIncrement}>+</Button>
                    </ButtonGroup> */}
                  </m.div>
              )}

            {/* <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Available For
                </Typography>
              </m.div>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'center' }}>
                {['ic_sketch', 'ic_figma', 'ic_js', 'ic_ts', 'ic_nextjs'].map((resource) => (
                  <m.img
                    key={resource}
                    variants={varFade().inRight}
                    src={`https://minimal-assets-api.vercel.app/assets/images/home/${resource}.svg`}
                  />
                ))}
              </Stack>
            </Stack> */}
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
