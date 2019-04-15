import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id:'asfa1', name: 'Kaca', age: 21},
      { id:'vasdf1', name: 'Mateja', age: 23},
    ],
    otherState: 'some value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Mateja', age: 24 },
      ],
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({
        persons:persons
      });
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({
       showPersons: !doesShow
     });
  }

  render() {

    let persons = null;
    
    
    if(this.state.showPersons){
      persons = (
       
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
       
      );

  
   
    }

   
    return (
     
        <div className={classes.App}>
          <Cockpit
           showPersons = {this.state.showPersons}
           persons = {this.state.persons}
           clicked = {this.togglePersonsHandler}
           />
          {persons}
        </div>
  
    );
    //return React.createElement('div', {className: 'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;