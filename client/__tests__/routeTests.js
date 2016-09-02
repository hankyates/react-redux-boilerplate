jest
  .unmock('../routes');

import {setUsers} from '../actions/userActions';
import init from '../routes';

let getAllUsers = jest.fn(() => Promise.resolve(['users'])),
  {paths} = init({
    userService: {
      getAllUsers
    }
  });

setUsers.mockImplementation(u => u);

describe('routes', function() {
  describe('/', function() {
    pit('initialize should return Promise', function() {
      return paths['/'].initialize().then(() => {
        expect(true);
      });
    });
  });
  describe('/users', function() {
    pit('initialize should dispatch setUsers after getting all users', function() {
      var dispatch = jest.fn();
      return paths['/users'].initialize(dispatch).then(() => {
        expect(dispatch).toBeCalledWith(['users']);
      })
    });
  });
});

