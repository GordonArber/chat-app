import { createContext } from "react";
import firebase from "firebase/app";

interface userContextType {
  result?: firebase.auth.UserCredential;
  user: firebase.User;
}

export const UserContext = createContext<userContextType | any>(null)!;
