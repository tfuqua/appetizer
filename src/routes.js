// @flow
import routeLoader from './util/routeLoader';

//App Specific components
const Leaderboard = routeLoader(() => import(/* webpackChunkName: "Leaderboard" */ './containers/Leaderboard'));
const Vote = routeLoader(() => import(/* webpackChunkName: "Vote" */ './containers/Vote'));
const Admin = routeLoader(() => import(/* webpackChunkName: "Admin" */ './containers/Admin'));

const routes = [
  {
    path: '/',
    component: Leaderboard,
    exact: true
  },
  {
    path: '/vote',
    component: Vote
  },
  {
    path: '/admin',
    component: Admin
  }
];

export default routes;
