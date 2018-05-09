

class EditGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: {
        title: "",
        developer: "",
        publisher: "",
        platform: "",
        genre: "",
        condition: "",
        rarity: "",
        qty: 0,
        region: "",
        release_date: "",
        worth: ""
      }
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.game.id,
      title: this.props.game.title,
      developer: this.props.game.developer,
      publisher: this.props.game.publisher,
      platform: this.props.game.platform,
      genre: this.props.game.genre,
      condition: this.props.game.condition,
      rarity: this.props.game.rarity,
      qty: this.props.game.qty,
      region: this.props.game.region,
      release_date: this.props.game.release_date,
      worth: this.props.game.worth
    })
  }

  render() {
    return(
      <h1>test</h1>
    )
  }



}
