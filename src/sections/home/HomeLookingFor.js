// @mui
import { styled } from '@mui/material/styles';
import { Accordion, AccordionSummary, AccordionDetails, Button, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionInView, varFade } from '../../components/animate';
import { _faqs } from '../../_mock';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------


const faqs = [
  {
    id: 0,
    value: 'a',
    heading: `How can I mint a Hangry Hippo?`,
    detail: 'You will either need to be on the whitelist or be selected in the raffle in order to mint. Once the mint is sold out, Hangry Hippos will be available exclusively on Opensea. Minting allows you to be the first owner of a unique Hangry Hippo.',
  },
  {
    id: 1,
    value: 'b',
    heading: `How do I get on the whitelist?`,
    detail: 'Engage with us on Discord, Twitter and Instagram for a chance to be part of the whitelist. Join all three to increase your odds.',
  },
  {
    id: 2,
    value: 'c',
    heading: `What will the mint price be?`,
    detail: 'Stay tuned.',
  },
  {
    id: 3,
    value: 'e',
    heading: `When is the official public launch?`,
    detail: 'To give everyone a fair chance of owning a unique Hangry Hippo NFT, we have decided to use a raffle system. Follow us on discord for the most up to date information on the raffle launch date.',
  },
  {
    id: 4,
    value: 'f',
    heading: `How does the raffle work?`,
    detail: 'You will be able to enter your Ethereum wallet address. To give everyone a fair chance, we will let our software choose who will be able to mint. Come back to our website the next day to see if you are one of the lucky winners who are able to mint.',
  },
  {
    id: 5,
    value: 'g',
    heading: `Hippo facts`,
    detail: 'Pablo Escobar owned hippos.',
  },
]


export default function HomeLookingFor() {
  return (
    <RootStyle>
      <Container>
        <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <MotionInView variants={varFade().inDown}>
              <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
                FAQs
              </Typography>
            </MotionInView>

            <MotionInView variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
                Ask Mr. Hippo
              </Typography>
            </MotionInView>
          </Grid>

          <Grid item xs={12} md={7}>
            {/* <MotionInView
              variants={varFade().inUp}
              sx={{
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                disabledEffect
                alt="rocket"
                src="https://minimal-assets-api.vercel.app/assets/images/home/zone_screen.png"
              />
            </MotionInView> */}
            {faqs.map((accordion) => (
              <Accordion key={accordion.id}>
                <AccordionSummary
                  expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
                >
                  <Typography variant="subtitle1">{accordion.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{accordion.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
        <MotionInView variants={varFade().inDown}>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href="https://material-ui.com/store/items/zone-landing-page/"
            endIcon={<Iconify icon={'akar-icons:discord-fill'} />}
            sx={{mt: 5}}
          >
            Join Discord
          </Button>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
