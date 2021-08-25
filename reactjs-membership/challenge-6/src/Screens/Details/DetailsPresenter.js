import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const DetailsPresenter = ({ loading }) => (loading ? <Loader /> : "aaaa");

DetailsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default DetailsPresenter;
