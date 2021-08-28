import React, { useState, useEffect } from "react";
import CoinsPresenter from "./CoinsPresenter";
import { getCoins } from "../../api";

export default () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoinsData = async () => {
      try {
        const { data: coins } = await getCoins();
        setCoins(coins);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getCoinsData();
  }, []);

  return <CoinsPresenter loading={loading} coins={coins} />;
};
