import "./styles/sidebar.css";
import { Avatar } from "../../../components/Avatar";
import { MdChat, MdDonutLarge, MdMoreVert, MdSearch } from "react-icons/md";
import { IconButton } from "../../../components/IconButton";
import { SidebarChat } from "./SidebarChat";
import { useState, useEffect, useContext } from "react";
import { db } from "../../../utils/firebase";
import { UserContext } from "../../../utils/StateProvider";
import firebase from "firebase/app";

export function Sidebar() {
  const [rooms, setRooms] = useState<firebase.firestore.DocumentData>([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar iconUrl={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton Icon={MdDonutLarge} />
          <IconButton Icon={MdChat} />
          <IconButton Icon={MdMoreVert} />
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <MdSearch />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room: firebase.firestore.DocumentData) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}
            chatPic={room.data.chatPic}
          />
        ))}
      </div>
    </div>
  );
}
