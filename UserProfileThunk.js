import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/thunk/githubSlice';

const UserProfileThunk = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.github);

  const handleSearch = () => {
    if (username) dispatch(fetchUser(username));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

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

export default UserProfileThunk;
