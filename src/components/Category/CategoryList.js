//her bir kategori componentini burada map yapacağız 
import React from 'react'
import Category from './Category'
// let cagetory = []
// function setCategories(){
// } useStatein yaptğı işlem

// {
//     id:null,
//     categoryName:"",
//     status:[]
// }
const CategoryList = (props) => {

  return (
    <div>
        Categories {
            props.categories.map((category)=>(
                <Category
                category={category}
                key={category.id}/>
            ))
        } 
    
    </div>
  )
}


export default CategoryList