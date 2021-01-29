import "./styles/avatar.css";

interface AvatarProps {
  firstName: string;
  lastName: string;
  userIconUrl?: string;
}

export function Avatar({ firstName, lastName, userIconUrl }: AvatarProps) {
  return (
    <div className="avatar">
      <div className="avatar__container">
        {userIconUrl ? (
          <img src={userIconUrl} alt="User Profile" />
        ) : (
          <h1>{firstName.charAt(0) + lastName.charAt(0)}</h1>
        )}
      </div>
    </div>
  );
}
