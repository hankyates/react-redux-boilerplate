jest
  .unmock('../userReducer');

import userReducer from '../userReducer';

describe('userReducer', function() {
  it('should default users to an array', function() {
    expect(userReducer()).toEqual([]);
  });
});

