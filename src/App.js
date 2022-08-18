import { useState } from "react";
import Create from "./Components/Create";
import Show from "./Components/Show";

function App() {
  const [users, setusers] = useState([]);
  console.log(users);
  return (
    <div className="App">
      <Create users={users} setusers={setusers} />
      <Show users={users} setusers={setusers} />
    </div>
  );
}

export default App;
