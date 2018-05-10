

class GameUpload extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      title: "",
      developer: "",
      publisher: "",
      platform: "",
      genre: "",
      condition: "",
      image: "",
      rarity: "",
      qty: 0,
      description: "",
      region: "",
      release_date: ""
    }
  }

  componentDidMount() {
    this.props.getGame();
    // console.log(this.props.game);
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
    this.props.submitGame(this.state)
  }

  render() {
    return(
      <div className="modal add-game">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="tile is-12 is-parent is-vertical">
            <article className="tile is-child notification is-warning">
              <form onSubmit={this.handleSubmit}>
                <p className="title has-text-centered">Game Entry</p>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Platform</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select id="platform" onChange={this.handleChange}>
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
                    <label className="label">Title</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input id="title" onChange={this.handleChange} type="text" className="input" placeholder="e.g. Gunstar Heroes"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Publisher</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input id="publisher" onChange={this.handleChange} type="text" className="input" placeholder="e.g. Sega"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Developer</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input id="developer" onChange={this.handleChange} type="text" className="input" placeholder="e.g. Treasure"/>
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
                          <select id="region" onChange={this.handleChange}>
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
                          <select id="qty" onChange={this.handleChange}>
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
                    <label className="label">Condition</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select id="condition" onChange={this.handleChange}>
                            <option disabled selected>My game is...</option>
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
                    <label className="label">Rarity</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select id="rarity" onChange={this.handleChange}>
                            <option disabled selected>How rare?</option>
                            <option>Very Common</option>
                            <option>Common</option>
                            <option>Uncommon</option>
                            <option>Rare</option>
                            <option>Very Rare</option>
                            <option>Extremely Rare</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Genre</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select id="genre" onChange={this.handleChange}>
                            <option disabled selected>What genre?</option>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Arcade</option>
                            <option>Compilation</option>
                            <option>Simulation</option>
                            <option>Fighting</option>
                            <option>Music</option>
                            <option>Platformer</option>
                            <option>Puzzle</option>
                            <option>Racing</option>
                            <option>Role-Playing Game</option>
                            <option>Shoot'em Up</option>
                            <option>Sports</option>
                            <option>Strategy</option>
                            <option>Other</option>
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
                        <input id="release_date" onChange={this.handleChange} type="text" className="input" placeholder="1997-2001"/>
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
                        <input id="image" onChange={this.handleChange} type="text" className="input" placeholder="http://..."/>
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
                        <textarea id="description" onChange={this.handleChange} cols="40" rows="5" className="textarea" placeholder="More details here..."/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <input type="submit" className="button is-info" />
                  </div>
                  <div className="control">
                    <button onClick={()=>{this.props.toggleAddGame(event)}} className="button is-text">Close</button>
                  </div>
                </div>
              </form>
            </article>
          </div>
        </div>
        <button onClick={()=>{this.props.toggleAddGame(event)}} className="modal-close is-large" aria-label="close"></button>
      </div>
    )
  }
}
