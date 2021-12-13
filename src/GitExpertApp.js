import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['one Punch']);

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            <ul>
                {
                    categories.map( category =>(
                        <GifGrid 
                            key={ category }
                            category ={ category } />
                    ))
                }
            </ul>
        </>
    )
}
