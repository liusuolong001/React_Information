import React, { Component } from "react";
import { connect } from "react-redux";
import { changeBannersMethod } from "../store/actionCreators";
import axios from "axios";

export class banners extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "banners",
    };
  }
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      this.props.pageChangeBanners(banners);
    });
  }
  render() {
    const { banners } = this.props;
    const { message } = this.state;
    return (
      <div>
        <h4>{message}</h4>
        <ul>
          {banners.map((it, index) => {
            return <ol key={index}>{it.title}</ol>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  banners: state.banners,
});

const mapDispatchToProps = (dispatch) => {
  return {
    pageChangeBanners(banners) {
      dispatch(changeBannersMethod(banners));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(banners);
