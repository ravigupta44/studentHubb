import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { authentication, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import Footer from "./Footer";
function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    authentication
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
      <div className="login__body">
        <img
          alt="whats app logo"
          src="https://i2.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?resize=1000%2C667&ssl=1"


        />
        <div className="login__text">
          <h1>Welcome To Student Hub Chat</h1>
        </div>

        <Button onClick={signIn}>SignIn with Google</Button>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
