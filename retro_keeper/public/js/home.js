class Home extends React.Component {
  render() {
    return(
      <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">//keep track of your retro gaming collection.</h1>
            <a href="#consoles" className="button is-white is-outlined is-large">Get Started</a>
          </div>
        </div>

        <div className="hero-foot">
          <div className="tabs is-right is-large">
            <ul>
              <li><a href="https://github.com/childofthe20th/retro_keeper/tree/dev/retro_keeper"><i className="fab fa-github-alt fa-2x"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
