import React from "react";
import { Searchbarstyled } from "../styles";

function Searchbar({ setinput }) {
  return (
    <>
      <Searchbarstyled onChange={(event) => setinput(event.target.value)} />
    </>
  );
}

export default Searchbar;
