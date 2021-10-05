import react from "react";

const Searchbar = (props) => {
  const { handleInput } = props;
  return (
    <form className="search-bar" onSubmit={handleInput}>
      <input type="text"  className="search-bar__input" />
      <button className="search" >Search</button>
    </form>
  );
};

export default Searchbar;
