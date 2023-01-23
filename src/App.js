import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
       {
          name: 'Linda',
          id: '12edfs'
        },
        {
          name: 'Adam',
          id: '12eddfsdfs'
        },
       {
          name: 'Larry',
          id: '12edfsfsfsdfseew'
        },
        {
          name: 'Andrei',
          id: '12edferwgsfsds'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
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
