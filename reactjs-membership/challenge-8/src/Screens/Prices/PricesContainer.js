import React, { useState, useEffect } from "react";
import PricesPresenter from "./PricesPresenter";
import { getPrices } from "../../api";

export default () => {
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const getPriceData = async () => {
      try {
        const { data: prices } = await getPrices();
        setPrices(prices);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getPriceData();
  }, []);

  return <PricesPresenter loading={loading} prices={prices} />;
};
