
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Nav />
        <Home />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app')
)
