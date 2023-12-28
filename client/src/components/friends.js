import React, { useState, useEffect } from 'react';
import './friends.css';

function Friends() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  useEffect(() => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(friendsData => {
        setFriends(friendsData);
      });
  }, []);

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
    setDetailsVisible(true);
  };

  const handleDetailsToggle = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div className="container">
      <h2>Miniature Profile App for Software Engineers</h2>
      <div className="friends-list">
        {friends.map(friend => (
          <div key={friend.id} className="friend-item" onClick={() => handleFriendClick(friend)}>
            <div className="image-container">
              <img src={friend.image} alt={`${friend.firstName} ${friend.lastName}`} />
            </div>
          </div>
        ))}
      </div>

      {detailsVisible && selectedFriend && (
        <div className="details-container">
          <h2>{selectedFriend.firstName} {selectedFriend.lastName}</h2>
          <div className="image-container">
            <img src={selectedFriend.image} alt={`${selectedFriend.firstName} ${selectedFriend.lastName}`} />
          </div>
          <p>Email: {selectedFriend.email}</p>
          <p>Phone Number: {selectedFriend.number}</p>
          <p>
            Profile:  
            <a href={selectedFriend.profile} target="_blank" rel="noopener noreferrer">
              {selectedFriend.profile}
            </a>
          </p>
          <button onClick={handleDetailsToggle}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Friends;
