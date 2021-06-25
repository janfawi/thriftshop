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

// options to access props
// function Searchbar({ setinput }) {
//     return (
//       <>
//         <Searchbarstyled onChange={(event) => setinput(event.target.value)} />
//       </>
//     );
//   }function Searchbar(props) {
//     return (
//       <>
//         <Searchbarstyled onChange={(event) => props.setinput(event.target.value)} />
//       </>
//     );
//   }
