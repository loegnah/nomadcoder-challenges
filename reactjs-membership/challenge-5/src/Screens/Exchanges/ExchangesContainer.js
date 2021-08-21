import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { coinExplorerApi } from "../../api";

export default class extends React.Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await coinExplorerApi.exchanges();
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
    return <ExchangesPresenter data={data} loading={loading} error={error} />;
  }
}
