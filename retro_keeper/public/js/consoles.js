
class ShowConsole extends React.Component {
  render() {
    // console.log(this.props.console);
    return(
      <div className="modal console-modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head has-background-info">
            <p className="modal-card-title has-text-white">{this.props.console ? this.props.console.name : ""}</p>
            <button onClick={()=>{this.props.toggleShowConsole(event)}} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <img className="is-pulled-right" src={this.props.console ? this.props.console.image : ""} alt={this.props.console ? this.props.console.name : ""} />
            <p><span className="has-text-weight-semibold">Company: </span>{this.props.console ? this.props.console.company : ""}</p>
            <p><span className="has-text-weight-semibold">Condition: </span>{this.props.console ? this.props.console.condition : ""}</p>
            <p><span className="has-text-weight-semibold">Modded: </span>{this.props.console ? this.props.console.modded : ""}</p>
            <p><span className="has-text-weight-semibold">Quantity: </span>{this.props.console ? this.props.console.qty : ""}</p>
            <p><span className="has-text-weight-semibold">Region: </span>{this.props.console ? this.props.console.region : ""}</p>
            <p><span className="has-text-weight-semibold">Released: </span>{this.props.console ? this.props.console.release_date : ""}</p>
            <p><span className="has-text-weight-semibold">Description: </span>{this.props.console ? this.props.console.description : ""}</p>
            <EditConsole
              toggleShowConsole={this.props.toggleShowConsole}
              toggleEditConsole={this.props.toggleEditConsole}
              getConsole={this.props.getConsole}
              updateConsole={this.props.updateConsole}
              console={this.props.console} />
          </section>
          <footer className="modal-card-foot">
            <button onClick={()=>{this.props.toggleEditConsole(event)}} className="button is-primary">Edit</button>
            <button onClick={()=>{this.props.toggleShowConsole(event)}} className="button is-text">Close</button>
          </footer>
        </div>
      </div>
    )
  }
}

class Consoles extends React.Component {
  constructor(props) {
    super(props)
    this.getConsole = this.getConsole.bind(this)
    this.getConsoles = this.getConsoles.bind(this)
    this.createConsole = this.createConsole.bind(this)
    this.submitConsole = this.submitConsole.bind(this)
    this.updateConsole = this.updateConsole.bind(this)
    this.deleteConsole = this.deleteConsole.bind(this)
    this.toggleShowConsole = this.toggleShowConsole.bind(this)
    this.toggleAddConsole = this.toggleAddConsole.bind(this)
    this.toggleEditConsole = this.toggleEditConsole.bind(this)
    this.state = {
      consoles: [],
      console: {}
    }
  }

  componentDidMount() {
    this.getConsoles()
  }

  getConsole(platform) {
    // console.log(platform);
    this.setState({
      console: platform
    }, ()=> console.log(this.state.console))
    // console.log(this.state.console);
  }

  getConsoles() {
    fetch('/consoles').then((response)=>response.json()).then((data)=>{
      this.setState({
        consoles: data
      })
      // console.log(this.state.consoles);
    }).catch((error)=>console.log(error))
  }

  createConsole(platform) {
    const addedConsole = this.state.consoles
    addedConsole.push(platform)
    this.setState({
      consoles: addedConsole
    })
  }

  submitConsole(platform) {
    console.log(platform);
    fetch('/consoles', {
      method: 'POST',
      body: JSON.stringify(platform),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((createdConsole)=>{
      return createdConsole.json()
    }).then((jsonedConsole)=>{
      this.createConsole(jsonedConsole)
    }).catch((error)=> console.log(error))
  }


  updateConsole(platform) {
    console.log(platform);
    fetch('/consoles/' + platform.id, {
      body: JSON.stringify(platform),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((updatedConsole)=>{
      return updatedConsole.json()
    }).then((jsonedConsole)=>{
      this.getConsoles()
    }).catch((error)=> console.log(error))
  }

  deleteConsole(platform, index) {
    fetch('/consoles/' + platform.id, {
      method: 'DELETE'
    }).then((data)=>{
      this.setState({
        consoles: [
          ...this.state.consoles.slice(0, index),
          ...this.state.consoles.slice(index + 1)
        ]
      })
    })
  }

  toggleShowConsole(event) {
    event.preventDefault();
    console.log("Toggled Console!");
    let consoleModal = document.querySelector('.console-modal')
    let html = document.querySelector('html')
    consoleModal.classList.toggle('is-active')
    html.classList.toggle('is-clipped')
  }

  toggleAddConsole(event) {
    event.preventDefault();
    let addConsole = document.querySelector('.add-console')
    let html = document.querySelector('html')
    addConsole.classList.toggle('is-active')
    html.classList.toggle('is-clipped')
  }

  toggleEditConsole(event) {
    event.preventDefault();
    let editConsole = document.querySelector('.edit-console')
    editConsole.classList.toggle('is-active')
  }

  render() {
    // console.log(this.props.consoles);
    return(
      <section id="consoles" className="section">
        <div className="container">
          <div className="table-container">
            <div className="box has-background-warning">
              <h1 className="title is-size-3 is-bold has-text-info page-title is-pulled-left">Console Collection</h1>
              <button onClick={()=>{this.toggleAddConsole(event)}} className="button create-button is-pulled-right is-primary is-rounded"><i className="fas fa-plus fa-1.5x"></i></button>
            </div>
            <ConsoleUpload
              console={this.state.console}
              getConsole={this.getConsole}
              submitConsole={this.submitConsole}
              toggleAddConsole={this.toggleAddConsole} />
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Condition</th>
                  <th>Modded</th>
                  <th><abbr title="Quantity">Qty</abbr></th>
                  <th>Region</th>
                  <th>Released</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {this.state.consoles.map((platform, index)=>{
                return(
                  <tr>
                    <td><i onClick={()=>{this.getConsole(platform); this.toggleShowConsole(event)}} className="material-icons show-icon">open_in_new</i></td>
                    <td>{platform.name}</td>
                    <td>{platform.company}</td>
                    <td>{platform.condition}</td>
                    <td>{platform.modded}</td>
                    <td>{platform.qty}</td>
                    <td>{platform.region}</td>
                    <td>{platform.release_date}</td>
                    <td><i onClick={()=>this.deleteConsole(platform, index)} className="material-icons delete-icon">delete</i></td>
                  </tr>
                )
              })}
              <ShowConsole
                  toggleShowConsole={this.toggleShowConsole}
                  toggleEditConsole={this.toggleEditConsole}
                  console={this.state.console}
                  getConsole={this.getConsole}
                  updateConsole={this.updateConsole} />
            </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}
