import { useEffect } from 'react';
import { userApi } from '@south-blog/apis';

function App() {
  useEffect(() => {
    userApi.getUser(1).then(res => {
      console.log('getUser:', res);
    });
    userApi.getUserById(2).then(res => {
      console.log('getUserById:', res);
    });
  }, []);

  return (
    <>
      <p className="text-red bg-gray-800">
        Click on the Vite and React logos to learn more 111111
      </p>
    </>
  );
}

export default App;
