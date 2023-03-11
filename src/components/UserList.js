import { useEffect, useState } from "react";
import { Users } from './Users'

export const UserList = ({ users }) => {
    const [randomUsers, setRandomUsers] = useState([]);

    useEffect(() => {
        const getRandomUsers = () => {
          const shuffledUsers = users.sort(() => 0.5 - Math.random());
          const selectedUsers = shuffledUsers.slice(0, 10);
          const formattedUsers = selectedUsers.map(user => ({
            picture: user.picture.medium,
            email: user.email,
            dob: user.dob.date
          }));
          setRandomUsers(formattedUsers);
        }
        getRandomUsers();
    }, [users]);

    return (
        <div>
            {randomUsers.map(user => (
              <div key={user.email}>
                <img src={user.picture} alt="user" />
                <p>Email: {user.email}</p>
                <p>Date of Birth: {user.dob}</p>
              </div>
            ))}
        </div>
    );
}