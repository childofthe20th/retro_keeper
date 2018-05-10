class Nav extends React.Component {
  render() {
    return(
      <section className="hero is-dark is-bold is-small">
        <div className="hero-body">
          <div className="navbar-end">
            <span className="navbar-item">
              <a href="" className="button is-info is-inverted is-pulled-right">
                <span className="icon">
                  <i className="fab material-icons">account_box</i>
                </span>
                <span>Sign Up</span>
              </a>
            </span>
          </div>
          <div className="container has-text-left">
            <p className="title is-size-1 main-title">
              RetroKeeper
            </p>
            <p className="subtitle">
              //keep track of your retro video game collection
            </p>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Consoles</a>
                </li>
                <li>
                  <a href="">Games</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    )
  }
}
