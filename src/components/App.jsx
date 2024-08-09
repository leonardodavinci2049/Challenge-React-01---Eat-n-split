import { useState } from "react";
import { initialFriends } from "../data/friends"; // import the initialFriends array from the data/friends file

import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

function App() {
  const [friends, setFriends] = useState([...initialFriends]); // create a state variable called friends and set it to the initialFriends array
  const [showAddFriend, setShowAddFriend] = useState(false); // create a state variable called friends and set it to the initialFriends array
  const [selectedFriend, setSelectedFriend] = useState(null); // create a state variable called friends and set it to the initialFriends array

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
    // add a new friend to the friends array
  };

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
        <br/>

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      </div>
      

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
