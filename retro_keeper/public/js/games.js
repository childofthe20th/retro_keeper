

class ShowGame extends React.Component {
  render() {
    // console.log(this.props.game);
    return(
      <div className="modal game-modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.game.title}</p>
            <button onClick={()=>{this.props.toggleGameModal(event)}} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <img className="is-pulled-right" src={this.props.game.image} alt={this.props.game.title} />
            <p><span className="has-text-weight-semibold">Developer: </span>{this.props.game.developer}</p>
            <p><span className="has-text-weight-semibold">Publisher: </span>{this.props.game.publisher}</p>
            <p><span className="has-text-weight-semibold">Platform: </span>{this.props.game.platform}</p>
            <p><span className="has-text-weight-semibold">Genre: </span>{this.props.game.genre}</p>
            <p><span className="has-text-weight-semibold">Condition: </span>{this.props.game.condition}</p>
            <p><span className="has-text-weight-semibold">Rarity: </span>{this.props.game.rarity}</p>
            <p><span className="has-text-weight-semibold">Quantity: </span>{this.props.game.qty}</p>
            <p><span className="has-text-weight-semibold">Region: </span>{this.props.game.region}</p>
            <p><span className="has-text-weight-semibold">Released: </span>{this.props.game.release_date}</p>
            <p><span className="has-text-weight-semibold">Worth: </span>{this.props.game.worth}</p>
            <p><span className="has-text-weight-semibold">Description: </span>{this.props.game.description}</p>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Edit</button>
            <button onClick={()=>{this.props.toggleGameModal(event)}} className="button is-danger">Cancel</button>
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
    this.toggleGameModal = this.toggleGameModal.bind(this)
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
    this.setState({
      game: game
    })
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
    let data = {
      title: game.title,
      developer: game.developer,
      publisher: game.publisher,
      platform: game.platform,
      genre: game.genre,
      condition: game.condition,
      image: game.image,
      rarity: game.rarity,
      qty: game.qty,
      description: game.description,
      region: game.region,
      release_date: game.release_date,
      worth: game.worth
    }
    fetch('/games/' + game.id, {
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

  toggleGameModal(event) {
    event.preventDefault();
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
    editGame.classList.toggle('is-invisible')
  }

  render() {
    // console.log(this.props.games);
    return(
      <section className="section">
        <div className="container">
          <div className="table-container">
            <div>
              <h1 className="title is-4 is-pulled-left">Game Collection</h1>
              <button onClick={()=>{this.toggleAddGame(event)}} className="button is-pulled-right is-primary">Add Game</button>
            </div>
            <GameUpload
              game={this.state.game}
              getGame={this.getGame}
              submitGame={this.submitGame}
              toggleAddGame={this.toggleAddGame} />
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
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
                  <th>Worth</th>
                  <th></th>
                </tr>
              </thead>
              <tfoot>
                <tr>
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
                  <th>Worth</th>
                  <th></th>
                </tr>
              </tfoot>
              <tbody>
                {this.state.games.map((game, index)=>{
                  return(
                    <tr>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.title}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.developer}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.publisher}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.platform}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.genre}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.condition}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.rarity}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.qty}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.region}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.release_date}</td>
                      <td onClick={()=>{this.getGame(game); this.toggleGameModal(event)}}>{game.worth}</td>
                      <td><i onClick={()=>this.deleteGame(game, index)} className="material-icons">delete</i></td>
                      <ShowGame
                        toggleGameModal={this.toggleGameModal}
                        toggleEditGame={this.toggleEditGame}
                        game={game}
                        getGame={this.getGame}
                        updateGame={this.updateGame} />
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
