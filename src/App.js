// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

//
import Todo from './Todo';


class App extends React.Component {
  constructor(){
    super();

    this.state={
      tasks: ["first", "second", "third"],
      input: ''
    }
  this.handleSubmit = this.handleSubmit.bind(this)
  //now this.handleDelete can be called with the scoped variables
  this.handleDelete = this.handleDelete.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: '',
    })

  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })

  }
  //create a function here that deletes the specific task from the App.js State.
  handleDelete(e){
    //these console logs are just to make sure that this function is being called. 
    console.log(e)
    console.log(this.state)
    this.setState({
      tasks: this.state.tasks.filter( (task)=> task !== e)
    })
  }





  render() {

    let tasks = this.state.tasks.map((task , index)=>
      <Todo key = {index} task={task} />
    )
    return (
      <div>
        
        <form onSubmit = {(event) => this.handleSubmit(event)}>
          <input onChange = {(event) => this.handleChange(event)}/>
          <input onChange = {(event) => this.handleChange(event)}/>
          <input type = "submit"/>
        </form>

        { tasks }

      </div>
    );
  }
}



export default App;
