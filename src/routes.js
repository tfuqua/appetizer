// @flow
import routeLoader from './util/routeLoader';

//App Specific components
const Leaderboard = routeLoader(() => import(/* webpackChunkName: "Leaderboard" */ './containers/Leaderboard'));
const Vote = routeLoader(() => import(/* webpackChunkName: "Vote" */ './containers/Vote'));

const routes = [
  {
    path: '/',
    component: Leaderboard,
    exact: true
  },
  {
    path: '/vote',
    component: Vote
  }
];

export default routes;
