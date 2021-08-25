import React from "react";
import DetailsPresenter from "./DetailsPresenter";

export default class extends React.Component {
  state = {
    loading: true,
  };

  render() {
    return <DetailsPresenter {...this.state} />;
  }
}
