import React from 'react';
import {Link} from 'react-router';

export default function Root() {
  return <div className="home">
    <h1>Hello, world!</h1>
    <div className="nav">
      <Link to="/users">Users</Link>
    </div>
  </div>;
}

