import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  },[])

  useEffect(()=> {
    const newFilteredMonster = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonster)
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  



  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters' 
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  ) 
}



// class App extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     monsters: [],
//   //     searchField: ''
//   //   }
//   // }
//   // componentDidMount() {
//   //   fetch('https://jsonplaceholder.typicode.com/users')
//   //     .then(response => response.json())
//   //     .then(user => this.setState({monsters: user}))
//   // }

//   // onSearchChange = (e) => {
//   //   const searchField = e.target.value.toLocaleLowerCase()
    
//   //   this.setState(() => {
//   //     return {searchField}
//   //   })
//   // }

//   render() {
//     // const { monsters, searchField } = this.state;
//     // const { onSearchChange } = this

//     // const filteredMonster = monsters.filter(monster => {
//     //   return monster.name.toLocaleLowerCase().includes(searchField)
//     // })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
//         <CardList monsters={filteredMonster}/>
//       </div>
      
//     );
//   }

// }

export default App;
