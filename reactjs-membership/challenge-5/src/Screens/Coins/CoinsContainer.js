import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { coinExplorerApi } from "../../api";

export default class extends React.Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await coinExplorerApi.coins();
      this.setState({ data });
    } catch {
      this.setState({
        error: "Can't find TV information.",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { data, loading, error } = this.state;
    return <CoinsPresenter data={data} loading={loading} error={error} />;
  }
}
