import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebaserc";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/413062748_1461747724375134_734170550344977335_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFvGYILxxhRmZqZKN7ijqapjySiuroPLJePJKK6ug8slwmWsKmdka9H8rdr2Xit-qt5cG7Ou8WNrVyDMxxO0atf&_nc_ohc=B4ppa0gBz2sAX_fDCRn&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdSfO6WeKS8xkD_00H0gRGL_gbwCIzdo0gl_vnEtuuLIQg&oe=65B3A2BE" />
        <div className="login_text">
          <h1>Sign In to Messaging App</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
