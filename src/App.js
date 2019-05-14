import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      message: 'New Todo Website',
      newTodo: '',
      todos: [{
        key: 1,
        title: "a",
        done:false
      }]
    }
  }

  inpChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }




  formSub = (e) => {
    e.preventDefault();

    if(this.state.newTodo === ''){
      alert("ye chizi bgo")
    } else {
      this.setState({
        newTodo: '',
          todos : [...this.state.todos, {
          key: 1 + Math.random(),
          title: this.state.newTodo,
          done:false
        }],
      })
    }
  }

  boxCh = (e, index) => {
    const todos = [...this.state.todos]
    todos[index] = {...todos[index]}
    todos[index].done = e.target.checked

    this.setState({
      todos
    })
  }

  allDone = () => {
    const todos = this.state.todos.map(todo => { return {key: todo.key, title:todo.title, done: true}});
    this.setState({
      todos
    })
  }

  allNotDone = (e) => {
    const todos = this.state.todos.map(todo => {
      return {
      key: todo.key,
      title:todo.title,
      done: false
    }})
    

    this.setState({
      todos
    })
  }

  todoRemove = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);    
    this.setState({
      todos
    })
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2 className="alert">{this.state.message}</h2>


     
          <form onSubmit={this.formSub}>
            <div className="input-group mb-3">
            <input className="form-control" type="text" onChange={this.inpChange} value={this.state.newTodo} aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">Add</button>
              </div>
            </div>
          </form>

          <div>
            <button onClick={this.allDone} className="btn btn-outline-success m-3">All Done</button>
            <button onClick={this.allNotDone} className="btn btn-outline-info m-3">All Not Done</button>
          </div>
          
          <ul className="list-group">
            {this.state.todos.map((todo, index) => {
              return (
                <li key={todo.key} className="mr-5 list-group-item list-group-item-success d-flex justify-content-between align-items-center">



                  

                  <div className="wrapper">
                    <div className="switch_box box_4">
                      <div className="input_wrapper">
                        <input type="checkbox" className="switch_4" onChange={e => this.boxCh(e, index)} checked={todo.done}/>
                        </div>
                    </div>
                  </div>



                  <span className="mr-1" style={{textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span>
                  <button onClick={() => this.todoRemove(index)} className="btn btn-danger">Remove</button>
                </li>
              )
            })}
          </ul>

          
         
          
          
        </header>
      </div>
    );
  } 
}