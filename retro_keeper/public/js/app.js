
class App extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <Home />
        <Consoles />
        <Games />
        <About />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app')
)
