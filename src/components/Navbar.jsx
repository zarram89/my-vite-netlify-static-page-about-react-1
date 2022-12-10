// import logo from "../img/react-logo.svg {logo} "

function Navbar() {
  return (
    <nav className="container__nav nav">
      <div className="nav__logo nav-logo">
        <img className="logo__img logo-img" src="../public/img/react-logo.svg" width="30" height="30" alt="React logo" />
        <h3 className="logo__text logo-text">ReactFacts</h3>
      </div>
      <h4 className="nav__theme nav-theme">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar