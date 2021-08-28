import React, { useState, useEffect } from "react";
import CoinExchangesPresenter from "./CoinExchangesPresenter";
import { getCoinExchanges } from "../../api";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const getExchanges = async () => {
      const {
        match: {
          params: { id },
        },
      } = props;
      try {
        const { data: exchanges } = await getCoinExchanges(id);
        setExchanges(exchanges);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getExchanges();
  }, []);

  return <CoinExchangesPresenter loading={loading} exchanges={exchanges} />;
};
