import React from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

import { useDispatch, useSelector } from "react-redux";
const Login = (props) => {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    console.log(res);
    dispatch({ type: "GOOGLE_LOGIN", payload: res.profileObj });
  };
  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };
  const responseFacebook = (response) => {
    console.log(response);
    dispatch({ type: "FACEBOOK_LOGIN", payload: response });
  };

  const componentClicked = () => console.log("clicked");
  const data = useSelector((state) => state.reducer);
  if (data.authentication) {
    return <Redirect to="/dashbord" />;
  }
  return (
    <div className="container">
      <div className="card" style={{ width: "400px", marginTop: "25px" }}>
        <div className="card-body">
          <h3 className="card-title">Sign Up</h3>
          <button className="card-title">
            <GoogleLogin
              clientId="321323735309-hh8l8p6i3k626m2a3o3cd4r6ksrvhbav.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              style={{ marginTop: "100px" }}
              isSignedIn={false}
            />
          </button>
          <br />
          <button className="card-title">
            <FacebookLogin
              appId="210683927541907"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
