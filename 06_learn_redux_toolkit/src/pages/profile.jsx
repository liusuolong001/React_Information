import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { increment } from "../store/features/counter";
import axios from "axios";
import { changeBanners, changeRecommends } from "../store/features/home";

export class profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "ProfileCount",
      count: 0,
    };
  }

  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.props.changeBanners(banners);
      this.props.changeRecommends(recommends);
    });
  }
  increment(num) {
    this.props.increment(num);
  }

  render() {
    const { counter } = this.props;
    const { message } = this.state;
    return (
      <div>
        <h4>
          {message}:{counter}
        </h4>
        <button onClick={(e) => this.increment(+5)}>+5</button>
      </div>
    );
  }
}

const mapStatToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment(num) {
      dispatch(increment(num));
    },
    changeBanners(banners) {
      dispatch(changeBanners(banners));
    },
    changeRecommends(recommends) {
      dispatch(changeRecommends(recommends));
    },
  };
};
export default connect(mapStatToProps, mapDispatchToProps)(profile);
