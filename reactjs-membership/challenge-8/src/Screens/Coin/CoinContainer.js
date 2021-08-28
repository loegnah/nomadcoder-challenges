import React, { useState, useEffect } from "react";
import CoinPresenter from "./CoinPresenter";
import { getCoinDetail } from "../../api";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const getCoin = async () => {
      const {
        match: {
          params: { id },
        },
      } = props;

      try {
        const { data: coin } = await getCoinDetail(id);
        setCoin(coin);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getCoin();
  }, []);

  return <CoinPresenter loading={loading} coin={coin} />;
};
