
import './App.css';
import CategoryForm from './components/Category/CategoryForm';
import { useState } from 'react';
import CategoryList from './components/Category/CategoryList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

const[categories,setCategories]=useState([]);
  function handleAddCategory(category){
    setCategories((last)=>[...last,{...category}])
}

  return (
    <div className="App">
      {/* {categories.map(category=>category.name)} */}
      <CategoryForm 
      onAddCategory={handleAddCategory}/>
      <CategoryList
      categories={categories}/>
    </div>
  );
}

export default App;
