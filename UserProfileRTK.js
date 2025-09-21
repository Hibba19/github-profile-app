import React, { useState } from 'react';
import { useGetUserQuery } from '../features/rtk/githubApi';

const UserProfileRTK = () => {
  const [username, setUsername] = useState('');
  const { data: user, error, isLoading } = useGetUserQuery(username, {
    skip: !username, // no request if username empty
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>User not found</p>}

      {user && (
        <div className="profile">
          <img src={user.avatar_url} alt="avatar" width={120} />
          <h3>{user.name || user.login}</h3>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default UserProfileRTK;
