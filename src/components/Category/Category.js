import React, { Component } from "react";
const categories = [
    { 
        value: "1", 
        label: "Eğitim" , 
        staues: [
            {value: 1, label: "Başladı"},
            {value: 1, label: "Devam Ediyor"},
            {value: 1, label: "Tamamlandı"}
        ]

    },
    { 
        value: "2", 
        label: "Ev İşleri" , 
        staues: [
            {value: 1, label: "Bekliyor"},
            {value: 1, label: "Yapılıyor"},
            {value: 1, label: "Bitti"}
        ]

    }


];


export default class AddTodo extends Component {
    state = {
        Id: "",
        Title: "",
        CategoryId: "",
        Status: ""
    };

    handleTitleChange = (event) => {
        this.setState({
            Id: Math.random(),
            Title: event.target.value
        });
    }
    handleCategoryIdChange = (event) => {
        this.setState({
            CategoryId: event.target.value
        });
    };
    handleToDoSubmit = (event) => {
        event.preventDefault();
    
        this.props.onAdd({
            Id: this.state.Id,
            Title: this.state.Title,
            CategoryId: this.state.CategoryId
        });
        this.setState({
            Id: "",
            Title: "",
            CategoryId: "",
            Status: "",
        });

        
    };

    
    render() {
        return (
            <div>
                <h3>
                    Add ToDo
                </h3>
                <form onSubmit={this.handleToDoSubmit} >
            
                    <div className="form-group" >
                        <input value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <select value={this.state.CategoryId} onChange={this.handleCategoryIdChange} className="form-control" >
                            <option value="0" >Kategori Seçiniz</option>
                            { categories.map(o => <option value={o.value}>{o.label}</option>) }
                        </select>
                    </div>
                    <button type="submit" className="form-control btn btn-primary" >Add Todo</button>
                </form>
            </div>
        );
    }
}