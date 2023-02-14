import { getPost , getRandomUser} from './Api/index'
import { useEffect, useState } from 'react';
import PostCard from './Components/PostCard';
import UserCard from './Components/UserCard';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  const [userdata, setUserData] = useState(null);

  useEffect(() => { 
    getPost().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((userinfo) => setUserData(userinfo.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((userinfo) => setUserData(userinfo.results[0]));
  }
  // console.log(userdata);

  return (
    <div className="App">
      {userdata && <UserCard data={userdata} />}
      <button onClick={refresh}>Change User</button>
      { data ? data.map((e) => <PostCard title={e.title} body={e.body} />)  :<p>No data</p>}
    </div>
  );
}

export default App;
