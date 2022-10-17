import React, { Component } from "react";
import AddTodo from './Category';
const categories = [
    { 
        value: "1", 
        label: "Eğitim" , 
        staues: [
            {value: 1, label: "Başladı", color: "red"},
            {value: 2, label: "Devam Ediyor", color: "orange"},
            {value: 3, label: "Tamamlandı", color: "green"}
        ]

    },
    { 
        value: "2", 
        label: "Ev İşleri" , 
        staues: [
            {value: 1, label: "Bekliyor", color: "orange"},
            {value: 2, label: "Yapılıyor", color: "blue"},
            {value: 3, label: "Bitti", color: "green"}
        ]

    }


];

export default class TodoList extends Component {
    state = {
            todos: [
                
            ]
        };
    
        addToDo = (todo) => {
            this.setState({
                todos: [...this.state.todos, todo]
            });
        };

        findCategory = (id) =>{
            const category = categories.filter( (list) => list.value === id);
    
            return category[0].label;
          }

          findStatues = (id) =>{
            const category = categories.filter( (list) => list.value === id);
    
            return category[0].staues;
          }

          findColor = (x) =>{
            const statues = this.findStatues(x.CategoryId)
            const status = statues.filter( (list) => list.value === parseInt(x.Status));

            return status.length ? status[0].color: '';
          }
        
          handleStatusChange = (x, event) => {
           console.log(event.target.value)
           x.Status = event.target.value;
           const color = this.findColor(x)



           this.setState(state => ({
            todos: state.todos.map(todo => {
              if (todo.Id === x.Id) {
                  todo = x;
                
             } 

             return todo;
         })
     }));

           return color;
        };
        
        render() {
            return (
                <div>   
                    <AddTodo onAdd={this.addToDo}></AddTodo>             
                    <h1>TodoList </h1>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(x => {
                                return (
                                    <tr key={x.Id} style={{ "background-color": this.findColor(x) }}>
                                        <td>{x.Id}</td>
                                        <td>{x.Title}</td>
                                        <td>{this.findCategory(x.CategoryId)}</td>
                                        <td>
                                        <div className="form-group">
                                        <select name={x.Status} onChange={(e) => this.handleStatusChange(x, e)}  className="form-control" >
                                            <option value="0" >Durum Seçiniz</option>
                                            { this.findStatues(x.CategoryId).map(o => <option value={o.value}>{o.label}</option>) }
                                        </select>
                                    </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
    }