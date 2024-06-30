import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { incremented } from "../store/modules/counter";
import { fetchHomeMultidataAction } from "../store/modules/list";

export class Profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Profile",
    };
  }
  incrementMethod(num) {
    this.props.incrementMethod(num);
  }

  componentDidMount() {
    this.props.getRecommendsMethods();
  }
  render() {
    const { counter, recommends } = this.props;
    const { message } = this.state;
    return (
      <div>
        <h4>
          {message}:{counter}
        </h4>
        <button onClick={(e) => this.incrementMethod(+1)}>+1</button>
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
  counter: state.counter.count,
  recommends: state.list.recommends,
});

const mapDispatchToProps = (dispatch) => {
  return {
    incrementMethod(num) {
      dispatch(incremented(num));
    },

    getRecommendsMethods() {
      dispatch(fetchHomeMultidataAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
