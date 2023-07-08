/* eslint-disable prettier/prettier */
// import dashboard from './dashboard';
// // import pages from './pages';
// import utilities from './utilities';
// import other from './other';



// const menuItems = {
//   items: [dashboard, utilities, other]
// };

// export default menuItems;
import dashboard from './dashboard';
// import pages from './pages';
import utilities from './utilities';
import other from './other';
import owner from './owner';
import { Navigate } from 'react-router-dom';

const user = {
  isAuthenticated: true,
  role: 'admin'
};

let menuItems;

if (user.isAuthenticated) {
  if (user.role === 'admin') {
    menuItems = {
      items: [dashboard, utilities, other]
    };
  } else if (user.role === 'owner') {
    menuItems = {
      items: [dashboard, owner, other]
    };
  }
} else {
  menuItems = {
    items: [
      {
        path: '/pages/login/login3',
        state: { from: location },
        replace: true,
        element: <Navigate to="/pages/login/login3" state={{ from: location }} replace />
      }
    ]
  };
}

export default menuItems;
