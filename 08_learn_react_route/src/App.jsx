import React, { PureComponent } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import My from "./pages/My";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Home from "./pages/Home";
import HomeRanking from "./pages/HomeRanking";
import HomeRecommend from "./pages/HomeRecommend";
import HomeSongMenu from "./pages/HomeSongMenu";
import NotFound from "./pages/NotFound";
import "./App.css";
import { connect } from "react-redux";
import { changeLoginMethods } from "./store/modules/login";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "app",
      path: "My",
    };
  }

  routerLogin() {
    this.props.routerLogin(false);
  }

  render() {
    const { isLogin } = this.props;
    return (
      <div className="page">
        <div className="header">
          <span>Header</span>
          {/* 从redux中取出isLogin查看是否登陆判断顶部两个路由是否跳转 只有登陆了才可以查看到两个路由跳转 */}
          <span style={{ display: isLogin ? "" : "none" }}>
            <Link to="/My">RouteMy</Link>
            <Link to="/Product">RouteProduct</Link>
            <Link to="/Home">RouteHome</Link>
          </span>

          <span className="logOut">{isLogin ? <button onClick={(e) => this.routerLogin()}>logOut</button> : <Navigate to="/Login"></Navigate>}</span>
        </div>
        <div className="body">
          <Routes>
            <Route path="/" element={<Navigate to="Login"></Navigate>}></Route>
            <Route path="/My" element={<My></My>}></Route>
            <Route path="/Product" element={<Product></Product>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Home" element={<Home></Home>}>
              <Route path="/Home" element={<navigator to="/Home/Recommend"></navigator>}></Route>
              <Route path="/Home/Recommend" element={<HomeRecommend></HomeRecommend>}></Route>
              <Route path="/Home/Ranking" element={<HomeRanking></HomeRanking>}></Route>
              <Route path="/Home/SongMenu" element={<HomeSongMenu></HomeSongMenu>}></Route>
            </Route>
            {/* * 代表空配 上面所有地址都没有找到的情况下走这个notfound */}
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
        <div className="footer">footer</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.login.isLogin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    routerLogin(status) {
      dispatch(changeLoginMethods(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
