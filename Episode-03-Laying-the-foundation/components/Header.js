import logo from "/assets/logo.png";

function Header() {
  return (
    <>
      <header>
        <nav id="nav-bar">
          <img src={logo} id="logo"></img>
          <div id="input">
            <input type="text" id="input-bar"></input>
            <button>Add User</button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
