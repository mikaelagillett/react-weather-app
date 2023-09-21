function SearchForm() {
  return (
    <form className="search-form" id="search-form">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </button>
      <input type="text" className="city-search-bar" id="city-search-bar" />
    </form>
  );
}

export default SearchForm;
