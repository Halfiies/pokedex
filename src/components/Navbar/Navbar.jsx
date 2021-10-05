import react from "react";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = (props) => {
  const { handleInput } = props;
  return <Searchbar handleInput={handleInput} />;
};

export default Navbar;
