import { useContext } from "react";
import { auth, provider } from "../firebase";
import { UserContext } from "../StateProvider/StateProvider";
import "./styles/login.css";

export function Login() {
  const { setUser }: any = useContext(UserContext);

  const signIn = () => {
    auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => alert("error: " + error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1920px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign into WhatsApp</h1>
        </div>

        <button onClick={signIn}>Sign In With Google</button>
      </div>
    </div>
  );
}
