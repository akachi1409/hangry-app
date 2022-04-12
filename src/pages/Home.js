// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAbout,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';

import TwitterConvTrkr from "react-twitter-conversion-tracker";

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const o8861 = process.env.o8861;
TwitterConvTrkr.init("o882a");
TwitterConvTrkr.pageView();

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Public Sale">
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          
          <HomeAbout />
          
          {/* <HomeDarkMode /> */}

          <HomeHugePackElements />
          
          {/* <HomeMinimal /> */}

          <HomeColorPresets />

          {/* <HomeCleanInterfaces /> */}

          <HomePricingPlans />

          {/* <HomeLookingFor /> */}

          {/* <HomeAdvertisement /> */}

        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
