import { IconType } from "react-icons/lib";
import "./styles/icon-button.css";

interface AvatarProps {
  Icon: IconType;
}

export function IconButton({ Icon }: AvatarProps) {
  return (
    <div className="iconButton">
      <Icon size="24" color="gray" />
    </div>
  );
}
