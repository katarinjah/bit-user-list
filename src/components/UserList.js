import { useState } from 'react';
import Users from './Users';
import "./UserList.css";

export const UserList = () => {
  const [users] = useState(Users);

  const randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 12);

  return (
    <>
      <div className="row user-list justify-content-center">
        {randomUsers.map(user => (
          <div key={user.email} className="col-sm-12 col-md-6 col-lg-4">
            <img src={user.picture.large} alt="user" className="img-top" />
            <p>Email: {user.email}</p>
            <p>Date of Birth: {new Date(user.dob.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </>
  );
}
