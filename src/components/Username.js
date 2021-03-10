import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserName = () => {
  const { username } = useParams();

  useEffect(() => {
    console.log(`Get ${username}'s data from API `);
  }, [username]);

  return <div>Welcome: {username}</div>;
};

export default UserName;