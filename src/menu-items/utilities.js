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

const utilities = {
  id: 'utilities',
  title: 'Hotel Managment',
  type: 'group',
  children: [
    {
      id: 'all-hotels',
      title: 'All Hotels',
      type: 'item',
      url: '/utils/all-hotels',
      icon: icons.IconHotelService,
      breadcrumbs: false
    },
    {
      id: 'employees',
      title: 'Employees',
      type: 'item',
      url: '/utils/employees',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'allbookings',
      title: 'All Bookings',
      type: 'item',
      url: '/utils/allbookings',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'transaction',
      title: 'Transaction',
      type: 'item',
      url: '/utils/transaction',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    }
  ]
};

export default utilities;
