

class ConsoleUpload extends React.Component {
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
    this.props.getConsole();
    // console.log(this.props.console);
  }

  handleChange(event) {
    console.log(event.target.id, this);
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.submitConsole(this.state)
  }

  render() {
    return(
      <div className="modal add-console">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="tile is-ancestor">
            <div className="tile is-12 is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title has-text-centered">Console Entry</p>
                <form onSubmit={this.handleSubmit}>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Company</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select id="company" onChange={this.handleChange}>
                              <option disabled selected>Select a company...</option>
                              <option>Nintendo</option>
                              <option>Sega</option>
                              <option>Sony</option>
                              <option>Microsoft</option>
                              <option>NEC</option>
                              <option>SNK</option>
                              <option>Atari</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Name</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select id="name" onChange={this.handleChange}>
                              <option disabled selected>Select a console...</option>
                              <option>Nintendo Entertainment System</option>
                              <option>Gameboy</option>
                              <option>Gameboy Advance</option>
                              <option>Nintendo DS</option>
                              <option>Super Nintendo</option>
                              <option>Nintendo 64</option>
                              <option>Gamecube</option>
                              <option>Master System</option>
                              <option>Genesis</option>
                              <option>32X</option>
                              <option>Sega CD</option>
                              <option>Game Gear</option>
                              <option>Saturn</option>
                              <option>Dreamcast</option>
                              <option>Playstation</option>
                              <option>Playstation 2</option>
                              <option>PSP</option>
                              <option>Xbox</option>
                              <option>Neo Geo</option>
                              <option>TurboGrafx 16</option>
                              <option>TurboGrafx CD</option>
                              <option>Atari 2600</option>
                              <option>Jaguar</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Condition</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select id="condition" onChange={this.handleChange}>
                              <option disabled selected>My console is...</option>
                              <option>Sealed</option>
                              <option>Mint</option>
                              <option>Good</option>
                              <option>Fair</option>
                              <option>Poor</option>
                              <option>Broken</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Modded</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <label className="radio">
                            <input onChange={this.handleChange} id="modded" type="radio" name="question" /> Yes
                          </label>
                          <label className="radio">
                            <input onChange={this.handleChange} id="modded" type="radio" name="question" /> No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Region</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select onChange={this.handleChange} id="region">
                              <option disabled selected>What region?</option>
                              <option>NTSC-J (Japan and Asia)</option>
                              <option>NTSC-U (Americas)</option>
                              <option>PAL (Europe, New Zealand and Australia)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Quantity</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select onChange={this.handleChange} id="qty">
                              <option disabled selected>How many?</option>
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
                      <label className="label">Released</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <input onChange={this.handleChange} id="release_date" type="text" className="input" placeholder="1997-2001"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Image</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input onChange={this.handleChange} id="image" type="text" className="input" placeholder="http://..."/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Description</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <textarea onChange={this.handleChange} id="description" cols="40" rows="5" className="textarea" placeholder="More details here..."></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <input type="submit" className="button is-info" />
                    </div>
                    <div className="control">
                      <button onClick={()=>{this.props.toggleAddConsole(event)}} className="button is-text">Close</button>
                    </div>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
