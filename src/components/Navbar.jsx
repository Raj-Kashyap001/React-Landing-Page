// eslint-disable-next-line react/prop-types
const Navbar = ({ active, toggleNavMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/images/logo.png" alt="LOGO" className="logo" />
      </div>
      <div className="nav-right">
        <ul className={`nav-list ${active ? "active" : ""}`}>
          <li className="nav-item ">
            <a href="#">Home</a>
          </li>
          <li className="nav-item ">
            <a href="#skils">Skills</a>
          </li>
          <li className="nav-item ">
            <a href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact Me</a>
          </li>
        </ul>
        <button className="toggle-nav-btn" onClick={toggleNavMode}>
          {active ? "x" : "≡"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
