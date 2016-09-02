import flow from 'lodash/flow';

import initRoutes from './routes';
import initServices from './services/initServices';

export default flow(
  initServices,
  initRoutes
);
