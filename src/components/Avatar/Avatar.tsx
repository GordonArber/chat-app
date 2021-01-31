import { BsFillPersonFill } from "react-icons/bs";
import "./styles/avatar.css";

interface AvatarProps {
  iconUrl: string;
}

export function Avatar({ iconUrl }: AvatarProps) {
  return (
    <div className="avatar">
      <div className="avatar__container">
        {iconUrl ? (
          <img src={iconUrl} alt="User Profile" />
        ) : (
          <BsFillPersonFill size="34" color="white" />
        )}
      </div>
    </div>
  );
}
