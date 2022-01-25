import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

const GiftExpertApp = () => {
    const [categories, setCategories] = useState([
        'One Punch',
    ]);

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <button>Agregar</button>
            <ol>
                {
                    categories.map(category=>(
                        <GiftGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GiftExpertApp