import { useState, useEffect, useContext } from "react";
import { Avatar } from "../../../components/Avatar";
import { MdInsertEmoticon, MdMic, MdMoreVert, MdSearch } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import "./styles/chat.css";
import { IconButton } from "../../../components/IconButton";
import { useParams } from "react-router-dom";
import { db } from "../../../utils/firebase";
import { UserContext } from "../../../utils/contexts/userContext";
import firebase from "firebase/app";

interface ParamTypes {
  roomId: string;
}

export function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState(0);
  const [room, setRoom] = useState<firebase.firestore.DocumentData | undefined>(
    {}
  );
  const [messages, setMessages] = useState<
    firebase.firestore.DocumentData | undefined
  >({});
  const { roomId } = useParams<ParamTypes>();

  const user = useContext(UserContext);

  useEffect(() => {
    if (roomId) {
      const unsubscribe = db
        .collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoom(snapshot.data()));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );

      return () => {
        unsubscribe();
      };
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          iconUrl={
            room?.chatPic
              ? room.chatPic
              : `https://avatars.dicebear.com/api/human/${seed}.svg`
          }
        />
        <div className="chat__headerInfo">
          <h3>{room?.name}</h3>
          {messages && messages[messages.length - 1]?.data.timestamp ? (
            <p>
              Last seen{" "}
              {new Date(
                messages &&
                  messages[messages.length - 1]?.data.timestamp.toDate()
              ).toUTCString()}
            </p>
          ) : (
            <p>Type a message to get started</p>
          )}
        </div>
        <div className="chat__headerRight">
          <IconButton Icon={MdSearch} />
          <IconButton Icon={BsPaperclip} />
          <IconButton Icon={MdMoreVert} />
        </div>
      </div>
      <div className="chat__body">
        {messages?.map
          ? messages.map((message: firebase.firestore.DocumentData) => (
              <p
                key={message.id}
                className={`chat__message ${
                  message.data.name === user.user.displayName &&
                  "chat__reciever"
                }`}
              >
                <span className="chat__name">{message.data.name}</span>
                {message.data.message}
                <span className="chat__timestamp">
                  {new Date(message?.data.timestamp?.toDate()).toUTCString()}
                </span>
              </p>
            ))
          : null}
      </div>
      <div className="chat__footer">
        <MdInsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={(e) => sendMessage(e)} type="submit">
            Send a message
          </button>
        </form>
        <MdMic />
      </div>
    </div>
  );
}
