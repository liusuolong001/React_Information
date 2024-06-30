import React, { PureComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export class Home extends PureComponent {
  navigateTo(path) {
    const { navigateTo } = this.props.router;
    navigateTo(path);
  }
  render() {
    return (
      <div>
        <h4>Home</h4>
        <Link to="/Home/Recommend">HomeRecommend</Link>
        <Link to="/Home/Ranking">HomeRanking</Link>
        <button
          onClick={(e) => {
            this.navigateTo("/Home/SongMenu");
          }}>
          HomeSongMenu
        </button>
        {/* 占位符 类似于vue中的router-view */}
        <Outlet></Outlet>
      </div>
    );
  }
}

function withRouter(WrapperComponent) {
  return function (props) {
    const navigateTo = useNavigate();
    const router = { navigateTo };
    return <WrapperComponent {...props} router={router}></WrapperComponent>;
  };
}

export default withRouter(Home);
