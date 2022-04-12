import PropTypes from 'prop-types';
// @mui
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { Timeline,  TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
// utils
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { fDateTime } from '../../../../utils/formatTime';
// _mock_
import { _analyticOrderTimeline } from '../../../../_mock';

// ----------------------------------------------------------------------



export default function AnalyticsOrderTimeline() {
  return (
    // <Card
    //   sx={{
    //     '& .MuiTimelineItem-missingOppositeContent:before': {
    //       display: 'none',
    //     },
    //   }}
    // >
    //   {/* <CardHeader title="Order Timeline" /> */}
    //   <CardContent>
    //     <Timeline>
    //       {_analyticOrderTimeline.map((item, index) => (
    //         <OrderItem key={item.id} item={item} isLast={index === _analyticOrderTimeline.length - 1} />
    //       ))}
    //     </Timeline>
    //   </CardContent>
    // </Card>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {/* TBD */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'white' }} />
          <TimelineDot sx={{ bgcolor: 'white' }}>
            {/* <FastfoodIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            50% MINT SELLOUT
          </Typography>
          <Typography sx={{mt: 2}}>At 50% of mint sellout, we’ll purchase land in the Sandbox Metaverse. You – the hippo holders – will choose where our community owns land. </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {/* <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent> */}
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <LaptopMacIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            100% MINT SELLOUT
          </Typography>
          <Typography sx={{mt: 2}}>At 100% of mint sellout, we’ll purchase more land in the Metaverse – OR – We’ll take the land we already own and turn it into an income generating asset through renting or building within our land. Our team has extensive experience with real estate development and would apply this expertise to our Metaverse community assets.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <HotelIcon /> */}
          </TimelineDot>
          {/* <TimelineConnector sx={{ bgcolor: 'secondary.main' }} /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            GIVING BACK TO CLEAN WATER 
          </Typography>
          <Typography sx={{mt: 2}}>At 100% of mint sellout, we’ll also be giving $30,000 to the organization Charity Water. Being a bunch of hippos, water is everything to us. Turns out we are not the only ones. 1 out of 3 people have no access to clean drinking water. As a community, we want to be part of the solution.</Typography>
          <Typography sx={{mt: 2}}>10% of the hippo royalties will continue to be donated to Charity Water.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineConnector sx={{ bgcolor: 'secondary.main' }} /> */}
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <RepeatIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            AS THE COMMUNITY GROWS,<br/> SO WILL OUR ROADMAP.
          </Typography>
          <Typography sx={{mt: 2}}>40% of the hippo royalties will go toward our ongoing community fund.</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            $100K LAUNCHPAD
          </Typography>
          <Typography>We make art to support entrepreneurs. Our $100K Launchpad for Hangry Hippo holders will help support new business ventures within our community.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            GIVING BACK
          </Typography>
          <Typography>As the community grows, the funds will grow — forever.</Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  isLast: PropTypes.bool,
  item: PropTypes.shape({
    time: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
