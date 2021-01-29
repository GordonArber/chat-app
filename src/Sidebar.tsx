import "./sidebar.css";
import { Avatar } from "./components/Avatar/Avatar";
import { BsFillPersonFill } from "react-icons/bs";

interface SidebarProps {}

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          firstName="Gordon"
          lastName="Arber"
          IconComp={BsFillPersonFill}
        />
      </div>
      <div className="sidebar__search"></div>
      <div className="sidebar_chats"></div>
    </div>
  );
}
