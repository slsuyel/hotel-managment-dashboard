// assets
import { IconHome2, IconHelp } from '@tabler/icons';

// constant
const icons = { IconHome2, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'home-page',
      title: 'Home',
      type: 'item',
      url: '/',
      icon: icons.IconHome2,
      breadcrumbs: false
    }
  ]
};

export default other;
