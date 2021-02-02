import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../../components/Avatar";
import { db } from "../../../../utils/firebase";
import { UserContext } from "../../../../utils/StateProvider";
import "./styles/sidebar-chat.css";
import firebase from "firebase/app";

interface SidebarChatProps {
  id?: string;
  addNewChat?: boolean;
  name?: string;
  chatPic?: string;
}

export function SidebarChat({
  addNewChat,
  chatPic,
  id,
  name,
}: SidebarChatProps) {
  const [seed, setSeed] = useState(0);
  const [messages, setMessages] = useState<firebase.firestore.DocumentData>();

  const user = useContext(UserContext);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter a name for chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
        chatPic: user.user.photoURL,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          iconUrl={
            chatPic
              ? chatPic
              : `https://avatars.dicebear.com/api/human/${seed}.svg`
          }
        />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          {messages ? <p>{messages[0]?.message}</p> : null}
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat room</h2>
    </div>
  );
}
