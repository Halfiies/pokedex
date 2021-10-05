import react from "react";

const Searchbar = (props) => {
  const { handleInput } = props;
  return (
    <form className="search-bar">
      <input type="text" onInput={handleInput} className="search-bar__input" />
    </form>
  );
};

export default Searchbar;
