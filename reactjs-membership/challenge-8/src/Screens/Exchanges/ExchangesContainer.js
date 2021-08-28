import React, { useState, useEffect } from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { getExchanges } from "../../api";

export default () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const getExchangesData = async () => {
      try {
        const { data: exchanges } = await getExchanges();
        setExchanges(exchanges);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getExchangesData();
  }, []);

  return <ExchangesPresenter loading={loading} exchanges={exchanges} />;
};
