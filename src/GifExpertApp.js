//rafc tab para auto completar
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () =>{

    //const  categories = ['One Punch Man','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch Man'])

/*     const handleAdd = () =>{
        //setCategories([...categories,'HunterXHunter']);
        setCategories(categ =>[...categ,'HunterXHunter']);
    } */
//setCategories = {setCategories}
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />

            
            <ol>
                {   
                    categories.map(category =>
                         //<li key={category}>{category}</li>
                         <GifGrid 
                         key = {category}
                         category= {category}                        
                         />
                     )
                }
            </ol>

        </>
    );
}




export default GifExpertApp;