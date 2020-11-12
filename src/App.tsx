import { useState, useEffect } from 'react';
import { firestore } from 'firebase';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<firestore.DocumentData[]>([]);
  useEffect(() => {
    const searchUsers = async() => {
      // Firestoreのコレクションを指定してデータ取得。今回は全量を検索
      const res = await firestore.collection('users').get();
      if (res.empty) return [];
      const userList: firestore.DocumentData[] = [];
      // DocumentData型にはmapメソッドが定義されていないため、forEachのループでデータを加工
      res.forEach(doc => {
          userList.push(doc.data());
      })
      setUsers(userList);
    }

    searchUsers();
    setLoading(false);
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {users.map(data => (
          <p>{data.ip}</p>
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
