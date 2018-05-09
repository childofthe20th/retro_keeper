
class ShowConsole extends React.Component {
  render() {
    // console.log(this.props.console);
    return(
      <div className="modal console-modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.console.name}</p>
            <button onClick={()=>{this.props.toggleConsoleModal(event)}} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <img className="is-pulled-right" src={this.props.console.image} alt={this.props.console.name} />
            <p><span className="has-text-weight-semibold">Company: </span>{this.props.console.company}</p>
            <p><span className="has-text-weight-semibold">Condition: </span>{this.props.console.condition}</p>
            <p><span className="has-text-weight-semibold">Modded: </span>{this.props.console.modded}</p>
            <p><span className="has-text-weight-semibold">Quantity: </span>{this.props.console.qty}</p>
            <p><span className="has-text-weight-semibold">Region: </span>{this.props.console.region}</p>
            <p><span className="has-text-weight-semibold">Released: </span>{this.props.console.release_date}</p>
            <p><span className="has-text-weight-semibold">Description: </span>{this.props.console.description}</p>
            <EditConsole getConsole={this.props.getConsole} updateConsole={this.props.updateConsole} console={this.props.console} />
          </section>
          <footer className="modal-card-foot">
            <button onClick={()=>{this.props.toggleEditConsole(event)}} className="button is-success">Edit</button>
            <button onClick={()=>{this.props.toggleConsoleModal(event)}} className="button is-danger">Cancel</button>
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
    this.toggleConsoleModal = this.toggleConsoleModal.bind(this)
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
    this.setState({
      console: platform
    })
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
    let data = {
      name: platform.name,
      company: platform.company,
      condition: platform.condition,
      image: platform.image,
      modded: platform.modded,
      qty: platform.qty,
      description: platform.description,
      region: platform.region,
      release_date: platform.release_date
    }
    fetch('/consoles/' + platform.id, {
      body: JSON.stringify(data),
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

  toggleConsoleModal(event) {
    event.preventDefault();
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
    editConsole.classList.toggle('is-invisible')
  }

  render() {
    // console.log(this.props.consoles);
    return(
      <section className="section">
        <div className="container">
          <div className="table-container">
            <div>
              <h1 className="title is-4 is-pulled-left">Console Collection</h1>
              <button onClick={()=>{this.toggleAddConsole(event)}} className="button is-pulled-right is-primary">Add Console</button>
            </div>
            <ConsoleUpload
              console={this.state.console}
              getConsole={this.getConsole}
              submitConsole={this.submitConsole}
              toggleAddConsole={this.toggleAddConsole} />
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
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
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Condition</th>
                  <th>Modded</th>
                  <th><abbr title="Quantity">Qty</abbr></th>
                  <th>Region</th>
                  <th>Released</th>
                  <th></th>
                </tr>
              </tfoot>
              <tbody>
              {this.state.consoles.map((platform, index)=>{
                return(
                  <tr>
                    <td onClick={()=>{this.getConsole(platform); this.toggleConsoleModal(event)}}>{platform.name}</td>
                    <td onClick={()=>{this.getConsole(platform); this.toggleConsoleModal(event)}}>{platform.company}</td>
                    <td onClick={()=>{this.getConsole(platform); this.toggleConsoleModal(event)}}>{platform.condition}</td>
                    <td onClick={()=>{this.getConsole(platform); this.toggleConsoleModal(event)}}>{platform.modded}</td>
                    <td onClick={()=>{this.getConsole(platform); this.toggleConsoleModal(event)}}>{platform.qty}</td>
                    <td onClick={()=>{this.getConsole(platform); this.toggleConsoleModal(event)}}>{platform.region}</td>
                    <td onClick={()=>{this.getConsole(platform); this.toggleConsoleModal(event)}}>{platform.release_date}</td>
                    <td><i onClick={()=>this.deleteConsole(platform, index)} className="material-icons">delete</i></td>
                    <ShowConsole
                        toggleConsoleModal={this.toggleConsoleModal}
                        toggleEditConsole={this.toggleEditConsole}
                        console={platform}
                        getConsole={this.getConsole}
                        updateConsole={this.updateConsole} />
                  </tr>
                )
              })}
            </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}
