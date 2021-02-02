import { createContext } from "react";
import firebase from "firebase/app";

interface UserContextType {
  result?: firebase.auth.UserCredential;
  user: firebase.User;
}

export const UserContext = createContext<UserContextType | any>(null)!;
