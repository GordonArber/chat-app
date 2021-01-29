import "./sidebar.css";
import { Avatar } from "./components/Avatar/Avatar";
import { BsFillPersonFill } from "react-icons/bs";
import { MdChat, MdDonutLarge, MdMoreVert, MdSearch } from "react-icons/md";
import { IconButton } from "./components/IconButton/IconButton";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          firstName="Gordon"
          lastName="Arber"
          IconComp={BsFillPersonFill}
        />
        <div className="sidebar__headerRight">
          <IconButton Icon={MdDonutLarge} />
          <IconButton Icon={MdChat} />
          <IconButton Icon={MdMoreVert} />
        </div>
      </div>
      <div className="sidebar__search">
        <IconButton Icon={MdSearch} />
      </div>
      <div className="sidebar_chats"></div>
    </div>
  );
}
