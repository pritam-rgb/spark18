class App extends React.Component{
  constructor(){
    super();
    this.state={
      country:{
      Portugal:{
        Aasiya:false,
        Luvleen:false,
        Rey:false,
        Cayla:false

      },
      Nicaragua:{
        Deveedas:false,
        Obasey:false,
        Xenie:false,
        Ezequiel:false
      },
      MarshallIsland:{
        Aaron:false,
        Jelena:false
      }
    }

    }
  }

  handleClick=(e)=>{
    const{name,checked}=e.target;
    this.setState((prevState)=>{
      const country=prevState.country;
      country[name]=checked;
      return country;
    });
  };
  render(){
    const favCountry=Object.keys(this.state.country)
      .filter((key)=> this,state.country[key])
      .join(",");
    return(
      <div className="App">
        <header className="header">
          <h1>Handling Multiple checkboxes</h1>
        </header>
        <main>
          <div>
            <h1>Portugal</h1>
            <input checked={this.state.country.Portugal.Aasiya} onChange={this.handleClick} type="checkbox" name="Aasiya" />
            Aasiya Jayavant
          </div>
          <div>
            <input checked={this.state.country.Portugal.Luvleen} onChange={this.handleClick} type="checkbox" name="Luvleen" />
            Luvleen Lawrence
          </div>
          <div>
            <input checked={this.state.country.Portugal.Aasiya} onChange={this.handleClick} type="checkbox" name="Aasiya" />
            Aasiya Jayavant
          </div>
          <div>
            <input checked={this.state.country.Portugal.Rey} onChange={this.handleClick} type="checkbox" name="Rey" />
            Rey Milbourne
          </div>
          <div>
            <input checked={this.state.country.Portugal.Cayla} onChange={this.handleClick} type="checkbox" name="Cayla" />
            Cayla Brister
          </div>
        </main>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
