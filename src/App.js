import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


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
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box'/>
        <CardList monsters={filteredMonster}/>
      </div>
      
    );
  }

}

export default App;
