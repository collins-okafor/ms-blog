import React from "react";
import { useDispatch } from "react-redux";
import { getLoginPageCounter } from "../../store.js/actions/authAction";
import { SearchStyle } from "./styles/search.style";

const Search = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(getLoginPageCounter({}));
  };
  return (
    <SearchStyle>
      <button onClick={handleClose}>X</button>
      <input type="text" placeholder="Search..." />
    </SearchStyle>
  );
};

export default Search;
