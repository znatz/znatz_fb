import React, { useState, useEffect } from 'react';
import './App.css';

// firebase functions
import firebase from 'firebase';
import fireStore from './findex'


function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<firebase.firestore.DocumentData[]>([]);
  const [myAccount, setMyAccount] = useState();

  useEffect(() => {
    const searchUsers = async() => {
      // Firestoreのコレクションを指定してデータ取得
      const res = await firebase.firestore().collection('users').get();
      if (res.empty) return [];
      const userList: firebase.firestore.DocumentData[] = [];
      // DocumentData型にはmapメソッドが定義されていないため、forEachのループでデータを加工
      res.forEach(doc => {
          userList.push(doc.data());
      })
      setUsers(userList);
    }
    searchUsers();

}, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
                  <p>
                  LOADING.....
                </p> 
        ) : !myAccount ? (
          <p>
            ログインが必要です
          </p>
        ) : 
          users.map((user, index) => {
            return <p key={index}> {user.ip}</p>
          })
        }
      </header>
    </div>
  );
}

export default App;