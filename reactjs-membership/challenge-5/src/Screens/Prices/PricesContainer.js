import React from "react";
import PricesPresenter from "./PricesPresenter";
import { coinExplorerApi } from "../../api";

export default class extends React.Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await coinExplorerApi.tickers();
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
    return <PricesPresenter data={data} loading={loading} error={error} />;
  }
}
