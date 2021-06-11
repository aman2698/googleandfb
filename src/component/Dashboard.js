import React from "react";
import PropTypes from "prop-types";
import { useSelector, connect, useDispatch } from "react-redux";
import { GoogleLogout } from "react-google-login";
import { Redirect, withRouter, useHistory } from "react-router-dom";

const Dashboard = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    console.log("asssssss");
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  return (
    <div className="container">
      <div class="card" style={{ width: "400px" }}>
        <img class="card-img-top" src={data.imageURL} alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">{data.name}</h4>
          <h4 class="card-title">{data.email}</h4>
          <button type="button" onClick={(e) => logout()}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};
const mapStateToProps = (state) => ({
  data: state.reducer,
});
export default connect(mapStateToProps)(withRouter(Dashboard));
