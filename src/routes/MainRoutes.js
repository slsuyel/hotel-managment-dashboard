import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AllBookings from 'hotels/AllBookings/AllBookings';
import IsUserRoute from './IsUserRoute';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const AllHotels = Loadable(lazy(() => import('hotels/AllHotels/AllHotels')));
const Employees = Loadable(lazy(() => import('hotels/Employees/Employees')));
const Transaction = Loadable(lazy(() => import('hotels/Transaction/Transaction')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <IsUserRoute><MainLayout /></IsUserRoute>,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'all-hotels',
          element: <AllHotels />
        },
        {
          path: 'employees',
          element: <Employees />
        },
        {
          path: 'allbookings',
          element: <AllBookings />
        },
        {
          path: 'transaction',
          element: <Transaction />
        }
      ]
    },
    {
      path: 'owner',
      children: [
        {
          path: 'financial-details',
          element: <> Hotel Owner Financial details Components </>
        }
      ]
    }

  ]
};

export default MainRoutes;
