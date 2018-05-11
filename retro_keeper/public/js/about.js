class About extends React.Component {
  render() {
    return(
      <section id="about" className="section">
        <div className="box has-text-centered">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img className="me" src="../images/Profile BW 2016.jpg" alt="Eric Sanchez"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Eric Sanchez</strong><small> Web Developer</small>
                  <br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus natus harum enim ad velit nesciunt ipsa dolorum optio consequatur, ducimus iusto doloribus nihil tenetur reiciendis aliquid beatae et quos, similique.
                </p>
              </div>
            </div>
          </article>

        </div>
      </section>
    )
  }
}
