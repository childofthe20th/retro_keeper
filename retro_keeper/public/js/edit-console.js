

class EditConsole extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: "",
      company: "",
      condition: "",
      image: "",
      modded: "",
      qty: 0,
      description: "",
      region: "",
      release_date: ""
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.console.id,
      name: this.props.console.name,
      company: this.props.console.company,
      condition: this.props.console.condition,
      image: this.props.console.image,
      modded: this.props.console.modded,
      qty: this.props.console.qty,
      description: this.props.console.description,
      region: this.props.console.region,
      release_date: this.props.console.release_date
    })
  }

  handleChange(event) {
    console.log(event.target.id, this);
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    this.props.updateConsole(this.state)
  }

  render() {
    // console.log(this.props.console);
    return(
      <div className="edit-console tile is-parent is-11 is-vertical is-invisible">
        <article className="tile is-child notification is-light">
          <form onSubmit={this.handleSubmit}>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Name</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <input
                      id="name"
                      onChange={this.handleChange}
                      placeholder={this.props.console.name}
                      type="text"
                      className="input"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Company</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <input
                      id="company"
                      onChange={this.handleChange}
                      placeholder={this.props.console.company}
                      type="text"
                      className="input"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Condition</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <input
                      id="condition"
                      onChange={this.handleChange}
                      placeholder={this.props.console.condition}
                      type="text"
                      className="input"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Image</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <input
                      id="image"
                      onChange={this.handleChange}
                      placeholder={this.props.console.image}
                      type="text"
                      className="input"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Modded</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <input
                      id="modded"
                      onChange={this.handleChange}
                      placeholder={this.props.console.modded}
                      type="text"
                      className="input"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Quantity</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select id="qty" onChange={this.handleChange}>
                        <option disabled selected>{this.props.console.qty}</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Region</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <input
                      id="region"
                      onChange={this.handleChange}
                      placeholder={this.props.console.region}
                      type="text"
                      className="input"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Released</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <input
                      id="release_date"
                      onChange={this.handleChange}
                      placeholder={this.props.console.release_date}
                      type="text"
                      className="input"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Description</label>
              </div>
              <div className="field-body">
                <div className="field is-fullwidth">
                  <div className="control">
                    <textarea
                      id="description"
                      onChange={this.handleChange}
                      placeholder={this.props.console.description}
                      cols="40"
                      rows="5"
                      className="textarea" />
                  </div>
                </div>
              </div>
            </div>
            <div className="control">
              <input type="submit" className="button is-primary" />
            </div>
          </form>
        </article>
      </div>
    )
  }
}
