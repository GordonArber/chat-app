import "./sidebar.css";

interface SidebarProps {}

export function Sidebar({}) {
  return (
    <div className="sidebar">
      <div className="sidebar__header"></div>
      <div className="sidebar__search"></div>
      <div className="sidebar_chats"></div>
    </div>
  );
}
