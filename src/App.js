import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({monsters: user}))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    
    this.setState(() => {
      return {searchField}
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this

    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
      <input 
        className='search-box' 
        type="text" 
        placeholder='search monsters' 
        onChange={onSearchChange}
      />
        <CardList monsters={filteredMonster}/>
      </div>
      
    );
  }

}

export default App;
