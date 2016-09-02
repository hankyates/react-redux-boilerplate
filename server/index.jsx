import dotenv from 'dotenv';
import express from 'express';
import React from 'react';
import initApp from '../client/utils';
import path from 'path';
import readFile from './fileUtil';
import template from 'lodash/template';
import curry from 'lodash/curry';

import {RouterContext, match} from 'react-router';
import {renderToString} from 'react-dom/server';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../client/reducers/rootReducer';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

let {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET
} = process.env,
config = {
  firebase: {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    storageBucket: FIREBASE_STORAGE_BUCKET
  }
},
sendErrorCurry = curry((res, err) => {
  console.error(err);
  return res.status(500).end('Internal server error');
});

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../static')));

app.get('*', (req, res) => {
  let sendError = sendErrorCurry(res);

  readFile(path.join(__dirname, '../templates/index.tpl'))
    .then(indexHtml => {
      let {routes, paths} = initApp(config);
      match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if (err) {
          return sendError(err);
        }
        if (!renderProps) {
          return res.status(404).end('Not found.');
        }

        let store = createStore(rootReducer);
        let {pathname} = renderProps.location;
        let {initialize} = paths[pathname];

        return initialize(store.dispatch)
          .then(u => {
            const appHtml = renderToString(
              <Provider store={store}>
                <RouterContext {...renderProps}/>
              </Provider>
            );

            const appData = JSON.stringify(store.getState() || {});
              res.end(template(indexHtml)({appHtml, appData, config: JSON.stringify(config||{})}))
          })
      });
    })
    .catch(sendError);
});

app.listen(port, () => {
  console.log('app listening on', port);
});
