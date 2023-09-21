function Header() {
  return (
    <header>
      <a href="/" className="active" id="celcius-link">
        °C
      </a>{" "}
      |
      <a href="/" className="inactive" id="farenheit-link">
        °F
      </a>
    </header>
  );
}

export default Header;
