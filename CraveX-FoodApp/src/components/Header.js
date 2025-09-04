import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className="header">
      <nav className="nav-bar">
        <div className="logo">
          <img className="logo-img" src="logo"></img>
        </div>
        <div className="location">Location</div>
        <div className="search">
          <input
            type="text"
            id="search-bar"
            placeholder="Satisfy Your Craving"
          ></input>
          <button id="search-btn">Go !</button>
        </div>
        <div className="auth">
          <a href="#">Sign Up</a> | <a href="#">Log In</a>
        </div>
        <div className="cart">Cart</div>
      </nav>
    </div>
  );
};
export default Header;
