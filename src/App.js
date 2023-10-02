import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import Friend from "./components/friend";

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/friends").then((result) => {
      setFriends(result.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>
        Friends List<sup>New</sup>
      </h1>
      {friends.map((friend) => {
        return <Friend key={friend._id} friend={friend} />;
      })}
    </div>
  );
}

export default App;
