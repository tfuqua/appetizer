// @flow
import routeLoader from './util/routeLoader';

//App Specific components
const Leaderboard = routeLoader(() => import(/* webpackChunkName: "Leaderboard" */ './containers/Leaderboard'));
const Vote = routeLoader(() => import(/* webpackChunkName: "Vote" */ './containers/Vote'));
const Admin = routeLoader(() => import(/* webpackChunkName: "Admin" */ './containers/Admin'));
const Form = routeLoader(() => import(/* webpackChunkName: "Form" */ './containers/Form'));
const Gallery = routeLoader(() => import(/* webpackChunkName: "Gallery" */ './containers/Gallery'));
const Success = routeLoader(() => import(/* webpackChunkName: "Success" */ './containers/Success'));

const routes = [
  {
    path: '/',
    component: Leaderboard,
    exact: true
  },
  {
    path: '/vote',
    component: Vote,
    exact: true
  },
  {
    path: '/vote/:id',
    component: Form
  },
  {
    path: '/gallery',
    component: Gallery
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/success',
    component: Success
  }
];

export default routes;
