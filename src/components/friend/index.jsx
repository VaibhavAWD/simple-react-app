import "./style.css";

const Friend = (props) => {
  const friend = props.friend;
  return <div className="friend-list-item">{friend.name}</div>;
};

export default Friend;
