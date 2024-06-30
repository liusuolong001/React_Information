import React, { PureComponent } from "react";
import { connect } from "react-redux";

export class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Home",
    };
  }

  render() {
    const { message } = this.state;
    const { counter } = this.props;
    return (
      <div>
        <h4>
          {message}:{counter}
        </h4>
      </div>
    );
  }
}

const mapStatToProps = (state) => ({
  counter: state.counter.count,
  banners: state.list.banners,
});

export default connect(mapStatToProps)(Home);
