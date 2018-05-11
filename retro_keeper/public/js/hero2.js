class Hero2 extends React.Component {
  render() {
    return(
      <section className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              "Preserve your memories, keep them well, what you forget you can never retell"
            </h1>
            <span>-Louisa May Alcott</span>
          </div>
        </div>
        <div className="hero-foot">
          <div className="tabs is-right is-large">
            <ul>
              <li><a href="https://plus.google.com/discover"><i class="fab fa-google-plus-g fa-2x"></i></a></li>
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-square fa-2x"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
