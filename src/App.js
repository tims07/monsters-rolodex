import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({monsters: user}))
  }

  render() {
    return (
      <div className="App">
      <input 
        className='search-box' 
        type="text" 
        placeholder='search monsters' 
        onChange={(e) => {
          const searchString = e.target.value.toLocaleLowerCase()
          const filteredMonster = this.state.monsters.filter(monster => {
            return monster.name.toLocaleLowerCase().includes(searchString)
          })
          this.setState(() => {
            return {monsters: filteredMonster}
          })
        }}
      />
        {this.state.monsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
            )
          })
        }
      </div>
    );
  }

}

export default App;
