// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  // {
  //   title: 'Home',
  //   icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
  //   path: '/',
  // },
  {
    title: 'About',
    icon: <Iconify icon={'bi:dot'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
  {
    title: 'Collection',
    icon: <Iconify icon={'bi:dot'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
  {
    title: 'Roadmap',
    icon: <Iconify icon={'bi:dot'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
  {
    title: 'Team',
    icon: <Iconify icon={'bi:dot'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
  {
    title: 'FAQs',
    icon: <Iconify icon={'bi:dot'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
];

export default menuConfig;
