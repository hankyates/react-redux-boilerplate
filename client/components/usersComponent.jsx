import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    let {users, initialize, dispatch} = props;
    if (!users.length) {
      initialize(dispatch);
    }
  }
  render() {
    let {users} = this.props;
    return <div className="users">
      <ul>
        {users.map(u => <li key={`${u.name}users`}>{u.name}</li>)}
      </ul>
    </div>
  }
}

Users.defaultProps = {
  users: []
}

Users.propTypes = {
  users: React.PropTypes.array
}

export default Users;
