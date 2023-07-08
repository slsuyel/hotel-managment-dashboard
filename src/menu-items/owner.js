// assets
import { IconHotelService, IconUser, IconCurrencyDollar, IconWindmill } from '@tabler/icons';
/* IconHotelService: TablerIcon; */
// constant
const icons = {
  IconHotelService,
  IconUser,
  IconCurrencyDollar,
  IconWindmill
};
const owner = {
  id: 'owner',
  title: 'Hotel owner',
  type: 'group',
  children: [
    {
      id: 'financial-details',
      title: 'Financial details',
      type: 'item',
      url: '/owner/financial-details',
      icon: icons.IconHotelService,
      breadcrumbs: false
    }
  ]
};
export default owner;