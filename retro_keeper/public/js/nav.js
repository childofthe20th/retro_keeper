class Nav extends React.Component {
  render() {
    return(
      <div>
        <section className="hero is-primary is-bold is-small">
          <div className="hero-body">
            <div className="navbar-end">
              <span className="navbar-item">
                <a href="" className="button is-info is-inverted">
                  <span className="icon">
                    <i className="fab material-icons">account_box</i>
                  </span>
                  <span>Sign Up</span>
                </a>
              </span>
            </div>
            <div className="container has-text-left">
              <p className="title">
                retro_Keeper
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
                    <a href="">Upload</a>
                  </li>
                  <li>
                    <a href="">Collection</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </div>
    )
  }
}
