import { IconType } from "react-icons/lib";
import "./styles/icon-button.css";

interface IconButtonProps {
  Icon: IconType;
}

export function IconButton({ Icon }: IconButtonProps) {
  return (
    <div className="iconButton">
      <Icon size="24" color="gray" />
    </div>
  );
}
