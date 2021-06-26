import { useState } from 'react';
import Navigation from './components/navigation/navigation';
import List from './components/userList/list';
import './App.css';


let dummyData = [
  {
    id: "01",
    gender: "m",
    username: "Milan",
    email: "milanpanin@gmail.com",
  },
  {
    id: "02",
    gender: "f",
    username: "Sara",
    email: "sarastefanovic@gmail.com",
  },
  {
    id: "03",
    gender: "m",
    username: "Neven",
    email: "nevenvujuc@gmail.com",
  },
  {
    id: "04",
    gender: "m",
    username: "Marko",
    email: "markojelic@gmail.com",
  },
  {
    id: "05",
    gender: "f",
    username: "Danica",
    email: "danicamarkovic@gmail.com",
  },
];

function App() {
  const [user, setUser] = useState(dummyData);

  const deleteUser = (id) => {
    let newData = user.filter(user => user.id !== id);
    setUser(newData);
  }

  const addUser = (newUser) => {
    let newUserList = [...user, newUser];
    setUser(newUserList);
  }

  const editUser = (editedUser) => {
    let updated = user.map(usr => usr.id !== editedUser.id ? usr : editedUser);
    setUser(updated);
  }

  return (
    <div className="app">
      <Navigation user={user} addUser={addUser}/>
      <List user={user} deleteUser={deleteUser} editUser={editUser}/>
    </div>
  );
}

export default App;
