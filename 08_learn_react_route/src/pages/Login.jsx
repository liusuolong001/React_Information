import React, { PureComponent } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { changeLoginMethods } from "../store/modules/login";
export class Login extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  routeMy() {
    this.props.routeMy(true);
  }
  render() {
    const { isLogin } = this.props;
    return (
      <div>
        <span>Please Login</span>
        <span>{isLogin ? <Navigate to="/My"></Navigate> : <button onClick={(e) => this.routeMy()}>Login</button>}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.login.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  routeMy(status) {
    dispatch(changeLoginMethods(status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
