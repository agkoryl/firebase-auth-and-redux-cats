import React, { Component } from 'react';

import { db } from './firebase';
//losuje jakies randomowe dane
import faker from 'faker';

class App extends Component {

  state = {
    cats: []
  }

  componentDidMount() {
    
    db.ref('/cats/').set({ name: 'My Buddy' });
    db.ref('/numbers/').set([1, 2, 3]);

    db.ref('/numbers/').once('value', (snapshot) => {
      console.log(snapshot.val());
    });



    //pobieramy dane z internetu
    const headers = {
      'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
    }
    fetch('https://api.thecatapi.com/v1/images/search?limit=10', { headers })
      .then(response => response.json())
      .then(data => {
        data.forEach(element => {

          db.ref('/cats/').push({
            name: faker.name.firstName(), id: element.id,
            url: element.url
          });
        });


      });

    //pobieramy dane z firebase
    db.ref('/cats/').on('value', (snapshot) => {
      const cats = [];
      Object.entries(snapshot.val()).forEach(elem => {
        const cat = {
          id: elem[0],
          ...elem[1]
        }
        cats.push(cat);
      });
      this.setState({ cats });
    });
  }

  render() {
    const { cats } = this.state;
    return (
      <div className="App">
        <ul>
          {cats.map(cat => (
            <li key={cat.id}>{cat.name}<img src={cat.url} style={{maxWidth: "300px", height: "auto"}}></img></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;