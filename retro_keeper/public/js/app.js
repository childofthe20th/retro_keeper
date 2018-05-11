
class App extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <Home />
        <Consoles />
        <Games />
        <Hero2 />
        <About />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app')
)
