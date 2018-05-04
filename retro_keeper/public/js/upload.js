
class Upload extends React.Component {
  render() {
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-2">Upload Page</h1>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent is-vertical">
              <article className="tile is-child notification is-danger">
                <p className="title has-text-centered">Console Entry</p>
                <form>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Company</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select>
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
                      <label className="label">Console</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select>
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
                            <select>
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
                            <input type="radio" name="question" /> Yes
                          </label>
                          <label class="radio">
                            <input type="radio" name="question" /> No
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
                            <select>
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
                            <select>
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
                          <input type="text" className="input" placeholder="1997-2001"/>
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
                          <input type="text" className="input" placeholder="http://..."/>
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
                          <textarea cols="40" rows="5" className="textarea" placeholder="More details here..."></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                      <button className="button is-text">Cancel</button>
                    </div>
                  </div>
                </form>
              </article>
            </div>
            <div className="tile is-6 is-parent is-vertical">
              <article className="tile is-child notification is-info">
                <p className="title has-text-centered">Game Entry</p>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ipsam ad blanditiis magnam, dolor, nesciunt incidunt nulla facere, totam excepturi voluptatem, ratione deleniti. Iste voluptatem facilis vero, unde laudantium architecto?</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
