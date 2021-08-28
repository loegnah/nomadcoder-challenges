import React, { useState, useEffect } from "react";
import MarketsPresenter from "./MarketsPresenter";
import { getCoinMarkets } from "../../api";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const getMarkets = async () => {
      const {
        match: {
          params: { id },
        },
      } = props;
      try {
        const { data: markets } = await getCoinMarkets(id);
        setMarkets(markets);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getMarkets();
  }, []);

  return <MarketsPresenter loading={loading} markets={markets} />;
};
