import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Micro = React.lazy(() => import('./views/micro/Micro'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // micro apps:
  { path: '/react', name: 'React', component: Micro, micro: true },
  { path: '/home', name: 'React Home', component: Micro, micro: true },
];

export default routes;
