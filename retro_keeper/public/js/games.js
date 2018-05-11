

class ShowGame extends React.Component {
  render() {
    console.log(this.props.game);
    return(
      <div className="modal game-modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head has-background-info">
            <p className="modal-card-title has-text-white">{this.props.game ? this.props.game.title : ""}</p>
            <button onClick={()=>{this.props.toggleShowGame(event)}} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <img className="is-pulled-right" src={this.props.game ? this.props.game.image : ""} alt={this.props.game ? this.props.game.title : ""} />
            <p><span className="has-text-weight-semibold">Developer: </span>{this.props.game ? this.props.game.developer : ""}</p>
            <p><span className="has-text-weight-semibold">Publisher: </span>{this.props.game ? this.props.game.publisher : ""}</p>
            <p><span className="has-text-weight-semibold">Platform: </span>{this.props.game ? this.props.game.platform : ""}</p>
            <p><span className="has-text-weight-semibold">Genre: </span>{this.props.game ? this.props.game.genre : ""}</p>
            <p><span className="has-text-weight-semibold">Condition: </span>{this.props.game ? this.props.game.condition : ""}</p>
            <p><span className="has-text-weight-semibold">Rarity: </span>{this.props.game ? this.props.game.rarity : ""}</p>
            <p><span className="has-text-weight-semibold">Quantity: </span>{this.props.game ? this.props.game.qty : ""}</p>
            <p><span className="has-text-weight-semibold">Region: </span>{this.props.game ? this.props.game.region : ""}</p>
            <p><span className="has-text-weight-semibold">Released: </span>{this.props.game ? this.props.game.release_date : ""}</p>
            <p><span className="has-text-weight-semibold">Description: </span>{this.props.game ? this.props.game.description : ""}</p>
            <EditGame
              toggleShowGame={this.props.toggleShowGame}
              toggleEditGame={this.props.toggleEditGame}
              getGame={this.props.getGame}
              updateGame={this.props.updateGame}
              game={this.props.game} />
          </section>
          <footer className="modal-card-foot">
            <button onClick={()=>{this.props.toggleEditGame(event)}} className="button is-primary">Edit</button>
            <button onClick={()=>{this.props.toggleShowGame(event)}} className="button is-text">Close</button>
          </footer>
        </div>
      </div>
    )
  }
}

class Games extends React.Component {
  constructor(props) {
    super(props)
    this.getGame = this.getGame.bind(this)
    this.getGames = this.getGames.bind(this)
    this.createGame = this.createGame.bind(this)
    this.submitGame = this.submitGame.bind(this)
    this.updateGame = this.updateGame.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
    this.toggleShowGame = this.toggleShowGame.bind(this)
    this.toggleAddGame = this.toggleAddGame.bind(this)
    this.toggleEditGame = this.toggleEditGame.bind(this)
    this.state = {
      games: [],
      game: {}
    }
  }

  componentDidMount() {
    this.getGames()
  }

  getGame(game) {
    // console.log(game);
    this.setState({
      game: game
    }, ()=> console.log(this.state.game))
    // console.log(game);
  }

  getGames() {
    fetch('/games').then((response)=>response.json()).then((data)=>{
      this.setState({
        games: data
      })
      // console.log(this.state.games);
    }).catch((error)=>console.log(error))
  }

  createGame(game) {
    const addedGame = this.state.games
    addedGame.push(game)
    this.setState({
      games: addedGame
    })
  }

  submitGame(game) {
    console.log(game);
    fetch('/games', {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((createdGame)=>{
      return createdGame.json()
    }).then((jsonedGame)=>{
      this.createGame(jsonedGame)
    }).catch((error)=> console.log(error))
  }

  updateGame(game) {
    // game = this.state.game;
    console.log(game);
    // let data = {
    //   title: game.title,
    //   developer: game.developer,
    //   publisher: game.publisher,
    //   platform: game.platform,
    //   genre: game.genre,
    //   condition: game.condition,
    //   image: game.image,
    //   rarity: game.rarity,
    //   qty: game.qty,
    //   description: game.description,
    //   region: game.region,
    //   release_date: game.release_date
    // }
    fetch('/games/' + game.id, {
      body: JSON.stringify(game),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((updatedGame)=>{
      return updatedGame.json()
    }).then((jsonedGame)=>{
      this.getGames()
    }).catch((error)=> console.log(error))
  }

  deleteGame(game, index) {
    fetch('/games/' + game.id, {
      method: 'DELETE'
    }).then((data)=>{
      this.setState({
        games: [
          ...this.state.games.slice(0, index),
          ...this.state.games.slice(index + 1)
        ]
      })
    })
  }

  toggleShowGame(event) {
    event.preventDefault();
    console.log("Toggled Game!");
    let gameModal = document.querySelector('.game-modal')
    let html = document.querySelector('html')
    gameModal.classList.toggle('is-active')
    html.classList.toggle('is-clipped')
  }

  toggleAddGame(event) {
    event.preventDefault();
    let addGame = document.querySelector('.add-game')
    let html = document.querySelector('html')
    addGame.classList.toggle('is-active')
    html.classList.toggle('is-clipped')
  }

  toggleEditGame(event) {
    event.preventDefault();
    let editGame = document.querySelector('.edit-game')
    editGame.classList.toggle('is-active')
  }

  render() {
    // console.log(this.props.games);
    return(
      <section id="games" className="section">
        <div className="container">
          <div className="table-container">
            <div className="box has-background-warning">
              <h1 className="title is-size-3 is-bold has-text-info page-title is-pulled-left">Game Collection</h1>
              <button onClick={()=>{this.toggleAddGame(event)}} className="button create-button is-pulled-right is-primary is-rounded"><i className="fas fa-plus fa-1.5x"></i></button>
            </div>
            <GameUpload
              game={this.state.game}
              getGame={this.getGame}
              submitGame={this.submitGame}
              toggleAddGame={this.toggleAddGame} />
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Developer</th>
                  <th>Publisher</th>
                  <th>Platform</th>
                  <th>Genre</th>
                  <th>Condition</th>
                  <th>Rarity</th>
                  <th><abbr title="Quantity">Qty</abbr></th>
                  <th>Region</th>
                  <th>Released</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.games.map((game, index)=>{
                  return(
                    <tr>
                      <td><i onClick={()=>{this.getGame(game); this.toggleShowGame(event)}} className="material-icons">open_in_new</i></td>
                      <td>{game.title}</td>
                      <td>{game.developer}</td>
                      <td>{game.publisher}</td>
                      <td>{game.platform}</td>
                      <td>{game.genre}</td>
                      <td>{game.condition}</td>
                      <td>{game.rarity}</td>
                      <td>{game.qty}</td>
                      <td>{game.region}</td>
                      <td>{game.release_date}</td>
                      <td><i onClick={()=>this.deleteGame(game, index)} className="material-icons has-text-danger">delete</i></td>
                    </tr>
                  )
                })}
                <ShowGame
                  toggleShowGame={this.toggleShowGame}
                  toggleEditGame={this.toggleEditGame}
                  game={this.state.game}
                  getGame={this.getGame}
                  updateGame={this.updateGame} />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}
