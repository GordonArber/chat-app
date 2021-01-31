import "./app.css";
import { Chat } from "./Chat/Chat";
import { Sidebar } from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login/Login";
import { UserContext } from "./StateProvider/StateProvider";
import { useMemo, useState } from "react";

export function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="app">
      <UserContext.Provider value={value}>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Router>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Sidebar />
                  <Chat />
                </Route>
                <Route path="/">
                  <Sidebar />
                </Route>
              </Switch>
            </Router>
          </div>
        )}
      </UserContext.Provider>
    </div>
  );
}
