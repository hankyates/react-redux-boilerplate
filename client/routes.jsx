import React from 'react';
import {connect} from 'react-redux';

import {Router, Route, browserHistory} from 'react-router';

import Root from './components/rootComponent';

import {setUsers} from './actions/userActions';
import Users from './components/usersComponent';

export default function init(services) {
  let paths = {
      '/': {
        component: Root,
        initialize: () => Promise.resolve()
      },
      '/users': {
        component: Users,
        initialize: dispatch => services.userService.getAllUsers().then(u => dispatch(setUsers(u)))
      }
    },
    routes = Object.keys(paths).map(path => {
      var {component, initialize} = paths[path];
      return <Route key={`${path}route`}
        path={path}
        component={connect(
          s => s,
          d => ({initialize: () => initialize(d)})
        )(component)}
        />
    }),
    router = <Router history={browserHistory}>
        {routes}
      </Router>;

  return {
    routes,
    paths,
    router
  }
}

