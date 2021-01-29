import { IconType } from "react-icons/lib";
import "./styles/avatar.css";

interface AvatarProps {
  firstName: string;
  lastName: string;
  iconUrl?: string;
  IconComp?: IconType;
}

export function Avatar({
  firstName,
  lastName,
  iconUrl,
  IconComp,
}: AvatarProps) {
  return (
    <div className="avatar">
      <div className="avatar__container">
        {iconUrl ? (
          <img src={iconUrl} alt="User Profile" />
        ) : IconComp ? (
          <IconComp className="avatar__icon" size="34" color="white" />
        ) : (
          <h1>{firstName.charAt(0) + lastName.charAt(0)}</h1>
        )}
      </div>
    </div>
  );
}
