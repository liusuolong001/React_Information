import React, { PureComponent } from "react";
import { connect } from "react-redux";

// import { changeRecommendMethod } from "../store/actionCreators";
import { getRecommendsListMethod } from "../store/actionCreators";

export class recommend extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      message: "Recommend",
    };
  }

  componentDidMount() {
    this.props.changeRecommendsMethods();
  }

  render() {
    const { message } = this.state;
    const { count, recommends } = this.props;
    return (
      <div>
        <h4>recommend:{count}</h4>
        <h4>{message}</h4>
        <ul>
          {recommends.map((it, index) => {
            return <ol key={index}>{it.title}</ol>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  recommends: state.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  changeRecommendsMethods() {
    // console.log("=====");
    dispatch(getRecommendsListMethod());
    // dispatch(changeRecommendMethod(recommends));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(recommend);
